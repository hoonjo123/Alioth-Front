<template>
  <AppHeader></AppHeader>
  <AppSidebar></AppSidebar>
  <div>
    <v-divider></v-divider>
    <h2>공지사항 추가 페이지</h2>
    <v-divider></v-divider>
  </div>
</template>

<script>
import AppSidebar from "@/layouts/AppSidebar.vue";
import AppHeader from "@/layouts/AppHeader.vue";

export default {
  components: {AppHeader, AppSidebar},
  setup() {


    return {}
  }
}
</script>

<style scoped>

</style>
