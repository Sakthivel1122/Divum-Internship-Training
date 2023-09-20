import React, { useState } from "react";
import "./BodyArea.css";
import Icons from "../../assets/icons/Icons";
const BodyArea = () => {
  const [formData, setFormData] = useState({
    product: "",
    filter: "",
    tone: "",
    language: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div className="BodyArea">
      <div className="BodyArea-container">
        <div className="BodyArea-top-wrapper">
          <h1>
            <span className="main-title">Text ProductDescriber</span>
          </h1>
          <p className="main-title-desc">
            ProductDescriber is a text-based tool that generates concise and
            informative product descriptions in just a few lines, making it
            ideal for online listings and marketing materials.
          </p>
          <div className="form-container">
            <form>
              <div className="top-form-wrapper">
                <div className="input-box-wrapper">
                  <label htmlFor="">Product Name</label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleOnChange}
                    placeholder="Enter Here"
                  />
                </div>
                <div className="input-box-wrapper">
                  <label htmlFor="">Filter</label>
                  <input
                    type="text"
                    name="filter"
                    value={formData.filter}
                    onChange={handleOnChange}
                    placeholder="Waterproof"
                  />
                </div>
              </div>
              <div className="bottom-form-wrapper">
                <div className="input-box-wrapper">
                  <label htmlFor="">Select Tone</label>
                  <input
                    type="text"
                    name="tone"
                    value={formData.tone}
                    onChange={handleOnChange}
                    placeholder="Enter Here"
                  />
                </div>
                <div className="input-box-wrapper">
                  <label htmlFor="">Select Language</label>
                  <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleOnChange}
                    placeholder="Enter Here"
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
                  <span>Generate</span>
                </p>
              </button>
            </form>
          </div>
        </div>

        <div className="BodyArea-bottom-wrapper"></div>
      </div>
    </div>
  );
};

export default BodyArea;
