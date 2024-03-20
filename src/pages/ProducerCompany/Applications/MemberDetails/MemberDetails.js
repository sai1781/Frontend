import React, { useState } from "react";

import {
  Stepper,
  Step,
  StepLabel,
  Grid,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

import {
  Button,
  Form,
  Input,
  Modal,
  Rate,
  Space,
  Table,
  Typography,
} from "antd";

import PageHeader from "../../../PageHeader/PageHeader";
import "./MemberDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { SetDate } from "../../../../redux/redux/Slice/formReducer";



const steps = [
  "MemberDetails",
  "Customer Details",
  "Mobile Details",
  "Personal Details",
  "Permanent Address",
  "Correspondence Address",
  "Nominee Details",
  "KYC",
];

const MemberDetails = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    pincode: "",
    district: "",
    // Add additional fields here
  });

  const handleAddUser = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const [completedSteps, setCompletedSteps] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setCompletedSteps([...completedSteps, activeStep]);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isStepCompleted = (step) => {
    return completedSteps.includes(step);
  };

  const submit = () => {
    setCompletedSteps([...completedSteps, activeStep]);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setTimeout(() => {
      alert("Form submitted Successfully");
      setActiveStep(0);
    }, 2000);
  }


  const value = useSelector((state) => state.FReducer.DateState);
  console.log("value ===>>>>", value)

  return (
    <div className="memberdetails">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  className={
                    isStepCompleted(index) ? "step-label-completed" : ""
                  }
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12}>
          <div>
            {activeStep === steps.length ? (
              <div>
                <p>All steps completed</p>
                <pre>{JSON.stringify(formData, null, 8)}</pre>
              </div>
            ) : (
              <div>
                <h2>{steps[activeStep]}</h2>
                {activeStep === 0 && (
                  <>
                    <div className="form-row row">
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Member Type
                        </label>
                        <Select
                          id="memberTypeSelect"
                          name="memberType"
                          value={formData.memberType}
                          onChange={handleChange}
                          fullWidth
                          margin="dense"
                        >
                          <MenuItem value="">Select</MenuItem>
                          <MenuItem value="option2">MEMBER</MenuItem>
                          <MenuItem value="option3">CLASS B</MenuItem>
                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Date
                        </label>
                        <TextField
                          id="date"
                          name="date"
                          type="date"
                          value={
                            value
                              ? new Date().toISOString().split("T")[0]
                              : formData.date
                          }
                          onChange={handleChange}
                          fullWidth
                          margin="none"
                          disabled={value}
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Membership Fee
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                    </div>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <div className="form-row row">
                      <div className="form-group p-2 col-md-4">
                        <label htmlFor="address">Customer Name</label>
                        <TextField
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          fullWidth
                          margin="normal"
                        />
                      </div>
                      <div className="form-group p-2 col-md-4">
                        <label htmlFor="pincode">Father/Husband Name</label>
                        <TextField
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          fullWidth
                          margin="normal"
                        />
                      </div>
                      <div className="form-group p-2 col-md-4">
                        <label htmlFor="district">Mother Name</label>
                        <TextField
                          id="district"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          fullWidth
                          margin="normal"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                        // style={{ marginBottom: "0.5rem" }}
                        >
                          Gender
                        </label>
                        <Select
                          id="Gender"
                          name="Gender"
                          value={formData.Gender}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">Male</MenuItem>
                          <MenuItem value="option3">Female</MenuItem>
                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                        // style={{ marginBottom: "0.5rem" }}
                        >
                          Date of Birth
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Age
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Occupation
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Aadhar Number
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          PAN Number
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Customer Photo
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Customer Signature
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                    </div>
                    {/* Add additional fields here */}
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <div className="form-row row">
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Mobile Number
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.membertype}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Land No
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.date}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Alternate Numbers
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                    </div>
                  </>
                )}
                {activeStep === 3 && (
                  <>
                    <div className="form-row row">
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          House No
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.membertype}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.date}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Rural
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Country
                        </label>
                        <Select
                          id="Country"
                          name="Country"
                          value={formData.Country}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">India</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          State
                        </label>
                        <Select
                          id="State"
                          name="State"
                          value={formData.State}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">ANDHRA PRADESH</MenuItem>
                          <MenuItem value="option3">KARNATAKA</MenuItem>
                          <MenuItem value="option4">TELANGANA</MenuItem>
                          <MenuItem value="option5">ARUNACHAL PRADESH</MenuItem>
                          <MenuItem value="option6">ASSAM</MenuItem>
                          <MenuItem value="option7">BIHAR</MenuItem>
                          <MenuItem value="option8">CHHATTISGARH</MenuItem>
                          <MenuItem value="option9">GOA</MenuItem>
                          <MenuItem value="option10">GUJARAT</MenuItem>
                          <MenuItem value="option11">HARYANA</MenuItem>
                          <MenuItem value="option12">HIMACHAL PRADESH</MenuItem>
                          <MenuItem value="option13">
                            JAMMU AND KASHMIR
                          </MenuItem>
                          <MenuItem value="option14">JHARKHAND</MenuItem>
                          <MenuItem value="option15">KERALA</MenuItem>
                          <MenuItem value="option16">MADHYA PRADESH</MenuItem>
                          <MenuItem value="option17">MAHARASHTRA</MenuItem>
                          <MenuItem value="option18">MANIPUR</MenuItem>
                          <MenuItem value="option19">MEGHALAYA</MenuItem>
                          <MenuItem value="option20">MIZORAM</MenuItem>
                          <MenuItem value="option21">NAGALAND</MenuItem>
                          <MenuItem value="option22">ODISHA(ORISSA)</MenuItem>
                          <MenuItem value="option23">PANJAB</MenuItem>
                          <MenuItem value="option24">RAJASTHAN</MenuItem>
                          <MenuItem value="option25">SIKKIM</MenuItem>
                          <MenuItem value="option26">TAMIL NADU</MenuItem>
                          <MenuItem value="option27">TRIPURAM</MenuItem>
                          <MenuItem value="option28">UTTAR PRADESH</MenuItem>
                          <MenuItem value="option29">UTTARAKHAND</MenuItem>
                          <MenuItem value="option30">WEST BENGAL</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          District
                        </label>
                        <Select
                          id="District"
                          name="District"
                          value={formData.District}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">ANANTHAPUR</MenuItem>
                          <MenuItem value="option3">CHITTOOR</MenuItem>
                          <MenuItem value="option4">KADAPA</MenuItem>
                          <MenuItem value="option5">EAST GODAVARI</MenuItem>
                          <MenuItem value="option6">GUNTUR</MenuItem>
                          <MenuItem value="option7">KRISHNA</MenuItem>
                          <MenuItem value="option8">KURNOOL</MenuItem>
                          <MenuItem value="option9">NELLORE</MenuItem>
                          <MenuItem value="option10">PRAKASAM</MenuItem>
                          <MenuItem value="option11">SRIKAKULAM</MenuItem>
                          <MenuItem value="option12">VISAKHAPATNAM</MenuItem>
                          <MenuItem value="option13">VIZIANAGARAM</MenuItem>
                          <MenuItem value="option14">WEST GODAVARI</MenuItem>
                          <MenuItem value="option15">
                            PARVATHIPURAM MANYAM
                          </MenuItem>
                          <MenuItem value="option16">
                            ALLURI SITHARAMA RAJU
                          </MenuItem>
                          <MenuItem value="option17">ANAKAPALLI</MenuItem>
                          <MenuItem value="option18">KAKINADA</MenuItem>
                          <MenuItem value="option19">
                            DR.B.R.AMBEDKAR KONASEEMA
                          </MenuItem>
                          <MenuItem value="option20">ELURU</MenuItem>
                          <MenuItem value="option21">NTR</MenuItem>
                          <MenuItem value="option22">PALNADU</MenuItem>
                          <MenuItem value="option23">BAPATLA</MenuItem>
                          <MenuItem value="option24">
                            SRI POTTI SRIRAMULU NELLORE
                          </MenuItem>
                          <MenuItem value="option25">NANDYALA</MenuItem>
                          <MenuItem value="option26">SRI SATHYA SAI</MenuItem>
                          <MenuItem value="option27">YSR</MenuItem>
                          <MenuItem value="option28">ANNAMAYYA</MenuItem>
                          <MenuItem value="option29">TIRUPATI</MenuItem>
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Mandal
                        </label>
                        <Select
                          id="Mandal"
                          name="Mandal"
                          value={formData.Mandal}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">AGALI</MenuItem>
                          <MenuItem value="option3">AMADAGUR</MenuItem>
                          <MenuItem value="option4">AMARAPURAM</MenuItem>
                          <MenuItem value="option5">ANANTAPUR</MenuItem>
                          <MenuItem value="option6">ATMAKUR</MenuItem>
                          <MenuItem value="option7">BATHALAPALLE</MenuItem>
                          <MenuItem value="option8">BELUGUPPA</MenuItem>
                          <MenuItem value="option9">BOMMANAHAL</MenuItem>
                          <MenuItem value="option10">BRAHMASAMUDRAM</MenuItem>
                          <MenuItem value="option11">BUKKAPATNAM</MenuItem>
                          <MenuItem value="option12">
                            BUKKARAYASAMUDRAM
                          </MenuItem>
                          <MenuItem value="option13">
                            CHENNE KOTHAPALLE
                          </MenuItem>
                          <MenuItem value="option14">CHILAMATHUR</MenuItem>
                          <MenuItem value="option15">D.HIREHAL</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          City
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Land Mark
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Rural Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          City Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Pincode
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                    </div>
                  </>
                )}
                {activeStep === 4 && (
                  <>
                    <div className="form-row row">
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          House No
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.membertype}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      {/* <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.date}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div> */}

                      {/* <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Rural
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div> */}

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Country
                        </label>
                        <Select
                          id="Country"
                          name="Country"
                          value={formData.Country}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">India</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          State
                        </label>
                        <Select
                          id="State"
                          name="State"
                          value={formData.State}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">ANDHRA PRADESH</MenuItem>
                          <MenuItem value="option3">KARNATAKA</MenuItem>
                          <MenuItem value="option4">TELANGANA</MenuItem>
                          <MenuItem value="option5">ARUNACHAL PRADESH</MenuItem>
                          <MenuItem value="option6">ASSAM</MenuItem>
                          <MenuItem value="option7">BIHAR</MenuItem>
                          <MenuItem value="option8">CHHATTISGARH</MenuItem>
                          <MenuItem value="option9">GOA</MenuItem>
                          <MenuItem value="option10">GUJARAT</MenuItem>
                          <MenuItem value="option11">HARYANA</MenuItem>
                          <MenuItem value="option12">HIMACHAL PRADESH</MenuItem>
                          <MenuItem value="option13">
                            JAMMU AND KASHMIR
                          </MenuItem>
                          <MenuItem value="option14">JHARKHAND</MenuItem>
                          <MenuItem value="option15">KERALA</MenuItem>
                          <MenuItem value="option16">MADHYA PRADESH</MenuItem>
                          <MenuItem value="option17">MAHARASHTRA</MenuItem>
                          <MenuItem value="option18">MANIPUR</MenuItem>
                          <MenuItem value="option19">MEGHALAYA</MenuItem>
                          <MenuItem value="option20">MIZORAM</MenuItem>
                          <MenuItem value="option21">NAGALAND</MenuItem>
                          <MenuItem value="option22">ODISHA(ORISSA)</MenuItem>
                          <MenuItem value="option23">PANJAB</MenuItem>
                          <MenuItem value="option24">RAJASTHAN</MenuItem>
                          <MenuItem value="option25">SIKKIM</MenuItem>
                          <MenuItem value="option26">TAMIL NADU</MenuItem>
                          <MenuItem value="option27">TRIPURAM</MenuItem>
                          <MenuItem value="option28">UTTAR PRADESH</MenuItem>
                          <MenuItem value="option29">UTTARAKHAND</MenuItem>
                          <MenuItem value="option30">WEST BENGAL</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          District
                        </label>
                        <Select
                          id="District"
                          name="District"
                          value={formData.District}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">ANANTHAPUR</MenuItem>
                          <MenuItem value="option3">CHITTOOR</MenuItem>
                          <MenuItem value="option4">KADAPA</MenuItem>
                          <MenuItem value="option5">EAST GODAVARI</MenuItem>
                          <MenuItem value="option6">GUNTUR</MenuItem>
                          <MenuItem value="option7">KRISHNA</MenuItem>
                          <MenuItem value="option8">KURNOOL</MenuItem>
                          <MenuItem value="option9">NELLORE</MenuItem>
                          <MenuItem value="option10">PRAKASAM</MenuItem>
                          <MenuItem value="option11">SRIKAKULAM</MenuItem>
                          <MenuItem value="option12">VISAKHAPATNAM</MenuItem>
                          <MenuItem value="option13">VIZIANAGARAM</MenuItem>
                          <MenuItem value="option14">WEST GODAVARI</MenuItem>
                          <MenuItem value="option15">
                            PARVATHIPURAM MANYAM
                          </MenuItem>
                          <MenuItem value="option16">
                            ALLURI SITHARAMA RAJU
                          </MenuItem>
                          <MenuItem value="option17">ANAKAPALLI</MenuItem>
                          <MenuItem value="option18">KAKINADA</MenuItem>
                          <MenuItem value="option19">
                            DR.B.R.AMBEDKAR KONASEEMA
                          </MenuItem>
                          <MenuItem value="option20">ELURU</MenuItem>
                          <MenuItem value="option21">NTR</MenuItem>
                          <MenuItem value="option22">PALNADU</MenuItem>
                          <MenuItem value="option23">BAPATLA</MenuItem>
                          <MenuItem value="option24">
                            SRI POTTI SRIRAMULU NELLORE
                          </MenuItem>
                          <MenuItem value="option25">NANDYALA</MenuItem>
                          <MenuItem value="option26">SRI SATHYA SAI</MenuItem>
                          <MenuItem value="option27">YSR</MenuItem>
                          <MenuItem value="option28">ANNAMAYYA</MenuItem>
                          <MenuItem value="option29">TIRUPATI</MenuItem>
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Mandal
                        </label>
                        <Select
                          id="Mandal"
                          name="Mandal"
                          value={formData.Mandal}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">AGALI</MenuItem>
                          <MenuItem value="option3">AMADAGUR</MenuItem>
                          <MenuItem value="option4">AMARAPURAM</MenuItem>
                          <MenuItem value="option5">ANANTAPUR</MenuItem>
                          <MenuItem value="option6">ATMAKUR</MenuItem>
                          <MenuItem value="option7">BATHALAPALLE</MenuItem>
                          <MenuItem value="option8">BELUGUPPA</MenuItem>
                          <MenuItem value="option9">BOMMANAHAL</MenuItem>
                          <MenuItem value="option10">BRAHMASAMUDRAM</MenuItem>
                          <MenuItem value="option11">BUKKAPATNAM</MenuItem>
                          <MenuItem value="option12">
                            BUKKARAYASAMUDRAM
                          </MenuItem>
                          <MenuItem value="option13">
                            CHENNE KOTHAPALLE
                          </MenuItem>
                          <MenuItem value="option14">CHILAMATHUR</MenuItem>
                          <MenuItem value="option15">D.HIREHAL</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          City
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      {/* <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Land Mark
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div> */}

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Rural Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      {/* <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          City Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div> */}

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Pincode
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                    </div>
                  </>
                )}
                {activeStep === 5 && (
                  <>
                    <div className="form-row row">
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          House No
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.membertype}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      {/* <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.date}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div> */}

                      {/* <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Rural
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div> */}

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Country
                        </label>
                        <Select
                          id="Country"
                          name="Country"
                          value={formData.Country}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">India</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          State
                        </label>
                        <Select
                          id="State"
                          name="State"
                          value={formData.State}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">ANDHRA PRADESH</MenuItem>
                          <MenuItem value="option3">KARNATAKA</MenuItem>
                          <MenuItem value="option4">TELANGANA</MenuItem>
                          <MenuItem value="option5">ARUNACHAL PRADESH</MenuItem>
                          <MenuItem value="option6">ASSAM</MenuItem>
                          <MenuItem value="option7">BIHAR</MenuItem>
                          <MenuItem value="option8">CHHATTISGARH</MenuItem>
                          <MenuItem value="option9">GOA</MenuItem>
                          <MenuItem value="option10">GUJARAT</MenuItem>
                          <MenuItem value="option11">HARYANA</MenuItem>
                          <MenuItem value="option12">HIMACHAL PRADESH</MenuItem>
                          <MenuItem value="option13">
                            JAMMU AND KASHMIR
                          </MenuItem>
                          <MenuItem value="option14">JHARKHAND</MenuItem>
                          <MenuItem value="option15">KERALA</MenuItem>
                          <MenuItem value="option16">MADHYA PRADESH</MenuItem>
                          <MenuItem value="option17">MAHARASHTRA</MenuItem>
                          <MenuItem value="option18">MANIPUR</MenuItem>
                          <MenuItem value="option19">MEGHALAYA</MenuItem>
                          <MenuItem value="option20">MIZORAM</MenuItem>
                          <MenuItem value="option21">NAGALAND</MenuItem>
                          <MenuItem value="option22">ODISHA(ORISSA)</MenuItem>
                          <MenuItem value="option23">PANJAB</MenuItem>
                          <MenuItem value="option24">RAJASTHAN</MenuItem>
                          <MenuItem value="option25">SIKKIM</MenuItem>
                          <MenuItem value="option26">TAMIL NADU</MenuItem>
                          <MenuItem value="option27">TRIPURAM</MenuItem>
                          <MenuItem value="option28">UTTAR PRADESH</MenuItem>
                          <MenuItem value="option29">UTTARAKHAND</MenuItem>
                          <MenuItem value="option30">WEST BENGAL</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          District
                        </label>
                        <Select
                          id="District"
                          name="District"
                          value={formData.District}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">ANANTHAPUR</MenuItem>
                          <MenuItem value="option3">CHITTOOR</MenuItem>
                          <MenuItem value="option4">KADAPA</MenuItem>
                          <MenuItem value="option5">EAST GODAVARI</MenuItem>
                          <MenuItem value="option6">GUNTUR</MenuItem>
                          <MenuItem value="option7">KRISHNA</MenuItem>
                          <MenuItem value="option8">KURNOOL</MenuItem>
                          <MenuItem value="option9">NELLORE</MenuItem>
                          <MenuItem value="option10">PRAKASAM</MenuItem>
                          <MenuItem value="option11">SRIKAKULAM</MenuItem>
                          <MenuItem value="option12">VISAKHAPATNAM</MenuItem>
                          <MenuItem value="option13">VIZIANAGARAM</MenuItem>
                          <MenuItem value="option14">WEST GODAVARI</MenuItem>
                          <MenuItem value="option15">
                            PARVATHIPURAM MANYAM
                          </MenuItem>
                          <MenuItem value="option16">
                            ALLURI SITHARAMA RAJU
                          </MenuItem>
                          <MenuItem value="option17">ANAKAPALLI</MenuItem>
                          <MenuItem value="option18">KAKINADA</MenuItem>
                          <MenuItem value="option19">
                            DR.B.R.AMBEDKAR KONASEEMA
                          </MenuItem>
                          <MenuItem value="option20">ELURU</MenuItem>
                          <MenuItem value="option21">NTR</MenuItem>
                          <MenuItem value="option22">PALNADU</MenuItem>
                          <MenuItem value="option23">BAPATLA</MenuItem>
                          <MenuItem value="option24">
                            SRI POTTI SRIRAMULU NELLORE
                          </MenuItem>
                          <MenuItem value="option25">NANDYALA</MenuItem>
                          <MenuItem value="option26">SRI SATHYA SAI</MenuItem>
                          <MenuItem value="option27">YSR</MenuItem>
                          <MenuItem value="option28">ANNAMAYYA</MenuItem>
                          <MenuItem value="option29">TIRUPATI</MenuItem>
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Mandal
                        </label>
                        <Select
                          id="Mandal"
                          name="Mandal"
                          value={formData.Mandal}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">AGALI</MenuItem>
                          <MenuItem value="option3">AMADAGUR</MenuItem>
                          <MenuItem value="option4">AMARAPURAM</MenuItem>
                          <MenuItem value="option5">ANANTAPUR</MenuItem>
                          <MenuItem value="option6">ATMAKUR</MenuItem>
                          <MenuItem value="option7">BATHALAPALLE</MenuItem>
                          <MenuItem value="option8">BELUGUPPA</MenuItem>
                          <MenuItem value="option9">BOMMANAHAL</MenuItem>
                          <MenuItem value="option10">BRAHMASAMUDRAM</MenuItem>
                          <MenuItem value="option11">BUKKAPATNAM</MenuItem>
                          <MenuItem value="option12">
                            BUKKARAYASAMUDRAM
                          </MenuItem>
                          <MenuItem value="option13">
                            CHENNE KOTHAPALLE
                          </MenuItem>
                          <MenuItem value="option14">CHILAMATHUR</MenuItem>
                          <MenuItem value="option15">D.HIREHAL</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          City
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      {/* <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Land Mark
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div> */}

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Rural Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      {/* <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          City Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div> */}

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Pincode
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                    </div>
                  </>
                )}
                {activeStep === 6 && (
                  <>
                    <div className="form-row row">
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Nommiee Name
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.membertype}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Relation
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.membertype}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Age
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.membertype}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          House No
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.membertype}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.date}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Rural
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Country
                        </label>
                        <Select
                          id="Country"
                          name="Country"
                          value={formData.Country}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">India</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          State
                        </label>
                        <Select
                          id="State"
                          name="State"
                          value={formData.State}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">ANDHRA PRADESH</MenuItem>
                          <MenuItem value="option3">KARNATAKA</MenuItem>
                          <MenuItem value="option4">TELANGANA</MenuItem>
                          <MenuItem value="option5">ARUNACHAL PRADESH</MenuItem>
                          <MenuItem value="option6">ASSAM</MenuItem>
                          <MenuItem value="option7">BIHAR</MenuItem>
                          <MenuItem value="option8">CHHATTISGARH</MenuItem>
                          <MenuItem value="option9">GOA</MenuItem>
                          <MenuItem value="option10">GUJARAT</MenuItem>
                          <MenuItem value="option11">HARYANA</MenuItem>
                          <MenuItem value="option12">HIMACHAL PRADESH</MenuItem>
                          <MenuItem value="option13">
                            JAMMU AND KASHMIR
                          </MenuItem>
                          <MenuItem value="option14">JHARKHAND</MenuItem>
                          <MenuItem value="option15">KERALA</MenuItem>
                          <MenuItem value="option16">MADHYA PRADESH</MenuItem>
                          <MenuItem value="option17">MAHARASHTRA</MenuItem>
                          <MenuItem value="option18">MANIPUR</MenuItem>
                          <MenuItem value="option19">MEGHALAYA</MenuItem>
                          <MenuItem value="option20">MIZORAM</MenuItem>
                          <MenuItem value="option21">NAGALAND</MenuItem>
                          <MenuItem value="option22">ODISHA(ORISSA)</MenuItem>
                          <MenuItem value="option23">PANJAB</MenuItem>
                          <MenuItem value="option24">RAJASTHAN</MenuItem>
                          <MenuItem value="option25">SIKKIM</MenuItem>
                          <MenuItem value="option26">TAMIL NADU</MenuItem>
                          <MenuItem value="option27">TRIPURAM</MenuItem>
                          <MenuItem value="option28">UTTAR PRADESH</MenuItem>
                          <MenuItem value="option29">UTTARAKHAND</MenuItem>
                          <MenuItem value="option30">WEST BENGAL</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          District
                        </label>
                        <Select
                          id="District"
                          name="District"
                          value={formData.District}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">ANANTHAPUR</MenuItem>
                          <MenuItem value="option3">CHITTOOR</MenuItem>
                          <MenuItem value="option4">KADAPA</MenuItem>
                          <MenuItem value="option5">EAST GODAVARI</MenuItem>
                          <MenuItem value="option6">GUNTUR</MenuItem>
                          <MenuItem value="option7">KRISHNA</MenuItem>
                          <MenuItem value="option8">KURNOOL</MenuItem>
                          <MenuItem value="option9">NELLORE</MenuItem>
                          <MenuItem value="option10">PRAKASAM</MenuItem>
                          <MenuItem value="option11">SRIKAKULAM</MenuItem>
                          <MenuItem value="option12">VISAKHAPATNAM</MenuItem>
                          <MenuItem value="option13">VIZIANAGARAM</MenuItem>
                          <MenuItem value="option14">WEST GODAVARI</MenuItem>
                          <MenuItem value="option15">
                            PARVATHIPURAM MANYAM
                          </MenuItem>
                          <MenuItem value="option16">
                            ALLURI SITHARAMA RAJU
                          </MenuItem>
                          <MenuItem value="option17">ANAKAPALLI</MenuItem>
                          <MenuItem value="option18">KAKINADA</MenuItem>
                          <MenuItem value="option19">
                            DR.B.R.AMBEDKAR KONASEEMA
                          </MenuItem>
                          <MenuItem value="option20">ELURU</MenuItem>
                          <MenuItem value="option21">NTR</MenuItem>
                          <MenuItem value="option22">PALNADU</MenuItem>
                          <MenuItem value="option23">BAPATLA</MenuItem>
                          <MenuItem value="option24">
                            SRI POTTI SRIRAMULU NELLORE
                          </MenuItem>
                          <MenuItem value="option25">NANDYALA</MenuItem>
                          <MenuItem value="option26">SRI SATHYA SAI</MenuItem>
                          <MenuItem value="option27">YSR</MenuItem>
                          <MenuItem value="option28">ANNAMAYYA</MenuItem>
                          <MenuItem value="option29">TIRUPATI</MenuItem>
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Mandal
                        </label>
                        <Select
                          id="Mandal"
                          name="Mandal"
                          value={formData.Mandal}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">AGALI</MenuItem>
                          <MenuItem value="option3">AMADAGUR</MenuItem>
                          <MenuItem value="option4">AMARAPURAM</MenuItem>
                          <MenuItem value="option5">ANANTAPUR</MenuItem>
                          <MenuItem value="option6">ATMAKUR</MenuItem>
                          <MenuItem value="option7">BATHALAPALLE</MenuItem>
                          <MenuItem value="option8">BELUGUPPA</MenuItem>
                          <MenuItem value="option9">BOMMANAHAL</MenuItem>
                          <MenuItem value="option10">BRAHMASAMUDRAM</MenuItem>
                          <MenuItem value="option11">BUKKAPATNAM</MenuItem>
                          <MenuItem value="option12">
                            BUKKARAYASAMUDRAM
                          </MenuItem>
                          <MenuItem value="option13">
                            CHENNE KOTHAPALLE
                          </MenuItem>
                          <MenuItem value="option14">CHILAMATHUR</MenuItem>
                          <MenuItem value="option15">D.HIREHAL</MenuItem>

                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          City
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Land Mark
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Rural Area
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Pincode
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="MobileNumber"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Mobile Number
                        </label>
                        <TextField
                          id="MobileNumber"
                          name="MobileNumber"
                          type="text"
                          value={formData.membertype}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                    </div>
                  </>
                )}
                {activeStep === 7 && (
                  <>
                    <div className="form-row row">
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Id Proof Type
                        </label>

                        <Select
                          id="memberTypeSelect"
                          name="memberType"
                          value={formData.memberType}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">PanCard</MenuItem>
                          <MenuItem value="option3">Aadhar Card</MenuItem>
                          <MenuItem value="option4">Voter Id</MenuItem>
                          <MenuItem value="option5">Ration Id</MenuItem>
                          <MenuItem value="option6">Passport</MenuItem>
                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Address Proof Type
                        </label>

                        <Select
                          id="memberTypeSelect"
                          name="memberType"
                          value={formData.memberType}
                          onChange={handleChange}
                          fullWidth
                          margin="dense" // You can adjust margin for the select as well
                        >
                          <selected><MenuItem value="option1">Select</MenuItem></selected>
                          <MenuItem value="option2">Electricity</MenuItem>
                          <MenuItem value="option3">Water Bill</MenuItem>
                          <MenuItem value="option4">Telephone Bill</MenuItem>
                          <MenuItem value="option5">Bank Pass Book</MenuItem>
                          {/* Add more MenuItem components as needed */}
                        </Select>
                      </div>

                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Other Document
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Id Proof Type Image
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Address Proof Type Image
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                      <div className="form-group p-2 col-lg-4 col-md-6">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          Other Document Image
                        </label>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membershipfee}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
                      </div>
                    </div>
                  </>
                )}
                <div className="buttonContainer pt-2">
                  <div>
                    {activeStep !== 0 && (
                      <Button variant="contained" onClick={handleBack}
                        className="btn btn-primary">
                        Back
                      </Button>
                    )}
                  </div>
                  <div>
                    {activeStep === steps.length - 1 ? (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={submit}
                        className="btn btn-primary"
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        className="btn btn-primary"
                        onClick={handleNext}
                        disabled={activeStep === steps.length - 1}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
      <Modal
        title="Add Module"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button
            key="cancel"
            style={{ backgroundColor: "orange" }}
            onClick={handleModalCancel}
          >
            Cancel
          </Button>,
          <Button key="submit" type="primary">
            Save
          </Button>,
        ]}
      >
        <Form
        // Add your form logic and fields here
        // You can use Ant Design Form components like Form.Item, Input, etc.
        >
          <Form.Item
            label="Module Name"
            name="ModuleName"
            rules={[{ required: false, message: "Please input first name!" }]}
          >
            <Input />
          </Form.Item>
          {/* Add other form fields as needed */}
        </Form>
      </Modal>
    </div>
  );
};

export default MemberDetails;
