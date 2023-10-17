import React from "react";
import { useState } from "react";
import "./JobRoleFilter.css"
function JobRoleFilter() {
    const optionsList = ["Verizon", "Infosys", "Amazon", "Mercedes"];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select client");

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
        <div className={`Job-select-menu ${isOpen ? "active" : ""}`}>
            <div className="Job-select-btn" onClick={toggleOptions}>
                <span className="Job-sBtn-text">{selectedOption}</span>
                <i className="bx bx-chevron-down"></i>
            </div>

            <ul className="Job-options">
                {optionsList.map((option, index) => (
                    <li
                        key={index}
                        className="Job-option"
                        onClick={() => handleOptionClick(option)}
                    >
                        <span className="Job-option-text">{option}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default JobRoleFilter;