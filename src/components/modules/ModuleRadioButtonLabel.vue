<template>
  <div>
    <label class="radiobutton-label">
      <AtomsAtomRadioButton
        v-model="selected"
        :value="prop.value"
        :name="prop.name"
      />
      {{ prop.label }}
    </label>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
  label: string;
  name: string;
  value: string | number;
}>();
const selected = defineModel<string | number>();
</script>

<style scooped>
.radiobutton-label {
  display: flex;
  align-items: center;
}
</style>
