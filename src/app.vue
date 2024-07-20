<template>
  <div>
    <ModulesModuleCheckboxLabel
      v-model="checkedArray"
      label="label1"
    />
    <ModulesModuleCheckboxLabel
      v-model="checkedArray"
      label="label2"
    />
    checkedArray: {{ checkedArray }}
  </div>
</template>

<script setup lang="ts">
const checkedArray = ref<string[]>([]);
</script>
