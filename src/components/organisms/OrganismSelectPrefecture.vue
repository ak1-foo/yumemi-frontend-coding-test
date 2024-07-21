<template>
  <div>
    selected = {{ selectedPrefectures }}
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

const selectedPrefectures = ref<number[]>([]);
const { data: prefectures } = useFetch<Prefecture[]>("/api/prefectureNames");
</script>
