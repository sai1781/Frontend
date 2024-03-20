
import { Avatar, Button, Form, Input, Modal, Rate, Typography, DatePicker, Select, Checkbox} from "antd";
import { Card, Space, Statistic, Table } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../../../API";
import './LedgerSummary.css';

const LedgerSummary = () => {
  
    return(
      <div>
    <Space size={20} direction="vertical">
         <Typography.Title level={4} id="text">ACCOUNT LEDGER</Typography.Title>
    
        
          <Form layout="inline" className="Form"
          // Add your form logic and fields here
          // You can use Ant Design Form components like Form.Item, Input, etc.
        >
        <Form.Item label="Account Head">
          <Select placeholder="Select Account Head">
            <Select.Option value="ADVANCE">ADVANCE</Select.Option>
            <Select.Option value="ADVANCE RECEIVABLES">ADVANCE RECEIVABLES</Select.Option>
            <Select.Option value="BANK CHARGES">BANK CHARGES</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker />
        </Form.Item><br />
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

export default LedgerSummary;