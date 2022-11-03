<template>
  <div class="menu-page">
    <el-menu
      :default-active="activeIndex1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#fff"
        background-color="#545c64"
      router
      text-color="gray"
    >
      <el-menu-item index="/home" 
        ><RouterLink to="/home">Home</RouterLink></el-menu-item
      >
      <el-menu-item index="/news" 
        ><RouterLink to="/news">News</RouterLink></el-menu-item
      >
      <el-menu-item index="/map"
        ><RouterLink to="/map">Map</RouterLink></el-menu-item
      >
      <el-menu-item index="/navigation"
        ><RouterLink to="/navigation">Navigation</RouterLink></el-menu-item
      >
    </el-menu>
  </div>
</template>
<style lang="scss" scoped>
.menu-page{
 width: 100%;
 position: relative;
 top: 0;
 left: 0;
 background: #13141B;
 .el-menu--horizontal{
 background: #13141B;
 border-bottom:none;
 }
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
      activeIndex1: "/home",
    };
  },
  mounted(){
    this.getUrlPath()
  },
  methods: {
    handleSelect(key) {
      this.activeIndex1 = key
      this.$router.push(key)
    },
    getUrlPath(){
      this.activeIndex1 = window.location.pathname;
      console.log(this.activeIndex1);
      // console.log(window.location);
    }
  },
};
</script>
