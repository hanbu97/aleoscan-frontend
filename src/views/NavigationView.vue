<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <div>
    <el-card class="box-card" style="margin-bottom: 20px">
      <template #header class="temp-header">
        <div class="card-header">
          <span class="large">Official Resources</span>
        </div>
      </template>

      <div class="text item">
        <el-row :gutter="20">
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
        </el-row>
        <el-row :gutter="20" style="padding-top: 30px">
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
        </el-row>
      </div>
      <div class="topMask square"></div>
      <div class="topMask circular"></div>
    </el-card>
    <el-card class="box-card" style="margin-bottom: 20px">
      <template #header>
        <div class="card-header">
          <span class="large">Official Resources</span>
        </div>
      </template>

      <div class="text item">
        <el-row :gutter="20">
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
        </el-row>
      </div>
      <div class="topMask square"></div>
      <div class="topMask circular"></div>
    </el-card>
    <el-card class="box-card" style="margin-bottom: 20px">
      <template #header>
        <div class="card-header">
          <span class="large">Official Resources</span>
        </div>
      </template>

      <div class="text item">
        <el-row :gutter="20">
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <el-button size="large">Website</el-button></el-col
          >
        </el-row>
      </div>
      <div class="topMask square"></div>
      <div class="topMask circular"></div>
    </el-card>
  </div>

  <!-- <main> -->
  <!-- <TheWelcome /> -->
  <!-- <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card> -->
  <!-- </main> -->
</template>

<style>
.text {
  font-size: 14px;
}

.aboutus .grid-content.line {
  /* border-right: 1px solid #; */
  height: 150px;
}
.aboutus .el-card__header {
  background: #545c64;
  /* border: 0px !important; */
}
.aboutus .el-card__body {
  padding: 50px 20px;
}
.aboutus .el-timeline-item__wrapper {
  top: -8px;
}
.aboutus .title p .el-tag {
  margin: 0px 5px;
  cursor: pointer;
}

.el-card__header {
  border-color: rgba(255, 255, 255, 0.4) !important;
  /* border: 0px !important; */
}
</style>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid #edf1fb; */
  /* border-color: rgba(255, 255, 255, 0.4); */
}

.box-card {
  /* top: 0px; */
  width: 100%;
  display: inline-block;
  position: relative;
  background-color: transparent;
}
.aboutus {
  font-size: 14px;
  text-align: left;
  padding: 0px 100px;
}
.text {
  font-size: 14px;
  text-align: left;
  line-height: 30px;
  text-indent: 2em;
  width: 100%;
}
.box-card {
  position: relative;
  border-color: rgba(255, 255, 255, 0.4);
}
.item {
  display: inline-block;
  margin: 30px 50px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix span {
  color: rgb(0, 0, 0);
  font-weight: bold;
}
.title p {
  color: #8c8888;
  font-size: 15px;
  margin-bottom: 80px;
  text-align: center;
}
.large {
  font-size: 14px;
  color: #fff;
  font-weight: bold;
}
.topMask {
  width: 100px;
  height: 100px;
  background-color: rgba(68, 138, 255, 0.2);
  transform: rotate(45deg);
  position: absolute;
}
.square {
  border-radius: 5px;
  top: 0px;
}
.circular {
  border-radius: 50%;
  top: 80px;
  left: 80%;
  background-color: rgba(255, 208, 75, 0.2);
}
</style>
