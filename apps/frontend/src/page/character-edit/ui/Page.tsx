import { CharacterCreationForm } from '@age-of-hero/ui';
import type { CharacterFormData } from '@age-of-hero/ui';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

interface CharacterDetail {
  id: string;
  name: string;
  selectedClasses?: [string, string];
  abilityBonus?: string;
  skillAllocations?: Record<string, number>;
  heroSkills?: any[];
  specialAttacks?: any[];
  items?: any[];
}

export function Page() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<CharacterDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) {
        setError('キャラクターIDが指定されていません');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/characters/${id}`);

        if (!response.ok) {
          throw new Error('キャラクターの取得に失敗しました');
        }

        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('キャラクター取得エラー:', error);
        setError('キャラクターの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleSubmit = async (data: CharacterFormData) => {
    if (!id) return;

    try {
      const response = await fetch(`/api/characters/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('キャラクター更新に失敗しました');
      }

      // キャラクター詳細ページに移動
      navigate(`/character/${id}`);
    } catch (error) {
      console.error('キャラクター更新エラー:', error);
      alert('キャラクター更新に失敗しました。');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-2 text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error || !character) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="text-red-600 mb-4">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/character-list')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            キャラクター一覧に戻る
          </button>
        </div>
      </div>
    );
  }

  // キャラクターデータをフォーム用のデータに変換
  const initialData: CharacterFormData = {
    name: character.name,
    selectedClasses: character.selectedClasses || ['', ''],
    abilityBonus: (character.abilityBonus as any) || 'physical',
    skillAllocations: character.skillAllocations || {},
    heroSkills: character.heroSkills || [],
    specialAttacks: character.specialAttacks || [],
    items: character.items || [],
    skillPointsLimit: 200, // デフォルト値
    heroSkillLevelLimit: 15, // デフォルト値
    itemPriceLimit: 500, // デフォルト値
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        キャラクター編集: {character.name}
      </h1>
      <CharacterCreationForm
        onSubmit={handleSubmit}
        initialData={initialData}
      />
    </div>
  );
}
