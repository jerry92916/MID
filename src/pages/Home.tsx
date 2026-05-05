import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">歡迎來到我的個人網站</h1>
          <p className="hero-subtitle">Welcome to My Portfolio</p>
          <div className="hero-description">
            <p>
              這是有關我期中專案做的網站，包含了網站介紹、個人自我介紹以及俄羅斯方塊小遊戲。使用者可以透過導航切換到 About 查看詳細自我介紹，或到 Tetris 體驗經典俄羅斯方塊遊戲。
            </p>
            <p>
              我的期中專案網站以清爽、響應式設計為主軸，並結合現代前端技術，讓每個頁面都在桌面和手機上都能順暢呈現。
            </p>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">👤</div>
          <h3>個人簡介</h3>
          <p>了解我的背景、生日和興趣愛好</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎮</div>
          <h3>俄羅斯方塊</h3>
          <p>挑戰自己，體驗經典的俄羅斯方塊遊戲</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💻</div>
          <h3>現代技術</h3>
          <p>使用 React + TypeScript 開發的現代網站</p>
        </div>
      </div>

      <div className="welcome-section">
        <h2>網站功能總覽</h2>
        <p className="section-description">本網站包含三大主要區域：首頁介紹、個人簡介與互動遊戲。透過簡單操作即可快速了解我的學業背景、技能，以及程式設計專案實作成果。</p>
        <ul className="feature-list">
          <li>✨ 響應式設計，支持各種設備</li>
          <li>🎨 現代化介面，清楚呈現專案內容</li>
          <li>⚡ 流暢互動，包含遊戲與頁面切換</li>
          <li>🎯 專案導向，呈現期中專案實作成果</li>
        </ul>
      </div>

      <div className="intro-section">
        <h2>關於這個網站</h2>
        <p>這個期中專案以「互動式網頁程式設計」為核心，使用 React、TypeScript 和 Vite 打造。網站分為三個主要部分：首頁介紹、About 個人資訊與 Tetris 遊戲體驗。</p>
        <div className="intro-cards">
          <div className="intro-card">
            <h3>專案目的</h3>
            <p>展示我的個人資料、學習背景與技能，並以實際互動介面呈現前端開發能力。</p>
          </div>
          <div className="intro-card">
            <h3>實作重點</h3>
            <p>採用元件化開發、TypeScript 型別檢查、CSS 響應式排版，以及簡單遊戲邏輯。</p>
          </div>
          <div className="intro-card">
            <h3>互動特點</h3>
            <p>支援頁面切換、遊戲操作與即時回應，讓使用者在手機與桌機上都有良好體驗。</p>
          </div>
        </div>
        <div className="project-highlights">
          <h3>專案亮點</h3>
          <div className="highlight-grid">
            <div className="highlight-card"><strong>React 組件化</strong><span>減少重複、增加維護性。</span></div>
            <div className="highlight-card"><strong>TypeScript 型別</strong><span>提高開發安全性與穩定度。</span></div>
            <div className="highlight-card"><strong>響應式設計</strong><span>手機與桌面模式皆適配。</span></div>
            <div className="highlight-card"><strong>互動遊戲</strong><span>Tetris 遊戲提供實際操作體驗。</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
