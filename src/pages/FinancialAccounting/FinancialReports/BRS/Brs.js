

import { Avatar, Button, Form, Input, Modal, Rate, Typography, DatePicker, Select, Checkbox} from "antd";
import { Card, Space, Statistic, Table } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../../../API";
import './Brs.css';

const  BRS  = ()  =>{
  
    return(
      <div>
    <Space size={20} direction="vertical">
         <Typography.Title level={4} id="text">BRS</Typography.Title>
    
        
          <Form layout="inline" className="Form"
          // Add your form logic and fields here
          // You can use Ant Design Form components like Form.Item, Input, etc.
        >
        <Form.Item label="Bank reconcliation statement as at">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Bank Name">
          <Select placeholder="Select Bank Name">
            <Select.Option value="ICICI">ICICI</Select.Option>
            <Select.Option value="SBI">SBI</Select.Option>
            <Select.Option value="ANDHRA">ANDHRA</Select.Option>
          </Select>
        </Form.Item>
        <br />
        <Form.Item label="Export Type">
          <Select placeholder="Select File Type">
            <Select.Option value="pdf">PDF</Select.Option>
          </Select>
        </Form.Item>
        <Button className="buttoncolor">Print</Button>
          {/* Add other form fields as needed */}
        </Form>
    </Space>
    </div>

    );
}

export default BRS;