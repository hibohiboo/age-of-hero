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
          <h2 className="text-2xl font-semibold mb-4">2. 能力値と技能</h2>
          <p className="mb-6">
            能力値はそのヒーローがバイタル・メンタルなどの面でどれほどの強さがあるかを表している。技能はヒーローが具体的にどのようなことができるのかを表すパラメーターとなるのだ。
          </p>

          <p className="mb-6">各能力値と技能の詳細は以下の通り。</p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">【肉体】</h3>
              <p className="mb-4">肉体的な力やその身体が持つ耐久力を表す能力値だ。</p>
              <div className="ml-4 space-y-3">
                <div>
                  <h4 className="font-semibold">〈パワー〉</h4>
                  <p>主に素手で攻撃や武器による力任せな攻撃に用いる技能。物をどかすなど災害救助にも役立つ。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈タフネス〉</h4>
                  <p>身体がどれだけダメージに耐えられるかを表す技能。防御などに用い、誰かを守るために必要だ。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈スタミナ〉</h4>
                  <p>身体の持久力や回復力を表す技能。長丁場や連続する任務で重要となる。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">【反射】</h3>
              <p className="mb-4">手先の器用さや反射神経の良さを表す能力値だ。</p>
              <div className="ml-4 space-y-3">
                <div>
                  <h4 className="font-semibold">〈技術〉</h4>
                  <p>主に武器や道具を上手く扱うために用いる技能。鍛錬次第で様々なことに役立つ。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈運動〉</h4>
                  <p>反射的な回避や素早い運動に用いる技能。ヴィランから人質を素早く取り戻すのにも役に立つ。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈操縦〉</h4>
                  <p>車や船、飛行機などの乗り物を乗りこなすための技能。車などでいち早く現場に駆けつけることもできる。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">【感覚】</h3>
              <p className="mb-4">天性のセンスや感受性の高さなどを表す能力値だ。</p>
              <div className="ml-4 space-y-3">
                <div>
                  <h4 className="font-semibold">〈射撃〉</h4>
                  <p>銃や弓を用いて射撃を行う技能。長距離狙撃からガンカタまで。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈知覚〉</h4>
                  <p>様々なことに気づきやすくなる技能。ヴィランの奇襲から周囲を守ることもできる。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈製作〉</h4>
                  <p>武器や道具、乗り物を作るのに用いる技能。自分の持物にギミックを仕込み事前の準備をする。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈芸術〉</h4>
                  <p>センスを用いて歌や絵画などを作る技能。センス次第で人々の荒れた心を癒すことも可能だ。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">【知力】</h3>
              <p className="mb-4">知識や頭脳をどれだけ上手く運用できるかを表す能力値だ。</p>
              <div className="ml-4 space-y-3">
                <div>
                  <h4 className="font-semibold">〈情報〉</h4>
                  <p>自分の力で情報を集める技能。逆に情報戦を仕掛けヴィランをかく乱することもできる。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈交渉〉</h4>
                  <p>他人と交渉するために用いる技能。物品や情報を調達する際にも役立つ。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈心理〉</h4>
                  <p>相手の心情を読み取るのに用いる技能。相手の行動を先読みすることもできる。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈医療〉</h4>
                  <p>ケガや病に対処するのに用いる技能。傷病者の命を救うのに必要だ。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">【超常】</h3>
              <p className="mb-4">通常では考えられないような超常的な力を表す能力値だ。</p>
              <div className="ml-4 space-y-3">
                <div>
                  <h4 className="font-semibold">〈魔術〉</h4>
                  <p>魔術を用いる技能。魔術の種類は多岐にわたる。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈超能力〉</h4>
                  <p>ESPやサイコキネシスなどの超能力を用いる技能。</p>
                </div>
                <div>
                  <h4 className="font-semibold">〈第六感〉</h4>
                  <p>五感以外の感覚でものをとらえる技能。時に周囲の助けとなる。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. 共通取得技能</h2>
          <p className="mb-4">能力値に左右されない技能を指す。以下の三つが存在する。</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">〈社会〉</h4>
              <p>どのような社会や組織に所属しているかを表す技能。代表的なものはヒーロー協会、企業、警察、裏社会などだ。取得時には〈社会：ヒーロー協会〉といった形で記載し、それぞれ別技能として扱う。</p>
            </div>
            <div>
              <h4 className="font-semibold">〈コネ〉</h4>
              <p>どのような人物とコネクションを持っているかを表す技能。</p>
            </div>
            <div>
              <h4 className="font-semibold">〈意志〉</h4>
              <p>心の強さを表す技能。ヒーローに必須の力だ。</p>
            </div>
          </div>
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