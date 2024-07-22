export const usePopulationTypeStore = defineStore("populationType", () => {
  const populationType = {
    0: "総人口",
    1: "年少人口",
    2: "生産年齢人口",
    3: "老年人口",
  };

  const selectedPopulationTypeCode: Ref<number> = ref(0);

  return {
    populationType,
    selectedPopulationTypeCode,
  };
});
