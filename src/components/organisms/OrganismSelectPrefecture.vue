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
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Prefecture } from "~/types/prefectures";

const selectedPrefectures = ref<string[]>([]);
const { data: prefectures } = useFetch<Prefecture[]>("/api/prefectureNames");
</script>
