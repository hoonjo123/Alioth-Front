<template>
  <AppHeader></AppHeader>
  <AppSidebar></AppSidebar>
  <div>
    <v-divider></v-divider>
    <h2>사원 상세 조회 페이지(관리자)</h2>
    <v-divider></v-divider>
    <p><button onclick="location.href=`/SalesMembersList/Modify`">사원정보 수정</button></p>
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
