import { Button, DatePicker, Dropdown, Input, Menu, Modal, Space, Table, Typography } from "antd";
import { DownOutlined, PrinterOutlined, SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrders } from "../../../../API";
import './PassbookCancellation.css'
// import "./withdraw.css"
const PassbookCancellation = () => {
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

  const generateDropdownMenu = (index, options) => (
    <Menu onClick={({ key }) => handleDropdownChange(index, key)}>
      {options.map((option) => (
        <Menu.Item key={option}>{option}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="reports-container">
      <Space size={20} direction="vertical">
        
        <div className="dropdown-container">
        <Typography.Text className="left-text">Account No :</Typography.Text>
            <Dropdown overlay={generateDropdownMenu(1, ["Select", "All", "Saving"])}>
              <Button className="dropdown-select">
                {accountNo || "Account Number"} <DownOutlined />
              </Button>
            </Dropdown>    
          <Space size={10} align="center">
            <Typography.Text> Date:</Typography.Text>
            <DatePicker onChange={date => setSelectedFromDate(date)} />
           
            <Typography.Text> Account Balance:</Typography.Text>
        <Input
              placeholder="Account Balance"
            //   prefix={<SearchOutlined />}
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              className="Input"
            />
          
           
          </Space>
          
        </div>
        <Typography.Text>Member Details:</Typography.Text>
        <div className="search-container">
        <div className="search-container">
        <div className="search-container">
        <Space size={20} direction="vertical">
  <div>
    <Typography.Text>Member Type :</Typography.Text>
    <Input
      placeholder="Member Type :"
      value={searchValue}
      onChange={(e) => handleSearch(e.target.value)}
      className=".MemberDetailsInput"
    />
    <Typography.Text>Membership No :</Typography.Text>
    <Input
      placeholder="Membership No :"
      value={searchValue}
      onChange={(e) => handleSearch(e.target.value)}
      className=".MemberDetailsInput"
    />
    <Typography.Text>Date:</Typography.Text>
    <DatePicker onChange={date => setSelectedFromDate(date)} />
  </div>
  <div>
    <Typography.Text>Customer Name :</Typography.Text>
    <Input
      placeholder="Customer Name :"
      value={searchValue}
      onChange={(e) => handleSearch(e.target.value)}
      className=".MemberDetailsInput"
    />
    <Typography.Text>Nominee Name :</Typography.Text>
    <Input
      placeholder="Nominee Name :"
      value={searchValue}
      onChange={(e) => handleSearch(e.target.value)}
      className=".MemberDetailsInput"
    />
    <Typography.Text>Age :</Typography.Text>
    <Input
      placeholder="Age :"
      value={searchValue}
      onChange={(e) => handleSearch(e.target.value)}
      className=".MemberDetailsInput"
    />
  </div>
  <div>
  <Typography.Text>Mobile No :</Typography.Text>
    <Input
      placeholder="Mobile No :"
      value={searchValue}
      onChange={(e) => handleSearch(e.target.value)}
      className=".MobileNoInput"
    />
    <Typography.Text>Relation :</Typography.Text>
    <Input
      placeholder="Relation :"
      value={searchValue}
      onChange={(e) => handleSearch(e.target.value)}
      className=".MobileNoInput"
    />
  </div>
  <div>
  <Typography.Text>Narration :</Typography.Text>
    <Input
      placeholder="Narration :"
      value={searchValue}
      onChange={(e) => handleSearch(e.target.value)}
      className=".NarrationInput"
    />
  </div>
</Space>

</div>

</div>

</div>

      </Space>
      <br /> <br />
          <div className=".button">
        <Button className=".buttonBlue">Cancel</Button>
        <Button className='.buttonOrange'>Refresh</Button>
        </div>
    
    </div>
  );
}
export default PassbookCancellation;