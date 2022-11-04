<template>
  <VueEcharts :options="mapOptions" class="contents" ref="echarts" />
</template>

<script setup>
import {onMounted, ref} from "vue";
import VueEcharts from '../components/vueEcharts/inex.vue'
import {getMapData} from "../api/api"

function createMapOption(data) {
  return {
    backgroundColor: "rgba(0, 0, 0, 0)",
    title: {
      text: 'Node Map',
      // subtext: 'data from PM25.in',
      // sublink: 'http://www.pm25.in',
      left: 'left',
      textStyle: {
        color: '#FFE76F'
      }
    },
    geo: {
      map: "world",
      label: {
        emphasis: {
          show: false,
            },
          },
          roam:true,
          zoom: 1.5,
          itemStyle: {
            normal: {
              areaColor: "rgba(2,37,101,.5)",
              borderColor: "rgba(112,187,252,.5)",
            },
            emphasis: {
              areaColor: "rgba(2,37,101,.8)",
            },
          },
        },
        tooltip: {
          // trigger: "item",
          formatter:function(params){
            return `
            <p>City: ${params.name}</p>
            <p>IP: ${params.value[2]}</p>
            `
          }
        },
        series: [
          {
            name: "Peer Info",
            type: "scatter",
            coordinateSystem: "geo",
            data: data, //data
            symbolSize: function (val) {
              return 6;
            },

            itemStyle: {
              normal: {
                color: "#ffeb7b",
              },
            },
            encode: {
              value: 2
            },
          },
        ],
      }
}

const MAP_DATA = "mp_data"
const mapOptions = ref({})
onMounted(() => {
  MapData()
  startInterval()
})

function startInterval() {
  setInterval(() => {
    MapData()
  }, 1000 * 60 * 10);
}

function MapData() {

  getMapData().then(res => {
    const data = res.ips.map((v) => {
      return {
        name: v.city,
        value: [v.long, v.lat, v.ip],
      }
    })
    localStorage.setItem(MAP_DATA, JSON.stringify(data))
    mapOptions.value = createMapOption(data)
  }).catch(() => {
    const map_data = JSON.parse(localStorage.getItem(MAP_DATA))
    if (map_data) {
      mapOptions.value = createMapOption(map_data)
    }
  })
}
</script>

<style lang="scss" scoped>
.contents {
  background: #1F2026;
  border-radius: 20px;
  height: calc(100vh - 90px);
  width: 100% !important;
}
</style>