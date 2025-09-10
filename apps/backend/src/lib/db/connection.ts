import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/age_of_hero';

// PostgreSQL接続設定
const client = postgres(connectionString, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
});

// Drizzle ORMインスタンス
export const db = drizzle(client);

// テスト用DB接続を差し替えるためのヘルパー
let testDbInstance: ReturnType<typeof drizzle> | null = null;

export const setTestDb = (testDb: ReturnType<typeof drizzle>) => {
  testDbInstance = testDb;
};

export const getDb = () => testDbInstance || db;

// 接続テスト用ヘルパー
export const testConnection = async (): Promise<boolean> => {
  try {
    await client`SELECT 1`;
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
};

// 接続クリーンアップ
export const closeConnection = async (): Promise<void> => {
  await client.end();
};