import { z } from 'zod';

// CreateCharacterRequest のバリデーションスキーマ
export const createCharacterSchema = z.object({
  name: z
    .string()
    .min(1, 'name は必須です')
    .max(50, 'name は50文字以内で入力してください'),

  selectedClasses: z
    .array(z.string())
    .length(2, 'クラスは正確に2つ選択してください'),

  abilityBonus: z
    .enum(['physical', 'reflex', 'sensory', 'intellectual', 'supernatural'])
    .optional(),

  skillAllocations: z
    .record(
      z.string(),
      z.number().int().min(0, 'スキルポイントは0以上で入力してください'),
    )
    .refine((data) => {
      const totalPoints = Object.values(data).reduce(
        (sum, points) => sum + points,
        0,
      );
      return totalPoints >= 0;
    }, 'スキルポイントの合計が不正です'),

  heroSkills: z.array(
    z.object({
      id: z.string(),
      level: z
        .number()
        .int()
        .min(1, 'ヒーロースキルレベルは1以上で入力してください'),
    }),
  ),

  specialAttacks: z.array(
    z.object({
      id: z.string(),
      level: z.number().int().min(1, '特殊技レベルは1以上で入力してください'),
    }),
  ),

  items: z.array(z.string()),

  // セッション履歴 (キャラクター作成時は通常空配列)
  sessions: z.array(
    z.object({
      id: z.string(),
      sessionName: z.string(),
      gmName: z.string(), 
      sessionDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'セッション日付はYYYY-MM-DD形式で入力してください'),
      currentHp: z.number().min(0, 'HPは0以上で入力してください'),
      currentSp: z.number().min(0, 'SPは0以上で入力してください'),
      currentFc: z.number().min(0, 'FCは0以上で入力してください').optional(),
      experiencePoints: z.number().min(0, '経験点は0以上で入力してください'),
      memo: z.string().optional(),
      createdAt: z.string().datetime('作成日時はISO形式で入力してください'),
    })
  ).optional().default([]),

  password: z.string().nullable().optional(),
});

export type CreateCharacterRequest = z.infer<typeof createCharacterSchema>;

// バリデーション結果の型
export type ValidationResult<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: {
        code: string;
        message: string;
        details: Array<{
          field: string;
          message: string;
        }>;
      };
    };

// バリデーション実行関数
export const validateCreateCharacter = (
  data: unknown,
): ValidationResult<CreateCharacterRequest> => {
  const result = createCharacterSchema.safeParse(data);

  if (result.success) {
    return {
      success: true,
      data: result.data,
    };
  }

  return {
    success: false,
    error: {
      code: 'VALIDATION_ERROR',
      message: 'バリデーションエラーが発生しました',
      details: result.error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      })),
    },
  };
};
