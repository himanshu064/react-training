import React, { useState } from "react";
import {
  numbers,
  upperCaseLetters,
  lowerCaseletters,
  specialCharacters,
} from "./Character";
import "./App.css";
const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [isUpperCase, setUpperCase] = useState(false);
  const [isLowerCase, setLowerCase] = useState(false);
  const [isNumber, setNumberincluded] = useState(false);
  const [isSpecialSymbol, setSpecialSymbol] = useState(false);
  const GenreatePassowrd = () => {
    if (!isLowerCase && !isUpperCase && !isNumber && !isSpecialSymbol) {
      window.alert("To generate password you must select atleast one checkbox");
    } else {
      let characterList = "";
      if (isNumber) {
        characterList = characterList + numbers;
      }
      if (isUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (isLowerCase) {
        characterList = characterList + lowerCaseletters;
      }
      if (isSpecialSymbol) {
        characterList = characterList + specialCharacters;
      }
      setPassword(createPassword(characterList));
      window.alert("password genrated successfully");
    }
  };
  const createPassword = (characterList) => {
    let Password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.round(Math.random() * characterListLength);
      Password = Password + characterList.charAt(charIndex);
    }
    return Password;
  };
  const handleClipBoard = () => {
    if (password === "") {
      window.alert("no password generated");
    } else {
      copyToclipBoard(password);
    }
  };
  const copyToclipBoard = (pass) => {
    navigator.clipboard.writeText(password);
  };
  return (
    <>
      <div className="password-container">
        <div className="password p-3">
          <h1 className="p-4">Generate password</h1>
          <div className="d-flex justify-content-around align-items-center">
            <h2 className="genratedPass">{password}</h2>
            <button className="btn btn-primary" onClick={handleClipBoard}>
              <i className="fa-solid fa-clipboard "></i>
            </button>
          </div>
          <h1 className="mt-3 password-strength">week password</h1>
          <div className="mt-4 password-input ">
            <div className="d-flex justify-content-between align-items-center">
              <label className="form-label">password lenght</label>
              <input
                type="number"
                className="form-control"
                defaultValue={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
                min="8"
                max="26"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center form-check mt-2">
              <label className="form-label">Add uppercase letter</label>
              <input
                type="checkbox"
                checked={isUpperCase}
                className="form-check-input"
                onChange={(e) => setUpperCase(e.target.checked)}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center form-check mt-2">
              <label className="form-label">Add lowercase letter</label>
              <input
                type="checkbox"
                className="form-check-input"
                checked={isLowerCase}
                onChange={(e) => setLowerCase(e.target.checked)}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center form-check mt-2">
              <label className="form-label">includes number</label>
              <input
                type="checkbox"
                className="form-check-input"
                checked={isNumber}
                onChange={(e) => setNumberincluded(e.target.checked)}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center form-check mt-2">
              <label className="form-label">include symbol's</label>
              <input
                type="checkbox"
                className="form-check-input"
                checked={isSpecialSymbol}
                onChange={(e) => setSpecialSymbol(e.target.checked)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={GenreatePassowrd}>
              Generate password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
