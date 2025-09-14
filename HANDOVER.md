# 引継ぎ文書 - Age of Hero データ構造修正作業

## 現在の作業状況
**作業中タスク**: apps/backend を新しいデータ構造に対応（TodoList: in_progress）

### 完了済み作業
1. ✅ packages/schemas - 新しい完全なスキル情報セット対応完了
2. ✅ packages/core - validateHeroSkills関数修正完了（レガシー削除、拡張性重視）
3. ✅ apps/backend/src/index.ts - API実装修正完了

### 現在の問題と未完了作業

#### 主な問題
- **ファイル書き込みエラー**: 複数のテストファイルで "File has been unexpectedly modified" エラー発生
- **テストデータ形式不一致**: 古い`{id, level}`形式が残存、新しい`{name, level, maxLevel, ...}`形式への変更が必要

#### 修正が必要なファイル
1. **D:/projects/age-of-hero/apps/backend/tests/contract/characters-get.test.ts**
   - Line 52-54: `{id: 'パワードライブ', level: 3}` → 新形式に変更
   - Line 58-60: `{id: 'パワースラッシュ', level: 1}` → 新形式に変更

2. **D:/projects/age-of-hero/apps/backend/tests/contract/characters-put-simple.test.ts** 
   - Line 56-58: `{id: 'パワードライブ', level: 3}` → 新形式に変更
   - Line 62-64: `{id: 'パワースラッシュ', level: 1}` → 新形式に変更

#### 新しいデータ形式（修正後の期待値）
```javascript
heroSkills: [
  {
    name: 'パワードライブ',
    level: 3,
    maxLevel: 5,
    timing: 'メジャーアクション',
    skill: '白兵攻撃',
    target: '単体',
    range: '武器',
    cost: 4,
    effect: '対象に白兵攻撃を行う。'
  },
],
specialAttacks: [
  {
    name: 'パワースラッシュ',
    level: 1,
    maxLevel: 3,
    timing: 'メジャーアクション',
    skill: '白兵攻撃',
    target: '単体',
    range: '武器',
    cost: 8,
    effect: '強力な一撃'
  },
],
```

## 次回作業手順

### 1. 即座に実行すべき作業
```bash
# 1. 作業ディレクトリ移動
cd D:/projects/age-of-hero

# 2. 上記2つのテストファイルのbasicCharacterDataを新形式に修正
# - characters-get.test.ts
# - characters-put-simple.test.ts

# 3. テスト実行して確認
npm test

# 4. 成功したらTodoを完了に更新
```

### 2. 残りのTodoList
1. ✅ apps/backend を新しいデータ構造に対応 ← 現在作業中（テストファイル修正のみ残り）
2. ⏳ TDD: 必殺技制約チェック
3. ⏳ TDD: キャラクター作成フォームUI実装

### 3. 技術的詳細
- **データ構造変更**: `{skillName: level}` → 完全なスキル情報セット
- **バリデーション**: 寛容な設計（空フィールド許可）
- **拡張性**: スキル存在チェック削除済み
- **互換性**: レガシー互換性は意図的に削除済み

### 4. 注意事項
- ファイル書き込みエラーが発生した場合は再起動後に再試行
- テストデータは必ず新しい完全なスキル情報セット形式を使用
- characters-new-schema.test.ts は既に正しい形式で作成済み（参考用）

## 状況確認コマンド
```bash
# テスト実行
npm test

# 特定のテストファイルのみ実行
npm test -- characters-get.test.ts
```