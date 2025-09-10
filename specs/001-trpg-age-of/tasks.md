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
- [ ] T004 [P] packages/typescript-config/ で TypeScript 共有設定を構成
- [ ] T005 [P] packages/shared/src/types/ で共有型パッケージを作成
- [ ] T006 [P] packages/schemas/src/ でスキーマパッケージを作成
- [ ] T007 [P] packages/ui/src/components/ で UI コンポーネントパッケージを作成
- [ ] T008 apps/backend/ で Hono を使用してバックエンドアプリを初期化
- [ ] T009 apps/frontend/ で React 19 + Vite を使用してフロントエンドアプリを初期化
- [ ] T010 apps/backend/ でデータベース接続と Drizzle ORM を設定

## フェーズ 3.2: テスト先行 (TDD) ⚠️ 3.3 の前に完了必須
**重要: これらのテストは実装前に書かれ、失敗しなければならない**
- [ ] T011 [P] apps/backend/tests/contract/test_game_data.ts で GET /api/game-data の契約テスト
- [ ] T012 [P] apps/backend/tests/contract/test_characters_post.ts で POST /api/characters の契約テスト
- [ ] T013 [P] apps/backend/tests/contract/test_characters_get.ts で GET /api/characters/{id} の契約テスト
- [ ] T014 [P] apps/backend/tests/contract/test_characters_put.ts で PUT /api/characters/{id} の契約テスト
- [ ] T015 [P] apps/backend/tests/contract/test_password.ts で PUT /api/characters/{id}/password の契約テスト
- [ ] T016 [P] apps/backend/tests/integration/test_character_creation.ts でキャラクター作成フローの統合テスト
- [ ] T017 [P] apps/backend/tests/integration/test_session_history.ts でセッション履歴管理の統合テスト
- [ ] T018 [P] apps/backend/tests/integration/test_password_protection.ts でパスワード保護の統合テスト

## フェーズ 3.3: コア実装 (テストが失敗した後のみ)
- [ ] T019 [P] packages/schemas/src/character/character.ts でキャラクタースキーマ
- [ ] T020 [P] packages/schemas/src/session/session.ts でセッションスキーマ
- [ ] T021 [P] packages/schemas/src/api/contracts.ts で API 契約スキーマ
- [ ] T022 [P] packages/shared/src/constants/game-data.ts でゲームデータ定数
- [ ] T023 [P] packages/shared/src/errors/api-errors.ts でエラー定義
- [ ] T024 apps/backend/src/models/character.ts で Drizzle を使用したキャラクターデータベースモデル
- [ ] T025 apps/backend/src/services/character-service.ts でキャラクターサービス CRUD 操作
- [ ] T026 apps/backend/src/services/game-data-service.ts でゲームデータサービス
- [ ] T027 apps/backend/src/services/password-service.ts で bcrypt を使用したパスワードサービス
- [ ] T028 apps/backend/src/api/game-data.ts で GET /api/game-data エンドポイント
- [ ] T029 apps/backend/src/api/characters/create.ts で POST /api/characters エンドポイント
- [ ] T030 apps/backend/src/api/characters/get.ts で GET /api/characters/{id} エンドポイント
- [ ] T031 apps/backend/src/api/characters/update.ts で PUT /api/characters/{id} エンドポイント
- [ ] T032 apps/backend/src/api/characters/password.ts で PUT /api/characters/{id}/password エンドポイント

## フェーズ 3.4: 統合
- [ ] T033 apps/backend/drizzle/ でデータベース接続とマイグレーション設定
- [ ] T034 apps/backend/src/lib/validation.ts でリクエスト検証ミドルウェア
- [ ] T035 apps/backend/src/lib/error-handler.ts でエラーハンドリングミドルウェア
- [ ] T036 apps/backend/src/lib/cors.ts で CORS とセキュリティヘッダー
- [ ] T037 apps/backend/src/lib/logger.ts で構造化ログ設定
- [ ] T038 apps/backend/src/api/index.ts で API ルート登録

## フェーズ 3.5: フロントエンド実装
- [ ] T039 [P] packages/ui/src/components/character/ でキャラクター作成コンポーネント
- [ ] T040 [P] packages/ui/src/components/session/ でセッション履歴コンポーネント
- [ ] T041 [P] packages/ui/src/components/forms/ でフォームコンポーネントと検証
- [ ] T042 [P] apps/frontend/src/services/api-client.ts で Hono RPC を使用した API クライアント設定
- [ ] T043 [P] packages/ui/src/hooks/use-character-creation.ts でキャラクター作成フック
- [ ] T044 apps/frontend/src/pages/CreateCharacter.tsx でキャラクター作成ページ
- [ ] T045 apps/frontend/src/pages/CharacterSheet.tsx でキャラクターシートページ
- [ ] T046 apps/frontend/src/App.tsx で React Router v7 を使用したルーター設定
- [ ] T047 apps/frontend/src/lib/query-client.ts で TanStack Query 設定

## フェーズ 3.6: 仕上げ
- [ ] T048 [P] packages/schemas/tests/ でスキーマのユニットテスト
- [ ] T049 [P] packages/ui/tests/ で UI コンポーネントのユニットテスト
- [ ] T050 [P] apps/backend/tests/unit/ でサービスのユニットテスト
- [ ] T051 apps/frontend/tests/e2e/ で Playwright を使用した E2E テスト
- [ ] T052 パフォーマンステスト (キャラクター作成<2秒, シート読み込み<500ms)
- [ ] T053 [P] docs/ での API ドキュメント更新
- [ ] T054 apps/frontend/src/lib/offline.ts で Service Worker を使用したオフライン対応
- [ ] T055 コード重複の削除とリファクタリング

## 依存関係
- セットアップ (T001-T010) がすべての前に
- テスト (T011-T018) が実装 (T019-T032) の前に
- スキーマ (T019-T023) がモデルとサービス (T024-T027) の前に
- モデルとサービスがエンドポイント (T028-T032) の前に
- コア実装が統合 (T033-T038) の前に
- バックエンドがフロントエンド (T039-T047) の前に
- すべてが仕上げ (T048-T055) の前に

## 並列実行例
```
# スキーマタスクを一緒に実行:
Task: "packages/schemas/src/character/character.ts でキャラクタースキーマ"
Task: "packages/schemas/src/session/session.ts でセッションスキーマ"
Task: "packages/schemas/src/api/contracts.ts で API 契約スキーマ"
Task: "packages/shared/src/constants/game-data.ts でゲームデータ定数"
Task: "packages/shared/src/errors/api-errors.ts でエラー定義"
```

## 注意事項
- [P] タスク = 異なるファイル、依存関係なし
- 実装前にテストが失敗することを確認
- 各タスク後にコミット
- Bun をパッケージ管理とテストに使用
- TDD に従う: RED-GREEN-リファクタサイクル
- すべての API エンドポイントに対応する契約テストが必要

## タスク生成ルール
*main() 実行中に適用*

1. **契約から** (api-spec.yaml):
   - 5つの API エンドポイント → 5つの契約テストタスク [P]
   - 5つのエンドポイント → 5つの実装タスク

2. **データモデルから**:
   - Character エンティティ → モデル作成タスク [P]
   - セッション履歴 → サービス層タスク
   - スキーマ → 共有型定義 [P]

3. **プランアーキテクチャから**:
   - モノレポ構造 → セットアップタスク
   - 共有パッケージ → 並列パッケージ作成 [P]
   - TDD 要件 → 実装前テスト

4. **順序付け**:
   - セットアップ → テスト → スキーマ → モデル → サービス → エンドポイント → フロントエンド → 仕上げ
   - 依存関係が並列実行をブロック

## 検証チェックリスト
*main() が戻る前にチェック*

- [x] すべての契約 (5エンドポイント) に対応するテストがある (T011-T015)
- [x] すべてのエンティティ (Character, Session) にモデルタスクがある (T024, T020)
- [x] すべてのテストが実装の前にある (T011-T018 が T019+ の前)
- [x] 並列タスクが真に独立している (異なるファイル、共有状態なし)
- [x] 各タスクが正確なファイルパスを指定
- [x] [P] タスクが他の [P] タスクと同じファイルを変更しない