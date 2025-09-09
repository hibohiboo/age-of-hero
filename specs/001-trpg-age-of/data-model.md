# データモデル設計: Age of Hero システム

**作成日**: 2025-09-08  
**対象**: Age of Hero キャラクターシート管理システム  
**技術**: PostgreSQL + Drizzle ORM + TypeScript

## エンティティ関係図

```mermaid
erDiagram
    Character ||--o{ CharacterClass : has
    Character ||--o{ CharacterSkill : has
    Character ||--o{ CharacterHeroSkill : has
    Character ||--o{ CharacterSpecialAttack : has
    Character ||--o{ CharacterItem : has
    Character ||--|| CharacterAccess : has
    
    Class ||--o{ CharacterClass : belongs_to
    Skill ||--o{ CharacterSkill : belongs_to
    HeroSkill ||--o{ CharacterHeroSkill : belongs_to
    SpecialAttack ||--o{ CharacterSpecialAttack : belongs_to
    Item ||--o{ CharacterItem : belongs_to
```

## エンティティ定義

### Character (キャラクター)
**目的**: Age of Hero キャラクターの基本情報とステータス

```typescript
interface Character {
  id: string;                    // UUID v4
  name: string;                  // キャラクター名
  createdAt: Date;              // 作成日時
  updatedAt: Date;              // 更新日時
  
  // 計算済み能力値 (2つのクラスから算出)
  physicalAbility: number;      // 肉体
  reflexAbility: number;        // 反射
  sensoryAbility: number;       // 感覚
  intellectualAbility: number;  // 知力
  supernaturalAbility: number;  // 超常
  
  // 計算済み派生ステータス
  hp: number;                   // ヒットポイント
  sp: number;                   // スキルポイント  
  actionValue: number;          // 行動値 (反射×2+知力)
  
  // 現在ステータス (セッション中に変動)
  currentHp: number;
  currentSp: number;
  currentFc?: number;           // ファンチット (オプション)
}
```

**バリデーションルール**:
- name: 1-50文字、必須
- 能力値: 0-20の範囲
- HP/SP: 正の整数
- currentHp/currentSp: 0以上、最大値以下

**状態遷移**:
1. 作成 → 能力値算出 → スキル割り振り → 完成
2. 完成 → セッション中更新 → 保存

### CharacterClass (キャラクター選択クラス)
**目的**: キャラクターが選択した2つのクラス情報

```typescript
interface CharacterClass {
  id: string;
  characterId: string;          // Character FK
  classId: string;              // Class FK
  order: 1 | 2;                // 1番目/2番目の選択
  createdAt: Date;
}
```

### Class (クラスマスター)
**目的**: Age of Hero の8つのクラス情報

```typescript
interface Class {
  id: string;
  name: string;                 // クラス名 (マッスル、テクノロジー等)
  physicalBase: number;         // 基本肉体値
  reflexBase: number;           // 基本反射値  
  sensoryBase: number;          // 基本感覚値
  intellectualBase: number;     // 基本知力値
  supernaturalBase: number;     // 基本超常値
  hpBase: number;              // 基本HP
  spBase: number;              // 基本SP
  description: string;          // クラス説明
}
```

**初期データ**:
```typescript
const initialClasses = [
  { name: "マッスル", physical: 3, reflex: 2, sensory: 2, intellectual: 1, supernatural: 0, hp: 38, sp: 17 },
  { name: "テクノロジー", physical: 1, reflex: 2, sensory: 3, intellectual: 2, supernatural: 0, hp: 30, sp: 25 },
  { name: "マジカル", physical: 1, reflex: 1, sensory: 1, intellectual: 2, supernatural: 3, hp: 23, sp: 32 },
  { name: "サイキック", physical: 1, reflex: 1, sensory: 2, intellectual: 2, supernatural: 2, hp: 25, sp: 30 },
  { name: "バイオ", physical: 2, reflex: 2, sensory: 2, intellectual: 2, supernatural: 0, hp: 36, sp: 19 },
  { name: "エスペラント", physical: 1, reflex: 2, sensory: 1, intellectual: 2, supernatural: 2, hp: 27, sp: 28 },
  { name: "アーティファクト", physical: 2, reflex: 1, sensory: 2, intellectual: 1, supernatural: 2, hp: 34, sp: 21 },
  { name: "アーツ", physical: 1, reflex: 3, sensory: 2, intellectual: 2, supernatural: 0, hp: 32, sp: 23 }
];
```

### CharacterSkill (キャラクター技能)
**目的**: キャラクターの技能値 (初期値 + 割り振りポイント)

```typescript
interface CharacterSkill {
  id: string;
  characterId: string;          // Character FK
  skillId: string;              // Skill FK
  baseValue: number;            // 初期値 (能力値×10%)
  allocatedPoints: number;      // 割り振りポイント (0-100)
  totalValue: number;           // 合計値 (baseValue + allocatedPoints)
  createdAt: Date;
}
```

**バリデーションルール**:
- allocatedPoints: 0-100
- 全CharacterSkillのallocatedPointsの合計: 150以下
- totalValue: baseValue + allocatedPoints

### Skill (技能マスター)  
**目的**: 技能の定義情報

```typescript
interface Skill {
  id: string;
  name: string;                 // 技能名 (パワー、技術等)
  category: "physical" | "reflex" | "sensory" | "intellectual"; // 能力値カテゴリー
  description: string;          // 技能説明
  order: number;               // 表示順序
}
```

**初期データ**:
```typescript
const initialSkills = [
  // 肉体系
  { name: "パワー", category: "physical", description: "素手や武器による力任せな攻撃、災害救助など。" },
  { name: "タフネス", category: "physical", description: "ダメージへの耐久力、防御、仲間を守るために必要。" },
  { name: "スタミナ", category: "physical", description: "持久力や回復力。長期任務や連続行動に重要。" },
  // 反射系
  { name: "技術", category: "reflex", description: "武器や道具を扱う技能。鍛錬次第で応用可能。" },
  { name: "運動", category: "reflex", description: "回避や素早い運動。人質救出などに役立つ。" },
  { name: "操縦", category: "reflex", description: "車・船・飛行機などの操縦。現場へ駆けつける手段。" },
  // 感覚系
  { name: "射撃", category: "sensory", description: "銃や弓による射撃。長距離狙撃やガンカタを含む。" },
  { name: "知覚", category: "sensory", description: "周囲に気づく力。奇襲への対応など。" },
  { name: "製作", category: "sensory", description: "武器・道具・乗り物の製作。ギミックを仕込む準備。" },
  { name: "芸術", category: "sensory", description: "歌や絵画などの創作。人々の心を癒やすことも可能。" },
  // 知力系  
  { name: "情報", category: "intellectual", description: "情報収集や情報戦。敵をかく乱する手段にも。" },
  { name: "交渉", category: "intellectual", description: "他者との交渉。物資や情報を得る手段。" }
];
```

### CharacterHeroSkill (キャラクターヒーロースキル)
**目的**: キャラクターが習得したヒーロースキル

```typescript
interface CharacterHeroSkill {
  id: string;
  characterId: string;          // Character FK
  heroSkillId: string;          // HeroSkill FK
  level: number;                // 習得レベル (1-最大Lv)
  createdAt: Date;
}
```

**バリデーションルール**:
- level: 1以上、HeroSkill.maxLevel以下
- 全CharacterHeroSkillのlevelの合計: 7以下

### HeroSkill (ヒーロースキルマスター)
**目的**: ヒーロースキルの定義

```typescript  
interface HeroSkill {
  id: string;
  name: string;                 // スキル名 (《パワードライブ》等)
  maxLevel: number;             // 最大習得レベル
  timing: string;               // タイミング (メジャーアクション等)
  skill: string;                // 使用技能
  target: string;               // 対象
  range: string;                // 射程
  cost: number;                 // コスト
  effect: string;               // 効果説明
  classRestriction?: string[];  // クラス制限 (オプション)
}
```

### CharacterAccess (キャラクターアクセス制御)
**目的**: URLベースアクセスとパスワード保護

```typescript
interface CharacterAccess {
  characterId: string;          // Character FK (PK)
  accessToken: string;          // UUID v4 (URL識別子)
  passwordHash?: string;        // bcrypt ハッシュ (オプション)
  isPasswordProtected: boolean; // パスワード保護フラグ
  createdAt: Date;
  lastAccessedAt?: Date;        // 最終アクセス日時
}
```

**バリデーションルール**:
- accessToken: UUID v4 形式
- passwordHash: bcrypt ハッシュまたはnull
- isPasswordProtected: passwordHash存在と一致

## データベーススキーマ (Drizzle)

```typescript
// schema.ts
import { pgTable, uuid, varchar, integer, timestamp, boolean, text } from 'drizzle-orm/pg-core';

export const characters = pgTable('characters', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  
  physicalAbility: integer('physical_ability').notNull(),
  reflexAbility: integer('reflex_ability').notNull(),
  sensoryAbility: integer('sensory_ability').notNull(),
  intellectualAbility: integer('intellectual_ability').notNull(),
  supernaturalAbility: integer('supernatural_ability').notNull(),
  
  hp: integer('hp').notNull(),
  sp: integer('sp').notNull(),
  actionValue: integer('action_value').notNull(),
  
  currentHp: integer('current_hp').notNull(),
  currentSp: integer('current_sp').notNull(),
  currentFc: integer('current_fc'),
});

export const classes = pgTable('classes', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 30 }).notNull().unique(),
  physicalBase: integer('physical_base').notNull(),
  reflexBase: integer('reflex_base').notNull(),
  sensoryBase: integer('sensory_base').notNull(),
  intellectualBase: integer('intellectual_base').notNull(),
  supernaturalBase: integer('supernatural_base').notNull(),
  hpBase: integer('hp_base').notNull(),
  spBase: integer('sp_base').notNull(),
  description: text('description').notNull(),
});

export const characterClasses = pgTable('character_classes', {
  id: uuid('id').defaultRandom().primaryKey(),
  characterId: uuid('character_id').references(() => characters.id).notNull(),
  classId: uuid('class_id').references(() => classes.id).notNull(),
  order: integer('order').notNull(), // 1 or 2
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const characterAccess = pgTable('character_access', {
  characterId: uuid('character_id').references(() => characters.id).primaryKey(),
  accessToken: uuid('access_token').defaultRandom().notNull().unique(),
  passwordHash: varchar('password_hash'),
  isPasswordProtected: boolean('is_password_protected').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  lastAccessedAt: timestamp('last_accessed_at'),
});
```

## ビジネスロジック

### キャラクター作成フロー
1. **クラス選択**: 2つのクラス選択 (重複可)
2. **能力値算出**: クラス能力値合計 + 任意1ポイントボーナス
3. **技能初期値算出**: 各技能 = 対応能力値 × 10%
4. **技能ポイント割り振り**: 150ポイントを任意分配
5. **ヒーロースキル選択**: 7レベル分を選択
6. **必殺技選択**: 1レベル分を選択  
7. **アイテム選択**: 20ポイント分を選択
8. **最終ステータス算出**: HP・SP・行動値計算

### アクセス制御フロー
1. **キャラクター作成完了**: 一意accessToken生成
2. **URL共有**: `/character/{accessToken}` でアクセス
3. **パスワード設定**: オプションでpasswordHash設定
4. **アクセス時**: パスワード保護時は認証必要

## パフォーマンス最適化

### インデックス設計
```sql
-- 高速アクセスのためのインデックス
CREATE INDEX idx_character_access_token ON character_access(access_token);
CREATE INDEX idx_character_updated_at ON characters(updated_at);
CREATE INDEX idx_character_classes_character_id ON character_classes(character_id);
```

### キャッシング戦略
- **キャラクター詳細**: 5分キャッシュ
- **クラス・スキルマスター**: 1時間キャッシュ  
- **リアルタイム更新**: WebSocket 使用時は即座に無効化