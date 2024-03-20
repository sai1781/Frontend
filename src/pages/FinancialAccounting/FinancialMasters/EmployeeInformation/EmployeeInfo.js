import react from "react";
import { useState } from "react";
import {
  StepBackwardOutlined,
  CaretLeftOutlined,
  StepForwardOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Typography } from "antd";
import './EmployeeInfo.css';

const EmployeeInfo =() => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    designation: "",
    branch: "",
    birthDate: null, // Date field
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    designation: "",
    branch: "",
    birthDate: "",
  });

  const mandatoryFields = ["name", "surname", "birthDate"];

  const handleChange = (name, value) => {
    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate input
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    // Simple validation for demonstration purposes
    if (mandatoryFields.includes(name)) {
      if (value === null) {
        setErrors({
          ...errors,
          [name]: "This field is required",
        });
      } else {
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    }
    // You can add more specific validation for other fields (designation, branch) as needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any validation errors
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!hasErrors) {
      // Perform additional validation if needed before submitting the form

      // Submit the form data
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please correct them before submitting.");
    }
  };
  return (
    
    <>
      
        <Typography.Title level={4} id="text">Employee Information</Typography.Title>

      <Table responsive="sm">
        <thead>
          <tr>
            <th>S.No</th>
            <th>EmployeeId</th>
            <th>Designation</th>
            <th>Employee Name</th>
            <th>Employee SurName</th>
            <th>Branch Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <StepBackwardOutlined /> <CaretLeftOutlined />
            </td>
            <td>Page 1 of 1</td>
            <td>
              <StepForwardOutlined /> <CaretRightOutlined />{" "}
              <FontAwesomeIcon icon={faRefresh} />
            </td>
            <td>
              <InputGroup>
                <Form.Control />
                <DropdownButton
                  variant="outline-secondary"
                  id="input-group-dropdown-1"
                  align="end"
                >
                  <Dropdown.Item href="#">8</Dropdown.Item>
                  <Dropdown.Item href="#">16</Dropdown.Item>
                  <Dropdown.Item href="#">32</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </td>
            <td></td>
            <td>No data to display</td>
          </tr>
        </tbody>
      </Table>

      <form onSubmit={handleSubmit} >
        <div >
          <label htmlFor="birthDate">Date:</label>
          <DatePicker
            id="birthDate"
            name="birthDate"
            selected={formData.birthDate}
            onChange={(date) => handleChange("birthDate", date)}
            dateFormat="dd/MM/yyyy"
            scrollableYearDropdown
            isClearable
          />
          <span>{errors.birthDate}</span>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <span>{errors.name}</span>
        </div>

        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={(e) => handleChange("surname", e.target.value)}
          />
          <span>{errors.surname}</span>
        </div>

        <div>
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={(e) => handleChange("designation", e.target.value)}
          />
          <span>{errors.designation}</span>
        </div>

        <div>
          <label htmlFor="branch">Branch:</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={(e) => handleChange("branch", e.target.value)}
          />
          <span>{errors.branch}</span>
        </div>
      </form>
      <div style={{ textAlign: "center" }}>
        <Button className="btn1">Save</Button>{" "}
        <Button className="btn2">Clear</Button>{" "}
      </div>

    </>
  );
}

export default EmployeeInfo;