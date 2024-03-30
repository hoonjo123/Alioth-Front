<template>
  <AppHeader></AppHeader>
  <AppSidebar></AppSidebar>
  <div>
    <v-divider></v-divider>
    <p>계약 추가 수정 페이지</p>
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
