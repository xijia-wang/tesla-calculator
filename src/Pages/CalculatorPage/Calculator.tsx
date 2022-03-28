import React, { useMemo, useState } from "react";
import "./Calculator.css";
import PreviewContainer from "./PreviewContainer";
import CostTracker from "./CostSummary";
import { TeslaModel } from "./types";
import { TeslaInfoList } from "./constants";
import { toNumber } from "./utils";

const Calculator = () => {
  const [model, setModel] = useState(TeslaModel.MS);
  const [mile, setMile] = useState("");
  const [maintainance, setMaintainance] = useState("");
  const [insurance, setInsurance] = useState("");
  const [price, setPrice] = useState(99990);
  const [newInurance, setNewInsurance] = useState(0);
  const [newMaintainance, setNewMaintainance] = useState(0);

  const options = useMemo(
    () =>
      TeslaInfoList.map((info) => (
        <option key={info.model} value={info.model}>
          {info.name}
        </option>
      )),
    [TeslaInfoList]
  );

  const handleOnChangeMile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMile(e.target.value);
  };

  const handleOnChangeCarModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = e.target.value;
    const info = TeslaInfoList.find((e) => e.model === model)!;
    setModel(info.model);
    setPrice(info.cost);
    setNewInsurance(info.insurance);
    setNewMaintainance(info.maintainance);
  };

  const handleMaintainanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maintainance = e.target.value;
    setMaintainance(maintainance);
  };

  const handleInsuranceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const insurance = e.target.value;
    setInsurance(insurance);
  };

  return (
    <div className="calculator">
      <div>
        <PreviewContainer model={model} />
        <div className="field-container">
          <label htmlFor="model-field">
            Please choose the model you would like to purchase
          </label>
          <select id="model-field" onChange={handleOnChangeCarModel}>
            {options}
          </select>
        </div>
        <div className="field-container">
          <label htmlFor="mile-field">
            How many miles do you drive per month?
          </label>
          <input
            id="mile-field"
            type="number"
            value={mile}
            onChange={handleOnChangeMile}
          />
        </div>
        <div className="field-container">
          <label htmlFor="maintainance-field">
            How much do you pay for annual maintainance?
          </label>
          <input
            id="maintainance-field"
            type="number"
            value={maintainance}
            onChange={handleMaintainanceChange}
          />
        </div>
        <div className="field-container">
          <label htmlFor="insurance-field">
            How much do you pay for insurance every year?
          </label>
          <input
            id="insurance-field"
            type="number"
            value={insurance}
            onChange={handleInsuranceChange}
          />
        </div>
      </div>
      <CostTracker
        mile={toNumber(mile)}
        maintainance={toNumber(maintainance)}
        insurance={toNumber(insurance)}
        price={price}
        newInsurance={newInurance}
        newMaintainance={newMaintainance}
      />
    </div>
  );
};

export default Calculator;
