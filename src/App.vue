<script setup lang="ts">
import CustomNpmEchart from "./components/CustomNpmEchart.vue";
import { ref } from "vue";
const step = ref(0);
</script>
<template>
  <div style="height:100%;width: 100%;overflow: hidden;">
    <button style="position: absolute;top:10px;z-index:99999" @click="step = step ? 0 : 1">切换</button>
    <CustomNpmEchart :step="step"></CustomNpmEchart>
  </div>
</template>
