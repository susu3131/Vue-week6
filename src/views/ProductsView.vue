<template >
  <table class="form-control w-50 mx-auto text-center" >
    <p class="h2 text-center m-3">產品列表</p>
    <thead class="text-center " >
      <td  >圖片</td>
      <td class=" w-25">商品名稱</td>
      <td>價格</td>
      <td ></td>
    </thead>
    <tr v-for="product in products" :key="product.id">
      <td ><img :src="product.imageUrl" alt=""  width="200"></td>
      <td >{{product.title}}</td>
      
      <td >
        <div v-if ="product.price === product.origin_price" > 原價 {{product.origin_price}} / {{product.unit}}</div>
        <div v-else>
          <del> 原價 {{product.origin_price}} / {{product.unit}}</del>
          <div class="text-danger" >{{product.price}} / {{product.unit}}</div>
        </div>


      </td>
      <td>
        
        <button class="btn btn-danger d-block w-100 " >
          <router-link :to="`/product/${product.id}`" class="text-white">查看更多</router-link>
        </button>
        <button class="btn btn-outline-success d-block w-100 mt-3"> 加入購物車</button>
      </td>
    </tr>
    
  </table>
</template>

<script>  
  //代入環境變數
  const { VITE_APP_API, VITE_APP_APIPATH }= import.meta.env //解構方式撰寫

  //加入router 才可以使用routerLink
  // import { RouterLink } from 'vue-router'

  export default{
    data (){
      return {
        products:[]
      }
    },
    methods: {
      getProducts(){
        this.$http.get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products`)
          .then(res=> this.products = res.data.products)
      }
    },
    // components:{
    //   RouterLink
    // },
    mounted() {
      this.getProducts()
    }
  }
</script>

<style>
  a{
    text-decoration: none;
  }
</style>