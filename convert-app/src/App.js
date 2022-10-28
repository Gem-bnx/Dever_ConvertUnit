import "./App.css";
import {useState} from "react";
function App() {

  const [left, setLeft] = useState({
    amount: undefined,
    unit: "km"
  })
  const [right, setRight] = useState({
    amount: undefined,
    unit: "km"
  })
  const [choice, setChoice] = useState("");

  let toMeter = {
    "km": 1000,
    "hm": 100,
    "dam": 10,
    "m": 1,
    "dm": 0.1,
    "cm": 0.01,
    "mm": 0.001,
  };

  let fromMeter = {
    "km": 0.001,
    "hm": 0.01,
    "dam": 0.1,
    "m": 1,
    "dm": 10,
    "cm": 100,
    "mm": 1000,
  };
  
  const handleNewConvertLeft = () => {
    setChoice("L");
    setRight({...right, amount: 0})
  }
  const handleNewConvertRight = () => {
    setChoice("R");
    setLeft({...left, amount: 0})
  }
  const handleOnClick = () =>{
    if (choice === "L"){
      if (isNaN(left.amount))
        (alert("Not Number Value! "))
      else setRight({...right, amount: (left.amount*toMeter[left.unit]*fromMeter[right.unit]).toFixed(10)}) ;
    }
    if (choice === "R"){
      if (isNaN(right.amount))
      (alert("Not Number Value! "))
      else setLeft({...left, amount: (right.amount*toMeter[right.unit]*fromMeter[left.unit]).toFixed(10)}) ;
    }
    setChoice("");
  }
  const handleOnChangeLeftValue = (e) => {
    setLeft({...left, amount: e.target.value});
  }
  const handleOnChangeLeftUnit = (e) => {
    setLeft({...left, unit: e.target.value});
  }
  const handleOnChangeRightValue = (e) => {
    setRight({...right, amount: e.target.value});
  }
  const handleOnChangeRightUnit = (e) => {
    setRight({...right, unit: e.target.value});
  }
  return (
    <>
    <div className ="content">
      <h1>Convert Unit</h1>
      <div className="input">
        <input 
        onClick={handleNewConvertLeft}
        disabled = {(choice === "R") ? true : false}
        value={left.amount}
        onChange={(e) => handleOnChangeLeftValue(e)}
        type="text"  
        placeholder="Enter value ..."  
         />
        <select 
        value={left.unit}
        onChange={(e) => handleOnChangeLeftUnit(e)}
        defaultValue={"km"}>
          <option value="km">km</option>
          <option value="hm">hm</option>
          <option value="dam">dam</option>
          <option value="m">m</option>
          <option value="dm">dm</option>
          <option value="cm">cm</option>
          <option value="mm">mm</option>
        </select>
      </div>

      <button
      onClick={handleOnClick}
      >Convert</button>

      <div className="input">
        <input 
        onClick={handleNewConvertRight}
        disabled = {(choice === "L") ? true : false}
        value={right.amount}
        onChange={(e) => handleOnChangeRightValue(e)}
        type="text"
        placeholder="Enter value ..."  
        />
        <select 
        value={right.unit}
        onChange={(e) => handleOnChangeRightUnit(e)}
        defaultValue={"km"}>
          <option value="km">km</option>
          <option value="hm">hm</option>
          <option value="dam">dam</option>
          <option value="m">m</option>
          <option value="dm">dm</option>
          <option value="cm">cm</option>
          <option value="mm">mm</option>
        </select>
      </div>
    </div></>
    
  );
}

export default App;
