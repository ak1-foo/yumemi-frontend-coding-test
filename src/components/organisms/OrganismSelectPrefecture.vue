<template>
  <div class="checkboxes-container">
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

<style scoped>
.checkboxes-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
