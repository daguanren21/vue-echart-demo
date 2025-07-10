<script setup lang="ts">
import { useTemplateRef, nextTick } from "vue";
import * as echarts from "echarts";
const echartRef = useTemplateRef<HTMLElement>("echart");

async function loadEchart(){
await nextTick()
const instance = echarts.init(echartRef.value);
const option: echarts.EChartsOption = {
  title: {
    text: "美国整体3个工作日内发货达成率",
    left: "40%",
  },
  grid: {
    left: 50,
    right: "4%",
    bottom: 150,
  },
  yAxis: {
    type: "value",
    interval: 4,
    min: 85,
    max: 101,
    splitLine: {
      show: false,
    },
    
    axisLabel: {
      formatter: "{value}%", // 格式化为百分比
    },
  },
  xAxis: [
    {
      type: "category",
      data: [
        "4.12-4.18",
        "4.19-4.25",
        "4.25-5.2",
        "5.3-5.9",
        "5.10-5.16",
        "5.17-5.23",
        "5.24-5.30",
        "5.31-6.6",
        "4.12-4.18",
        "4.19-4.25",
        "4.25-5.2",
        "5.3-5.9",
        "5.10-5.16",
        "5.17-5.23",
        "5.24-5.30",
        "5.31-6.6",
        "4.12-4.18",
        "4.19-4.25",
        "4.25-5.2",
        "5.3-5.9",
        "5.10-5.16",
        "5.17-5.23",
        "5.24-5.30",
        "5.31-6.6",
        "4.12-4.18",
        "4.19-4.25",
        "4.25-5.2",
        "5.3-5.9",
        "5.10-5.16",
        "5.17-5.23",
        "5.24-5.30",
        "5.31-6.6",
        "4.12-4.18",
        "4.19-4.25",
        "4.25-5.2",
        "5.3-5.9",
        "5.10-5.16",
        "5.17-5.23",
        "5.24-5.30",
        "5.31-6.6",
      ],
      axisLabel: {
        rotate: 90, // 旋转 X 轴标签 90 度
        interval: 0, // 每个标签都显示
        margin: 10, // 调整标签和轴之间的距离
      },
      splitLine: {
        show: true,
      },
      splitArea:{
        show:true,
        interval:(index,value)=>{
          return value==='4.12-4.18' //设置间隔区域
        }
      },
      boundaryGap: true,
      axisTick: {
        show: true,
        alignWithLabel: false,
        interval: 0,
      },
    },
    {
      type: "category",
      position: "bottom",
      boundaryGap: true,
      data: [],
      min: 0,
      max: 11,
      axisTick: {
        show: true,
        interval: function (param) {
          return param % 4 === 0 || !param;
        },
        length: 110,
        alignWithLabel: false,
      },
    },
  ],
  series: [
    {
      type: "line",
      data: [99, 96, 97.3, 99, 98, 94, 93, 92],
      label: {
        show: true,
        position: "top",
        offset:[0,-15],//微调数值位置
        formatter: "{c}%", // 格式化为百分比
      },
      markLine: {
        lineStyle: { width: 2 }, // 标线大小
        symbol: "none", //去掉线最后面的箭头,
        data: [
          {
            name: "水平线1",
            yAxis: 96, // Y 值为给定值的标记线，用户自定义水平标线的值
            lineStyle: { color: "green" },
            symbolRotate: 1, // 起点标记的旋转角度
            symbolSize: [25, 25], // 起点标记的大小
          },
        ],
      },
    },
    {
      type: "line",
      smooth: true,
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        99,
        96,
        97.3,
        99,
        98,
        94,
        93,
        92,
      ],
    },
    {
      type: "line",
      smooth: true,
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        99,
        96,
        97.3,
        99,
        98,
        94,
        93,
        92,
      ],
    },
    {
      type: "line",
      smooth: true,
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        99,
        96,
        97.3,
        99,
        98,
        94,
        93,
        92,
      ],
    },
    {
      type: "line",
      smooth: true,
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        99,
        96,
        97.3,
        99,
        98,
        94,
        93,
        92,
      ],
    },
    {
      type: "custom",
      //@ts-expect-error
      renderItem: function (params, api) {
        var valX = api.value(0);
        var pointA = api.coord([valX, 0]);
        //@ts-expect-error
        var pointB = api.coord([valX - 1, 0]);

        return {
          type: "text",
          style: {
            text: api.value(2),
            x: (pointA[0] + pointB[0]) / 2,
            y: 320, //距上方距离,按需调整
            fill: "#333",
            fontSize: 14,
            textAlign: "center",
          },
        };
      },
      data: [
        [4, 0, "整体"],
        [12, 0, "Ceva"],
        [20, 0, "Estes"],
        [28, 0, "GIGA"],
        [36, 0, "Metro"],
      ],
    },
  ],
};
instance.setOption(option);
}
loadEchart()
</script>

<template>
  <div ref="echart" style="width: 100%; height: 400px"></div>
</template>

<style scoped></style>
