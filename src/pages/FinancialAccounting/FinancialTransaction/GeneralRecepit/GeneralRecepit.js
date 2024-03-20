import { Avatar, Button, Form, Input, Modal, Rate, Space, Table, Radio, Col,  Select,  DatePicker, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../../../API";
import { SyncOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import React from 'react';
import './GeneralRecepit.css';
// import { Form, Input, Button, Select, DatePicker, Radio, Space, Row, Col, Typography } from 'antd';

const { TextArea } = Input;
const { Option } = Select;


const GeneralRecepit =() => {
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

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  const items = [
    { name: 'Item 1', amount: '$100' },
    { name: 'Item 2', amount: '$200' },
    // Add more items as needed
  ];
  // Handle form submission - add your logic here

  return (
      <div >
           <Typography.Title level={4} id="text">General Recepit</Typography.Title>
      {/* <Typography.Title level={4}>Users</Typography.Title> */}

      {/* <div style={{ textAlign: "right" }}>
        <Button type="primary" onClick={handleAddUser}>
          Add Function
        </Button>
      </div> */}

      {/* <div style={{ width: "800px", height: "500px", overflow: "auto" }}>
      <Table
        loading={loading}
        columns={[
          {
            title: "SI NO",
            dataIndex: "id",
          },
          {
            title: "Date",
            dataIndex: "firstName",
          },
          {
            title: "Receipt No",
            dataIndex: "lastName",
          },
          {
            title: "Particulars",
            dataIndex: "email",
          },
          {
            title: "Amount",
            dataIndex: "email", // Ensure correct dataIndex for Amount
          },
        ]}
        dataSource={dataSource}
                  pagination={{
            pageSize:5,
        }} // Disable pagination if you want to show all data at once
      />
    </div> */}

      {/* Add User Modal
      <Modal
        title="Share Capital"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button key="cancel" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick="">
            Add User
          </Button>,
        ]}
        style={{ minWidth: "70%", minHeight: "70%" }}
      > */}
         {/* <Form layout="vertical" className="Form" > */}
         <Form layout="horizontal" className="GeneralRecepit"> {/* Use horizontal layout for side-by-side elements */}
      <Row gutter={100}> {/* Maintain gutter for spacing between columns */}
        <Col span={12}> {/* Adjust span for two side-by-side fields */}
        <Form.Item label="Date" name=" Date" rules={[{ required: false, message: 'Please input  Date!' }]} id='details'>
              <DatePicker size="large" style={{ width: '100%', height: '35px' }} />
            </Form.Item>
            <Form.Item label="Subcategory">
        <Select placeholder="Select Subcategory">
          <Option value="sub1">Subcategory 1</Option>
          <Option value="sub2">Subcategory 2</Option>
        </Select>
            </Form.Item>
     
          {/* </Form.Item> */}
        </Col>
        <Col span={12}> {/* Adjust span for two side-by-side fields */}
        <Form.Item label="Account Head">
        <Select placeholder="Select Account Head">
          <Option value="head1">Head 1</Option>
          <Option value="head2">Head 2</Option>
        </Select>
      </Form.Item>
       <Form.Item label="Amount">
        <Input placeholder="Enter Amount" />
      </Form.Item>
            <Form.Item></Form.Item>
       <Space>
          <Button className="btn1" id='button'>Add</Button>
          <Button className="btn2" id='button'>Clear</Button>
            </Space>
        </Col>
     </Row> 
  <Form.Item label="Narration" style={{width: "800px"}}>
      <TextArea rows={10} col={ 30} placeholder="Description" />
      </Form.Item>
      <Form.Item>
        <Radio.Group>
          <Radio value="cash">Cash</Radio>
          <Radio value="cheque">Cheque</Radio>
          <Radio value="draft">Draft</Radio>
          <Radio value="direct">Direct</Radio>
        </Radio.Group>
      </Form.Item>

      
      
       
            {/* </Form.Item> */}
            
     
    {/* </Col> */}

    <Col span={12}>
 
          </Col>
          <div style={{  width: '100%', borderRadius: '20px', margin: '10px', padding: '10px' }}>
  <Row gutter={24} align="middle">
    <Col span={4} style={{ textAlign: 'right', paddingRight: '10px' }}>
      <label htmlFor="Bank name">Bank name:</label>
    </Col>
    <Col span={8}>
      <Input id="Bankname" placeholder="Please input Bank name!" />
    </Col>
    <Col span={4} style={{ textAlign: 'right', paddingRight: '10px' }}>
      <label htmlFor="Branch">Branch:</label>
    </Col>
    <Col span={8}>
      <Input id="Branch" placeholder="Please input Branch!" />
              </Col>
              <Col span={4} style={{ textAlign: 'right', paddingRight: '10px' }}>
      <label htmlFor="Cheque No">Cheque No:</label>
    </Col>
    <Col span={8}>
  <Input id="Cheque No" placeholder="Please input Cheque No!" />
</Col>
<Col span={4} style={{ textAlign: 'right', paddingRight: '10px' }}>
  <label htmlFor="datePicker">Date:</label>
</Col>
<Col span={8}>
  <DatePicker id="datePicker" style={{width: '100%'}} />
            </Col>
            <div className="d-flex flex-row justify-content-center">
              <Button className="ak" icon={<CheckOutlined />}  >
        Save
        </Button>
  <Button className="btn2" icon={<CloseOutlined />} >
        Cancel
              </Button>
              </div>
</Row></div>

          
</Form>

     
      {/* </Modal> */}
    </div>
  );
}

export default GeneralRecepit;