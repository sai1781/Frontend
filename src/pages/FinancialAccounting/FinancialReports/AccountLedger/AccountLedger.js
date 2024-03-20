import {  Button, Form, Typography, DatePicker, Select, Checkbox} from "antd";
import { Space} from "antd";
import './AccountLedger.css';
const { RangePicker } = DatePicker;

const AccountLedger = () => {
  
    return(
      <div>
    <Space size={20} direction="vertical">
         <Typography.Title level={4} id="text">ACCOUNT LEDGER</Typography.Title>
    
        
          <Form layout="inline" className="Form"
          // Add your form logic and fields here
          // You can use Ant Design Form components like Form.Item, Input, etc.
          >

        <Form.Item label="Account Head" className="Form.Item">
          <Select placeholder="Select Account Head">
            <Select.Option value="ADVANCE">ADVANCE</Select.Option>
            <Select.Option value="ADVANCE RECEIVABLES">ADVANCE RECEIVABLES</Select.Option>
            <Select.Option value="BANK CHARGES">BANK CHARGES</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date(From-To)" className="Form.Item">
          <RangePicker />
        </Form.Item>
        <Form.Item label="Subcategory" className="Form.Item">
          <Select placeholder="Select Subcategory">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className="Form.Item">
          <Checkbox>Narration</Checkbox>
          </Form.Item>
        <Form.Item label="Export Type" className="Form.Item">
          <Select placeholder="Select File Type">
            <Select.Option value="pdf">PDF</Select.Option>
          </Select>
        </Form.Item >
        <Button className="buttoncolor">Print</Button>
                {/* Add other form fields as needed */}
        </Form>
    </Space>
    </div>

    );
}

export default AccountLedger