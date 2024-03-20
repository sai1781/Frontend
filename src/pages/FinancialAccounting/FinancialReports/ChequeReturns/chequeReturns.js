

import { Avatar, Button, Form, Input, Modal, Rate, Typography, DatePicker, Select, Checkbox} from "antd";
import { Card, Space, Statistic, Table } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../../../API";
import './ChequeReturns.css';
const { RangePicker } = DatePicker;

const ChequeReturns =()  =>{
  
    return(
      <div>
    <Space size={20} direction="vertical">
         <Typography.Title level={4} id="text">CHEQUE RETURN</Typography.Title>
    
        
          <Form layout="inline" className="Form"
          // Add your form logic and fields here
          // You can use Ant Design Form components like Form.Item, Input, etc.
        >
        <Form.Item label="Date(From-To)">
          <RangePicker />
        </Form.Item>
        
        <Button className="buttoncolor">Print</Button>
          {/* Add other form fields as needed */}
        </Form>
    </Space>
    </div>

    );
}

export default ChequeReturns;