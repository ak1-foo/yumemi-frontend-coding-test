import type {
  ResasPrefecturesApiResponse,
  Prefecture,
} from "~/types/prefectures";

export default defineEventHandler(async () => {
  const resasApiKey: string = useRuntimeConfig().resasApiKey;

  try {
    const response = await $fetch<ResasPrefecturesApiResponse>(
      "https://opendata.resas-portal.go.jp/api/v1/prefectures",
      {
        method: "GET",
        headers: {
          "X-API-KEY": resasApiKey,
        },
      },
    );

    const prefectures: Prefecture[] = response.result;
    return prefectures;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "An error occurred while fetching prefecture names.: " + error,
    });
  }
});
