import React, { useState } from 'react';
import { Form, Radio, DatePicker, Input, Select, Button, Row, Col, Checkbox } from 'antd';
import { SyncOutlined, PlusOutlined } from '@ant-design/icons';
import './ReceiptsDelete.css'


const { Option } = Select;
const ReceiptDelete = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleRadioChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div>
      <h4>Receipts Delete Or Date Modification</h4>
      <Form className='Form'>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="date" label="Date" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <DatePicker  />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="grTypeoupId" label="Type" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Select placeholder="Select Type" className='Select'>
                <Option value="teacher">Select</Option>
                <Option value="doctor">GPM1/22_JLG/001</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Radio.Group onChange={handleRadioChange} value={selectedType}>
            <Checkbox value="formation">Receipts Cancel</Checkbox>
            <Checkbox value="modification">Date Modification</Checkbox>
          </Radio.Group>
        </Form.Item>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item label="Receipt ID" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input className="Input" placeholder="Enter Receipt ID" />
            </Form.Item>
            <Form.Item label="Receipt Type" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input className="Input" placeholder="Enter Receipt Type" />
            </Form.Item>
            <Form.Item label="Narration" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
  <Input.TextArea className='InputTextArea' placeholder="Enter Narration" />
</Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="groupName" label="Amount " labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input className='Input'/>
            </Form.Item>
            <Form.Item name="memberId" label="Details" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input className='Input'/>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" className='buttonBlue'>
            Add
          </Button>
          <Button className='buttonOrange'>
            Refresh
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReceiptDelete;
