export function Page() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">キャラクター作成</h1>

      <div className="space-y-8">
        <section>
          <p className="mb-6">
            「Age of Hero」の世界で活躍するヒーローキャラクターを作成します。
            キャラクターは数値的なデータ、ヒーロースキル、アイテム、個人的背景によって定義されます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">作成手順</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>クラスを2つ選択</li>
            <li>基本能力値を計算</li>
            <li>追加の技能ポイント150%を分配</li>
            <li>ヒーロースキル7レベルを習得</li>
            <li>必殺技1レベルを習得</li>
            <li>アイテム20点分を購入</li>
            <li>HP・SPを算出</li>
            <li>行動値を決定</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. クラス選択</h2>
          <p className="mb-4">8種類のクラスから2つを選択できます。</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-100 rounded">マッスル</div>
            <div className="p-4 bg-gray-100 rounded">テクノロジー</div>
            <div className="p-4 bg-gray-100 rounded">マジカル</div>
            <div className="p-4 bg-gray-100 rounded">サイキック</div>
            <div className="p-4 bg-gray-100 rounded">バイオ</div>
            <div className="p-4 bg-gray-100 rounded">エスペラント</div>
            <div className="p-4 bg-gray-100 rounded">アーティファクト</div>
            <div className="p-4 bg-gray-100 rounded">アーツ</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. 能力値（5つのカテゴリー）</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">肉体（Physical）</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>パワー（Power）</li>
                <li>タフネス（Toughness）</li>
                <li>スタミナ（Stamina）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">反射（Reflexes）</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>テクニック（Technique）</li>
                <li>ムーブメント（Movement）</li>
                <li>パイロット（Piloting）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">感覚（Senses）</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>射撃（Shooting）</li>
                <li>知覚（Perception）</li>
                <li>工芸（Crafting）</li>
                <li>芸術（Arts）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">知識（Intelligence）</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>情報（Information）</li>
                <li>交渉（Negotiation）</li>
                <li>心理（Psychology）</li>
                <li>医療（Medical）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">超常（Supernatural）</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>魔法（Magic）</li>
                <li>サイキック（Psychic Powers）</li>
                <li>第六感（Sixth Sense）</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. 共通スキル</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>社会（Social）</li>
            <li>人脈（Connections）</li>
            <li>意志力（Willpower）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. 技能ポイント分配</h2>
          <p>追加で150%分の技能ポイントを上記の能力値に分配します。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. ヒーロースキル</h2>
          <p>合計7レベルまでのヒーロースキルを習得できます。選択したクラスによって習得可能なスキルが決まります。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. 必殺技</h2>
          <p>1レベルの必殺技を習得します。これはキャラクターの特別な能力を表現します。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. アイテム</h2>
          <p>20点分のアイテムを購入できます。装備や道具を選択してキャラクターを強化しましょう。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. 最終計算</h2>
          <div className="space-y-2">
            <p><strong>HP・SP算出:</strong> キャラクターの生命力とスキルポイントを計算します。</p>
            <p><strong>行動値決定:</strong> 戦闘時の行動順序を決める値を算出します。</p>
          </div>
        </section>
      </div>
    </div>
  );
}