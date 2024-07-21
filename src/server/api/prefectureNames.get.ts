export default defineEventHandler(async () => {
  const resasApiKey: string = useRuntimeConfig().resasApiKey;

  try {
    const response = await $fetch(
      "https://opendata.resas-portal.go.jp/api/v1/prefectures",
      {
        method: "GET",
        headers: {
          "X-API-KEY": resasApiKey,
        },
      },
    );

    // DEBUG:
    console.log(response.result);
    return response.result;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "An error occurred while fetching prefecture names.: " + error,
    });
  }
});
