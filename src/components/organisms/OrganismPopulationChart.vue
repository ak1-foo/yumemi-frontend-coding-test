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
  YearlyPopulationData,
  PopulationResultWithPrefecture,
} from "~/types/population";

const storedPopulationType = usePopulationTypeStore();
const storedPrefecture = usePrefectureStore();
const storedPopulationData = usePopulationDataStore();

const selectedPopulationData: Ref<PopulationResultWithPrefecture[]> = ref([]);
watchEffect(async () => {
  // `sortedSelectedPrefecturesCode`から選択された都道府県のコードを取得
  const selectedCodes = storedPrefecture.sortedSelectedPrefecturesCode;

  if (storedPrefecture.prefectures == null) {
    return;
  }

  // selectedCodesに対応する Prefecture を取得
  const selectedPrefectures = storedPrefecture.prefectures.filter((pref) =>
    selectedCodes.includes(pref.prefCode),
  );

  // populationdataを更新
  await storedPopulationData.updatePopulationData(selectedPrefectures);

  // `populationData`から選択されたコードに一致するデータだけをフィルタリング
  selectedPopulationData.value = storedPopulationData.populationData.filter(
    (prefData) => selectedCodes.includes(prefData.prefecture.prefCode),
  );
});

const chartOptions = computed(() => {
  if (!storedPopulationData.populationData) {
    return {};
  }
  const series = selectedPopulationData.value.map((prefData) => {
    const selectedData =
      prefData.data[storedPopulationType.selectedPopulationTypeCode];
    return {
      name: prefData.prefecture.prefName,
      data: selectedData.data.map((item: YearlyPopulationData) => [
        item.year,
        item.value,
      ]),
    };
  });
  return {
    title: {
      text: storedPopulationType.populationType[
        storedPopulationType.selectedPopulationTypeCode
      ],
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
    series: series,
  };
});
</script>
