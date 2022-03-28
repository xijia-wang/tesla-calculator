import { TeslaInfo, TeslaModel } from "./types";
import modelS from "../../Images/ms.jpeg";
import modelSP from "../../Images/msp.jpeg";
import model3P from "../../Images/m3.jpeg";
import model3L from "../../Images/m3l.jpeg";
import modelX from "../../Images/mx.jpeg";
import modelXP from "../../Images/mxp.jpeg";
import modelYP from "../../Images/myp.jpeg";
import modelYL from "../../Images/my.jpeg";

export const TeslaInfoList: TeslaInfo[] = [
  {
    name: "Model S",
    model: TeslaModel.MS,
    cost: 99990,
    previewImageURL: modelS,
    maintainance: 456,
    insurance: 2402,
  },
  {
    name: "Model S - Plaid",
    model: TeslaModel.MSP,
    cost: 135990,
    previewImageURL: modelSP,
    maintainance: 456,
    insurance: 2402,
  },
  {
    name: "Model 3 - Long Range",
    model: TeslaModel.M3L,
    cost: 54990,
    previewImageURL: model3L,
    maintainance: 298,
    insurance: 1712,
  },
  {
    name: "Model 3 - Performance",
    model: TeslaModel.M3P,
    cost: 61990,
    previewImageURL: model3P,
    maintainance: 298,
    insurance: 1712,
  },
  {
    name: "Model X",
    model: TeslaModel.MX,
    cost: 50000,
    previewImageURL: modelX,
    maintainance: 572,
    insurance: 4559,
  },
  {
    name: "Model X - Plaid",
    model: TeslaModel.MXP,
    cost: 114990,
    previewImageURL: modelXP,
    maintainance: 572,
    insurance: 4559,
  },
  {
    name: "Model Y - Long Range",
    model: TeslaModel.MYL,
    cost: 62990,
    previewImageURL: modelYL,
    maintainance: 473,
    insurance: 2878,
  },
  {
    name: "Model Y - Performance",
    model: TeslaModel.MYP,
    cost: 67990,
    previewImageURL: modelYP,
    maintainance: 473,
    insurance: 2878,
  },
];
