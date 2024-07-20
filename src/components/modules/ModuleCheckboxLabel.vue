<template>
  <div>
    <label class="checkbox-label">
      <AtomsAtomCheckbox
        v-model="checkedArray"
        :value="prop.label"
      />
      {{ prop.label }}
    </label>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
  label: string;
}>();
const checkedArray = defineModel<string[]>();
</script>

<style scooped>
.checkbox-label {
  display: flex;
  align-items: center;
}
</style>
