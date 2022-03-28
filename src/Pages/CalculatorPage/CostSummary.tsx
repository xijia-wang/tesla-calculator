import React, { FC, memo } from "react";
import "./CostSummary.css";

interface PreviewContainerProps {
  mile: number;
  maintainance: number;
  insurance: number;
  price: number;
  newInsurance: number;
  newMaintainance: number;
}

const CostTracker: FC<PreviewContainerProps> = ({
  mile,
  maintainance,
  insurance,
  price,
  newInsurance,
  newMaintainance,
}) => {
  const resultDenominator =
    mile * 0.07 +
    maintainance +
    insurance -
    (mile * 0.057 + newMaintainance + newInsurance);

  let result = 0;

  if (resultDenominator !== 0) {
    result = price / resultDenominator;
  }

  if (result < 0) {
    return (
      <div className="summary">
        <p>
          You will never reach the break-even point, because your current annual
          cost is ${maintainance + insurance} and your new annual cost is $
          {newInsurance + newMaintainance} (${newInsurance} for insurance and $
          {newMaintainance} for maintainance)
        </p>
      </div>
    );
  }

  return (
    <div className="summary">
      <p>You will reach break-even point in: </p>
      <div className="result">{Math.round(result)} years</div>
    </div>
  );
};

export default memo(CostTracker);
