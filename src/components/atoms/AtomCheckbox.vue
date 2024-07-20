<template>
  <div>
    <input
      v-model="checked"
      :value="prop.value"
      type="checkbox"
    />
  </div>
</template>

<script setup lang="ts">
const checked = defineModel<string[] | boolean>();
const prop = defineProps<{
  value?: string;
}>();
</script>
