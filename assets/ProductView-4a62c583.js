import{_ as d,r as u,o as s,c,a as t,b as _,w as l,t as e,d as p}from"./index-282ef872.js";const{VITE_APP_API:a,VITE_APP_APIPATH:h}={VITE_APP_API:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_APIPATH:"susu3131",BASE_URL:"/Vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},P={data(){return{product:{}}},methods:{getProduct(){const{id:r}=this.$route.params;this.$http.get(`${a}/api/${h}/product/${r}`).then(n=>this.product=n.data.product)}},mounted(){this.getProduct()}},m={class:"container"},f={class:"d-flex fa-bold"},A=t("main",null,"單一產品頁面",-1),V=t("hr",{class:"border border-1"},null,-1),g={class:"d-flex"},v=["src"],x={key:0},E={key:1},I=t("button",{class:"btn btn-danger"},"加到購物車",-1);function b(r,n,k,T,o,w){const i=u("router-link");return s(),c("div",m,[t("div",f,[A,_(i,{to:"/products",class:"ms-3"},{default:l(()=>[p("回產品頁面")]),_:1}),V]),t("h2",null,e(o.product.title),1),t("div",g,[t("img",{src:o.product.imageUrl,alt:"",class:"w-50"},null,8,v),t("div",null,[t("p",null,"敘述:"+e(o.product.description),1),t("p",null,"商品說明:"+e(o.product.content),1),o.product.price===o.product.origin_price?(s(),c("div",x," 售價: "+e(o.product.origin_price)+"元 ",1)):(s(),c("p",E,"售價: "+e(o.product.price)+"元 / "+e(o.product.unit),1)),I])])])}const D=d(P,[["render",b]]);export{D as default};
