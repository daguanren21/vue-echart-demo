<script setup lang="ts">
import { useTemplateRef, onMounted, nextTick } from "vue";
import * as echarts from "echarts";
const echartRef = useTemplateRef<HTMLElement>('echart');
onMounted(() => {
    const instance = echarts.init(echartRef.value);
    const option: echarts.EChartsOption = {
      title: {
        text: "美国整体3个工作日内发货达成率",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Ceva", "Estes", "GIGA", "Metro"],
        textStyle: {
          color: "#000",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "01/01",
          "02/01",
          "03/01",
          "04/01",
          "05/01",
          "06/01",
          "07/01",
          "08/01",
          "09/01",
          "10/01",
        ],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}%",
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: "Ceva",
          type: "line",
          stack: "总量",
          data: [100, 99.8, 99.9, 99.7, 99.9, 99.5, 99.6, 99.3, 99.4, 99.5],
          smooth: true,
          lineStyle: {
            color: "#7F7FF7",
          },
          symbol: "circle",
          symbolSize: 8,
          itemStyle: {
            color: "#7F7FF7",
          },
        },
        {
          name: "Estes",
          type: "line",
          stack: "总量",
          data: [98.6, 99.0, 98.9, 99.1, 99.4, 99.0, 99.2, 99.3, 99.1, 99.2],
          smooth: true,
          lineStyle: {
            color: "#5F9BFF",
          },
          symbol: "circle",
          symbolSize: 8,
          itemStyle: {
            color: "#5F9BFF",
          },
        },
        {
          name: "GIGA",
          type: "line",
          stack: "总量",
          data: [97.5, 98.0, 98.2, 98.5, 98.9, 99.0, 98.5, 98.7, 98.3, 98.6],
          smooth: true,
          lineStyle: {
            color: "#4D9C99",
          },
          symbol: "circle",
          symbolSize: 8,
          itemStyle: {
            color: "#4D9C99",
          },
        },
        {
          name: "Metro",
          type: "line",
          stack: "总量",
          data: [96.3, 97.0, 96.5, 96.9, 97.2, 96.8, 97.1, 97.4, 97.0, 97.3],
          smooth: true,
          lineStyle: {
            color: "#B88BFF",
          },
          symbol: "circle",
          symbolSize: 8,
          itemStyle: {
            color: "#B88BFF",
          },
        },
      ],
    };
    instance.setOption(option);
});
</script>

<template>
  <div ref="echart" style="width: 100%; height: 400px"></div>
</template>

<style scoped></style>
