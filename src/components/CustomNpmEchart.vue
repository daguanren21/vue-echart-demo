<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script lang="ts" setup>
import VChart from "vue-echarts";
import { ref, watch } from "vue";
import { use } from "echarts/core";
import { GraphChart, TreeChart, TreemapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { TitleComponent,GridComponent } from "echarts/components";
import { EChartsOption } from "echarts";
import { graphOption, treeOption } from ".";
const props = defineProps<{
  step?: number;
}>();
use([GraphChart, CanvasRenderer, TreeChart, TreemapChart, TitleComponent,GridComponent]);

const option = ref<EChartsOption>(treeOption);
watch(
  () => props.step,
  (value) => {
    option.value = value ? graphOption : treeOption;
  }
);
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100vw;
  background-color: #000;
}
</style>
