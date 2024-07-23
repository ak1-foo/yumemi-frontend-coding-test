import type {
  PopulationResult,
  PopulationResultWithPrefecture,
} from "~/types/population";

import type { Prefecture } from "~/types/prefectures";

export const usePopulationDataStore = defineStore("populationData", () => {
  const populationData: Ref<PopulationResultWithPrefecture[]> = ref([]);

  const updatePopulationData = async (prefectures: Prefecture[]) => {
    console.log("prefectures=", prefectures);

    let allExist = true;

    // `prefectures`の各`prefCode`が`populationData`に存在するか確認
    let fetchTargetPrefecture: Prefecture;
    for (const prefecture of prefectures) {
      const isExist = populationData.value.some(
        (data) => data.prefecture.prefCode === prefecture.prefCode,
      );
      if (!isExist) {
        allExist = false;
        fetchTargetPrefecture = prefecture;
        break; // 一つでも存在しなければループを抜ける
      }
    }

    console.log("13 allExist = ", allExist);

    // `prefectures`の全ての`prefCode`が`populationData`に存在する場合は処理を終了
    if (allExist) {
      return;
    }

    console.log("25 allExist = ", allExist);
    try {
      const fetchedPopulationData: PopulationResult[] = await $fetch(
        "/api/populationByPrefecture",
        {
          method: "GET",
          query: {
            prefCode: fetchTargetPrefecture.prefCode,
          },
        },
      );
      populationData.value.push({
        prefecture: fetchTargetPrefecture,
        data: fetchedPopulationData,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    populationData,
    updatePopulationData,
  };
});
