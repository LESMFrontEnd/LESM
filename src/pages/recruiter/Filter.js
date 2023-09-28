import React, { useState } from "react";
import "./filter.css";

function Filter() {
  const optionsList = ["Today", "Last 7 Days", "Last 30 Days", "Last 60 Days"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select your option");

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`select-menu ${isOpen ? "active" : ""}`}>
      <div className="select-btn" onClick={toggleOptions}>
        <span className="sBtn-text">{selectedOption}</span>
        <i className="bx bx-chevron-down"></i>
      </div>

      <ul className="options">
        {optionsList.map((option, index) => (
          <li
            key={index}
            className="option"
            onClick={() => handleOptionClick(option)}
          >
            <span className="option-text">{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
