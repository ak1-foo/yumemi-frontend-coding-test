<template>
  <div>
    <div
      v-for="prefecture in stored.prefectures"
      :key="prefecture.prefCode"
    >
      <ModulesModuleCheckboxLabel
        v-model="stored.selectedPrefecturesCode"
        :label="prefecture.prefName"
        :value="prefecture.prefCode"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const stored = usePrefectureStore();
</script>
