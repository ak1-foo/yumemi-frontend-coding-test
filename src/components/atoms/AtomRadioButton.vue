<template>
  <div>
    <input
      v-model="checkedValue"
      type="radio"
      :name="prop.name"
      :value="prop.value"
    />
  </div>
</template>

<script setup lang="ts">
const checkedValue = defineModel<string | number>();
const prop = defineProps<{
  name: string;
  value: string | number;
}>();
</script>
