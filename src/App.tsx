import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Tetris from './pages/Tetris'

type PageType = 'home' | 'about' | 'game'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'game':
        return <Tetris />
      default:
        return <Home />
    }
  }

  return (
    <div className="app-container">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="content">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
