<template>
  <div class="container">
    <div class="d-flex  fa-bold">
      <main>單一產品頁面</main>
      <router-link to="/products" class="ms-3">回產品頁面</router-link>
      <hr class="border border-1">
    </div>
    <h2>{{ product.title }}</h2>
    <div class="d-flex">
      <img :src="product.imageUrl" alt="" class="w-50" />
      <div>
        <p>敘述:{{ product.description }}</p>
        <p>商品說明:{{ product.content }}</p>

        <div v-if="product.price === product.origin_price">
          售價: {{ product.origin_price }}元
        </div>
        <p v-else>售價: {{ product.price }}元 / {{ product.unit }}</p>
        <button class="btn btn-danger">加到購物車</button>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env; //解構方式撰寫

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      //取得單一產品的遠端資料
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/product/${id}`)
        .then((res) => (this.product = res.data.product));
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
