<template>
  <div>
    <p>사이드 바</p>
    <p><button onclick="location.href=`/Sales`"></button></p>
  <!-- <div v-if="showDropdown">
      <p><button @click="goToSales('개인')">개인</button></p>
      <p><button @click="goToSales('팀')">팀</button></p>
      <p><button @click="goToSales('전사')">전사</button></p>
    </div> -->

    <v-btn color="primary">
  매출
      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="navigateTo(item.title)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>


    <p><button onclick="location.href=`/BoardList`">게시판</button></p>
    <p><button onclick="location.href=`/MyPage`">마이페이지</button></p>
    <p><button onclick="location.href=`/Login`">로그인</button></p>
    <p><button onclick="location.href=`/Schedule`">일정</button></p>
    <p><button onclick="location.href=`/SalesMembersList`">사원</button></p>
    <p><button onclick="location.href=`/ContractList`">계약</button></p>
    <p><button onclick="location.href=`/Sales`">매출</button></p>
  </div>
</template>

<script>

export default {
  data: () => ({
      items: [
        { title: 'Personal' },
        { title: 'Team' },
        { title: 'Company' },
        
      ],
    }),
    methods: {
    navigateTo(title) {
      let path = title;
      switch(title) {
        case 'Personal':
          path = 'Personal';
          break;
        case 'Team':
          path = 'Team';
          break;
        case 'Company':
          path = 'Total';
          break;
        default:
          path = ''; 
      }
      // Vue Router를 사용한 페이지 이동
      this.$router.push(`/Sales/${path}`);
    }
  },
  setup() {


    return {}
  }
}
</script>

<style scoped>

</style>
