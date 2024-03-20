
import { Avatar, Button, Form, Input, Modal, Rate, Typography, DatePicker, Select, Checkbox} from "antd";
import { Card, Space, Statistic, Table } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../../../API";
import './DayBook.css';

const  DayBook = () => {
  
    return(
      <div>
    <Space size={20} direction="vertical">
         <Typography.Title level={4} id="text">Day Book</Typography.Title>
    
        
          <Form layout="inline" className="Form"
          // Add your form logic and fields here
          // You can use Ant Design Form components like Form.Item, Input, etc.
        >
        <Form.Item label="Date">
          <DatePicker />
        </Form.Item>
        
        <Button className="buttoncolor">Print</Button>
        <Button className="buttoncolor2">Cheques in hand print</Button>
          {/* Add other form fields as needed */}
        </Form>
    </Space>
    </div>

    );
}

export default DayBook;