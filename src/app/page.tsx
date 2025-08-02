'use client';

import React, { useState } from 'react';

const App = () => {
  // じゃんけんの選択肢
  const choices = ['グー', 'チョキ', 'パー'];
  // プレイヤーの選択
  const [playerChoice, setPlayerChoice] = useState(null);
  // CPUの選択
  const [cpuChoice, setCpuChoice] = useState(null);
  // 結果
  const [result, setResult] = useState('');

  // プレイヤーが選択したとき
  const handlePlayerChoice = (choice) => {
    // CPUの選択肢をランダムに決定
    const randomCpuChoice = choices[(Math.floor(Math.random() * choices.length))];
    
    // 状態を更新
    setPlayerChoice(choice);
    setCpuChoice(randomCpuChoice);
    
    // 勝敗を判定
    determineWinner(choice, randomCpuChoice);
  };

  // 勝敗の判定ロジック
  const determineWinner = (player, cpu) => {
    if (player === cpu) {
      setResult('引き分け！');
    } else if (
      (player === 'グー' && cpu === 'チョキ') ||
      (player === 'チョキ' && cpu === 'パー') ||
      (player === 'パー' && cpu === 'グー')
    ) {
      setResult('あなたの勝ち！');
    } else {
      setResult('あなたの負け！');
    }
  };
  
  // リセット機能
  const handleReset = () => {
    setPlayerChoice(null);
    setCpuChoice(null);
    setResult('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          じゃんけん
        </h1>

        <div className="mb-4">
          <button
            onClick={() => handlePlayerChoice('グー')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            グー
          </button>
          <button
            onClick={() => handlePlayerChoice('チョキ')}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            チョキ
          </button>
          <button
            onClick={() => handlePlayerChoice('パー')}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            パー
          </button>
        </div>

        {/* プレイヤーが選択した後に結果を表示 */}
        {playerChoice && cpuChoice && (
          <div className="mt-6">
            <p className="text-lg text-gray-800">あなたの手: {playerChoice}</p>
            <p className="text-lg text-gray-800">CPUの手: {cpuChoice}</p>
            <p className="text-xl font-semibold mt-2 text-gray-800">{result}</p>
            <button
              onClick={handleReset}
              className="mt-4 bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
            >
              もう一度
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
