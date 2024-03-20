
import { Avatar, Button,Radio, Form, Input, Modal, Rate, Typography, DatePicker, Select, Checkbox} from "antd";
import { Card, Space, Statistic, Table } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../../../API";
import './IssuedCheques.css';

const IssuedCheques = () =>{
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

   
    return(
      <div>
    <Space size={20} direction="vertical">
         <Typography.Title level={4} id="text">CHEQUE RETURN</Typography.Title>
    
        
          <Form layout="inline" className="Form"
          // Add your form logic and fields here
          // You can use Ant Design Form components like Form.Item, Input, etc.
        >
        <Form.Item label="Bank Name">
          <Select placeholder="Select Bank Name">
            <Select.Option value="ICICI">ICICI</Select.Option>
            <Select.Option value="SBI">SBI</Select.Option>
            <Select.Option value="ANDHRA">ANDHRA</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Cheque No">
          <Select placeholder="Select Cheque No">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Button className="buttoncolorsave">Save</Button>
        <Button className="buttoncolor">Print</Button>
        
          {/* Add other form fields as needed */}
        </Form>
        </Space> 
    <Table
        loading={loading}
        columns={[
          {
            title: "Cancelled",
            dataIndex: "id",
          },
          {
            title: "Cheque No",
            dataIndex: "firstName",
          },
          {
            title: "Amount",
            dataIndex: "lastName",
          },
          {
            title: "Voucher No",
            dataIndex: "email",
          },
          {
            title: "Paid to",
            dataIndex: "firstName",
          },
          {
            title: "Cheque Date",
            dataIndex: "lastName",
          },
          {
            title: "Cheque status",
            dataIndex: "email",
          },
          
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>

    </div>

    );
}

export default IssuedCheques;