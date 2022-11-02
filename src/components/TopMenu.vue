<template>
  <!-- components/TopMenu.vue -->
  <div class="menupage">
    <el-menu
      :default-active="activeIndex1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="000"
      text-color="gray"
      active-text-color="#fff"
    >
      <p class="logo-title"><i class="el-icon-user"></i>Aleo Scan</p>
      <el-menu-item index="1" style="margin-left: 600px"
        ><RouterLink to="/">Home</RouterLink></el-menu-item
      >
      <el-menu-item index="2"
        ><RouterLink to="/news">News</RouterLink></el-menu-item
      >
      <el-menu-item index="3"
        ><RouterLink to="/map">Map</RouterLink></el-menu-item
      >
      <el-menu-item index="4"
        ><RouterLink to="/navigation">Navigation</RouterLink></el-menu-item
      >
    </el-menu>
  </div>
</template>
<style>
.menupage {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 100;
}

.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}

.menupage .el-menu.el-menu--horizontal {
  border-bottom: none;
  height: 100px;
  line-height: 100px;
}
.menupage .el-menu.el-menu--horizontal > .el-menu-item,
.menupage .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 100px;
  line-height: 100px;
  padding: 0px 50px;
  font-size: 16px;
  letter-spacing: 4px;
}
.menupage .el-menu--horizontal > .el-menu-item.is-active,
.menupage .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom-width: 4px;
}
.menupage .logo-title .el-icon-user {
  margin-right: 5px;
}
</style>
<style scoped>
.logo-title {
  position: absolute;
  left: 100px;
  top: 0px;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
}
.logo-title img {
  width: 80px;
  outline: none;
  vertical-align: middle;
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
      var name = "";
      if (key === "1") name = "homepage";
      if (key === "4") name = "productpage";
      if (key === "3") name = "securityresearch";
      if (key === "2") name = "aboutus";
      var targetEle = document.querySelector("." + name);
      var offsetTop = targetEle.offsetTop;
      document.documentElement.scrollTop = offsetTop - 150;
    },
  },
};
</script>
