import './Navigation.css'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: 'home' | 'about' | 'game') => void
}

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>互動式網頁程式設計期中專案-陳宏傑</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => onNavigate('home')}
            >
              網站介紹
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => onNavigate('about')}
            >
              個人簡介
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'game' ? 'active' : ''}`}
              onClick={() => onNavigate('game')}
            >
              小遊戲
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
