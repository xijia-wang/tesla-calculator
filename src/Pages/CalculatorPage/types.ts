export interface TeslaInfo {
  name: string;
  model: TeslaModel;
  cost: number;
  previewImageURL: string;
  maintainance: number;
  insurance: number;
}

export enum TeslaModel {
  M3P = "M3P",
  MYL = "MYL",
  MS = "MS",
  MSP = "MSP",
  M3L = "M3L",
  MX = "MX",
  MXP = "MXP",
  MYP = "MYP",
}
