<template>
  <div>
    <p>
      <AtomsAtomCheckbox v-model="checked" />
      checked = {{ checked }}
    </p>
    <p>
      <AtomsAtomCheckbox
        v-model="checkedArray"
        value="foo"
      />
      foo
      <AtomsAtomCheckbox
        v-model="checkedArray"
        value="bar"
      />
      bar
      <br />
      checkedArray = {{ checkedArray }}
    </p>
  </div>
</template>

<script setup lang="ts">
const checked = ref<boolean>(false);
const checkedArray = ref<string[]>([]);
</script>
