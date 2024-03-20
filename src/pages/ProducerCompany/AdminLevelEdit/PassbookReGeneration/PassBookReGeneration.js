import { useState } from "react";
import React from "react";
import { Button, DatePicker, Modal, Space, Table, Typography } from "antd";
import './PassBookReGeneration.css'

const PassBookGeneration = () => {
  return (
    <>
      <div className="dd">
        <div className="pat m-5 ">
          <form className="frmr m-5">
            <h5 className="ttt p-2">
              <b>Passbook Regeneration</b>
            </h5>
            <div className="fmm">
              <label>category:</label>
              <input className="mm" type="text"></input>
              <label>memberID</label>
              <input className="mm" type="text"></input>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" />
                <p style={{}}>Transaction</p>
              </div>
            </div>
            <div className="buttn">
              <div>
                <Button className="buttonBlue">
                  Regenerate
                </Button>
                <Button className="buttonOrange">
                  cancel
                </Button>
                <Button className="buttonBlue">
                  Refresh
                </Button>
              </div>
              {/* <button style={{ backgroundColor: "#268DCB", borderColor: "#268DCB", borderRadius: '10px' }}>Regenerate</button> <br />
                <button style={{ backgroundColor: "#E47B25", borderColor: "#E47B25",borderRadius: '10px' }}>cancel</button> <br />
                <button style={{ backgroundColor: "yellow", borderColor: "yellow",borderRadius: '10px' }}>Refresh</button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default PassBookGeneration;
