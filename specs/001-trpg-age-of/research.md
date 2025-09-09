# 研究文書: Age of Hero システム技術調査

**作成日**: 2025-09-08  
**対象**: Age of Hero キャラクターシート管理システム  
**目的**: 技術スタック選択と実装パターンの研究

## 研究項目と結果

### 1. Cloudflare Pages + Workers デプロイメントパターン

**決定**: Cloudflare Pages (フロントエンド) + Cloudflare Workers (API)
**根拠**:

- フロントエンド静的サイトとして Pages にデプロイ可能
- API は Hono を使用して Workers にデプロイ
- 自動的にエッジ配信、高速アクセス
- 小規模プロジェクトに適した無料枠

**検討した代替案**:

- Vercel: Node.js ランタイム制限がHonoに不適
- Netlify: Workers 統合が複雑

### 2. Drizzle ORM スキーマ設計とマイグレーション

**決定**: TypeScript-first schema定義、push/pull マイグレーション戦略
**根拠**:

- 型安全性を保証するTypeScript定義
- `drizzle-kit push` でスキーマ変更を直接適用
- `drizzle-kit generate` で本番用マイグレーション生成
- PostgreSQL の full-text search 機能活用

**検討した代替案**:

- Prisma: Bundle サイズが大きい、Workers に不適
- 生SQL: 型安全性なし、開発効率低い

### 3. React Query + Hono RPC 統合パターン

**決定**: Hono RPC クライアント + TanStack Query の組み合わせ
**根拠**:

- エンドツーエンド型安全性
- 自動キャッシング・再取得
- オフライン対応の基盤
- リアルタイム更新対応

**検討した代替案**:

- SWR: Hono RPC 型推論サポートなし
- Apollo Client: GraphQL 不要、過剰な機能

### 4. オフライン対応パターン

**決定**: Service Worker + IndexedDB + 楽観的更新
**根拠**:

- キャラクターシート編集の連続性確保
- ネットワーク復旧時の自動同期
- PWA 対応でアプリライクな体験

**検討した代替案**:

- LocalStorage: 容量制限、複雑なデータ構造に不適
- 完全オンライン: ユーザビリティ低下

### 5. URLベースアクセス制御実装

**決定**: UUID ベースの一意URL + オプション bcrypt パスワードハッシュ
**根拠**:

- 推測困難な UUID でセキュリティ確保
- パスワードなしでも基本的な保護
- オプションパスワードで追加セキュリティ

**検討した代替案**:

- Short URL: セキュリティリスク
- JWT トークン: 過剰、複雑性増加

## 技術スタック確定版

### フロントエンド

- **React 18** + **TypeScript 5+**
- **Vite** (ビルドツール、高速HMR)
- **Tailwind CSS** (ユーティリティファーストCSS)
- **React Router v7** (SPA ルーティング)
- **TanStack Query** (状態管理・キャッシング)
- **React Hook Form** (フォーム管理)

### バックエンド

- **Hono** (軽量ウェブフレームワーク)
- **Drizzle ORM** (TypeScript ORM)
- **PostgreSQL** (メインデータベース)
- **bcrypt** (パスワードハッシュ化)
- **zod** (バリデーション)

### インフラ・デプロイ

- **Cloudflare Pages** (フロントエンドホスティング)
- **Cloudflare Workers** (API サーバーレス)
- **Neon PostgreSQL** (マネージドPostgreSQL)

### 開発・テスト

- **Vitest** (ユニット・統合テスト)
- **Playwright** (E2E テスト)
- **TypeScript** (型チェック)
- **ESLint** + **Prettier** (コード品質)

## パフォーマンス最適化戦略

1. **キャラクター作成**: 段階的フォーム送信、楽観的UI更新
2. **シート表示**: 初期データの最小セット読み込み、遅延読み込み
3. **編集**: デバウンス自動保存、ローカルファーストUI
4. **キャッシング**: クエリキャッシュ + ServiceWorkerキャッシュ

## セキュリティ考慮事項

1. **アクセス制御**: UUID の予測不可能性によるセキュリティ
2. **パスワード保護**: bcrypt ハッシュ化、レート制限
3. **データバリデーション**: zod による入力検証
4. **HTTPS**: Cloudflare による強制HTTPS

## 次のステップ

1. **データモデル設計**: Drizzle スキーマ定義
2. **API 契約設計**: OpenAPI スキーマ作成
3. **テスト戦略**: 契約テスト・統合テスト計画
4. **クイックスタートガイド**: 開発環境セットアップ手順
