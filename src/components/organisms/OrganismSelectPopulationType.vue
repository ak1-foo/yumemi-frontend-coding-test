<template>
  <div>
    DEGUG: populationType = {{ selectedPopulationTypeID }}
    <div
      v-for="(label, index) in populationType"
      :key="index"
    >
      <ModulesModuleRadioButtonLabel
        v-model="selectedPopulationTypeID"
        name="populationType"
        :label="label"
        :value="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedPopulationTypeID = ref<number>(0);
const populationType = {
  0: "総人口",
  1: "年少人口",
  2: "生産年齢人口",
  3: "老年人口",
};
</script>
