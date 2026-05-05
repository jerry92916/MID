import { useState, useEffect, useCallback, useRef } from 'react'
import './Tetris.css'

type Tetromino = number[][]

const TETROMINOES: Tetromino[] = [
  // I
  [
    [1, 1, 1, 1],
  ],
  // O
  [
    [1, 1],
    [1, 1],
  ],
  // T
  [
    [0, 1, 0],
    [1, 1, 1],
  ],
  // S
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  // Z
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  // J
  [
    [1, 0, 0],
    [1, 1, 1],
  ],
  // L
  [
    [0, 0, 1],
    [1, 1, 1],
  ],
]

const GRID_WIDTH = 10
const GRID_HEIGHT = 20
const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE']

interface Piece {
  tetromino: Tetromino
  x: number
  y: number
  color: string
}

function Tetris() {
  const [grid, setGrid] = useState<(string | null)[][]>(
    Array(GRID_HEIGHT)
      .fill(null)
      .map(() => Array(GRID_WIDTH).fill(null))
  )
  const [currentPiece, setCurrentPiece] = useState<Piece | null>(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const gameLoopRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const getRandomPiece = (): Piece => {
    const tetromino = TETROMINOES[Math.floor(Math.random() * TETROMINOES.length)]
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    return {
      tetromino,
      x: Math.floor((GRID_WIDTH - tetromino[0].length) / 2),
      y: 0,
      color,
    }
  }

  const canMove = useCallback(
    (piece: Piece, offsetX: number, offsetY: number): boolean => {
      const newX = piece.x + offsetX
      const newY = piece.y + offsetY

      for (let row = 0; row < piece.tetromino.length; row++) {
        for (let col = 0; col < piece.tetromino[row].length; col++) {
          if (piece.tetromino[row][col]) {
            const newCol = newX + col
            const newRow = newY + row

            if (newCol < 0 || newCol >= GRID_WIDTH) return false
            if (newRow >= GRID_HEIGHT) return false
            if (newRow >= 0 && grid[newRow][newCol]) return false
          }
        }
      }
      return true
    },
    [grid]
  )

  const rotatePiece = useCallback(
    (piece: Piece): number[][] => {
      const rotated = piece.tetromino[0].map((_, colIndex) =>
        piece.tetromino.map((row) => row[colIndex]).reverse()
      )
      return rotated
    },
    []
  )

  const canRotate = useCallback(
    (piece: Piece, rotated: number[][]): boolean => {
      const testPiece = { ...piece, tetromino: rotated }
      return canMove(testPiece, 0, 0)
    },
    [canMove]
  )

  const placePiece = useCallback(
    (piece: Piece): [(string | null)[][], number] => {
      const newGrid = grid.map((row) => [...row])
      let linesCleared = 0

      for (let row = 0; row < piece.tetromino.length; row++) {
        for (let col = 0; col < piece.tetromino[row].length; col++) {
          if (piece.tetromino[row][col]) {
            const gridRow = piece.y + row
            const gridCol = piece.x + col

            if (gridRow >= 0 && gridRow < GRID_HEIGHT) {
              newGrid[gridRow][gridCol] = piece.color
            }
          }
        }
      }

      // Clear filled rows
      const clearedGrid = newGrid.filter((row) => !row.every((cell) => cell !== null))
      linesCleared = newGrid.length - clearedGrid.length

      while (clearedGrid.length < GRID_HEIGHT) {
        clearedGrid.unshift(Array(GRID_WIDTH).fill(null))
      }

      return [clearedGrid, linesCleared]
    },
    [grid]
  )

  const moveDown = useCallback(() => {
    if (!currentPiece || gameOver || isPaused) return

    if (canMove(currentPiece, 0, 1)) {
      setCurrentPiece({ ...currentPiece, y: currentPiece.y + 1 })
    } else {
      const [newGrid, linesCleared] = placePiece(currentPiece)
      setGrid(newGrid)
      setScore((prev) => prev + linesCleared * 100)

      const newPiece = getRandomPiece()
      if (!canMove(newPiece, 0, 0)) {
        setGameOver(true)
      } else {
        setCurrentPiece(newPiece)
      }
    }
  }, [currentPiece, canMove, placePiece, gameOver, isPaused])

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (!currentPiece || gameOver || isPaused) return

      switch (e.key) {
        case 'ArrowLeft':
          if (canMove(currentPiece, -1, 0)) {
            setCurrentPiece({ ...currentPiece, x: currentPiece.x - 1 })
          }
          break
        case 'ArrowRight':
          if (canMove(currentPiece, 1, 0)) {
            setCurrentPiece({ ...currentPiece, x: currentPiece.x + 1 })
          }
          break
        case 'ArrowDown':
          moveDown()
          break
        case ' ':
          const rotated = rotatePiece(currentPiece)
          if (canRotate(currentPiece, rotated)) {
            setCurrentPiece({ ...currentPiece, tetromino: rotated })
          }
          e.preventDefault()
          break
      }
    },
    [currentPiece, canMove, moveDown, rotatePiece, canRotate, gameOver, isPaused]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  useEffect(() => {
    if (!currentPiece && !gameOver) {
      setCurrentPiece(getRandomPiece())
    }
  }, [])

  useEffect(() => {
    if (gameOver || isPaused) {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current)
      return
    }

    gameLoopRef.current = setInterval(moveDown, 500)
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current)
    }
  }, [moveDown, gameOver, isPaused])

  const displayGrid: (string | null)[][] = grid.map((row) => [...row])

  if (currentPiece) {
    for (let row = 0; row < currentPiece.tetromino.length; row++) {
      for (let col = 0; col < currentPiece.tetromino[row].length; col++) {
        if (currentPiece.tetromino[row][col]) {
          const gridRow = currentPiece.y + row
          const gridCol = currentPiece.x + col

          if (gridRow >= 0 && gridRow < GRID_HEIGHT && gridCol >= 0 && gridCol < GRID_WIDTH) {
            displayGrid[gridRow][gridCol] = currentPiece.color
          }
        }
      }
    }
  }

  const handleRestart = () => {
    setGrid(
      Array(GRID_HEIGHT)
        .fill(null)
        .map(() => Array(GRID_WIDTH).fill(null))
    )
    setScore(0)
    setGameOver(false)
    setIsPaused(false)
    setCurrentPiece(getRandomPiece())
  }

  const handlePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <div className="tetris-page">
      <div className="tetris-container">
        <h1>俄羅斯方塊</h1>

        <div className="tetris-content">
          <div className="tetris-game">
            <div className="tetris-grid">
              {displayGrid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                  {row.map((cell, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className="grid-cell"
                      style={{ backgroundColor: cell || '#fff' }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="tetris-sidebar">
            <div className="score-board">
              <h3>遊戲信息</h3>
              <div className="score-item">
                <label>得分</label>
                <span className="score-value">{score}</span>
              </div>
              <div className="game-status">
                {gameOver && <div className="status-text game-over">遊戲結束！</div>}
                {isPaused && !gameOver && <div className="status-text paused">暫停中</div>}
              </div>
            </div>

            <div className="controls">
              <h3>操作</h3>
              <div className="button-group">
                <button
                  className="btn btn-pause"
                  onClick={handlePause}
                  disabled={gameOver}
                >
                  {isPaused ? '繼續' : '暫停'}
                </button>
                <button className="btn btn-restart" onClick={handleRestart}>
                  重新開始
                </button>
              </div>
            </div>

            <div className="instructions">
              <h3>操作說明</h3>
              <ul>
                <li>
                  <kbd>←</kbd> <span>左移</span>
                </li>
                <li>
                  <kbd>→</kbd> <span>右移</span>
                </li>
                <li>
                  <kbd>↓</kbd> <span>加速下降</span>
                </li>
                <li>
                  <kbd>空格</kbd> <span>旋轉</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tetris
