import{_ as e,o as d,c as o,d as s,F as r,e as a}from"./index-7469e26b.js";const{VITE_APP_API:c,VITE_APP_APIPATH:n}={VITE_APP_API:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_APIPATH:"susu3131",BASE_URL:"/Vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},l={data(){return{product:[]}},methods:{getProducts(){axios.get(`${c}/api/${n}/products`).then(t=>console.log(t.data))}},mounted(){this.getProducts()}},i=a('<table class="form-control"><tr><td>圖片</td><td>商品名稱</td><td>價格</td><td></td></tr><tr><td>USA</td><td>Washington D.C.</td><td>309 million</td><td>English</td></tr><tr><td>Sweden</td><td>Stockholm</td><td>9 million</td><td>Swedish</td></tr></table>',1);function _(t,u,P,p,h,A){return d(),o(r,null,[s(" 產品列表 "),i],64)}const f=e(l,[["render",_]]);export{f as default};