import React from 'react';
import { Link } from 'react-router';
import { FaUser, FaArrowLeft, FaEdit } from 'react-icons/fa';
import {
  GiBiceps,
  GiBookshelf,
  GiAlliedStar,
  GiMagicSwirl,
  GiStarsStack,
  GiSwordsPower,
  GiBackpack,
  GiHeartBeats,
  GiFist,
  GiShield,
  GiHeartPlus,
  GiKnifeThrust,
  GiWalk,
  GiSteeringWheel,
  GiCrosshair,
  GiTinker,
  GiMusicalNotes,
  GiMagnifyingGlass,
  GiSpeaker,
  GiMuscleUp,
  GiRobotAntennas,
  GiCrystalBall,
  GiBrain,
  GiDna2,
  GiStarFormation,
  GiAncientSword
} from 'react-icons/gi';
import { MdOutlineBolt, MdOutlinePsychology } from 'react-icons/md';

// 技能名からアイコンを取得するヘルパー関数
const getSkillIcon = (skillName: string) => {
  const skillIcons: { [key: string]: any } = {
    'パワー': GiFist,
    'タフネス': GiShield,
    'スタミナ': GiHeartPlus,
    '技術': GiKnifeThrust,
    '運動': GiWalk,
    '操縦': GiSteeringWheel,
    '射撃': GiCrosshair,
    '知覚': GiAlliedStar,
    '製作': GiTinker,
    '芸術': GiMusicalNotes,
    '情報': GiMagnifyingGlass,
    '交渉': GiSpeaker,
  };
  return skillIcons[skillName] || GiFist;
};

// 能力値からアイコンを取得するヘルパー関数
const getAbilityIcon = (abilityKey: string) => {
  const abilityIcons: { [key: string]: any } = {
    'physical': GiBiceps,
    'reflex': MdOutlineBolt,
    'sensory': GiAlliedStar,
    'intellectual': GiBookshelf,
    'supernatural': GiMagicSwirl,
  };
  return abilityIcons[abilityKey] || GiBiceps;
};

// クラス名からアイコンを取得するヘルパー関数
const getClassIcon = (className: string) => {
  const classIcons: { [key: string]: any } = {
    'マッスル': GiMuscleUp,
    'テクノロジー': GiRobotAntennas,
    'マジカル': GiCrystalBall,
    'サイキック': GiBrain,
    'バイオ': GiDna2,
    'エスペラント': GiStarFormation,
    'アーティファクト': GiAncientSword,
    'アーツ': GiStarsStack,
  };
  return classIcons[className] || GiStarsStack;
};

// 基本的なCharacter型（一覧ページと共通部分）
export interface Character {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  passwordHash?: string;
}

// data-model.mdに基づく詳細情報
export interface CharacterData {
  selectedClasses: {
    primary: string;
    secondary: string;
  };
  abilities: {
    physical: number;
    reflex: number;
    sensory: number;
    intellectual: number;
    supernatural: number;
  };
  skills: {
    [skillName: string]: {
      baseValue: number;
      allocatedPoints: number;
      totalValue: number;
    };
  };
  heroSkills: {
    [skillName: string]: {
      name: string;
      level: number;
      maxLevel: number;
      timing: string;
      skill: string;
      target: string;
      range: string;
      cost: number;
      effect: string;
    };
  };
  specialAttacks: {
    [attackName: string]: {
      name: string;
      level: number;
      maxLevel: number;
      timing: string;
      skill: string;
      target: string;
      range: string;
      cost: number;
      effect: string;
    };
  };
  items: {
    [itemName: string]: {
      type: string;
      skill?: string;
      modifier?: string;
      attackPower?: string;
      guardValue?: string;
      range?: string;
      dodge?: string;
      actionValue?: string;
      protection?: string;
      price: number;
      effect?: string;
      quantity?: number;
    };
  };
  status: {
    hp: number;
    sp: number;
    actionValue: number;
  };
  sessions: {
    id: string;
    sessionName: string;
    gmName: string;
    sessionDate: string;
    currentHp: number;
    currentSp: number;
    currentFc?: number;
    experiencePoints: number;
    memo?: string;
    createdAt: string;
  }[];
  metadata: {
    version: string;
  };
}

// 詳細情報を含む拡張型
export interface CharacterDetail extends Character {
  characterData: CharacterData;
}

interface CharacterDetailPageProps {
  character?: CharacterDetail;
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export const CharacterDetailPage: React.FC<CharacterDetailPageProps> = ({
  character,
  loading = false,
  error = null,
  onRetry,
}) => {
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-2 text-gray-600">読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
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
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            再読み込み
          </button>
        )}
      </div>
    );
  }

  if (!character) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg
            className="w-24 h-24 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          キャラクターが見つかりません
        </h3>
        <p className="text-gray-500 mb-6">
          指定されたキャラクターは存在しないか、削除された可能性があります
        </p>
        <Link
          to="/character-list"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          キャラクター一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <FaUser className="text-blue-600" />
              {character.name}
            </h1>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <span>
                作成:{' '}
                {new Date(character.createdAt).toLocaleDateString('ja-JP')}
              </span>
              <span className="mx-2">•</span>
              <span>
                更新:{' '}
                {new Date(character.updatedAt).toLocaleDateString('ja-JP')}
              </span>
              <span className="mx-2">•</span>
              <span>
                バージョン: {character.characterData.metadata.version}
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link
              to="/character-list"
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
            >
              <FaArrowLeft />
              一覧に戻る
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2">
              <FaEdit />
              編集
            </button>
          </div>
        </div>

        {/* 基本情報 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <GiStarsStack className="text-blue-600" size={16} />
              選択クラス
            </h3>
            <div className="flex space-x-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                {React.createElement(getClassIcon(character.characterData.selectedClasses.primary), {
                  size: 16,
                  className: "text-blue-600"
                })}
                {character.characterData.selectedClasses.primary}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                {React.createElement(getClassIcon(character.characterData.selectedClasses.secondary), {
                  size: 16,
                  className: "text-blue-600"
                })}
                {character.characterData.selectedClasses.secondary}
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <GiHeartBeats className="text-red-600" size={16} />
              ステータス
            </h3>
            <div className="text-sm space-x-4">
              <span>HP: {character.characterData.status.hp}</span>
              <span>SP: {character.characterData.status.sp}</span>
              <span>行動値: {character.characterData.status.actionValue}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 能力値 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <GiHeartBeats className="text-red-600" />
          能力値
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center p-3 bg-red-50 rounded">
            <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mb-1">
              <GiBiceps className="text-red-600" />
              肉体
            </div>
            <div className="text-2xl font-bold text-red-600">
              {character.characterData.abilities.physical}
            </div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded">
            <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mb-1">
              <MdOutlineBolt className="text-blue-600" />
              反射
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {character.characterData.abilities.reflex}
            </div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded">
            <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mb-1">
              <GiAlliedStar className="text-green-600" />
              感覚
            </div>
            <div className="text-2xl font-bold text-green-600">
              {character.characterData.abilities.sensory}
            </div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded">
            <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mb-1">
              <GiBookshelf className="text-purple-600" />
              知力
            </div>
            <div className="text-2xl font-bold text-purple-600">
              {character.characterData.abilities.intellectual}
            </div>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded">
            <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mb-1">
              <GiMagicSwirl className="text-yellow-600" />
              超常
            </div>
            <div className="text-2xl font-bold text-yellow-600">
              {character.characterData.abilities.supernatural}
            </div>
          </div>
        </div>
      </div>

      {/* 技能 */}
      {Object.keys(character.characterData.skills).length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <GiFist className="text-blue-600" />
            技能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(character.characterData.skills).map(
              ([skillName, skill]) => {
                const SkillIcon = getSkillIcon(skillName);
                return (
                  <div
                    key={skillName}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded"
                  >
                    <span className="font-medium flex items-center gap-2">
                      <SkillIcon className="text-blue-600" size={16} />
                      {skillName}
                    </span>
                    <div className="text-right text-sm">
                      <div className="text-lg font-bold text-blue-600">
                        {skill.totalValue}%
                      </div>
                      <div className="text-xs text-gray-500">
                        基本{skill.baseValue} + 割振{skill.allocatedPoints}
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      )}

      {/* ヒーロースキル */}
      {Object.keys(character.characterData.heroSkills).length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <GiStarsStack className="text-purple-600" />
            ヒーロースキル
          </h2>
          <div className="space-y-3">
            {Object.entries(character.characterData.heroSkills).map(
              ([key, skill]) => (
                <div key={key} className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                      Lv.{skill.level}/{skill.maxLevel}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600 mb-2">
                    <div>
                      <span className="font-medium">タイミング:</span>{' '}
                      {skill.timing}
                    </div>
                    <div>
                      <span className="font-medium">技能:</span> {skill.skill}
                    </div>
                    <div>
                      <span className="font-medium">対象:</span> {skill.target}
                    </div>
                    <div>
                      <span className="font-medium">射程:</span> {skill.range}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">コスト:</span> {skill.cost}
                  </div>
                  <p className="text-sm text-gray-700">{skill.effect}</p>
                </div>
              ),
            )}
          </div>
        </div>
      )}

      {/* 必殺技 */}
      {Object.keys(character.characterData.specialAttacks).length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <GiSwordsPower className="text-red-600" />
            必殺技
          </h2>
          <div className="space-y-3">
            {Object.entries(character.characterData.specialAttacks).map(
              ([key, attack]) => (
                <div key={key} className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{attack.name}</h3>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                      Lv.{attack.level}/{attack.maxLevel}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600 mb-2">
                    <div>
                      <span className="font-medium">タイミング:</span>{' '}
                      {attack.timing}
                    </div>
                    <div>
                      <span className="font-medium">技能:</span> {attack.skill}
                    </div>
                    <div>
                      <span className="font-medium">対象:</span> {attack.target}
                    </div>
                    <div>
                      <span className="font-medium">射程:</span> {attack.range}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">コスト:</span> {attack.cost}
                  </div>
                  <p className="text-sm text-gray-700">{attack.effect}</p>
                </div>
              ),
            )}
          </div>
        </div>
      )}

      {/* アイテム */}
      {Object.keys(character.characterData.items).length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <GiBackpack className="text-green-600" />
            アイテム
          </h2>
          <div className="space-y-3">
            {Object.entries(character.characterData.items).map(
              ([key, item]) => (
                <div key={key} className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{key}</h3>
                      <span className="text-sm text-gray-500">{item.type}</span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      {item.price}点
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600 mb-2">
                    {item.skill && (
                      <div>
                        <span className="font-medium">技能:</span> {item.skill}
                      </div>
                    )}
                    {item.modifier && (
                      <div>
                        <span className="font-medium">修正:</span>{' '}
                        {item.modifier}
                      </div>
                    )}
                    {item.attackPower && (
                      <div>
                        <span className="font-medium">攻撃力:</span>{' '}
                        {item.attackPower}
                      </div>
                    )}
                    {item.guardValue && (
                      <div>
                        <span className="font-medium">ガード値:</span>{' '}
                        {item.guardValue}
                      </div>
                    )}
                    {item.range && (
                      <div>
                        <span className="font-medium">射程:</span> {item.range}
                      </div>
                    )}
                    {item.protection && (
                      <div>
                        <span className="font-medium">防護点:</span>{' '}
                        {item.protection}
                      </div>
                    )}
                  </div>
                  {item.quantity && (
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">数量:</span> {item.quantity}
                    </div>
                  )}
                  {item.effect && (
                    <p className="text-sm text-gray-700">{item.effect}</p>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      )}

      {/* セッション履歴 */}
      {character.characterData.sessions.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <GiBookshelf className="text-indigo-600" />
            セッション履歴
          </h2>
          <div className="space-y-4">
            {character.characterData.sessions.map((session) => (
              <div
                key={session.id}
                className="border border-gray-200 rounded p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">
                    {session.sessionName}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {new Date(session.sessionDate).toLocaleDateString('ja-JP')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  GM: {session.gmName}
                </p>
                <div className="flex space-x-4 mb-2">
                  <span className="text-sm">HP: {session.currentHp}</span>
                  <span className="text-sm">SP: {session.currentSp}</span>
                  {session.currentFc !== undefined && (
                    <span className="text-sm">FC: {session.currentFc}</span>
                  )}
                </div>
                <p className="text-sm text-blue-600 mb-2">
                  獲得経験点: {session.experiencePoints}
                </p>
                {session.memo && (
                  <p className="text-sm text-gray-700">{session.memo}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
