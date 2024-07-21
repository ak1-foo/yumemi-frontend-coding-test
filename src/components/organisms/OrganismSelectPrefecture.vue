<template>
  <div>
    selected = {{ sortedSelectedPrefectures }}
    <div
      v-for="prefecture in prefectures"
      :key="prefecture.prefCode"
    >
      <ModulesModuleCheckboxLabel
        v-model="selectedPrefectures"
        :label="prefecture.prefName"
        :value="prefecture.prefCode"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Prefecture } from "~/types/prefectures";

const { data: prefectures } = useFetch<Prefecture[]>("/api/prefectureNames");

const selectedPrefectures = ref<number[]>([]);
const sortedSelectedPrefectures = computed<number[]>(() => {
  // return ascending order list
  return [...selectedPrefectures.value].sort((a, b) => a - b);
});
</script>
