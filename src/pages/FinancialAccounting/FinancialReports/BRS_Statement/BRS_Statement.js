import {
  Avatar,
  Button,
  Radio,
  Form,
  Input,
  Modal,
  Rate,
  Typography,
  DatePicker,
  Select,
  Checkbox,
} from "antd";
import { Card, Space, Statistic, Table } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../../../API";
import "./BRS_Statement.css";

const { RangePicker } = DatePicker;

const BRS_Statement = () => {
  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4} id="text">
          BRS
        </Typography.Title>

        <Form
          layout="inline"
          className="Form"
          // Add your form logic and fields here
          // You can use Ant Design Form components like Form.Item, Input, etc.
        >
          <Form.Item>
            <Radio.Group>
              <Radio value="Bank credit details"> Bank credit details </Radio>
              <Radio value="Bank debit details"> Bank debit details </Radio>
              <Radio value="Bank charges/intrest"> Bank charges/intrest </Radio>
              <Radio value="Bank returns"> Bank returns </Radio>
            </Radio.Group>
          </Form.Item>
          <br />
          <Form.Item label="Bank Name">
            <Select placeholder="Select Bank Name">
              <Select.Option value="ICICI">ICICI</Select.Option>
              <Select.Option value="SBI">SBI</Select.Option>
              <Select.Option value="ANDHRA">ANDHRA</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date(From-To)">
            <RangePicker />
          </Form.Item>
          <Button className="buttoncolor">Print</Button>
          {/* Add other form fields as needed */}
        </Form>
      </Space>
    </div>
  );
};

export default BRS_Statement;
