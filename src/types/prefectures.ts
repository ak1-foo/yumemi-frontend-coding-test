export interface ResasPrefecturesApiResponse {
  message: null;
  result: Prefecture[];
}

export interface Prefecture {
  prefCode: number;
  prefName: string;
}
