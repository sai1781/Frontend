// import react from "react";
// import styled from "styled-components";
// import { DatePicker, Typography } from "antd";
// import "react-datepicker/dist/react-datepicker.css";
// import { useState } from "react";
// // import './CashDeposit.css'
// import './CashDeposit.css'

// const CashDeposit = () => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [selectedToDate, setSelectedToDate] = useState(null);

//   const handleDropdownChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const tableData = [
//     {
//       Icon:'sai',
//       No:1,
//       SavingAccountNO:123456789,
//       MemberShipId:108,
//       MemberId:121,
//       MobileNumber:987654321,
//       DespositAmount:9999999999,
//     },
//     {
//       Icon:'sai',
//       No:2,
//       SavingAccountNO:123456789,
//       MemberShipId:108,
//       MemberId:121,
//       MobileNumber:987654321,
//       DespositAmount:9999999999,
//     },
//     {
//       Icon:'sai',
//       No:3,
//       SavingAccountNO:123456789,
//       MemberShipId:108,
//       MemberId:121,
//       MobileNumber:987654321,
//       DespositAmount:9999999999,
//     },
//     {
//       Icon:'sai',
//       No:4,
//       SavingAccountNO:123456789,
//       MemberShipId:108,
//       MemberId:121,
//       MobileNumber:987654321,
//       DespositAmount:9999999999,
//     },
//     {
//       Icon:'sai',
//       No:5,
//       SavingAccountNO:123456789,
//       MemberShipId:108,
//       MemberId:121,
//       MobileNumber:987654321,
//       DespositAmount:9999999999,
//     }
//   ]

//   return (
//     // <div className="cashDepositContainer">
//     //   <h3 className="headerText">CashDeposit</h3>
//     //   <div className="headerCashDeposit">
//     //     <div className="headerCashDeposit1">
//     //       <Typography.Text>Date: </Typography.Text>
//     //       <DatePicker onChange={(date) => setSelectedToDate(date)} />
//     //       <div className=".InputContainer">
//     //         <div className='.InputLabel' htmlFor="dropdownInput">Member Type:</div>
//     //         <div className='.DropdownInput' 
//     //           id="dropdownInput"
//     //           value={selectedOption}
//     //           onChange={handleDropdownChange}
//     //         >
//     //           <option value="">Select an option</option>
//     //           <option value="option1">Member</option>
//     //           <option value="option2">Group</option>
//     //           <option value="option2">Class B</option>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="headerCashDeposit2">
//     //       <div className=".InputContainer">
//     //         <div className='.InputLabel' htmlFor="dropdownInput">Account Type:</div>
//     //         <div className='.DropdownInput' 
//     //           id="dropdownInput"
//     //           value={selectedOption}
//     //           onChange={handleDropdownChange}
//     //         >
//     //           <option value="">Select an option</option>
//     //           <option value="option1">Savings ACcount</option>
//     //           <option value="option2">Fixed Account</option>
//     //           <option value="option2">Recurring Account</option>
//     //         </div>
//     //       </div>
//     //       <div className=".InputContainer">
//     //         <div className='.InputLabel' htmlFor="dropdownInput">Account No:</div>{" "}
//     //         &nbsp;&nbsp;&nbsp;
//     //         <div className='.DropdownInput' 
//     //           id="dropdownInput"
//     //           value={selectedOption}
//     //           onChange={handleDropdownChange}
//     //         >
//     //           <option value="">Select an option</option>
//     //           <option value="option1">Account 1</option>
//     //           <option value="option2">Account 1</option>
//     //           <option value="option1">Account 1</option>
//     //           <option value="option2">Account 1</option>
//     //           <option value="option1">Account 1</option>
//     //           <option value="option2">Account 1</option>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   <div style={{ paddingTop: "30px" }}>
//     //     <h2>Member Details</h2>
//     //     <table
//     //       className="member-table"
//     //     >
//     //       <thead>
//     //         <tr>
//     //           <th className=".TableCellsStyle">Icon</th>
//     //           <th className=".TableCellsStyle">N.No</th>
//     //           <th className=".TableCellsStyle">Saving Account No</th>
//     //           <th className=".TableCellsStyle">Membership ID</th>
//     //           <th className=".TableCellsStyle">Member ID</th>
//     //           <th className=".TableCellsStyle">Mobile Number</th>
//     //           <th className=".TableCellsStyle">Deposit Amount</th>
//     //         </tr>
//     //       </thead>
//     //       <tbody>
//     //         {tableData.map((e,idx)=>(
//     //           <tr key={e}>
//     //            <td className=".TableCellsStyle">{e.Icon}</td>
//     //           <td className=".TableCellsStyle">{e.No}</td>
//     //           <td className=".TableCellsStyle">{e.SavingAccountNO}</td>
//     //           <td className=".TableCellsStyle">{e.MemberShipId}</td>
//     //           <td className=".TableCellsStyle">{e.MemberId}</td>
//     //           <td className=".TableCellsStyle">{e.MobileNumber}</td>
//     //           <td className=".TableCellsStyle">{e.DespositAmount}</td>

//     //           </tr>
//     //         ))}
//     //       </tbody>
//     //     </table>
//     //   </div>

//     //   <div className=".Entries"
//     //   >
//     //     <fieldset>
//     //       <legend>Entries</legend>
//     //       <table>
//     //         <tbody>
//     //           <tr>
//     //             <td>Total Deposit Amount:</td>
//     //             <td>
//     //               <input type="text"  />
//     //             </td>
//     //           </tr>{" "}
//     //           <br />
//     //           <tr>
//     //             <td>Narration:</td>
//     //             <td>
//     //               <input type="text"  />
//     //             </td>
//     //           </tr>
//     //         </tbody>
//     //       </table>
//     //     </fieldset>
//     //   </div>

//     //   <div className=".PaymentDetails"     >
//     //     <fieldset>
//     //       <legend>Payment Details</legend>
//     //       <label>Mode of Payment:</label>

//     //       <div className="checkbox">
//     //         <div className="checkboxContainer">
//     //           <input type="radio" id="cash" name="paymentMode" />
//     //           <label htmlFor="cash">Cash</label>
//     //         </div>
//     //         <div className="checkboxContainer">
//     //           <input type="radio" id="cheque" name="paymentMode" />
//     //           <label htmlFor="cheque">Cheque</label>
//     //         </div>
//     //         <div className="checkboxContainer">
//     //           <input type="radio" id="adjustment" name="paymentMode" />
//     //           <label htmlFor="adjustment">Adjustment</label>
//     //         </div>
//     //         <div className="checkboxContainer">
//     //           <input type="radio" id="neft" name="paymentMode" />
//     //           <label htmlFor="neft">NEFT</label>
//     //         </div>
//     //       </div>
//     //       <br />
//     //       <fieldset>
//     //         <table>
//     //           <tbody>
//     //             <tr>
//     //               <td>Total Deposit Amount:</td>
//     //               <td>
//     //                 <input type="text"  />
//     //               </td>
//     //             </tr>
//     //             <br />
//     //             <tr>
//     //               <td>Narration:</td>
//     //               <td>
//     //                 <input type="text"  />
//     //               </td>
//     //             </tr>
//     //           </tbody>
//     //         </table>
//     //       </fieldset>
//     //     </fieldset>
//     //   </div>
//     //   <br />
//     //   <div className=".button">
//     //     <button
//     //       className=".buttonBlue"
//     //     >
//     //       Cancel
//     //     </button>{" "}
//     //     &nbsp; &nbsp; &nbsp;
//     //     <button
//     //       className=".buttonOrange"
//     //     >
//     //       Refresh
//     //     </button>
//     //   </div>
//     // </div>
    
//   );
// }

// export default CashDeposit;

import react from "react";
import styled from "styled-components";
import { Form, Radio, DatePicker, Input, Select, Table, Button,Space,Typography, Row, Col } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { getOrders } from "../../../../API";

// import './CashDeposit.css'
import './CashDeposit.css'
const { Option } = Select;

const CashDeposit = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleRadioChange = (e) => {
    setSelectedType(e.target.value);
  };
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [depositType, setDepositType] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [format, setFormat] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  // const handleDropdownChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };

  // const tableData = [
  //   {
  //     Icon:'sai',
  //     No:1,
  //     SavingAccountNO:123456789,
  //     MemberShipId:108,
  //     MemberId:121,
  //     MobileNumber:987654321,
  //     DespositAmount:9999999999,
  //   },
  //   {
  //     Icon:'sai',
  //     No:2,
  //     SavingAccountNO:123456789,
  //     MemberShipId:108,
  //     MemberId:121,
  //     MobileNumber:987654321,
  //     DespositAmount:9999999999,
  //   },
  //   {
  //     Icon:'sai',
  //     No:3,
  //     SavingAccountNO:123456789,
  //     MemberShipId:108,
  //     MemberId:121,
  //     MobileNumber:987654321,
  //     DespositAmount:9999999999,
  //   },
  //   {
  //     Icon:'sai',
  //     No:4,
  //     SavingAccountNO:123456789,
  //     MemberShipId:108,
  //     MemberId:121,
  //     MobileNumber:987654321,
  //     DespositAmount:9999999999,
  //   },
  //   {
  //     Icon:'sai',
  //     No:5,
  //     SavingAccountNO:123456789,
  //     MemberShipId:108,
  //     MemberId:121,
  //     MobileNumber:987654321,
  //     DespositAmount:9999999999,
  //   }
  // ]

  return (
    <div className="cashDepositContainer">
      <h3 className="headerText">CashDeposit</h3>
      <div className="cardbody">
      <div className="headerCashDeposit">
        <div className="headerCashDeposit1">
        
            {/* <Typography.Text>Date: </Typography.Text>
          <DatePicker  onChange={(date) => setSelectedToDate(date)} />
          <div className=".InputContainer">
            <div className='.InputLabel' htmlFor="dropdownInput">Member Type:</div>
            <select className='DropdownInput' 
              id="dropdownInput"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option selected value="">Select an option</option>
              <option value="option1">Member</option>
              <option value="option2">Group</option>
              <option value="option2">Class B</option>
            </select>
          </div>
        </div>
        <div className="headerCashDeposit2">
          <div className=".InputContainer">
            <div className='.InputLabel' htmlFor="dropdownInput">Account Type:</div>
            <select className='DropdownInput' 
              id="dropdownInput"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option selected value="7">Select an option</option>
              <option value="8">Savings ACcount</option>
              <option value="9">Recurring Account</option>
              <option value="10">Fixed Account</option>
            </select>
          </div>
          <div className=".InputContainer">
            <div className='.InputLabel' htmlFor="dropdownInput">Account No:</div>{" "}
            &nbsp;&nbsp;&nbsp;
            <select className='DropdownInput' 
              id="dropdownInput"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option selected value="">Select an option</option>
              <option value="1">Account 1</option>
              <option value="2">Account 1</option>
              <option value="3">Account 1</option>
              <option value="4">Account 1</option>
              <option value="5">Account 1</option>
              <option value="6">Account 1</option>
            </select>
          </div> */}
          <Form >
          <Row gutter={100}>
          <Col span={12}>
            <Form.Item name="date" label="Date :">
              <DatePicker className='input'/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="member type" label="Member Type :" >
            <Select placeholder="Select an Option" className="input">
                <Option value="teacher">Select</Option>
                <Option value="doctor">GPM1/22_JLG/001</Option>
                {/* Add more options as needed */}
                          </Select>
                      </Form.Item>
          </Col>
        </Row>

        <Row gutter={100}>
          
                  <Col span={12}>
                  <Form.Item name="account type" label="Account Type :">
            <Select placeholder="Select an occupation" className="input">
                <Option value="teacher">Select</Option>
                <Option value="doctor">GPM1/22_JLG/001</Option>
                {/* Add more options as needed */}
                          </Select>
            </Form.Item>
            </Col>

            <Col span={12}>
            <Form.Item name="account no" label="Account No :">
            <Select placeholder="Select an occupation" className="input">
                <Option value="teacher">Select</Option>
                <Option value="doctor">GPM1/22_JLG/001</Option>
                {/* Add more options as needed */}
                          </Select>
                      </Form.Item>
          </Col>
           
        </Row>
        </Form>
        </div>
        
      </div>
      </div> 
      {/* <div  className="memberdetailcontainer">
        <h4 className="headertext">Member Details</h4>
        <table 
          className="table "
        >
          <thead className="thead-light" >
            <tr>
              <th className=".TableCellsStyle">Icon</th>
              <th className=".TableCellsStyle">N.No</th>
              <th className=".TableCellsStyle">Saving Account No</th>
              <th className=".TableCellsStyle">Membership ID</th>
              <th className=".TableCellsStyle">Member ID</th>
              <th className=".TableCellsStyle">Mobile Number</th>
              <th className=".TableCellsStyle">Deposit Amount</th>
            </tr>
          </thead>
          <tbody >
            {tableData.map((e,idx)=>(
              <tr key={e}>
               <td className=".TableCellsStyle">{e.Icon}</td>
              <td className=".TableCellsStyle">{e.No}</td>
              <td className=".TableCellsStyle">{e.SavingAccountNO}</td>
              <td className=".TableCellsStyle">{e.MemberShipId}</td>
              <td className=".TableCellsStyle">{e.MemberId}</td>
              <td className=".TableCellsStyle">{e.MobileNumber}</td>
              <td className=".TableCellsStyle">{e.DespositAmount}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
        <h3 className="Text">Orders</h3>

        <Table className="data"
          loading={loading}
          columns={[
            { title: "Title", dataIndex: "title" },
            { title: "Price", dataIndex: "price", render: (value) => <span>${value}</span> },
            { title: "DiscountedPrice", dataIndex: "discountedPrice", render: (value) => <span>${value}</span> },
            { title: "Quantity", dataIndex: "quantity" },
            { title: "Total", dataIndex: "total" },
          ]}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
          
        />

      <div className="data" 
      >
        <h3 className="Text">Entries</h3>
          <table >
            <tbody>
              <tr>
                <td>Total Deposit Amount:</td>
                <td>
                  <input type="text"  />
                </td>
              </tr>{" "}
              <br />
              <tr>
                <td>Narration:</td>
                <td>
                  <input type="text"  />
                </td>
              </tr>
            </tbody>
          </table>
      </div>

      <div className="data"     >
        <fieldset>
        <h3 className="Text">Payment Details</h3>

          <label>Mode of Payment:</label>

          <Form.Item label="Type">
          <Radio.Group onChange={handleRadioChange} value={selectedType}>
            <Radio value="Cash">Cash</Radio>
            <Radio value="Cheque">Cheque</Radio>
            <Radio value="Draft">Draft</Radio>
            <Radio value="Direct">Direct</Radio>
          </Radio.Group>
        </Form.Item>
        {( selectedType === 'Cash' || selectedType ==='Cheque' || selectedType === 'Draft' ) && (
            <>
            <Form className="data">       
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="bankname" label="Bank Name">
            <Select placeholder="Select">
                <Option value="teacher">Select</Option>
                <Option value="doctor">GPM1/22_JLG/001</Option>
                {/* Add more options as needed */}
                          </Select>
                      </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="branch" label="Branch">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
             <Col span={12}>
          <Form.Item name="chequeno" label="Cheque No">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="date" label="Date" >
              <DatePicker className="date" />
            </Form.Item>
          </Col>
          </Row>
         </Form>
           
            </>
            )
          }
          {( selectedType === 'Direct' ) && (
            <>
            <Form className="data">       
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="bankname" label="Bank Name">
            <Select placeholder="Select">
                <Option value="teacher">Select</Option>
                <Option value="doctor">GPM1/22_JLG/001</Option>
                {/* Add more options as needed */}
                          </Select>
                      </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="branch" label="Branch">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
             <Col span={12}>
          <Form.Item name="refno" label="Ref No">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="date" label="Date" >
              <DatePicker className="date" />
            </Form.Item>
          </Col>
          </Row>
         </Form>
           
            </>
            )
          }
          <br />
          <fieldset>
            <table>
              <tbody>
                <tr>
                  <td>Total Deposit Amount:</td>
                  <td>
                    <input type="text"  />
                  </td>
                </tr>
                <br />
                <tr>
                  <td>Narration:</td>
                  <td>
                    <input type="text"  />
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </fieldset>
      </div>
      
      <br />
      {/* <div > */}
        <button
          className="buttonBlue"
        >
          Cancel
        </button>{" "}
        &nbsp; &nbsp; &nbsp;
        <button
          className="buttonOrange"
        >
          Refresh
        </button>
      {/* </div> */}
    </div>
  );
}

export default CashDeposit;