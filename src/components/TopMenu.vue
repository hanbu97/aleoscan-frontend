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
      <h3 style="color:#fff" class="title">Aleo Scan</h3>
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
.title{
  position: absolute;
  left: 60px;
  font-size: 24px;
  top: 60%;
  transform: translateY(-50%);
}
:deep .el-menu-item{
  width: 100px;
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
  watch: {
    $route(to, from){
      this.activeIndex1 = to.href
    },
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
    }
  },
};
</script>
