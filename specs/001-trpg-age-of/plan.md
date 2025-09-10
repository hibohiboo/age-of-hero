# 実装計画: Age of Hero キャラクターシート管理システム

**ブランチ**: `001-trpg-age-of` | **日付**: 2025-09-08 | **仕様書**: [spec.md](./spec.md)
**入力**: `/specs/001-trpg-age-of/spec.md` からの機能仕様書

## 実行フロー (/plan コマンドの範囲)

```
1. 入力パスから機能仕様を読み込み
   → 成功: 完全な要件を含む機能仕様を読み込み完了
2. 技術コンテキストを記入 (NEEDS CLARIFICATION をスキャン)
   → プロジェクトタイプを検出 (web=フロントエンド+バックエンド, mobile=アプリ+API)
   → プロジェクトタイプに基づく構造決定: ウェブアプリケーション
3. 下記の憲章チェックセクションを評価
   → 違反が存在する場合: 複雑性追跡に記録
   → 正当化できない場合: エラー「まずアプローチを簡素化」
   → 進捗追跡を更新: 初期憲章チェック
4. フェーズ 0 実行 → research.md
   → NEEDS CLARIFICATION が残る場合: エラー「未知を解決」
5. フェーズ 1 実行 → contracts, data-model.md, quickstart.md, CLAUDE.md
6. 憲章チェックセクションを再評価
   → 新しい違反がある場合: 設計をリファクタ、フェーズ1に戻る
   → 進捗追跡を更新: 設計後憲章チェック
7. フェーズ 2 計画 → タスク生成アプローチを説明 (tasks.md は作成しない)
8. 停止 - /tasks コマンドの準備完了
```

**重要**: /plan コマンドはステップ7で停止します。フェーズ2-4は他のコマンドで実行:

- フェーズ 2: /tasks コマンドが tasks.md を作成
- フェーズ 3-4: 実装実行 (手動またはツール経由)

## 概要

Age of Hero TRPG キャラクターシート管理システム - オンラインでTRPGキャラクターシートを作成、管理、アクセスするためのウェブアプリケーション。React/TypeScript フロントエンドと Hono API バックエンド、Cloudflare Pages デプロイ、Drizzle ORM を使用した PostgreSQL ストレージ。使いやすさのためのURLベースアクセス制御とオプションのパスワード保護。

## 技術コンテキスト

**言語/バージョン**: TypeScript (最新), Node.js 18+  
**主要依存関係**: React, Vite, Hono, Drizzle ORM, Tailwind CSS, React Router  
**ストレージ**: PostgreSQL with Drizzle ORM - 単一テーブル + JSON カラム設計  
**テスト**: Vitest (フロントエンド), Node.js テストランナー (バックエンド)  
**ターゲットプラットフォーム**: ウェブアプリケーション (Cloudflare Pages + Workers)
**プロジェクトタイプ**: web - ソース構造を決定 (フロントエンド + バックエンド)  
**パフォーマンス目標**: キャラ作成<2秒, シート読み込み<500ms, オフライン編集対応  
**制約**: URLベースアクセス (ユーザー認証なし), オプションパスワード保護, 最大10ユーザー  
**規模/スコープ**: 小規模TRPG ツール, <100キャラクターシート想定, データベース設計はシンプルな単一テーブル + JSON

## 憲章チェック

_ゲート: フェーズ0研究前に通過必須。フェーズ1設計後に再チェック。_

**簡素性**:

- プロジェクト: 7個 (apps: backend+frontend, packages: ui+schemas+shared+eslint-config-custom+typescript-config) - 最大3個を超過 ⚠️
  - 正当化: モノレポ構成により共通コード・設定重複を削減、型安全性向上、コード品質統一、保守性向上
- フレームワークを直接使用? はい - 直接 React/Hono 使用 ✓
- 単一データモデル? はい - packages/schemas で共有 TypeScript 型 ✓
- パターンを避ける? はい - 直接 ORM、不要な Repository/UoW なし ✓

**アーキテクチャ**:

- 全機能をライブラリとして? はい - キャラ作成、シート管理、ゲームルール、URLアクセス
- ライブラリリスト: character-creator, sheet-manager, game-rules, url-access
- ライブラリごとのCLI: はい - 各ライブラリで --help/--version/--format サポート
- ライブラリドキュメント: はい - llms.txt 形式を計画 ✓

**テスト (交渉不可)**:

- RED-GREEN-リファクタサイクル強制? はい - テスト先行、失敗、次に実装 ✓
- Gitコミットで実装前にテスト表示? はい - テストコミット先行を保証 ✓
- 順序: Contract→Integration→E2E→Unit を厳守? はい ✓
- 実際の依存関係を使用? はい - 統合テスト用実PostgreSQL ✓
- 統合テスト対象: 新ライブラリ、契約変更、共有スキーマ? はい ✓
- 禁止事項: テスト前実装、RED フェーズスキップ ✓

**監視性**:

- 構造化ログを含む? はい - デバッグ用 JSON ログ ✓
- フロントエンドログ → バックエンド? はい - 一元化ログ計画 ✓
- エラーコンテキスト十分? はい - ID付き完全エラーコンテキスト ✓

**セキュリティ**:

- SQLインジェクション対策? はい - Drizzle ORM パラメータ化クエリ使用 ✓
- XSS対策? はい - JSON応答のサニタイズとエスケープ処理 ✓
- 入力値バリデーション? はい - スキーマベースバリデーション実装 ✓

**バージョニング**:

- バージョン番号割り当て済み? 0.1.0 (初期バージョン) ✓
- 変更毎にBUILDインクリメント? はい - 自動バージョニング ✓
- 破壊的変更への対処? はい - API バージョニング戦略 ✓

## プロジェクト構造

### ドキュメント (この機能)

```
specs/001-trpg-age-of/
├── plan.md              # このファイル (/plan コマンド出力)
├── research.md          # フェーズ 0 出力 (/plan コマンド)
├── data-model.md        # フェーズ 1 出力 (/plan コマンド)
├── quickstart.md        # フェーズ 1 出力 (/plan コマンド)
├── contracts/           # フェーズ 1 出力 (/plan コマンド)
└── tasks.md             # フェーズ 2 出力 (/tasks コマンド - /plan では作成しない)
```

### ソースコード (リポジトリルート) - モノレポ構成

```
# モノレポ構成: apps/ + packages/ アーキテクチャ
apps/
├── backend/
│   ├── src/
│   │   ├── api/            # Hono ルートハンドラー
│   │   ├── services/       # ビジネスロジックライブラリ
│   │   └── lib/           # バックエンド固有ユーティリティ
│   ├── tests/
│   │   ├── contract/      # API 契約テスト
│   │   ├── integration/   # フルスタック統合テスト
│   │   └── unit/         # サービス単体テスト
│   └── drizzle/          # データベースマイグレーション
│
└── frontend/
    ├── src/
    │   ├── pages/         # ルートページ
    │   ├── components/    # アプリケーション固有コンポーネント
    │   ├── services/      # API クライアントライブラリ
    │   └── lib/          # フロントエンド固有ユーティリティ
    ├── tests/
    │   ├── contract/     # コンポーネント契約テスト
    │   ├── integration/  # ユーザーフローテスト
    │   └── unit/        # コンポーネント単体テスト
    └── public/          # 静的アセット

packages/
├── ui/
│   ├── src/
│   │   ├── components/   # 再利用可能UIコンポーネント
│   │   ├── hooks/        # カスタムReact hooks
│   │   └── styles/       # 共通スタイル定義
│   └── tests/           # UIコンポーネントテスト
│
├── schemas/
│   ├── src/
│   │   ├── character/    # キャラクター関連スキーマ
│   │   ├── session/      # セッション関連スキーマ
│   │   ├── api/          # API契約スキーマ
│   │   └── validation/   # 共通バリデーションルール
│   └── tests/           # スキーマテスト
│
├── shared/
│   ├── src/
│   │   ├── types/        # 共通型定義
│   │   ├── constants/    # 定数定義
│   │   ├── utils/        # 共通ユーティリティ関数
│   │   └── errors/       # エラー定義
│   └── tests/           # 共通ライブラリテスト
│
├── eslint-config-custom/
│   ├── defaults.js          # ESLint共通設定
│   ├── frontend.js          # React専用ルール
│   └── backend.js           # Node.js専用ルール
│
└── typescript-config/
    ├── tsconfig.base.json         # 基本TypeScript設定
    ├── tsconfig.frontend.json        # React専用設定
    └── tsconfig.backend.json         # Node.js専用設定
```

**構造決定**: モノレポアーキテクチャ - apps/(backend/frontend) + packages/(ui/schemas/shared/eslint-config-custom/typescript-config) 構成によるフロントエンド + バックエンド分離と共通ライブラリ・設定管理

## フェーズ 0: 概要 & 研究

**対象**: 技術コンテキストからの未知項目を抽出し、研究して解決する

**実行内容**: research.md を作成し、以下の研究項目を記録
