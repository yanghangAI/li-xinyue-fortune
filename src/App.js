import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const analysis = [
    {
      char: '李',
      meaning: '根基稳固。',
      detail: '五行属木，象征生命力与传承。预示家族荫蔽，根深叶茂，能在波澜中守住初心。'
    },
    {
      char: '昕',
      meaning: '破晓之光。',
      detail: '五行属火，日出之象。象征希望与光明，寓意前途灿烂，总能抢占先机，引领风气之先。'
    },
    {
      char: '玥',
      meaning: '神珠显赫。',
      detail: '五行属金，神话中的神珠。代表高贵、圆满与内敛的锋芒。在人群中如明珠般璀璨，受人尊崇。'
    }
  ];

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="app-container">
      {showContent && (
        <div className="card">
          <h1 className="title">星语珠辉</h1>
          <div className="analysis-section">
            {analysis.map((item, index) => (
              <div key={index} className="char-box">
                <div className="character">{item.char}</div>
                <div className="char-desc">
                  <strong>{item.meaning}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="summary">
            「木火通明，明珠出海」：昕玥之名，如晨曦照耀神珠，
            预示一生福泽深厚，既有破晓之锐气，亦有宝珠之华贵，
            前程锦绣，万事圆满。
          </div>

          <button className="btn" onClick={handleRefresh}>
            再次探索运势
          </button>
        </div>
      )}
      <footer style={{ marginTop: '20px', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
        © 2026 命理精研 | 专为 李昕玥 设计
      </footer>
    </div>
  );
}

export default App;
