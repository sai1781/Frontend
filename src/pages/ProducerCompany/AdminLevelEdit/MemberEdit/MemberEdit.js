import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { BsCalendar } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { Button } from "antd";
import "./MemberEdit.css";

const MemberEdit = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption1] = useState("");
  const options = [
    "Account Number 2",
    "Account Number 2",
    "Account Number 2",
    "Account Number 2",
    "Account Number 2",
    "Account Number 2",
    "Account Number 2",
    "Account Number 2",
    "Account Number 2",
    "Account Number 2",
  ];

  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [selectedOption1, setSelectedOption2] = useState("");
  const options1 = ["Member", "Class B"];
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption1(option);
    setDropdownOpen(false);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOptionClick1 = (option1) => {
    setSelectedOption2(option1);
    setDropdownOpen1(false);
  };

  return (
    <div className="containerStyle">
      <div className="boxStyle">
        <div className="dropdown-input-container">
          <label className="InputLabel">Category:</label> &nbsp; &nbsp;
          <input
            className="InputContainer"
            type="text"
            value={selectedOption1}
            placeholder="Select"
            onClick={toggleDropdown1}
            readOnly
          />
          <div className="dropdown-icon" onClick={toggleDropdown1}>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          {isDropdownOpen1 && (
            <div className="dropdown-options">
              {options1.map((option1) => (
                <div key={option1} onClick={() => handleOptionClick1(option1)}>
                  {option1}
                </div>
              ))}
            </div>
          )}
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp;
        <div className="dropdown-input-container">
          <label className="InputLabel">Member ID:</label> &nbsp; &nbsp;
          <input
            className="InputContainer"
            type="text"
            value={selectedOption}
            placeholder="Select"
            onClick={toggleDropdown}
            readOnly
          />
          <div className="dropdown-icon" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-options">
              {options.map((option) => (
                <div key={option} onClick={() => handleOptionClick(option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="InputContainer">
          <label className="InputLabel" htmlFor="dateInput">
            Joining Date:
          </label>
          <DatePicker
            className="DateInput"
            id="dateInput"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <br /> <br />
        <div>
          {/* <button style={buttonStyle}> 
Update
 </button> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
 <button style={buttonStyle}> Delete</button>  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 
 <button style={buttonStyle}> Refresh </button>  */}
          <div>
            <button className="buttonBlue">Update</button>
            <button className="buttonOrange">Delete</button>
            <button className="buttonBlue">Refresh</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MemberEdit;
