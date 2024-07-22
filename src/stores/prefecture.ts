import type { Prefecture } from "~/types/prefecture";

export const usePrefectureStore = defineStore("prefecture", () => {
  const { data: prefectures } = useFetch<Prefecture[]>("/api/prefectureNames");

  const selectedPrefecturesCode: Ref<number[]> = ref([]);
  const sortedSelectedPrefecturesCode: Ref<number[]> = computed(() => {
    return [...selectedPrefecturesCode.value].sort((a, b) => a - b);
  });

  return {
    prefectures,
    selectedPrefecturesCode,
    sortedSelectedPrefecturesCode,
  };
});
