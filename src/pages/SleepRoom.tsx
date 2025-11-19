  import { useState } from 'react';
  export const SleepRoom = () => {
    const buttons = [
      '비소리',
      '백색소음',
      '모닥불',
      '카페',
      '바다',
      '숲'
    ];
    const [active, setActive] = useState(0); // 선택된 버튼 index

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#281e41] to-[#371c47]">
        <div className="flex flex-col items-center">
        
          <h1 className="text-4xl font-bold text-white mb-2">꿈나라 수면방</h1>
          <p className="text-gray-300 mb-8">편안한 잠자리를 위한 수면 소음과 동화</p>
          {/* 버튼 영역 */}
          <div className="flex gap-4 flex-wrap">
            {buttons.map((text, idx) => {
              // 각 버튼별 클래스 if문 처리
              let btnClass = 'px-6 py-2 rounded-full shadow-lg hover:brightness-110';
              if (active === idx) {
                btnClass += ' bg-gradient-to-r from-pink-400 to-purple-500 text-white';
              } else {
                btnClass += ' bg-gray-700 text-gray-200';
              }
              return (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={btnClass}
                >
                  {text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
