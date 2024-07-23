<template>
  <div>
    <div
      v-for="(label, index) in stored.populationType"
      :key="index"
    >
      <ModulesModuleRadioButtonLabel
        v-model="stored.selectedPopulationTypeCode"
        name="populationType"
        :label="label"
        :value="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const stored = usePopulationTypeStore();
</script>
