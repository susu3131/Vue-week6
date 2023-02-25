# vue-week6

### 建立環境
- 安裝vite
- 建立base 專案路徑
- 設定deploy.sh 
- 建立.env 環境變數
- 安裝套件 (npm安裝 > import引入)
  axios : ```npm i axios```
  bootstrap ```:npm i bootstrap``` 、```npm i @popperjs/core``` (必須相關免匯入)、```npm add -D sass```(sass/scss安裝)
  vueloading : ``` npm install vue-loading-overlay@^6.0 ```
  VeeValiadation: ```npm i vee-validate --save```

  bootstrap
  1. 複製裡面的variables可自訂樣式
  2. 建立all.scss，在main.js import 引入
  3. all.scss 匯入bs(以下順序)
  @import "bootstrap/scss/functions";
  @import "./variables"; //自訂樣式
  @import "bootstrap/scss/bootstrap";

### 建立路由 Router
- 建立頁面元件(views)
- 撰寫router (先想好結構規劃)
- 更改RouterLink

![](https://i.imgur.com/3qs5wWD.png)


### 開發功能 (前台)

## 產品列表
- 建立產品表單
- 取得產品列表
- 渲染畫面

## 購物車
- 取得購物車資訊
- 渲染購物車資訊
- 加入購物車
- 刪除購物車
- 建立表單、驗證表單
- 送出訂單

### 開發功能 (後台)
- 登入跳轉畫面
- 登入驗證
- 顯示產品列表