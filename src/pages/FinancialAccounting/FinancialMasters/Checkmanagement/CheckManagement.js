import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Radio, DatePicker, Input, Select, Button, Row, Col, Typography } from 'antd';
import { TextArea } from 'antd/lib/input';
import './Checkmanagement.css';
const { Option } = Select;

const CheckManagement = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleRadioChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="container">
      <div>
      <Typography.Title level={4} id="text">Check Management</Typography.Title>
        <Form className='CheckManagement'>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
            <Form.Item name="grTypeoupId" label="Bank Name" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Select placeholder="Select Type" >
                  <Option value="teacher">Select</Option>
                  <Option value="doctor">GPM1/22_JLG/001</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
            <Form.Item label="Account Type" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Input  />
              </Form.Item>
            </Col>
          </Row>
         
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Account Name" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Input  placeholder="Enter Receipt ID" />
              </Form.Item>
              <Form.Item label="Location" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Input  placeholder="Enter Receipt Type" />
              </Form.Item>
             
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="groupName" label="Account No " labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Input  />
              </Form.Item>
              <Form.Item name="grTypeoupId" label="Filter By" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Select placeholder="Select Type" style={{ width: '100%' }}>
                  <Option value="teacher">Select</Option>
                  <Option value="doctor">GPM1/22_JLG/001</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button className='btn1'>
              Add
            </Button>
            <Button className='btn2'>
              Refresh
            </Button>
          </Form.Item>
        </Form>
      </div>
      &nbsp;&nbsp;
      <table className="table">
        <thead>
          <tr>
            <th>Bank Id</th>
            <th>From</th>
            <th>To</th>
            <th>No Of Cheques</th>
            <th>Status Name</th>
            <th>Bank Name</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {/* Add table rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default CheckManagement;