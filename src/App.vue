<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "./components/Home.vue";
import BaseHeader from "./components/Header.vue";
import topMenu from "./components/TopMenu.vue";
</script>

<template>
  <topMenu />
  <!-- <el-row :gutter="20"> -->
  <!-- <el-col :span="12" :offset="6"> -->
  <div class="content">
    <RouterView />
  </div>
  <!-- </el-col> -->
  <!-- </el-row> -->
  <RouterView />

  <!-- <div class="common-layout"> -->
  <!-- <el-affix target=".common-layout" :offset="1000"> -->
  <!-- <el-header class="header"> -->
  <!-- <nav class="nav-bar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/news">News</RouterLink>
    <RouterLink to="/map">Map</RouterLink>
    <RouterLink to="/navigation">Navigation</RouterLink>
  </nav> -->
  <!-- </el-header> -->
  <!-- </el-affix> -->

  <!-- <el-container> -->
  <!-- <el-main class="main"> -->
  <!-- <div class="wrapper"> -->
  <!-- <Home msg="You did it!" /> -->
  <!-- </div> -->

  <!-- </el-main> -->
  <!-- </el-container> -->
  <!-- <div class="content">
    <RouterView />
  </div> -->
  <!-- </div> -->
  <!-- <main>
    <div class="wrapper">
      <Home msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/map">Map</RouterLink>
      </nav>
    </div>
    <RouterView />
  </main> -->

  <!-- <header> -->
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

  <!-- </header> -->
</template>

<style scoped>
.nav-bar {
  align-content: center;
  position: relative;
}

.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
}

.header1 {
  position: fixed;
  z-index: 11111;
  top: 0px;
  width: 100vw;
  align-content: center;
  margin-left: 0;
  /* text-align: center; */
}

.content {
  margin-top: 100px;
  width: 1280px;
  position: relative;
  /* position: relative; */
  /* width: 1100px; */
  /* max-width: 1280px; */
  /* margin: 100px auto 0; */
  /* overflow: hidden; */
}

.main {
  top: 0px;
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
