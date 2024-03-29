import HomePage from "/src/pages/main/HomePage.vue";
import MyPage from "@/pages/mypage/MyPage.vue";
import BoardListPage from "@/pages/board/BoardListPage.vue";
import SchedulePage from "@/pages/schedule/SchedulePage.vue";
import SalesMembersListPage from "@/pages/salesMember/SalesMembersListPage.vue";
import LoginPage from "@/pages/login/LoginPage.vue";
import SalesPage from "@/pages/sales/SalesPage.vue";
import ContractListPage from "@/pages/contract/ContractListPage.vue";


const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/BoardList',
    component: BoardListPage
  },
  {
    path: '/Schedule',
    component: SchedulePage
  },
  {
    path: '/MyPage',
    component: MyPage
  },
  {
    path: '/SalesMembersList',
    component: SalesMembersListPage
  },
  {
    path: '/Login',
    component: LoginPage
  },
  {
    path: '/Sales',
    component: SalesPage
  },
  {
    path: '/ContractList',
    component: ContractListPage
  },


]

export default routes
