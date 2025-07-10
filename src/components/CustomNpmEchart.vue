<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script lang="ts" setup>
import VChart from "vue-echarts";
import { ref } from "vue";
import { use } from "echarts/core";
import { GraphChart, GraphSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { EChartsOption } from "echarts";
const props = defineProps<{
  step?: number;
}>();
use([GraphChart, CanvasRenderer]);
const data = {
  nodes: [
    {
      name: "@giga/utils",
      id: "giga-utils",
      size: 4,
      category: 0,
    },
    {
      name: "@giga/directive",
      id: "giga-directive",
      size: 4,
      category: 0,
    },
    {
      name: "@yzc/cli",
      id: "yzc-cli",
      category: 1,
      size: 4,
    },
    {
      name: "@yzc/deploy-env",
      id: "deploy-env",
      category: 1,
      size: 4,
    },
    {
      name: "@yzc/driver",
      id: "driver",
      category: 1,
      size: 4,
    },
    {
      name: "@yzc/entrypoints-json",
      id: "entrypoints-json",
      category: 1,
      size: 4,
    },
    {
      name: "@yzc/el-table-sticky-vue2",
      id: "el-table-sticky-vue2",
      category: 1,
      size: 4,
    },
    {
      name: "@yzc/sticky-vue2",
      id: "sticky-vue2",
      category: 1,
      size: 4,
    },
    {
      name: "@yzc/eslint-config",
      id: "eslint-config",
      category: 1,
      size: 4,
    },
    {
      name: "yzc front",
      id: "yzc-front",
      category: 2,
      size: 6,
    },
    {
      name: "海运",
      id: "haiyun",
      category: 2,
      size: 6,
    },
  ] as any[],
  links: [
    {
      source: "yzc-front",
      target: "giga-utils",
    },
    {
      source: "yzc-front",
      target: "giga-directive",
    },
    {
      source: "yzc-front",
      target: "yzc-cli",
    },
    {
      source: "海运",
      target: "eslint-config",
    },
    {
      source: "海运",
      target: "eslint-config",
    },
  ],
};
const option = ref<EChartsOption>({
  series: [
    {
      type: "graph",
      layout: "force",
      animation: false,
      label: {
        position: "right",
        formatter: "{b}",
      },
      draggable: true,
      data: data.nodes.map((node, idx) => {
        return {
          id: node.id,
          name: node.label,
          symbolSize: node.size * 3,
          ...node,
        };
      }),
      force: {
        edgeLength: 5,
        repulsion: 20,
        gravity: 0.2,
      },
      categories: [{ name: "giga" }, { name: "yzc" }, { name: "system" }],
      edges: data.links,
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
