<template>
  <AppHeader></AppHeader>
  <AppSidebar></AppSidebar>
  <div>
    <v-divider></v-divider>
    <h2>일정</h2>
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
