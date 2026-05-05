# 陳宏傑個人網站 - 開發指南

## 項目概述

這是一個使用 React + TypeScript 構建的現代個人作品集網站，包含三個主要部分：網站介紹、個人簡介和俄羅斯方塊遊戲。

## 開發環境設置

### 必要環境
- Node.js 16.0 或以上版本
- npm 7.0 或以上版本

### 安裝依賴

在項目根目錄運行：
```bash
npm install
```

## 開發工作流程

### 啟動開發伺服器
```bash
npm run dev
```
訪問 `http://localhost:5173` 查看網站

### 構建項目
```bash
npm run build
```
輸出文件在 `dist/` 目錄中

### 預覽構建結果
```bash
npm run preview
```

## 項目結構說明

### 核心文件
- `src/App.tsx` - 主應用組件，管理頁面切換
- `src/main.tsx` - React 應用入口
- `index.html` - HTML 模板

### 組件目錄 (`src/components/`)
- `Navigation.tsx` - 導航欄組件，用於頁面切換

### 頁面目錄 (`src/pages/`)

#### Home.tsx - 網站介紹頁面
- 展示網站功能概覽
- 特色功能卡片
- 歡迎信息

#### About.tsx - 個人簡介頁面
- 基本個人信息（姓名、生日、年齡、星座）
- 興趣愛好展示（羽毛球）
- 技能展示和進度條
- 個人特點標籤
- 預留個人照片區域

#### Tetris.tsx - 俄羅斯方塊遊戲
完整實現的俄羅斯方塊遊戲，包含：
- 完整的遊戲邏輯
- 方塊旋轉和移動
- 行消除和計分系統
- 暫停/繼續功能
- 遊戲重新開始

## 樣式和主題

### 顏色方案
- 主要色：`#667eea` (紫藍色)
- 副色：`#764ba2` (深紫色)
- 強調色：`#f5576c` (紅色)

### 響應式設計
- 支持桌面設備 (> 1024px)
- 支持平板設備 (768px - 1024px)
- 支持手機設備 (< 768px)

## 自定義指南

### 修改個人信息
編輯 `src/pages/About.tsx`：
- 修改姓名、生日和其他基本信息
- 更新興趣愛好部分
- 調整技能列表和百分比

### 添加個人照片
1. 將照片放在 `public/` 目錄
2. 在 `src/pages/About.tsx` 中修改圖片路徑
3. 替換 `.image-placeholder` 部分為 `<img>` 標籤

### 修改網站標題和描述
- 編輯 `index.html` 中的 `<title>` 和 meta 標籤

## 常見問題

### Q: 如何改變配色方案？
A: 編輯 `src/index.css` 中的 CSS 變量，或直接修改各組件的 CSS 文件

### Q: 如何添加新的頁面？
A: 
1. 在 `src/pages/` 創建新的 TSX 文件
2. 在 `App.tsx` 中添加新的路由處理
3. 在 `Navigation.tsx` 中添加導航項

### Q: 遊戲怎樣調整難度？
A: 編輯 `src/pages/Tetris.tsx` 中的 `moveDown` 函數調用的時間間隔（目前為 500ms）

## 技術細節

### 使用的技術
- React 18.2 - UI 框架
- TypeScript 5.2 - 類型安全
- Vite 5.0 - 快速構建工具
- CSS 3 - 樣式和動畫

### 性能優化
- 使用 React Hooks（useState, useEffect, useCallback）
- 事件委託和防抖
- CSS 動畫而非 JavaScript 動畫

## 部署

### 構建用於生產環境
```bash
npm run build
```

### 部署選項
- **Vercel**: 零配置部署
- **Netlify**: 支持自動構建
- **GitHub Pages**: 靜態站點託管
- **傳統服務器**: 將 `dist/` 目錄內容上傳

## 代碼風格

- 使用 TypeScript 進行類型檢查
- 使用 React Hooks 進行狀態管理
- 遵循函數式組件編程模式
- CSS 模塊化設計（每個組件有獨立的 CSS）

## 許可證

個人項目 - 2024年

---

如有任何問題或改進建議，歡迎反饋！
