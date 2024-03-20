import React, { useState } from 'react';
import { Form, Radio, DatePicker, Input, Select, Button, Row, Col, Checkbox } from 'antd';
import { SyncOutlined, PlusOutlined } from '@ant-design/icons';
import './ShareCapital.css'
const { Option } = Select;

const ShareCapital = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleRadioChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className='ShareCapital'>
      <Form className='Form'>
      <h3><b>Share Capital</b></h3><br></br>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
          <Form.Item name="grTypeoupId" label="MemberType" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Select placeholder="Select Type" className='Select'>
                <Option value="teacher">Select</Option>
                <Option value="doctor">GPM1/22_JLG/001</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Admission No" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input  className="Input" placeholder="Enter Receipt ID" />
            </Form.Item>
            <Form.Item label="Shares of Each" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input  className="Input" placeholder="Enter Receipt Type" />
            </Form.Item>
            <Form.Item label="Mobile No" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input  className="Input" placeholder="Enter Receipt Type" />
            </Form.Item>
            <Form.Item label="Customer Age" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input  className="Input" placeholder="Enter Receipt Type" />
            </Form.Item>
            <Form.Item label="Nominee's Name" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input  className="Input" placeholder="Enter Receipt Type" />
            </Form.Item>
            <Form.Item name="date" label="Date" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
          <Form.Item name="grTypeoupId" label="MembershipNo/Id" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Select placeholder="Select Type" className='Select'>
                <Option value="teacher">Select</Option>
                <Option value="doctor">GPM1/22_JLG/001</Option>
              </Select>
            </Form.Item>
            <Form.Item name="groupName" label="Customer Name " labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input  className="Input" />
            </Form.Item>
            <Form.Item name="memberId" label="Naminee's Age" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input  className="Input" />
            </Form.Item>
            <Form.Item name="memberId" label="No Of Shares Held" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input  className="Input" />
            </Form.Item>
            <Form.Item name="memberId" label="Relation" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input  className="Input" />
            </Form.Item>
            <Form.Item name="memberId" label="Total Amount" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input  className="Input" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" className='buttonBlue'>
            Save
          </Button>
          <Button type="primary" className='buttonOrange'>
            Clear
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ShareCapital;