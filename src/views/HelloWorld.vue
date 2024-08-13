<template>
  <div>
    <div class="lang">
      <div>{{ $t('nav.desc')}}</div>
      <el-switch
        v-model="language"
        :active-text= "$t('nav.en')"
        :inactive-text="$t('nav.es')"
        @change="changeLanguage"
        >
      </el-switch>
    </div>
    <el-container>
      <el-header>
        <div class="navbar" id="nav">
          <div class="logo">{{ $t('nav.website') }}</div>
        <div class="menu-icon" id="menuIcon" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <!-- <el-menu-item index="1">guan</el-menu-item> -->
        <el-submenu index="1">
            <template slot="title">{{ $t('nav.tab1') }}</template>
            <el-menu-item index="1-1">{{ $t('nav.tab1_sub1') }}</el-menu-item>
            <el-menu-item index="1-2">{{ $t('nav.tab1_sub2') }}</el-menu-item>
            <el-menu-item index="1-3">{{ $t('nav.tab1_sub3') }}</el-menu-item>
            <el-menu-item index="1-4">{{ $t('nav.tab1_sub4') }}</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">{{ $t('nav.tab2') }}</template>
            <el-menu-item index="2-1">{{ $t('nav.tab2_sub1') }}</el-menu-item>
            <el-menu-item index="2-2">{{ $t('nav.tab2_sub2') }}</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">{{ $t('nav.tab3') }}</el-menu-item>
        <el-menu-item index="4">{{ $t('nav.tab4') }}</el-menu-item>
        </el-menu>
    </div>
        <!-- <ul id="navbarMenu">
            <li><a href="#">公司简介</a></li>
            <li><a href="#">历史故事</a></li>
            <li><a href="#">人员介绍</a></li>
            <li><a href="#">相关活动</a></li>
            <li><a href="#">联系我们</a></li>
            <li><a href="#">简历投送</a></li>
            <div class="search-box">
                <input type="text" placeholder="Search...">
            </div>
            <div class="buttons">
                <button class="login">登录</button>
                <button class="register">注册</button>
            </div>
        </ul> -->
    </div>
      </el-header>
      <el-main>
        <div>
          <div class="banner">
            <!-- <img src="../assets/banner2.jpeg" alt="Banner" class="banner" /> -->
             <!-- <h1>{{ currentTabName }}</h1> -->
             <el-carousel height="700px">
                <el-carousel-item v-for="image in images" :key="image.id">
                  <img :src="image.url" alt="Banner" class="banner" />
                </el-carousel-item>
              </el-carousel>

          </div>  
          <component :is="currentComponent"></component>
        </div>
      </el-main>
      <el-footer>
        <div class="footer">
          <p>{{ $t('footer.copyright') }}</p>
          <p>{{ $t('footer.address') }}</p>
          <p>{{ $t('footer.telephone') }}</p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Introduce from '@/components/Introduce.vue';
import History from '@/components/History.vue';
import Officer from '@/components/Officer.vue';
import Member from '@/components/Member.vue';
import Online from '@/components/Online.vue';
import Offline from '@/components/Offline.vue';
import Diliver from '@/components/Diliver.vue';
import Contanct from '@/components/Contanct.vue';
export default {
  name: 'HelloWorld',
  components: {
    Introduce,
    History,
    Officer,
    Member,
    Online,
    Offline,
    Diliver,
    Contanct
  },
  data() {
    return {
      language: true,
      activeIndex: '1',
      currentIndex: '1',
      currentComponent: 'Introduce',
      currentTabName: '公司简介',
      menuItems: [
        { name: '公司简介', component: 'Introduce', index: '1-1'},
        { name: '公司历史', component: 'History', index: '1-2' },
        { name: '董事会成员', component: 'Member', index: '1-3' },
        { name: '管理团队', component: 'Officer', index: '1-4' },
        { name: '线上活动', component: 'Online', index: '2-1' },
        { name: '线下活动', component: 'Offline', index: '2-2' },
        { name: '简历投递', component: 'Diliver', index: '3' },
        { name: '联系我们', component: 'Contanct', index: '4' },
      ],
      images: [
        { id: '1', url: require('../assets/pic1.jpeg') },
        { id: '2', url: require('../assets/pic2.jpeg') },
        { id: '3', url: require('../assets/pic3.jpeg') },
      ]
    };
  },
  methods: {
    toggleMenu() {
      var navbar = document.getElementById('nav');
      navbar.classList.toggle('open');
    },
    handleSelect(key, keyPath) {  
      this.currentIndex = keyPath[keyPath.length -1]
      this.currentComponent = this.menuItems.find(item => item.index == this.currentIndex ).component
      this.currentTabName = this.menuItems.find(item => item.index == this.currentIndex ).name
    },
    changeLanguage(val) {
      if(val) {
        this.$i18n.locale = 'en-US';
      } else {
        this.$i18n.locale = 'es-ES';
      }
    }
  }
}
// document.getElementById('menuIcon').addEventListener('click', function () {  
//     var navbar = document.getElementById('nav');  
//     navbar.classList.toggle('open');  
// });
</script>

<style lang="scss" scoped>
 .lang {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  div {
    margin-right: 10px;
  }
 }
  .el-header, .el-footer {
    // background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding: 0;
    margin: 10px 0;
    // line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

* {
  box-sizing: border-box;
}
 
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #ffe7df;
  display: flex;
}
 
.navbar {
  background-color: #ffffff;
  color: #fff;
  padding: 0 40px 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 
.logo {
  font-size: 24px;
  font-weight: bold;
  color: #232c53;
}
 
// .navbar ul {
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   align-items: center;
// }
 
// .navbar li {
//   position: relative;
//   margin-right: 15px;
// }
 
// .navbar li a {
//   color: #777b91;
//   text-decoration: none;
//   padding: 10px;
// }
 
// .navbar li a:hover {
//   color: #141e46;
// }
 
// .search-box {
//   position: relative;
// }
 
// .search-box input {
//   width: 200px;
//   height: 30px;
//   border: none;
//   padding: 5px 10px;
//   border-radius: 6px;
//   background-color: #eff6f8;
// }
 
// .buttons {
//   display: flex;
// }
 
// .buttons button {
//   margin-left: 10px;
//   padding: 5px 10px;
//   border: none;
//   cursor: pointer;
// }
 
// .login {
//   color: #232c53;
//   background-color: #fff;
// }
 
// .register {
//   color: #fff;
//   background-color: #232c53;
//   border-radius: 10px;
// }
/* 添加响应式设计的样式 */
// @media screen and (max-width: 768px) {
//   .navbar {
//     position: relative;
//     // padding: 10px 10px;
//   }
 
//   /* 在小屏幕上隐藏导航栏和搜索框等 */
//   .navbar ul,
//   .search-box,
//   .buttons {
//     display: none;
//   }
 
//   /* 显示汉堡式图标 */
//   .navbar .menu-icon {
//     display: block;
//     position: relative;
//     width: 30px;
//     height: 20px;
//     cursor: pointer;
//   }
 
//   .navbar .menu-icon span {
//     display: block;
//     position: absolute;
//     height: 4px;
//     width: 100%;
//     background: #232c53;
//     border-radius: 4px;
//     opacity: 1;
//     left: 0;
//     transform: rotate(0deg);
//     transition: 0.25s ease-in-out;
//   }
 
//   .navbar .menu-icon span:nth-child(1) {
//     top: 0px;
//   }
 
//   .navbar .menu-icon span:nth-child(2),
//   .navbar .menu-icon span:nth-child(3) {
//     top: 10px;
//   }
 
//   .navbar .menu-icon span:nth-child(4) {
//     top: 20px;
//   }
 
//   /* 菜单展开时的样式 */
//   .navbar.open .menu-icon span:nth-child(1) {
//     top: 18px;
//     width: 0%;
//     left: 50%;
//   }
 
//   .navbar.open .menu-icon span:nth-child(2) {
//     transform: rotate(45deg);
//   }
 
//   .navbar.open .menu-icon span:nth-child(3) {
//     transform: rotate(-45deg);
//   }
 
//   .navbar.open .menu-icon span:nth-child(4) {
//     top: 18px;
//     width: 0%;
//     left: 50%;
//   }
 
//   /* 展开菜单时的导航栏样式 */
//   .navbar.open ul {
//     display: flex;
//     flex-direction: column;
//   }
 
//   .navbar.open .search-box,
//   .navbar.open .buttons {
//     display: block;
//   }
 
//   .search-box,
//   .buttons {
//     display: block;
//   }
 
//   #navbarMenu {
//     width: 100%;
//     flex-direction: column;
//     gap: 10px;
//     padding: 10px 0;
//     background-color: #ffffff;
//     border-radius: 10px;
//     position: absolute;
//     left: 0;
//     bottom: -200px;
//     text-align: center;
//   }
 
//   #navbarMenu li a {
//     font-size: 20px;
//   }
// }
.footer {
  background: #000;
  color: #FFF;
  padding: 10px 0;
  margin: 0;
}
// .banner {
//   background-image: url("../assets/banner2.jpeg");
//   background-size: cover;
//   width: 100%;
//   height: 700px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   text-align: center;
//   color: #fff;
//   // padding: 0 20px;
//   margin: 0;
// }
.banner h1 {
  font-size: 50px;
  margin-bottom: 20px;
}
.banner p {
  font-size: 20px;
  margin-bottom: 40px;
}
.banner button {
  background: #fff;
  color: #000;
  // padding: 10px 20px;
  border: none;
}
::v-deep .el-card__body, .el-main {
    padding: 0;
}
</style>