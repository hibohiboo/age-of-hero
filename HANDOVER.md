# 引継ぎ文書 - Age of Hero フロントエンド実装

## 現在の作業状況
**作業完了**: F006 TDD: キャラクター作成フォームUI実装（基本版） ✅
**重要発見**: 現在の実装はspec.md要件の**40%のみ**をカバー

### 完了済み作業
1. ✅ apps/backend - 新しいデータ構造対応完了
2. ✅ packages/core - validateSpecialAttackConstraints関数実装完了
3. ✅ apps/frontend - キャラクター作成フォームUI（基本版）実装完了

### 🚨 **重大な課題**: spec.md要件との大幅な差分

#### 現在実装済み（受け入れシナリオ1-1, 1-2のみ - 40%）
- ✅ クラス選択（8種類から2つ選択、重複可能）
- ✅ 能力値算出（2クラス合計、+1ボーナス適用）
- ✅ CharacterFormコンポーネント（10のテストケース全通過）
- ✅ vitest + React Testing Library環境構築

#### 🚨 **緊急対応が必要な未実装機能（60%不足）**

**優先度1: キャラクター作成フローの完成**
1. **F006-2**: 技能ポイント割り振りUI（FR-016, シナリオ1-3）
   - 150%分のポイントを任意の技能に割り振り
   - 一技能あたり上限100%、合計値が100%超過可能

2. **F006-3**: ヒーロースキル選択UI（FR-018, シナリオ1-4）
   - 合計7Lv分のヒーロースキル選択
   - 完全な情報セット（名前、レベル、タイミング、効果等）保存

3. **F006-4**: 必殺技選択UI（FR-019, シナリオ1-4）
   - 1Lvの必殺技選択
   - 完全な情報セット保存

4. **F006-5**: アイテム購入UI（FR-020, シナリオ1-4）
   - 価格20点分のアイテム選択・購入

5. **F006-6**: HP・SP・行動値算出・表示UI（FR-021, FR-022, シナリオ1-5）
   - 選択した2クラスのHP・SP合計
   - 行動値＝反射×2+知力
   - ヒーロースキルによる修正適用

**優先度2: 統合機能**
6. **F006-7**: マルチステップフォーム実装
   - 段階的なキャラ作成フロー
   - ステップ間のデータ保持

7. **F006-8**: キャラクター保存・URL発行機能（FR-006, シナリオ3）
   - オンライン保存機能
   - 一意のURL発行

8. **F006-9**: パスワード保護機能（FR-023, シナリオ3）
   - オプションのパスワード設定
   - 認証フロー

**優先度3: セッション管理**
9. **F007**: セッション管理UI（FR-024, シナリオ6）
   - セッション記録の追加・編集
   - セッション履歴表示

## 次回作業手順

### 1. 即座に確認すべき事項
```bash
# テスト実行方法（重要 - CLAUDE.mdに記録済み）
cd /mnt/d/projects/age-of-hero/apps/frontend
bun run test [テストファイルパス]  # ✅ 正しい方法

# 現在のテスト状況確認
bun run test src/features/character-creation/ui/__tests__/CharacterForm.test.tsx
```

### 2. 推奨作業順序（TDDサイクル厳守）

**Step 1: F006-2 技能ポイント割り振りUI**
```bash
# 1. テスト作成（RED）
src/features/character-creation/ui/__tests__/SkillAllocationForm.test.tsx

# 2. 実装作成（GREEN）
src/features/character-creation/ui/SkillAllocationForm.tsx

# 3. packages/coreの統合確認
calculateSkillInitialValues関数の使用
```

**Step 2: F006-3 ヒーロースキル選択UI**
```bash
# 必要なpackages/core関数の確認
- validateHeroSkills関数（データ構造更新が必要な可能性）
- HERO_SKILLS マスターデータ
```

### 3. 重要な技術情報

#### 現在の実装構造（FSDアーキテクチャ）
```
apps/frontend/src/features/character-creation/
├── ui/
│   ├── CharacterForm.tsx ✅ 完成
│   ├── __tests__/
│   │   └── CharacterForm.test.tsx ✅ 10テスト通過
│   ├── SkillAllocationForm.tsx ← 次に実装
│   ├── HeroSkillSelectionForm.tsx ← その次
│   └── ... （他のフォームコンポーネント）
├── model/ ← 状態管理（未実装）
└── lib/ ← ユーティリティ（未実装）
```

#### packages/core統合状況
```typescript
// 利用可能な関数
import { calculateAbilities } from '@age-of-hero/core'; ✅ 実装済み
import { calculateSkillInitialValues } from '@age-of-hero/core'; // 要確認
import { validateSpecialAttackConstraints } from '@age-of-hero/core'; ✅ 実装済み
```

### 4. 注意事項

#### テスト実行で間違いやすい点
- ❌ `bun test` （直接実行）
- ✅ `bun run test` （package.json経由）

#### データ構造の注意点
- ヒーロースキル: 完全な情報セット（name, level, maxLevel, timing, skill, target, range, cost, effect）
- 必殺技: 完全な情報セット（同上）
- 技能値: 初期値＋割り振りポイント、100%超過可能

#### spec.md要件の受け入れシナリオ
```
✅ 1-1: クラス選択（8種類から2つ選択、重複可能）
✅ 1-2: 能力値算出（2クラス合計、+1ボーナス適用）
❌ 1-3: 技能初期値算出・150%ポイント割り振り
❌ 1-4: ヒーロースキル7Lv・必殺技1Lv・アイテム20点分取得
❌ 1-5: HP・SP・行動値算出・最終ステータス表示
❌ 3: キャラクター保存・URL発行・パスワード保護
❌ 6: セッション管理
```

### 5. 関連ファイル確認リスト
- `/specs/001-trpg-age-of/spec.md` - 機能要件の詳細
- `/specs/001-trpg-age-of/tasks.md` - 更新済みタスクリスト
- `/apps/frontend/test-list.md` - フロントエンドテスト計画
- `/CLAUDE.md` - テスト実行方法・作業教訓

## 完了基準
- spec.md要件の受け入れシナリオ1-1～1-5、3、6の完全実装
- 各機能のTDDテスト通過
- E2Eテストの実装・通過

---

**重要**: 現在は基本的なフォームコンポーネントのみ完成。Age of Heroの完全なキャラクター作成フローの実装が最優先課題。