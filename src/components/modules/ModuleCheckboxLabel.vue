<template>
  <div>
    <label class="checkbox-label">
      <AtomsAtomCheckbox
        v-model="checkedArray"
        :value="prop.value"
      />
      {{ prop.label }}
    </label>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
  label: string;
  value: string | number;
}>();
const checkedArray = defineModel<string[] | number[]>();
</script>

<style scooped>
.checkbox-label {
  display: flex;
  align-items: center;
}
</style>
