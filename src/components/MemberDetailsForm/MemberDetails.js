import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import PageHeader from "../../pages/PageHeader/PageHeader";
import "./MemberDetailsForm.css";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    pincode: "",
    district: "",
    // Add additional fields here
  });

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
  };

  return (
    <div className="container col-md-12 col-lg-12">
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
                        <TextField
                          id="firstName"
                          name="firstName"
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
                          Date
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
                        <label htmlFor="address">Address</label>
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
                        <label htmlFor="pincode">Pin Code</label>
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
                        <label htmlFor="district">District</label>
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
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formData.membertype}
                          onChange={handleChange}
                          fullWidth
                          margin="none" // Change margin from "normal" to "dense"
                        />
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
                          Alternate  Numbers
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
                          State
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
                          District

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
                          Mandal

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
                          Mandal

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

























                <div className="buttonContainer pt-2">
                  <div>
                    {activeStep !== 0 && (
                      <Button variant="contained" onClick={handleBack}>
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
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
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
    </div>
  );
};

export default MemberDetails;
