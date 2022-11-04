<script setup>
import { RouterLink, RouterView } from "vue-router";
import topMenu from "./components/TopMenu.vue";
</script>

<template>
  <topMenu />
  <div class="content">
    <RouterView />
  </div>
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
  width: 1300px;
  /* width: calc(100% - 120px); */
  margin: 0 auto;
  position: relative;
  /* height: calc(100% - 60px); */
}

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
