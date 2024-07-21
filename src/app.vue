<template>
  <div>
    <OrganismsOrganismSelectPrefecture />
  </div>
  {{ apiresponese }}
</template>

<script setup lang="ts">
const { data: apiresponese } = useFetch("/api/prefectureNames");
</script>
