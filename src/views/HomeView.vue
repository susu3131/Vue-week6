<template>
  <h1 class="text-center border">前台</h1>
  <!-- //nav -->
  <div class="container text-center mt-5 ">
    <nav>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="100"
        height="100"
      />

      <div class="d-flex justify-content-center">
        <RouterLink to="/index" class="me-3">Home 首頁</RouterLink>
        <RouterLink to="/product" class="me-3">產品列表</RouterLink>
        <RouterLink to="/cart" class="me-3">購物車</RouterLink>
        <RouterLink to="/admin" class="me-3">後台購物車列表</RouterLink>
      </div>
    </nav>
  </div>
  <router-view></router-view>

  
</template>

