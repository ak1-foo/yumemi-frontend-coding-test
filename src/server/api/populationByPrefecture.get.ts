import type {
  PopulationResult,
  ResasPopulationApiResponse,
} from "~/types/population";

export default defineEventHandler(async (event) => {
  const resasApiKey: string = useRuntimeConfig().resasApiKey;
  const query = getQuery(event);

  try {
    const response = await $fetch<ResasPopulationApiResponse>(
      "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
      {
        method: "GET",
        headers: {
          "X-API-KEY": resasApiKey,
        },
        query: {
          prefCode: query.prefCode,
          cityCode: "-", // all cities
        },
      },
    );
    const populationData: PopulationResult[] = response.result.data;
    return populationData;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "An error occurred while fetching population data: " + error,
    });
  }
});
