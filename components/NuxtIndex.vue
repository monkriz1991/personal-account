<template>
  <div class="container">
    <div class="index-link">
      <el-button-group>
        <el-button type="primary">
          <nuxt-link :to="`/login`">Авторизация</nuxt-link>
        </el-button>
        <el-button type="primary">
          <nuxt-link :to="`/registration`">Регистрация</nuxt-link>
        </el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
}
</script>
