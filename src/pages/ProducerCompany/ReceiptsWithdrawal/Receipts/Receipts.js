import { Button, Radio, DatePicker, Dropdown, Input, Menu, Select, Space, Form, Table, Typography } from "antd";
import { DownOutlined, PrinterOutlined, SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrders } from "../../../../API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "antd";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Receipts.css'
import { orange } from "@mui/material/colors";
const { Option } = Select;


// import "./withdraw.css"
const Receipts = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [depositType, setDepositType] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [format, setFormat] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []);

  const fetchData = () => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  };


  const handleDropdownChange = (index, selectedValue) => {
    switch (index) {
      case 0:
        setDepositType(selectedValue);
        break;
      case 1:
        setAccountNo(selectedValue);
        break;
      case 2:
        setFormat(selectedValue);
        break;
      default:
        break;
    }
  };

  const handlePrintButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleApplyButtonClick = () => {
    // Implement logic for posting data
    console.log("Data posted:", { depositType, accountNo, selectedFromDate, selectedToDate });
  };



  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    // Implement search functionality here if needed
  };

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const generateDropdownMenu = (index, options) => (
    <Menu onClick={({ key }) => handleDropdownChange(index, key)}>
      {options.map((option) => (
        <Menu.Item key={option}>{option}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Space size={20} direction="vertical" className="container">
      <h2 className="text-color">Receipts</h2>
      <Form labelAlign="center"
        labelWrap
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 160 }}
        colon={false}
        className=".Form">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Receipts </Accordion.Header>
            <Accordion.Body >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Payment Type" name="payment_type" className=".FormItem">
                    <Select placeholder="Select">
                      <Option value="Share Capital">Share Capital</Option>
                      <Option value="FD">FD</Option>
                      <Option value="Membership Fee">Membership Fee</Option>
                      <Option value="Insurance Fee">Insurance Fee</Option>
                      {/* Add more options as needed */}
                    </Select>

                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Space size={10} align="center">
                    <Form.Item label="Date" name="date" className=".FormItem">
                      <DatePicker className="DatePicker" onChange={date => setSelectedFromDate(date)} />
                    </Form.Item>
                  </Space>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Member Details:</Accordion.Header>
            <Accordion.Body>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Member Type : " name="Member_Type" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Membership No :" name="Membership_No" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={9}>
                  <Form.Item label="Date :" name="date" className=".FormItem">
                    <DatePicker className=".DatePicker" onChange={date => setSelectedFromDate(date)} />
                  </Form.Item>
                </Col>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <Col span={12}>
                  <Form.Item label="Customer Name :" name="Customer Name" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Nominee Name :" name="Nominee Name :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Age :" name="Age :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Mobile No :" name="Mobile No :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Relation :" name="Relation :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Share Certificate</Accordion.Header>
            <Accordion.Body >

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Certificate No. :" name="Certificate No. :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Shares Each Of :" name="Shares Each Of :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="No Of Shares :" name="No Of Shares :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Distinctive No's :" name="Distinctive No's :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="To :" name="To :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item label="Issue Date :" name="Issue Date :" className=".FormItem">
                    <DatePicker size="large" className=".DatePicker" onChange={date => setSelectedFromDate(date)} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Total Amount :" name="Total Amount :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Entries</Accordion.Header>
            <Accordion.Body>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Received amount :" name="Received amount :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Narration :" name="Narration :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Payment Details</Accordion.Header>
            <Accordion.Body >
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item label="Mode of payment :" name="Mode of payment :">
                    <Radio.Group onChange={onChange} value={value}> {/* INCOMPLETE*/}
                      <Radio value={1}>Cash</Radio>
                      <Radio value={2}>Cheque</Radio>
                      <Radio value={3}>Transfer</Radio>
                      <Radio value={4}>Direct</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Bank name :" name="Bank name :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Branch :" name="Branch :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Cheque No. :" name="Cheque No. :" className=".FormItem">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item label="Date :" name="Date :" className=".FormItem">
                    <DatePicker size="large" className=".DatePicker" onChange={date => setSelectedFromDate(date)} />
                  </Form.Item>
                </Col>
              </Row>
             
               
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Form>
      <div className="btn-position">
              <Button className="buttonBlue">Save</Button>
                <Button className="buttonOrange">Refresh</Button>
              </div>
    </Space>


  );
}
export default Receipts;