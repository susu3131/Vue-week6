<template>
  產品列表
  <table class="form-control">
    <tr>
      <td>圖片</td>
      <td>商品名稱</td>
      <td>價格</td>
      <td></td>
    </tr>
    <tr>
      <td>USA</td>
      <td>Washington D.C.</td>
      <td>309 million</td>
      <td>English</td>
    </tr>
    <tr>
      <td>Sweden</td>
      <td>Stockholm</td>
      <td>9 million</td>
      <td>Swedish</td>
    </tr>
  </table>
</template>

<script>  
  //代入環境變數

  const { VITE_APP_API, VITE_APP_APIPATH }= import.meta.env //解構方式撰寫


  export default{
    data (){
      return {
        product:[]
      }
    },
    methods: {
      getProducts(){
        axios.get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products`)
          .then(res=> console.log(res.data))
      }
    },
    mounted() {
      this.getProducts()
    }
  }
</script>
