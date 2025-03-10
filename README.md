# 資產管理系統

## 專案概述
這是一個基於 React + TypeScript 的資產管理系統，提供會員管理、投資組合追蹤、資產配置等功能的網頁應用程式。

## 目前進度 (v1.2)
### 已完成
- ✅ 專案基礎架構設置
  - Webpack 配置
  - React + TypeScript 環境建置
  - Material-UI 整合
- ✅ 主要導航框架
  - 響應式側邊導航欄
  - 主要內容區域配置
  - 路由系統建置
- ✅ 會員管理模組
  - 會員登入系統
  - 會員資料 CRUD
  - 批次操作功能
  - 資料匯入/匯出
  - 會員等級管理
  - 狀態管理
- ✅ 使用者偏好設定
  - 投資偏好管理
  - 風險承受度設定
  - 投資期限設定

### 待開發功能
2. 公司資訊模組
   - 公司簡介
   - 最新消息
   - 投資標的介紹

3. 投資管理模組
   - 投資總覽
   - 動產投資管理
   - 不動產投資管理
   - 租金與收益管理

4. 會員服務模組
   - 入會申請
   - 投資諮詢預約
   - 專屬投資方案

5. 交易支付模組
   - 資金管理
   - 合約管理
   - 支付功能

6. 通知提醒模組
   - 投資回報提醒
   - 合約到期提醒
   - 市場動態推播

7. 安全隱私模組
   - 多層身份驗證
   - 資料加密存取
   - 隱私管理設定

## 技術堆疊
- 前端框架：React 18
- 開發語言：TypeScript
- UI 框架：Material-UI (MUI)
- 路由管理：React Router
- 建置工具：Webpack 5

## 本地開發
1. 安裝依賴：
bash
npm install

2. 啟動開發服務器：
bash
npm start

3. 訪問開發環境：
http://localhost:3000

### 預設管理員帳號
- 帳號: admin
- 密碼: admin6688

## 專案結構
src/
├── components/ # React 組件
│ ├── layout/ # 佈局組件
│ └── pages/ # 頁面組件
├── contexts/ # React Context
├── services/ # API 服務
├── types/ # TypeScript 類型定義
└── utils/ # 工具函數


## 版本歷史
### v1.2 (當前版本)
- 完成基礎會員管理功能
- 實現使用者認證系統
- 添加使用者偏好設定
- 優化使用者介面

### v1.1
- 初始化專案結構
- 設置基本開發環境

## 後續規劃
### 近期目標
1. 完善公司資訊模組
2. 開發投資管理功能
3. 整合會員服務系統

### 中期目標
1. 完善各功能模組
2. 整合支付系統
3. 實作資料視覺化
4. 優化使用者體驗

### 長期目標
1. 系統效能優化
2. 安全性強化
3. 功能擴充
4. 雲端部署

## 注意事項
- 建議在 Chrome 或 Firefox 最新版本中進行開發測試
- 開發時請遵循專案的程式碼規範
- TypeScript 嚴格模式已啟用

## 貢獻指南
1. Fork 專案
2. 創建功能分支
3. 提交變更
4. 發起合併請求

## 授權
MIT License

## 聯絡方式
待定
