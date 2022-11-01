<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </main>
</template>

<style scoped>
.box-card {
  /* top: 0px; */
  width: 100vw;
  /* width: 100%; */
  display: inline-block;
  position: relative;
}
</style>
