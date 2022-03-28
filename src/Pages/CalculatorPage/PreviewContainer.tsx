import React, { FC, memo } from "react";
import { TeslaInfoList } from "./constants";
import { TeslaModel } from "./types";
import "./PreviewContainer.css";

interface PreviewContainerProps {
  model: TeslaModel;
}

const PreviewContainer: FC<PreviewContainerProps> = ({ model }) => {
  const info = TeslaInfoList.find((m) => m.model === model)!;

  return (
    <div className="pic-container">
      <img src={info.previewImageURL} className="prev-pic" />
    </div>
  );
};

export default memo(PreviewContainer);
