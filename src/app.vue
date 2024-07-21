<template>
  <div>
    <OrganismsOrganismSelectPrefecture />
    hokkaido data = {{ hokkaidoData }}
  </div>
</template>

<script setup lang="ts">
import type { PopulationResult } from "~/types/population";

// sample
const { data: hokkaidoData } = useFetch<PopulationResult[]>(
  "/api/populationByPrefecture",
  {
    method: "GET",
    query: {
      prefCode: 1, // Hokkaido
    },
  },
);
</script>
