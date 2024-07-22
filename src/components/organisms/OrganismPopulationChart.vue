<template>
  <div>
    <ClientOnly>
      <Chart :options="chartOptions" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { Chart } from "highcharts-vue";
import type {
  PopulationResult,
  YearlyPopulationData,
} from "~/types/population";

// TODO: sample
const { data: hokkaidoData } = useFetch<PopulationResult[]>(
  "/api/populationByPrefecture",
  {
    method: "GET",
    query: {
      prefCode: 1, // Hokkaido
    },
  },
);

const chartOptions = computed(() => {
  if (!hokkaidoData) {
    return {};
  }
  return {
    title: {
      text: "北海道 総人口",
    },
    lang: {
      numericSymbols: undefined,
    },
    xAxis: {
      title: {
        text: "年度",
      },
    },
    yAxis: {
      title: {
        text: "人口",
      },
      labels: {
        // ex: 500k -> 500,000
        formatter: function (
          this: Highcharts.AxisLabelsFormatterContextObject,
        ) {
          return this.value.toLocaleString();
        },
      },
    },
    series: [
      {
        name: hokkaidoData.value[0].label,
        data: hokkaidoData.value[0].data.map((item: YearlyPopulationData) => [
          item.year,
          item.value,
        ]),
      },
    ],
  };
});
</script>
