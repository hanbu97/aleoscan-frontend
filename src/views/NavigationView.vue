<script setup>
import TheWelcome from "../components/TheWelcome.vue";
const OfficialResources = [
  { text: 'Website',link:"https://www.aleo.org/" },
  { text: 'Twitter' ,link:"https://twitter.com/AleoHQ"},
  { text: 'Github', link:"https://github.com/AleoHQ" },
  { text: 'Discord' ,link:"https://discord.gg/aleohq"},
  { text: 'Reddit' ,link:"https://discord.gg/aleohq"},
  { text: 'Blog' ,link:"https://discord.gg/aleohq"},
]
const Tools = [
  { text: 'Explorer',link:"https://www.aleo.network/" },
  { text: 'Github' ,link:"https://github.com/FuzzingLabs/aleovera"},
  { text: 'ZPrize', link: "https://zprize.io/" },
  { text: 'Leo Playground' ,link:"https://play.leo-lang.org/"},
]
const Developer = [
  { text: 'Studio',link:"https://www.aleo.studio/" },
  { text: 'Package Manager' ,link:"https://aleo.pm/"},
  { text: 'Document', link: "https://developer.aleo.org/overview/" },
  { text: 'Opportunities' ,link:"https://www.aleo.org/opportunities"},
]
const CoreLibraries = [
  { text: 'Aleo',link:" https://github.com/AleoHQ/aleo" },
  { text: 'Leo' ,link:"https://github.com/AleoHQ/leo"},
  { text: 'snarkOS', link: "https://github.com/AleoHQ/snarkOS" },
  { text: 'snarkVM' ,link:"https://github.com/AleoHQ/snarkVM"},
]
const  Ecosystem = [
{ text: 'Github',link:" https://github.com/howardwu/awesome-aleo" },
]
</script>

<template>
  <div>
    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span> Official Resources</span>
      </div>
    </template>
    <el-row :gutter="20" justify="space-evenly">

    <el-col :span="6" justify="space-evenly" >
      <el-button
      link
      >
      <el-link :href="OfficialResources[0].link" target="_blank">{{OfficialResources[0].text}}</el-link>
      </el-button
    >
    </el-col>
    <el-col :span="6" justify="space-evenly" >
      <el-button
      link
      >
      <el-link :href="OfficialResources[1].link" target="_blank">{{OfficialResources[1].text}}</el-link>
      </el-button
    >
    </el-col>
    <el-col :span="6" justify="space-evenly" >
      <el-button
      link
      >
      <el-link :href="OfficialResources[2].link" target="_blank">{{OfficialResources[2].text}}</el-link>
      </el-button
    >
    </el-col>
    <el-col :span="6" justify="space-evenly" >
      <el-button
      link
      >
      <el-link :href="OfficialResources[3].link" target="_blank">{{OfficialResources[3].text}}</el-link>
      </el-button
    >
    </el-col>
   </el-row>
      <el-row :gutter="20" justify="space-evenly" style="margin-top:20px;">
    <el-col :span="6" justify="space-evenly" >
      <el-button
      link
      >
      <el-link :href="OfficialResources[4].link" target="_blank">{{OfficialResources[4].text}}</el-link>
      </el-button
    >
    </el-col>
    <el-col :span="6" justify="space-evenly" >
      <el-button
      link
      >
      <el-link :href="OfficialResources[5].link" target="_blank">{{OfficialResources[5].text}}</el-link>
      </el-button
    >
    </el-col>
    <el-col :span="6" justify="space-evenly" >
    </el-col>
    <el-col :span="6" justify="space-evenly" >
    </el-col>
   </el-row>
  </el-card>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span> Tools</span>
      </div>
    </template>
    <el-row :gutter="20" justify="space-evenly">
    <el-col :span="6"  v-for="item in Tools" justify="space-evenly"  :key="item.text">
      <el-button
      link
      >
      <el-link :href="item.link" target="_blank">{{item.text}}</el-link>
      </el-button
    >
    </el-col>
    
   </el-row>
  </el-card>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span> Developer</span>
      </div>
    </template>
    <el-row :gutter="20" justify="space-evenly">
    <el-col :span="6"  v-for="item in Developer" justify="space-evenly"  :key="item.text">
      <el-button
      link
      >
      <el-link :href="item.link" target="_blank">{{item.text}}</el-link>
      </el-button
    >
    </el-col>
   </el-row>
  </el-card>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span> Core Libraries</span>
      </div>
    </template>
    <el-row :gutter="20" justify="space-evenly">
    <el-col :span="6"  v-for="item in CoreLibraries" justify="space-evenly"  :key="item.text">
      <el-button
      link
      >
      <el-link :href="item.link" target="_blank">{{item.text}}</el-link>
      </el-button
    >
    </el-col>
   </el-row>
 
  </el-card>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span> Ecosystem</span>
      </div>
    </template>
    <el-row :gutter="6" justify="space-evenly">
      <el-col :span="6" justify="space-evenly" >
      <el-button
      link
      >
      <el-link :href="Ecosystem[0].link" target="_blank">{{Ecosystem[0].text}}</el-link>
      </el-button
    >
    </el-col>
    <el-col :span="6" justify="space-evenly" >
    </el-col>
    <el-col :span="6" justify="space-evenly" >
    
    </el-col>
    <el-col :span="6" justify="space-evenly" >
      
    </el-col>
   </el-row>
 
  </el-card>
  </div>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
:deep .el-card{
    border: none;
  }
  :deep .el-card__header {
    border-bottom: 1px solid #606266;
  }
.box-card {
  margin-top: 20px;
  width: 100%;
  background: #1F2027;
  .card-header{
    color: #fff;
  }
 
  .white{
    color: #fff;
  }
 :deep .el-link__inner{
    color: #fff;

  }
}
:deep .el-col-6{
  text-align: center;
}
</style>
