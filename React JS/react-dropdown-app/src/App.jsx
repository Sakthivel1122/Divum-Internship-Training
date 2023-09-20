import React, { useState } from "react";
import "./App.css";
import { options, languages } from "./constants/FilterForm";
const App = () => {
  const [formData, setFormData] = useState({
    topic: "",
    filter: "",
    tone: "1",
    language: "1",
  });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSubmit = () => {
    console.log(formData);
  }
  return (
    <div className="App">
      <div className="form-container">
        <form className="filter-form">
          <div className="input-wrapper">
            <label htmlFor="" className="form-label">
              Enter the Topic
            </label>
            <input
              name="topic"
              type="text"
              value={formData.topic}
              onChange={handleOnchange}
              placeholder="Adidas Sneakers"
              className="input-box"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="" className="form-label">
              Filters
            </label>
            <input
              name="filter"
              type="text"
              value={formData.filter}
              onChange={handleOnchange}
              placeholder="Water Proof"
              className="input-box"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="" className="form-label">
              Select Tone
            </label>
            <select
              name="tone"
              className="input-box tone-dropdown"
              onChange={handleOnchange}
            >
              {options.map((option) => (
                <option className="option" value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="input-wrapper">
            <label htmlFor="" className="form-label">
              Select Language
            </label>
            <select
              name="language"
              className="input-box language-dropdown"
              onChange={handleOnchange}
            >
              {languages.map((language) => (
                <option className="option" value={language.value}>
                  {language.label}
                </option>
              ))}
            </select>
          </div>
          <button type="button" className="submit-btn" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="description-container"></div>
    </div>
  );
};

export default App;
