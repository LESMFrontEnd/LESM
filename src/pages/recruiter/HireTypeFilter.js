import React from "react";
import { useState } from "react";
import "./HireTypeFilter.css"
function HireTypeFilter(){
    const optionsList = ["Contract To Hire", "Permanent"];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select Hire type");
  
    const toggleOptions = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    return(
        <div className={`hireType-select-menu ${isOpen ? "active" : ""}`}>
        <div className="hireType-select-btn" onClick={toggleOptions}>
          <span className="hireType-sBtn-text">{selectedOption}</span>
          <i className="bx bx-chevron-down"></i>
        </div>
  
        <ul className="hireType-options">
          {optionsList.map((option, index) => (
            <li
              key={index}
              className="hireType-option"
              onClick={() => handleOptionClick(option)}
            >
              <span className="hireType-option-text">{option}</span>
            </li>
          ))}
        </ul>
      </div>
    );
}
export default HireTypeFilter;