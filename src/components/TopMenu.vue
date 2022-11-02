<template>
  <div class="menu-page">
    <el-menu
      :default-active="activeIndex1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="gray"
    >
      <el-menu-item index="1" 
        ><RouterLink to="/">首页</RouterLink></el-menu-item
      >
      <el-menu-item index="2"
        ><RouterLink to="/news">新闻</RouterLink></el-menu-item
      >
      <el-menu-item index="3"
        ><RouterLink to="/map">节点地图</RouterLink></el-menu-item
      >
      <el-menu-item index="4"
        ><RouterLink to="/navigation">导航</RouterLink></el-menu-item
      >
    </el-menu>
  </div>
</template>
<style lang="scss" scoped>
.menu-page{
 width: 100%;
 position: fixed;
 top: 0;
 left: 0;
//  height: 00px;
}
.el-menu-demo{
  display: flex;
  justify-content: center;
}
</style>

<script>
export default {
  name: "topMenu",
  data() {
    return {
      activeIndex1: "0",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // var name = "";
      // if (key === "1") name = "homepage";
      // if (key === "4") name = "productpage";
      // if (key === "3") name = "securityresearch";
      // if (key === "2") name = "aboutus";
      // var targetEle = document.querySelector("." + name);
      // var offsetTop = targetEle.offsetTop;
      // document.documentElement.scrollTop = offsetTop - 150;
    },
  },
};
</script>
