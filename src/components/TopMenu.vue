<template>
  <div class="menu-page">
    <el-menu
      :default-active="activeIndex1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
      text-color="gray"
    >
      <el-menu-item index="/Home" 
        ><RouterLink to="/Home">Home</RouterLink></el-menu-item
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
      activeIndex1: "/Home",
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
