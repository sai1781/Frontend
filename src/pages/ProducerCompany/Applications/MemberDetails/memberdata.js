// import { Avatar, Button, Form, Input, Modal, Rate, Space, Table, Typography } from "antd";
// import { useEffect, useState } from "react";
// import { getCustomers, getInventory } from "../../API";
// import Accordion from 'react-bootstrap/Accordion';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Customers() {
//   const [loading, setLoading] = useState(false);
//   const [dataSource, setDataSource] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     getCustomers().then((res) => {
//       setDataSource(res.users);
//       setLoading(false);
//     });
//   }, []);

//   const handleAddUser = () => {
//     setIsModalVisible(true);
//   };

//   const handleModalCancel = () => {
//     setIsModalVisible(false);
//   };

//   // Handle form submission - add your logic here

//   return (
//     <Space size={20} direction="vertical">
//       {/* <Typography.Title level={4}>Users</Typography.Title> */}

//       <div style={{ textAlign: "right" }}>
//         <Button type="primary" onClick={handleAddUser}>
//           Create Account
//         </Button>
//       </div>

//       <Table
//         loading={loading}
//         columns={[
//           {
//             title: "SI NO",
//             dataIndex: "id",
//           },
//           {
//             title: "User Name",
//             dataIndex: "firstName",
//           },
//           {
//             title: "Module Name",
//             dataIndex: "lastName",
//           },
//           {
//             title: "Function Name",
//             dataIndex: "email",
//           },
//           {
//             title: "User Name",
//             dataIndex: "firstName",
//           },
//           {
//             title: "Module Name",
//             dataIndex: "lastName",
//           },
//           {
//             title: "Function Name",
//             dataIndex: "email",
//           },
//           {
//             title: "Function Url",
//             dataIndex: "address",
//             render: (address) => {
//               return (
//                 <span>
//                   {address.address}, {address.city}
//                 </span>
//               );
//             },
//           },
//           {
//             title: "address",
//             dataIndex: "address",
//             render: (address) => {
//               return (
//                 <span>
//                   {address.address}, {address.city}
//                 </span>
//               );
//             },
//           },
//         ]}
//         dataSource={dataSource}
//         pagination={{
//           pageSize: 5,
//         }}
//       ></Table>

//       {/* Add User Modal */}
//       <Modal
//         title="Create Account"
//         visible={isModalVisible}
//         onCancel={handleModalCancel}
//         footer={[
//           <Button key="cancel" onClick={handleModalCancel}>
//             Cancel
//           </Button>,
//           <Button key="submit" type="primary" onClick="">
//             Create Account
//           </Button>,
//         ]}
//       >
//         <Form name="wrap"
//     //labelCol={{ flex: '210px' }}//
//     labelAlign="left"
//     labelWrap
//     labelCol={{ span: 8 }}
//     wrapperCol={{ span: 160 }}
//     colon={false}
//     style={{ maxWidth: 800 }}
//           // Add your form logic and fields here
//           // You can use Ant Design Form components like Form.Item, Input, etc.
//         >
//             <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Account Creation </Accordion.Header>
//         <Accordion.Body>

//           <Form.Item label="MemberType" name="MemberType" rules={[{ required: true, message: 'Please input MemberType!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="AccountType" name="AccountType" rules={[{ required: true, message: 'Please input AccountType' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="MemberShipNo/ID" name="MemberShipNo/ID" rules={[{ required: true, message: 'Please input AccountType' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Date" name="Date" rules={[{ required: true, message: 'Please input first name!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="A/COpeningBalance" name="A/COpeningBalance" rules={[{ required: true, message: 'Please input AccountType' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="BankAccountType" name="BankAccountType" rules={[{ required: true, message: 'Please input MemberShipFee!' }]}>
//             <Input />
//           </Form.Item>
//           </Accordion.Body>
//       </Accordion.Item>
//           </Accordion>

//           <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Customer Details </Accordion.Header>
//         <Accordion.Body>

//           <Form.Item label="CustomerName" name="CustomerName" rules={[{ required: true, message: 'Please input Area!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Father/HusbandName" name="Father/HusbandName" rules={[{ required: true, message: 'Please input Area!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="MotherName" name="MotherName" rules={[{ required: true, message: 'Please input Area!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Gender" name="Gender" rules={[{ required: true, message: 'Please input Area!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="DateofBirth" name="DateofBirth" rules={[{ required: true, message: 'Please input Area!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Age" name="Age" rules={[{ required: true, message: 'Please input Area!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="MobileNumber" name="MobileNumber" rules={[{ required: true, message: 'Please input Area!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Occupation" name="Occupation" rules={[{ required: true, message: 'Please input Area!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Houseno" name="Houseno" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Street" name="Street" rules={[{ required: true, message: 'Please input Area!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Village" name="Village" rules={[{ required: true, message: 'Please input Rural!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="District" name="District" rules={[{ required: true, message: 'Please input Country!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="State" name="State" rules={[{ required: true, message: 'Please input State!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Country" name="Country" rules={[{ required: true, message: 'Please input District!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="PostOffice" name="PostOffice" rules={[{ required: true, message: 'Please input Mandal!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Pincode" name="Pincode" rules={[{ required: true, message: 'Please input City!' }]}>
//             <Input />
//           </Form.Item>
//           </Accordion.Body>
//       </Accordion.Item>
//           </Accordion>

//           <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Nomminee details</Accordion.Header>
//         <Accordion.Body>

//           <Form.Item label="NommineeName" name="NommineeName" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Relation" name="Relation" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Age" name="Age" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Houseno" name="Houseno" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Street" name="Street" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Village" name="Village" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="District" name="District" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="State" name="State" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Country" name="Country" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="PostOffice" name="PostOffice" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Pincode" name="Pincode" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="MobileNo" name="MobileNo" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             </Accordion.Body>
//       </Accordion.Item>
//           </Accordion>

//             <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>KYC Status</Accordion.Header>
//         <Accordion.Body>

//             <Form.Item label="IdProofType" name="IdProofType" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="AddressProof" name="AddressProof" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="OtherDocument" name="OtherDocument" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             </Accordion.Body>
//       </Accordion.Item>
//           </Accordion>

//            <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Bank Introducer Details </Accordion.Header>
//         <Accordion.Body>

//             <Form.Item label="MemberType" name="MemberType" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="MemberShipNo/ID" name="MemberShipNo/ID" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="AccountNumber" name="AccountNumber" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Introducer" name="Introducer" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="ModeofAccount" name="ModeofAccount" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             </Accordion.Body>
//       </Accordion.Item>
//           </Accordion>

//             <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Assets Details </Accordion.Header>
//         <Accordion.Body>

//             <Form.Item label="Vehicle" name="Vehicle" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Residence" name="Residence" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="ExistingLoans" name="ExistingLoans" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             </Accordion.Body>
//       </Accordion.Item>
//           </Accordion>

//             <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Family Details</Accordion.Header>
//         <Accordion.Body>

//             <legend></legend>
//             <Form.Item label="SpouseName" name="SpouseName" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Occupation" name="Occupation" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="DateofBirth" name="DateofBirth" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Gender" name="Gender" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Children-1Name" name="Children-1Name" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Occupation" name="Occupation" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="DateofBirth" name="DateofBirth" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Gender" name="Gender" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Children-2Name" name="Children-2Name" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Occupation" name="Occupation" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="DateofBirth" name="DateofBirth" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>
//             <Form.Item label="Gender" name="Gender" rules={[{ required: true, message: 'Please input Houseno!' }]}>
//             <Input />
//             </Form.Item>

//             </Accordion.Body>
//       </Accordion.Item>
//           </Accordion>

//           {/* Add other form fields as needed */}
//         </Form>
//       </Modal>
//     </Space>
//   );
// }

// export default Customers;

import {
  Avatar,
  Button,
  Form,
  Input,
  Modal,
  Rate,
  Space,
  Table,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../../../API";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, DatePicker } from "antd";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  const handleAddUser = () => {
    setIsModalVisible(true);
  };

  // Handle form submission - add your logic here

  return (
    <div style={{ width: "100%" }}>
      {/* <Typography >Account Creation</Typography> */}
      {/* <Typography.Title level={4}>Account Creation</Typography.Title> */}

      {/* <div style={{ textAlign: "right" }}>
        <Button  type="primary" onClick={handleAddUser}>
          Create Account
        </Button>
      </div> */}

      {/* <Table
        loading={loading}
        columns={[
          {
            title: "SI NO",
            dataIndex: "id",
          },
          {
            title: "User Name",
            dataIndex: "firstName",
          },
          {
            title: "Module Name",
            dataIndex: "lastName",
          },
          {
            title: "Function Name",
            dataIndex: "email",
          },
          {
            title: "User Name",
            dataIndex: "firstName",
          },
          {
            title: "Module Name",
            dataIndex: "lastName",
          },
          {
            title: "Function Name",
            dataIndex: "email",
          },
          {
            title: "Function Url",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
          {
            title: "address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table> */}

      {/* Add User Modal */}
      {/* <Modal
        title="Create Account"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button key="cancel" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick="">
            Create Account
          </Button>,
        ]}
      > */}
      <Form
        name="wrap"
        //labelCol={{ flex: '210px' }}//
        labelAlign="left"
        labelWrap
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 160 }}
        colon={false}
        style={{ width: "100%", height: "100%" }}
        // Add your form logic and fields here
        // You can use Ant Design Form components like Form.Item, Input, etc.
      >
        <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
          <Accordion.Item eventKey="0" style={{ width: "100%" }}>
            <Accordion.Header>Member Details </Accordion.Header>
            <Accordion.Body>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="MemberType"
                    name="MemberType"
                    rules={[
                      { required: true, message: "Please input MemberType!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="date"
                    name="date"
                    rules={[
                      { required: true, message: "Please input AccountType" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="MemberFee"
                    name="MemberFee"
                    rules={[
                      { required: true, message: "Please input AccountType" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Date"
                    name="Date"
                    rules={[
                      { required: true, message: "Please input first name!" },
                    ]}
                  >
                    <DatePicker style={{ width: "100%", height: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="A/COpeningBalance"
                    name="A/COpeningBalance"
                    rules={[
                      { required: true, message: "Please input AccountType" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="BankAccountType"
                    name="BankAccountType"
                    rules={[
                      {
                        required: true,
                        message: "Please input MemberShipFee!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Customer Details </Accordion.Header>
            <Accordion.Body>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="CustomerName"
                    name="CustomerName"
                    rules={[{ required: true, message: "Please input Area!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Father/HusbandName"
                    name="Father/HusbandName"
                    rules={[{ required: true, message: "Please input Area!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="MotherName"
                    name="MotherName"
                    rules={[{ required: true, message: "Please input Area!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Gender"
                    name="Gender"
                    rules={[{ required: true, message: "Please input Area!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Date"
                    name="Date"
                    rules={[
                      { required: true, message: "Please input first name!" },
                    ]}
                  >
                    <DatePicker style={{ width: "100%", height: "100%" }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Age"
                    name="Age"
                    rules={[{ required: true, message: "Please input Area!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="MobileNumber"
                    name="MobileNumber"
                    rules={[{ required: true, message: "Please input Area!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Occupation"
                    name="Occupation"
                    rules={[{ required: true, message: "Please input Area!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Houseno"
                    name="Houseno"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Street"
                    name="Street"
                    rules={[{ required: true, message: "Please input Area!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Village"
                    name="Village"
                    rules={[{ required: true, message: "Please input Rural!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="District"
                    name="District"
                    rules={[
                      { required: true, message: "Please input Country!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="State"
                    name="State"
                    rules={[{ required: true, message: "Please input State!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Country"
                    name="Country"
                    rules={[
                      { required: true, message: "Please input District!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="PostOffice"
                    name="PostOffice"
                    rules={[
                      { required: true, message: "Please input Mandal!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Pincode"
                    name="Pincode"
                    rules={[{ required: true, message: "Please input City!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Nomminee details</Accordion.Header>
            <Accordion.Body>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="NommineeName"
                    name="NommineeName"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Relation"
                    name="Relation"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Age"
                    name="Age"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Houseno"
                    name="Houseno"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Street"
                    name="Street"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Village"
                    name="Village"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="District"
                    name="District"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="State"
                    name="State"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Country"
                    name="Country"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="PostOffice"
                    name="PostOffice"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Pincode"
                    name="Pincode"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="MobileNo"
                    name="MobileNo"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>KYC Status</Accordion.Header>
            <Accordion.Body>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="IdProofType"
                    name="IdProofType"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="AddressProof"
                    name="AddressProof"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="OtherDocument"
                    name="OtherDocument"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Bank Introducer Details </Accordion.Header>
            <Accordion.Body>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="MemberType"
                    name="MemberType"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="MemberShipNo/ID"
                    name="MemberShipNo/ID"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="AccountNumber"
                    name="AccountNumber"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Introducer"
                    name="Introducer"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="ModeofAccount"
                    name="ModeofAccount"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Assets Details </Accordion.Header>
            <Accordion.Body>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Vehicle"
                    name="Vehicle"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Residence"
                    name="Residence"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="ExistingLoans"
                    name="ExistingLoans"
                    rules={[
                      { required: true, message: "Please input Houseno!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Family Details</Accordion.Header>
            <Accordion.Body>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="SpouseName" name="SpouseName">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Occupation" name="Occupation">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Date"
                    name="Date"
                    rules={[
                      { required: true, message: "Please input first name!" },
                    ]}
                  >
                    <DatePicker style={{ width: "100%", height: "100%" }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Gender" name="Gender">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Children-1Name" name="Children-1Name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Occupation" name="Occupation">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Date"
                    name="Date"
                    rules={[
                      { required: true, message: "Please input first name!" },
                    ]}
                  >
                    <DatePicker style={{ width: "100%", height: "100%" }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Gender" name="Gender">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Children-2Name" name="Children-2Name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Occupation" name="Occupation">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="DateofBirth" name="DateofBirth">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Gender" name="Gender">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br /> <br />
        <div>
          <Button
            type=""
            style={{
              marginRight: "10px",
              backgroundColor: "#268DCB",
              color: "white",
              borderRadius: "9px",
              width: "5rem",
              height: "2rem",
            }}
          >
            Create
          </Button>
          <Button
            style={{
              backgroundColor: "#E47B25",
              color: "white",
              borderRadius: "9px",
              width: "5rem",
              height: "2rem",
            }}
          >
            Clear
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Customers;
