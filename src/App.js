import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useMemo, useState } from "react";
function App() {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(50);

  function onWeightChange(e) {
    setWeight(e.target.value);
  }
  function onHeightChange(e) {
    setHeight(e.target.value);
  }
   const output =useMemo(()=>{
    const calculateHeight= height/100;
    return(weight/(calculateHeight*calculateHeight)).toFixed(1)
   },[weight,height])
  return (
    <main className="bg-pink d-flex align-items-center justify-content-center vh-100">
      <div className=" d-flex flex-column justify-content-center align-items-center border border-black col col-lg-6">
        <div className="bg-primary w-100 ">
      <h1 className=" text-center">BMI CALCULATOR</h1>
      </div>
      <div className="input-section bg-info w-100 text-center p-1">
        <div>
          <p className="slider-output">weight:{weight}kg</p>
          <input
            className="input-slider"
            type="range"
            step="1"
            min="10"
            max="300"
            onChange={onWeightChange}
          />
        </div>
        <div>
          <p className="slider-output">height:{height}cm</p>
          <input
            className="input-slider"
            type="range"
            step="1"
            min="70"
            max="250"
            onChange={onHeightChange}
          />
        </div>
        <div className="output-section">
          <p>Your BMI is :</p>
          <p classname="output">{output}</p>
        </div>
      </div>
      </div>
    </main>
  );
}

export default App;
