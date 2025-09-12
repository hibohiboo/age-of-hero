# タスク: Age of Hero キャラクターシート管理システム

**入力**: `/specs/001-trpg-age-of/` からの設計ドキュメント  
**前提条件**: plan.md (必須), research.md, data-model.md, contracts/api-spec.yaml  
**プロジェクトタイプ**: web - モノレポ構成 (apps/backend + apps/frontend + packages)

## 実行フロー (main)

```
1. フィーチャーディレクトリからplan.mdを読み込み
   → 成功: モノレポ構成、React/TypeScript + Hono/PostgreSQL確認
   → 抽出: Bun, Drizzle ORM, Cloudflare Pages/Workers
2. 設計ドキュメントを読み込み:
   → data-model.md: Characters単一テーブル設計 → schema/model tasks
   → contracts/api-spec.yaml: 5エンドポイント → contract test tasks
   → research.md: 技術決定根拠 → setup tasks
3. カテゴリ別にタスクを生成:
   → セットアップ: モノレポ構成、依存関係、linting
   → テスト: contract tests, integration tests (TDD)
   → コア: Drizzle schema, API endpoints, React components
   → 統合: DB接続, middleware, フロントエンド統合
   → 仕上げ: unit tests, E2E tests, performance
4. タスクルールを適用:
   → 異なるpackages/apps = [P]で並列マーク
   → 同じファイル = sequential ([P]なし)
   → 実装前にテスト (TDD)
5. タスクを順次番号付け (T001, T002...)
6. 成功: モノレポ実行用の69+タスクを生成
```

## フォーマット: `[ID] [P?] 説明`

- **[P]**: 並列実行可能 (異なるファイル/packages、依存関係なし)
- 説明に正確なファイルパスを含める

## パス規約

**モノレポ構造** (plan.mdから):

- **バックエンド**: `apps/backend/src/`, `apps/backend/tests/`
- **フロントエンド**: `apps/frontend/src/`, `apps/frontend/tests/`
- **パッケージ**: `packages/schemas/`, `packages/ui/`, `packages/shared/`

## フェーズ 3.1: セットアップ

- [x] T001 apps/ と packages/ ディレクトリでモノレポ構造を作成
- [x] T002 リポジトリルートで package.json を使用して Bun ワークスペースを初期化
- [x] T003 [P] packages/eslint-config-custom/ で ESLint 共有設定を構成
- [x] T004 [P] packages/typescript-config/ で TypeScript 共有設定を構成
- [ ] T005 [P] packages/shared/src/types/ で共有型パッケージを作成
- [ ] T006 [P] packages/schemas/src/ でスキーマパッケージを作成
- [ ] T007 [P] packages/ui/src/components/ で UI コンポーネントパッケージを作成
- [x] T008 apps/backend/ で Hono を使用してバックエンドアプリを初期化
- [ ] T009 apps/frontend/ で React 19 + Vite を使用してフロントエンドアプリを初期化
- [x] T010 apps/backend/ でデータベース接続と Drizzle ORM を設定

## フェーズ 3.2: テスト駆動開発 (TDD) ⚠️ 3.3 の前に完了必須

**TDDサイクル: テストリスト → RED → GREEN → REFACTOR → 繰り返し**

### T011: TDDテストリスト作成

- [x] T011 apps/backend/test-list.md で網羅すべきテストシナリオのリスト作成

### T012-T050: TDDサイクル実行（テストリストから1つずつ選択）

**各タスクは以下の順序で実行:**

1. テストリストから1つ選択
2. RED: テストコード作成 → 失敗確認
3. GREEN: 最小実装でテスト通過
4. REFACTOR: 設計改善
5. テストリストに新たな気づきを追加

**完了したTDDサイクル:**
- [x] T012 TDD: GET /api/game-data エンドポイント実装 ✅
- [x] T013 TDD: POST /api/characters エンドポイント実装 ✅
  - ✅ Zodバリデーションスキーマ実装（packages/schemas）
  - ✅ Honoのzod validator middleware統合
  - ✅ パスワード処理（optional）
  - ✅ エラーハンドリング（不正JSON、バリデーション失敗）
- [x] T014 TDD: GET /api/characters/{id} エンドポイント実装 ✅
  - ✅ UUIDバリデーション（Zod使用）
  - ✅ sessions配列サポート
  - ✅ 404/400エラーハンドリング

- [x] T015 TDD: PUT /api/characters/{id} エンドポイント実装 ✅
  - ✅ セッション履歴追加機能
  - ✅ パスワード認証機能（bcryptハッシュ化）
  - ✅ 時系列順セッション管理
  - ✅ 404エラーハンドリング
  - ✅ Lint・型チェック対応完了

**バックエンドAPI実装完了** ✅

**次のフェーズ - フロントエンド開発:**
- [x] F001 apps/frontend/ の既存 React + Vite アプリ環境を確認 ✅
- [x] F002 TDD: キャラクター作成ビジネスロジック（能力値計算） ✅
- [ ] F003 TDD: 技能初期値計算ロジック  
- [ ] F004 TDD: ヒーロースキル制約チェック
- [ ] F005 TDD: 特殊技制約チェック
- [ ] F006 TDD: キャラクター作成フォームUI実装
- [ ] F007 TDD: セッション管理UI実装
- [ ] F008 E2E: キャラクター作成フロー統合テスト
- [ ] F009 E2E: パスワード保護フロー統合テスト
- [ ] F010 E2E: セッション管理フロー統合テスト

### T026: TDD完了後の統合作業

- [ ] T026 TDD完了確認とテストリスト検証

## フェーズ 3.3: 統合・デプロイ準備 (TDD後)

- [ ] T027 API ルート統合とミドルウェア設定
- [ ] T028 データベースマイグレーション実行
- [ ] T029 フロントエンド統合（既存アプリとの接続）
- [ ] T030 E2E テスト実行
- [ ] T031 パフォーマンステスト実行
- [ ] T032 デプロイ準備・最終確認

## 依存関係 (TDD準拠)

- **セットアップ** (T001-T010) → すべての前提条件
- **TDDテストリスト** (T011) → TDDサイクルの開始
- **TDDサイクル** (T012-T025) → テストリストから1つずつ、RED→GREEN→REFACTORで実行
- **統合・デプロイ** (T027-T032) → TDD完了後の最終作業

**TDDルール**:

- 各TDDタスクは独立して実行（テストリストから選択）
- 実装前に必ずテスト作成・失敗確認 (RED)
- 最小実装でテスト通過 (GREEN)
- 必要に応じてリファクタリング (REFACTOR)

## TDD実行ガイド

### テストリスト作成のポイント (T011)

1. API契約から必要なテストシナリオを抽出
2. data-model.mdからデータ操作シナリオを抽出
3. 正常系・異常系・エッジケースを網羅
4. 実装中に気づいたテストシナリオは随時追加

### TDDサイクル実行のポイント (T012-T025)

**RED フェーズ**:

- 小さなテスト1つを選択
- 具体的で実行可能なテストコード作成
- テスト実行してRED（失敗）確認

**GREEN フェーズ**:

- テストを通すための最小実装
- 設計を気にせず、まずは動作させる

**REFACTOR フェーズ**:

- テストが通った状態で設計改善
- 重複除去、命名改善、構造整理
- テストも同時にリファクタリング

### 完了基準

- テストリストの全項目が実装済み
- 全テストが通過
- コードがリファクタリング済み
