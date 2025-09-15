import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CharacterForm } from '../CharacterForm';

describe('CharacterForm', () => {
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  describe('初期表示', () => {
    it('フォームが表示されること', () => {
      render(<CharacterForm onSubmit={mockOnSubmit} />);

      expect(screen.getByRole('heading', { name: 'キャラクター作成' })).toBeInTheDocument();
    });

    it('名前入力フィールドが表示されること', () => {
      render(<CharacterForm onSubmit={mockOnSubmit} />);

      expect(screen.getByLabelText('キャラクター名')).toBeInTheDocument();
    });

    it('クラス選択セクションが表示されること', () => {
      render(<CharacterForm onSubmit={mockOnSubmit} />);

      expect(screen.getByText('クラス選択')).toBeInTheDocument();
      expect(screen.getByText('1つ目のクラス')).toBeInTheDocument();
      expect(screen.getByText('2つ目のクラス')).toBeInTheDocument();
    });
  });

  describe('フォーム入力', () => {
    it('名前を入力できること', () => {
      render(<CharacterForm onSubmit={mockOnSubmit} />);

      const nameInput = screen.getByLabelText('キャラクター名');
      fireEvent.change(nameInput, { target: { value: '山田太郎' } });

      expect(nameInput).toHaveValue('山田太郎');
    });

    it('クラスを選択できること', () => {
      render(<CharacterForm onSubmit={mockOnSubmit} />);

      const firstClassSelect = screen.getByLabelText('1つ目のクラス');
      fireEvent.change(firstClassSelect, { target: { value: 'マッスル' } });

      expect(firstClassSelect).toHaveValue('マッスル');
    });

    it('能力値にボーナスを追加できること', () => {
      render(<CharacterForm onSubmit={mockOnSubmit} />);

      const bonusSelect = screen.getByLabelText('ボーナス能力値');
      fireEvent.change(bonusSelect, { target: { value: 'physical' } });

      expect(bonusSelect).toHaveValue('physical');
    });
  });

  describe('計算結果表示', () => {
    it('選択したクラスに基づいて能力値が計算されること', () => {
      render(<CharacterForm onSubmit={mockOnSubmit} />);

      // マッスル + バイオを選択
      fireEvent.change(screen.getByLabelText('1つ目のクラス'), {
        target: { value: 'マッスル' },
      });
      fireEvent.change(screen.getByLabelText('2つ目のクラス'), {
        target: { value: 'バイオ' },
      });

      // 肉体値が5（マッスル3 + バイオ2）になることを確認
      expect(screen.getByText('肉体: 5')).toBeInTheDocument();
    });

    it('ボーナス適用後の能力値が表示されること', () => {
      render(<CharacterForm onSubmit={mockOnSubmit} />);

      fireEvent.change(screen.getByLabelText('1つ目のクラス'), {
        target: { value: 'マッスル' },
      });
      fireEvent.change(screen.getByLabelText('2つ目のクラス'), {
        target: { value: 'バイオ' },
      });
      fireEvent.change(screen.getByLabelText('ボーナス能力値'), {
        target: { value: 'physical' },
      });

      // ボーナス適用で肉体値が6になることを確認
      expect(screen.getByText('肉体: 6 (+1)')).toBeInTheDocument();
    });
  });

  describe('フォーム送信', () => {
    it('有効な入力でフォーム送信できること', () => {
      render(<CharacterForm onSubmit={mockOnSubmit} />);

      // フォーム入力
      fireEvent.change(screen.getByLabelText('キャラクター名'), {
        target: { value: '山田太郎' },
      });
      fireEvent.change(screen.getByLabelText('1つ目のクラス'), {
        target: { value: 'マッスル' },
      });
      fireEvent.change(screen.getByLabelText('2つ目のクラス'), {
        target: { value: 'バイオ' },
      });
      fireEvent.change(screen.getByLabelText('ボーナス能力値'), {
        target: { value: 'physical' },
      });

      // 送信
      fireEvent.click(screen.getByRole('button', { name: 'キャラクター作成' }));

      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: '山田太郎',
        selectedClasses: ['マッスル', 'バイオ'],
        abilityBonus: 'physical',
      });
    });

    it('必須項目が未入力の場合はエラー表示すること', () => {
      render(<CharacterForm onSubmit={mockOnSubmit} />);

      fireEvent.click(screen.getByRole('button', { name: 'キャラクター作成' }));

      expect(screen.getByText('キャラクター名は必須です')).toBeInTheDocument();
      expect(
        screen.getByText('クラスを2つ選択してください'),
      ).toBeInTheDocument();
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });
});
