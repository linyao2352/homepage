<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">公司简介</el-menu-item>
        <el-menu-item index="2">历史故事</el-menu-item>
        <el-submenu index="3">
            <template slot="title">人员介绍</template>
            <el-menu-item index="3-1">董事会成员</el-menu-item>
            <el-menu-item index="3-2">高管</el-menu-item>
            <!-- <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu> -->
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">相关活动</template>
            <el-menu-item index="4-1">线下会议</el-menu-item>
            <el-menu-item index="4-2">线上论坛</el-menu-item>
        </el-submenu>
        <el-menu-item index="5">联系我们</el-menu-item>
        <el-menu-item index="6">简历投送</el-menu-item>
        </el-menu>
    </div>
</template>  
  <script>
    export default {
     name: 'testDemo',
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
  </script>