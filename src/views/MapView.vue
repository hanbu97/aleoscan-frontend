<template>
  <div class="about">
    map 地图
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import "echarts/lib/chart/map";
import WorldGeo from "../map/json/world.json";

export default {
  data() {
    return {
      chart: null,
      mapOption: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        title: {
          left: "center",
          top: "0",
          textStyle: {
            color: "#fff",
          },
        },
        geo: {
          map: "world",
          label: {
            emphasis: {
              show: false,
            },
          },
          roam: false,
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
          trigger: "item",
        },

        //左侧小导航图标

        //配置属性
        series: [
          {
            name: "Peer Info",
            type: "scatter",
            coordinateSystem: "geo",
            data: [
              { name: "海门", value: [-121.15, 31.89, 90] },
              { name: "鄂尔多斯", value: [109.781327, 39.608266, 90] },
              { name: "招远", value: [120.38, 37.35, 90] },
              { name: "舟山", value: [122.207216, 29.985295, 90] },
            ], //数据
            symbolSize: function (val) {
              return val[2] / 15;
            },
            itemStyle: {
              normal: {
                color: "#ffeb7b",
              },
            },
          },
        ],
      },
    };
  },
  created() {},
  // mounted() {
  //   this.drawChinaMap();
  // },
  // updated() {
  //   if (!this.chart) {
  //     this.initChart();
  //   }
  // },
  // beforeDestroy() {
  //   if (!this.chart) {
  //     return;
  //   }
  //   this.chart.dispose();
  //   this.chart = null;
  // },
  computed: {},
  methods: {
    drawChinaMap() {
      // this.chart = echarts.init(document.getElementById("myMap"), "macarons");
      // echarts.registerMap("world", WorldGeo);
      // this.chart.setOption(this.mapOption);
      // this.chart.on("click", function (params) {
      // });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>