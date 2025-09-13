/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';

// CreateCharacterRequest のバリデーションスキーマ
export const createCharacterSchema = z.object({
  name: z
    .string()
    .max(50, 'name は50文字以内で入力してください')
    .optional(),

  selectedClasses: z
    .array(z.string())
    .optional()
    .default([]),

  abilityBonus: z
    .enum(['physical', 'reflex', 'sensory', 'intellectual', 'supernatural'])
    .optional(),

  skillAllocations: z.record(z.string(), z.number().optional()).optional().default({}),

  heroSkills: z.array(
    z.object({
      name: z.string().optional(),
      level: z.number().int().min(0).optional(),
      maxLevel: z.number().int().min(0).optional(),
      timing: z.string().optional(),
      skill: z.string().optional(),
      target: z.string().optional(),
      range: z.string().optional(),
      cost: z.number().int().min(0).optional(),
      effect: z.string().optional(),
    }),
  ).optional().default([]),

  specialAttacks: z.array(
    z.object({
      name: z.string().optional(),
      level: z.number().int().min(0).optional(),
      maxLevel: z.number().int().min(0).optional(),
      timing: z.string().optional(),
      skill: z.string().optional(),
      target: z.string().optional(),
      range: z.string().optional(),
      cost: z.number().int().min(0).optional(),
      effect: z.string().optional(),
    }),
  ).optional().default([]),

  items: z.array(z.string()).optional().default([]),

  // セッション履歴 (キャラクター作成時は通常空配列、寛容なバリデーション)
  sessions: z
    .array(
      z.object({
        id: z.string().optional(),
        sessionName: z.string().optional(),
        gmName: z.string().optional(),
        sessionDate: z.string().optional(),
        currentHp: z.number().optional(),
        currentSp: z.number().optional(),
        currentFc: z.number().optional(),
        experiencePoints: z.number().optional(),
        memo: z.string().optional(),
        createdAt: z.string().optional(),
      }),
    )
    .optional()
    .default([]),

  password: z.string().nullable().optional(),
});

export type CreateCharacterRequest = z.infer<typeof createCharacterSchema>;

// UpdateCharacterRequest のバリデーションスキーマ
export const updateCharacterSchema = z.object({
  session: z
    .object({
      id: z.string().optional(),
      sessionName: z.string().optional(),
      gmName: z.string().optional(),
      sessionDate: z.string().optional(),
      currentHp: z.number().int().min(0).optional(),
      currentSp: z.number().int().min(0).optional(),
      currentFc: z.number().int().min(0).optional().nullable(),
      experiencePoints: z.number().int().min(0).optional(),
      memo: z.string().optional().nullable(),
    })
    .optional(),
  password: z.string().nullable().optional(),
});

export type UpdateCharacterRequest = z.infer<typeof updateCharacterSchema>;

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
      details: result.error.errors.map((err: any) => ({
        field: err.path.join('.'),
        message: err.message,
      })),
    },
  };
};

// UpdateCharacterRequest バリデーション実行関数
export const validateUpdateCharacter = (
  data: unknown,
): ValidationResult<UpdateCharacterRequest> => {
  const result = updateCharacterSchema.safeParse(data);

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
      details: result.error.errors.map((err: any) => ({
        field: err.path.join('.'),
        message: err.message,
      })),
    },
  };
};
