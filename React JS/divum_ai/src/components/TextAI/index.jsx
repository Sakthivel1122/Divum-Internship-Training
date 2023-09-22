import React, { useState } from "react";
import "./TextAI.css";
import Icons from "../../assets/icons/Icons";
import Data from "../../constants/Data.json";
import { TextAIStrings } from "../../constants/StringConstant";
const TextAI = () => {
  const [formData, setFormData] = useState({
    product: "",
    filter: "",
    tone: "",
    language: "",
  });
  const [displayData, setDisplayData] = useState(null);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    console.log(formData);
    setDisplayData(Data.filter((data) => data.product === formData.product));
  };
  return (
    <div className="TextAI">
        <div className="TextAI-top-wrapper">
          <h1>
            <span className="main-title">{TextAIStrings.main_title}</span>
          </h1>
          <p className="main-title-desc">{TextAIStrings.main_title_desc}</p>
          <form className="form-container">
            <div className="top-form-wrapper">
              <div className="input-box-wrapper">
                <label htmlFor="">{TextAIStrings.form.label_1}</label>
                <input
                  type="text"
                  name="product"
                  className="input-box"
                  value={formData.product}
                  onChange={handleOnChange}
                  placeholder={TextAIStrings.form.placeholder_1}
                />
              </div>
              <div className="input-box-wrapper">
                <label htmlFor="">{TextAIStrings.form.label_2}</label>
                <input
                  type="text"
                  name="filter"
                  className="input-box"
                  value={formData.filter}
                  onChange={handleOnChange}
                  placeholder={TextAIStrings.form.placeholder_2}
                />
              </div>
            </div>
            <div className="bottom-form-wrapper">
              <div className="bottom-input-box-wrapper">
                <label htmlFor="">{TextAIStrings.form.label_3}</label>
                <input
                  type="text"
                  name="tone"
                  className="input-box"
                  value={formData.tone}
                  onChange={handleOnChange}
                  placeholder={TextAIStrings.form.placeholder_3}
                />
              </div>
              <div className="bottom-input-box-wrapper">
                <label htmlFor="">{TextAIStrings.form.label_4}</label>
                <input
                  type="text"
                  name="language"
                  className="input-box"
                  value={formData.language}
                  onChange={handleOnChange}
                  placeholder={TextAIStrings.form.placeholder_4}
                />
              </div>
            </div>
            <button
              className="generate-btn"
              type="button"
              onClick={handleSubmit}
            >
              <img src={Icons.generate_btn_icon} alt="" />
              <p>
                <span>{TextAIStrings.form.submit_btn}</span>
              </p>
            </button>
          </form>
        </div>

        <div className="TextAI-bottom-wrapper">
          {displayData &&
            displayData.map((data) => {
              return (
                <div className="result-container">
                  <h1 key={data.id}>{data.product}</h1>
                  <br />
                  <div className="result-data-wrapper">
                    {data.data.map((para) => {
                      return (
                        <>
                          <p key={para.id}>{para}</p>
                        </>
                      );
                    })}
                  </div>
                  <div className="suggestion-btns-wrapper">
                    {data.buttons.map((btn) => {
                      return <button className="suggestion-btn">{btn}</button>;
                    })}
                  </div>
                </div>
              );
            })}
        </div>
    </div>
  );
};

export default TextAI;
