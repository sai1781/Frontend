import React, { useState } from "react";
import { Row, Col, Button, Typography, Form } from "antd";
import "../../../App.css";
// import "../../../pageS/Administration/DataLockAndUnlock"

import { useDispatch, useSelector } from "react-redux";
import { SetDate } from "../../../redux/redux/Slice/formReducer";


const DataAndLock = () => {
  // const [isLocked, setIsLocked] = useState(true);
  const value = useSelector((state) => state.FReducer.DateState);
  const dispatch = useDispatch()
  console.log("value ===>>>>", value)

  const handleLockClick = () => {
    dispatch(SetDate(!value))
    console.log("Value ===>>> ", value)

    // setIsLocked(true);
  }

  const handleUnlockClick = () => {
    dispatch(SetDate(!value))
    console.log("Value ===>>> ", value)

  };

  console.log("Value ===>>> ", value)

  return (
    <div style={{ textAlign: "center" }}>
      <Form className="style10">
        <h2 style={{ color: "#E47B25" }}>Date Lock & Unlock</h2>
        <Typography.Text className="left-text">
          Current Status:<b> {value ? "Locked" : "Unlocked"}</b>
        </Typography.Text>
        <div>  <Button className="savebtn"
          onClick={handleLockClick}
          style={{ backgroundColor: "blue", color: "white" }}
          disabled={value}  >Lock</Button>
          <Button style={{ backgroundColor: "#E47B25", color: "white" }}
            onClick={handleUnlockClick}
            disabled={!value}>
            UnLock
          </Button>

        </div>

      </Form>
    </div>
  );
};

export default DataAndLock;
