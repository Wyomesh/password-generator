import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [isCapital, setCapital] = useState(false);
  const [isSmall, setSmall] = useState(false);
  const [isNum, setNum] = useState(false);
  const [isSpecial, setSpecial] = useState(false);
  const [isAdditional, setAdditional] = useState(false);
  const [isRareChars, setRareChars] = useState(false);
  const [val, setVal] = useState(15);
  const [generatedStr, setGeneratedStr] = useState("");
  const [isDarkMode, setDarkMode] = useState(false);
  const capital = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
  const small = "abcdefghijklmnopqrstuvwxyz";
  const special = "#$%&@";
  const additional = "!*+-=";
  const rareChars = ",.:;<>?^_";
  const number = "0123456789";

  const handleVal = (e) => {
    setVal(e.target.value);
  };
  const handleCapital = (e) => {
    setCapital(e.target.checked);
  };
  const handleSmall = (e) => {
    setSmall(e.target.checked);
  };
  const handleNumber = (e) => {
    setNum(e.target.checked);
  };
  const handleSpecial = (e) => {
    setSpecial(e.target.checked);
  };
  const handleAdditional = (e) => {
    setAdditional(e.target.checked);
  };
  const handleRareChars = (e) => {
    setRareChars(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let availableStr = "";
    if (isCapital) availableStr += capital;
    if (isSmall) availableStr += small;
    if (isNum) availableStr += number;
    if (isSpecial) availableStr += special;
    if (isAdditional) availableStr += additional;
    if (isRareChars) availableStr += rareChars;
    if (availableStr.length === 0) {
      window.confirm("Select atleast one field to continue");
    } else {
      let str = "";
      for (let i = 0; i < val; i++) {
        const ind = Math.floor(Math.random() * availableStr.length);
        str += availableStr[ind];
      }
      setGeneratedStr(str);
    }
  };
  const handleCopy = () => {
    if (generatedStr === "") {
      window.confirm("Empty password field");
    } else {
      navigator.clipboard.writeText(generatedStr);
    }
  };
  const body = document.querySelector("body");
  const handleRGBMode = () => {
    const toggleOn = document.querySelector(".fa-toggle-on");
    body.style.background = "white";
    body.style.color = "black";
    toggleOn.style.display = "none";
    const toggleOff = document.querySelector(".fa-toggle-off");
    toggleOff.style.display = "grid";
  };
  const handleDarkMode = () => {
    const toggleOff = document.querySelector(".fa-toggle-off");
    body.style.background = "black";
    body.style.color = "white";
    toggleOff.style.display = "none";
    const toggleOn = document.querySelector(".fa-toggle-on");
    toggleOn.style.display = "grid";
  };
  return (
    <>
      <i className="fa fa-toggle-on" onClick={handleRGBMode}></i>
      <i className="fa fa-toggle-off" onClick={handleDarkMode}></i>
      <div className="mainContainer">
        <h1>Random Text and Password Generator</h1>
        <div className="rangeSlider">
          <input
            id="rangeVal"
            type="range"
            min={0}
            max={50}
            step={1}
            value={val}
            onChange={handleVal}
          />
          <span className="hoverVal" style={{ left: `${(val / 50) * 50}vw` }}>
            {val}
          </span>
        </div>
        <div className="generatedPwdContainer">
          <input
            id="generatedPwdField"
            type="text"
            value={generatedStr}
            readOnly
          />
          <i className="fa fa-copy" onClick={handleCopy}></i>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <div className="inputTypes">
              <input type="checkbox" id="capital" onClick={handleCapital} />
              <label htmlFor="capital">Capital Letters</label>
            </div>
            <div className="inputTypes">
              <input type="checkbox" id="small" onClick={handleSmall} />
              <label htmlFor="small">Small Letters</label>
            </div>
            <div className="inputTypes">
              <input type="checkbox" id="number" onClick={handleNumber} />
              <label htmlFor="number">Digits</label>
            </div>
            <div className="inputTypes">
              <input type="checkbox" id="special" onClick={handleSpecial} />
              <label htmlFor="special">
                Special Characters
                {/* &#0035; &#0036; &#0037; &#0038; &#0064; */}
              </label>
            </div>
            <div className="inputTypes">
              <input
                type="checkbox"
                id="extraSpcl"
                onClick={handleAdditional}
              />
              <label htmlFor="extraSpcl">
                Additional Characters
                {/* &#0033; &#0042; &#0043; &#0045; &#0061; */}
              </label>
            </div>
            <div className="inputTypes">
              <input type="checkbox" id="maxSecure" onClick={handleRareChars} />
              <label htmlFor="maxSecure">
                Rarely Used Characters
                {/* &#0044; &#0046; &#0058; &#0059; &#0060; &#0062; &#0063; &#0094;
              &#0095; */}
              </label>
            </div>
          </div>
          <button>Generate</button>
        </form>
      </div>
    </>
  );
};

export default App;
