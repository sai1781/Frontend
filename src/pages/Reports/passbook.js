import { Avatar, Button, Form, Input, Modal, Rate, Typography, Dropdown, Select, Checkbox,Menu} from "antd";
import { Card, Space, Statistic, Table } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../API";
import { DownOutlined} from "@ant-design/icons";
function PassBook(){
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
    const generateDropdownMenu = (index, options) => (
        <Menu onClick={({ key }) => handleDropdownChange(index, key)}>
          {options.map((option) => (
            <Menu.Item key={option}>{option}</Menu.Item>
          ))}
        </Menu>
      );
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
    return(
      <div>
    <Space size={20} direction="vertical">
         <Typography.Title level={4}>Passbook</Typography.Title>
    
        
          <Form layout="inline"
          // Add your form logic and fields here
          // You can use Ant Design Form components like Form.Item, Input, etc.
        >
        
        <Typography.Text className="left-text">Deposit Type :</Typography.Text>
            <Dropdown overlay={generateDropdownMenu(1, [ "RD","Savings Account"])}>
              <Button className="dropdown-select">
                {accountNo || "Select"} <DownOutlined />
              </Button>
            </Dropdown>    
            <Typography.Text className="left-text">Account No. :</Typography.Text>
            <Dropdown overlay={generateDropdownMenu(1, ["Select"])}>
              <Button className="dropdown-select">
                {accountNo || "Select"} <DownOutlined />
              </Button>
            </Dropdown>
            <Checkbox>Transactions</Checkbox>    
            <Typography.Text className="left-text">Render Type :</Typography.Text>
            <Dropdown overlay={generateDropdownMenu(1, [ "PDF", "Excel"])}>
              <Button className="dropdown-select">
                {accountNo || "Select"} <DownOutlined />
              </Button>
            </Dropdown>    
        <Button type="primary">Print</Button>
          {/* Add other form fields as needed */}
        </Form>
    </Space>
    </div>

    );
}

export default PassBook;