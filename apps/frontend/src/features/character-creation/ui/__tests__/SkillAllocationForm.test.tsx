import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { SkillAllocationForm } from '../SkillAllocationForm';

describe('SkillAllocationForm', () => {
  const mockAbilities = {
    physical: 15,
    reflex: 12,
    sensory: 10,
    intellectual: 14,
    supernatural: 8,
  };


  test('初期値が正しく表示される', () => {
    render(
      <SkillAllocationForm
        abilities={mockAbilities}
        onSkillChange={() => {}}
      />
    );

    // パワーの割り振りポイントが0で初期化される
    expect(screen.getByLabelText('パワーの割り振りポイント')).toHaveValue(0);
    // 肉体系技能の初期値（physical=15なので150%）の要素が存在する
    expect(screen.getAllByText('150').length).toBeGreaterThan(0);
    // 超常系技能の初期値（supernatural=8なので80%）の要素が存在する
    expect(screen.getAllByText('80').length).toBeGreaterThan(0);
  });

  test('技能ポイントの割り振りができる', () => {
    const mockOnSkillChange = vi.fn();
    render(
      <SkillAllocationForm
        abilities={mockAbilities}
        onSkillChange={mockOnSkillChange}
      />
    );

    const powerInput = screen.getByRole('spinbutton', { name: /パワー/ });
    fireEvent.change(powerInput, { target: { value: '50' } });

    expect(mockOnSkillChange).toHaveBeenCalledWith({
      パワー: 50,
      タフネス: 0,
      スタミナ: 0,
      技術: 0,
      射撃: 0,
      運転: 0,
      知覚: 0,
      捜索: 0,
      追跡: 0,
      情報: 0,
      医療: 0,
      動物: 0,
      超常: 0,
      次元: 0,
      時間: 0,
    });
  });

  test('残りポイントが正しく計算される', () => {
    render(
      <SkillAllocationForm
        abilities={mockAbilities}
        onSkillChange={() => {}}
      />
    );

    expect(screen.getByText('残りポイント: 150')).toBeInTheDocument();
  });

  test('ポイント使用後の残りポイントが正しく表示される', () => {
    render(
      <SkillAllocationForm
        abilities={mockAbilities}
        onSkillChange={() => {}}
      />
    );

    const powerInput = screen.getByRole('spinbutton', { name: /パワー/ });
    fireEvent.change(powerInput, { target: { value: '30' } });

    expect(screen.getByText('残りポイント: 120')).toBeInTheDocument();
  });

  test('一技能あたり上限100を超えると警告が表示される', () => {
    render(
      <SkillAllocationForm
        abilities={mockAbilities}
        onSkillChange={() => {}}
      />
    );

    const powerInput = screen.getByRole('spinbutton', { name: /パワー/ });
    fireEvent.change(powerInput, { target: { value: '101' } });

    expect(screen.getByText('一技能あたりの上限は100ポイントです')).toBeInTheDocument();
  });

  test('ポイントが足りない場合に警告が表示される', () => {
    render(
      <SkillAllocationForm
        abilities={mockAbilities}
        onSkillChange={() => {}}
      />
    );

    const powerInput = screen.getByRole('spinbutton', { name: /パワー/ });
    fireEvent.change(powerInput, { target: { value: '151' } });

    expect(screen.getByText('割り振り可能ポイントを超えています')).toBeInTheDocument();
  });

  test('各技能の最終値が正しく表示される', () => {
    render(
      <SkillAllocationForm
        abilities={mockAbilities}
        onSkillChange={() => {}}
      />
    );

    const powerInput = screen.getByRole('spinbutton', { name: /パワー/ });
    fireEvent.change(powerInput, { target: { value: '25' } });

    // 初期値150 + 割り振り25 = 175
    expect(screen.getByText('175')).toBeInTheDocument();
  });

  test('全技能が表示される', () => {
    render(
      <SkillAllocationForm
        abilities={mockAbilities}
        onSkillChange={() => {}}
      />
    );

    const expectedSkills = [
      'パワー', 'タフネス', 'スタミナ',
      '技術', '射撃', '運転',
      '知覚', '捜索', '追跡',
      '情報', '医療', '動物',
      '超常', '次元', '時間'
    ];

    expectedSkills.forEach(skill => {
      expect(screen.getByLabelText(new RegExp(skill))).toBeInTheDocument();
    });
  });

  test('負の値は入力できない', () => {
    const mockOnSkillChange = vi.fn();
    render(
      <SkillAllocationForm
        abilities={mockAbilities}
        onSkillChange={mockOnSkillChange}
      />
    );

    const powerInput = screen.getByRole('spinbutton', { name: /パワー/ });
    fireEvent.change(powerInput, { target: { value: '-10' } });

    // 負の値は0にクランプされる
    expect(mockOnSkillChange).toHaveBeenCalledWith(expect.objectContaining({
      パワー: 0,
    }));
  });
});