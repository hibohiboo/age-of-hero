import { CharacterCreationForm } from '@age-of-hero/ui';
import type { CharacterFormData } from '@age-of-hero/ui';

export function Page() {
  const handleSubmit = async (data: CharacterFormData) => {
    try {
      console.log('キャラクター作成データ:', data);

      // TODO: バックエンドAPIにデータを送信
      const response = await fetch('/api/characters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('キャラクター作成に失敗しました');
      }

      const result = await response.json();

      // TODO: 成功時の処理（リダイレクトなど）
      console.log('キャラクター作成成功:', result);
      alert(`キャラクターが作成されました！ID: ${result.id}`);
    } catch (error) {
      console.error('キャラクター作成エラー:', error);
      alert('キャラクター作成に失敗しました。');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Age of Hero キャラクター作成
      </h1>
      <CharacterCreationForm onSubmit={handleSubmit} />
    </div>
  );
}
