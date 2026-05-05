# 互動式網頁程式設計期中專案-陳宏傑個人網站

一個使用 React + TypeScript 開發的個人作品集網站。

## 功能特色

### 🌐 網站介紹
- 網站整體介紹和功能說明
- 響應式設計
- 現代化的用戶界面

### 👤 個人簡介
- 個人基本信息（姓名、生日、年齡、星座）
- 興趣愛好展示（打羽球）
- 技能展示（React、TypeScript、Web Design）
- 個人特點和特徵
- 預留個人照片位置

### 🎮 俄羅斯方塊遊戲
完整的俄羅斯方塊遊戲實現，包括：
- 經典的俄羅斯方塊遊戲玩法
- 實時得分計算
- 行消除功能
- 暫停/繼續功能
- 遊戲重置
- 流暢的遊戲體驗

#### 遊戲操作：
- **← →** - 方塊左右移動
- **↓** - 加速下降
- **空格** - 旋轉方塊
- **暫停/繼續** - 按鈕控制

## 技術棧

- **React 18.2+** - UI 框架
- **TypeScript 5.2+** - 類型安全的 JavaScript
- **Vite 5.0+** - 快速構建工具
- **CSS 3** - 現代化樣式設計

## 項目結構

```
src/
├── App.tsx                 # 主應用組件
├── App.css               # 主應用樣式
├── index.css             # 全局樣式
├── main.tsx              # 入口文件
├── components/
│   ├── Navigation.tsx    # 導航欄組件
│   └── Navigation.css    # 導航欄樣式
└── pages/
    ├── Home.tsx          # 網站介紹頁面
    ├── Home.css          # 網站介紹樣式
    ├── About.tsx         # 個人簡介頁面
    ├── About.css         # 個人簡介樣式
    ├── Tetris.tsx        # 俄羅斯方塊遊戲
    └── Tetris.css        # 俄羅斯方塊樣式
```

## 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

訪問 `http://localhost:5173` 查看網站。

### 構建

```bash
npm run build
```

### 預覽構建結果

```bash
npm run preview
```

## 特點

✨ **響應式設計** - 完全支持各種設備屏幕尺寸
🎨 **現代化 UI** - 使用漸變色和圓角設計
⚡ **高性能** - 優化的 React 組件和事件處理
🎯 **易用導航** - 清晰直觀的頁面導航
🎮 **完整遊戲** - 功能完整的俄羅斯方塊遊戲

## 自定義

### 添加個人照片
在 `src/pages/About.tsx` 中，找到 `.image-placeholder` 部分，替換為你的照片路徑：

```jsx
<img src="your-photo.jpg" alt="個人照片" className="profile-photo" />
```

## 瀏覽器支持

支持所有現代瀏覽器：
- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 授權

This project is personal and created for portfolio purposes.

---

製作者：陳宏傑
建立時間：2026年5月1日
