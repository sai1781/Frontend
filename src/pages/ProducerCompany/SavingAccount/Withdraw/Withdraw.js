import React, { useState } from 'react';
import { DatePicker, Button, Input, Dropdown, Menu, Space, Typography, Table, Modal } from 'antd';
import { SearchOutlined, DownOutlined, PrinterOutlined } from '@ant-design/icons';
import './Withdraw.css'
import { Spa } from '@mui/icons-material';
const Withdraw = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [format, setFormat] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
    // Perform search logic
  };

  const generateDropdownMenu = (id, options) => {
    return (
      <Menu>
        {options.map((option, index) => (
          <Menu.Item key={index} onClick={() => handleDropdownSelect(id, option)}>
            {option}
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  const handleDropdownSelect = (id, option) => {
    if (id === 1) {
      setAccountNo(option);
    }
    // Handle other dropdown selections
  };

  const handleApplyButtonClick = () => {
    // Perform apply button click logic
  };

  const handlePrintButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    // Perform modal OK logic
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };


  const [selectedOption, setSelectedOption] = useState('cash');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // Your useEffect hook for fetching data
  return (
    <div className="producer-company-container">
      <Space size={20} direction="vertical">
        <div className="dropdown-container">
          <Space size={10} align="center">

            {/* <Typography.Text>To Date:</Typography.Text>
            <DatePicker onChange={date => setSelectedToDate(date)} />
            <Typography.Text>Mobile No:</Typography.Text>
            <Input
              placeholder="Mobile No..."
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              style={{ width: 200 }}
            /> */}

          </Space>
        </div>
        {/* <Space size={10} direction="horizontal">
              <Typography.Text>Search:</Typography.Text>
              <Input
                placeholder="Search..."
                prefix={<SearchOutlined />}
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: 200 }}
              />
              <Button type="primary" onClick={handleApplyButtonClick}>
                Apply
              </Button>
              <Button type="primary" icon={<PrinterOutlined />} onClick={handlePrintButtonClick}>
                Print
              </Button>
            </Space> */}

        <Space size={30}>
          <Space size={10} direction="vertical">
            <Typography.Text>Date:</Typography.Text>
            <DatePicker onChange={date => setSelectedFromDate(date)} />
            <Typography.Text className="left-text">Member Type * :
              <Dropdown overlay={generateDropdownMenu(1, ["Select",])}>
                <Button className="dropdown-select">
                  {accountNo || "Member type"} <DownOutlined />
                </Button>
              </Dropdown>
            </Typography.Text>
            <Typography.Text className="left-text">Account Type * :
              <Dropdown overlay={generateDropdownMenu(1, ["Select",])}>
                <Button className="dropdown-select">
                  {accountNo || "Account type"} <DownOutlined />
                </Button>
              </Dropdown>
            </Typography.Text>
            <Typography.Text className="left-text">Account No :

              <Dropdown overlay={generateDropdownMenu(1, ["Select", "All", "Saving"])}>
                <Button className="dropdown-select">
                  {accountNo || "Account Number"} <DownOutlined />
                </Button>
              </Dropdown>
            </Typography.Text>

          </Space>

          <div className='ImageContainer'>
            <div className='firstImage'>
              <span className='firstImageText'>Member Photo :</span>
              <img className='withdrawImage' src='https://images.unsplash.com/photo-1554080353-a576cf803bda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D' />
            </div>
            <div className='firstImage'>
              <span className='firstImageText'>Member Signature :</span>
              <img className='withdrawImage' src='https://images.unsplash.com/photo-1554080353-a576cf803bda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D' />
            </div>
          </div>

        </Space>


        <Typography.Title level={4}>Non Member Details</Typography.Title>
        <Typography.Text className="left-text">Non Member Photo * :
          <Dropdown overlay={generateDropdownMenu(1, ["Select",])}>
            <Button className="dropdown-select">
              {accountNo || "Non Member Photo"} <DownOutlined />
            </Button>
          </Dropdown>
        </Typography.Text>
        <Typography.Text className="left-text">Non Member Signature * :
          <Dropdown overlay={generateDropdownMenu(1, ["Select",])}>
            <Button className="dropdown-select">
              {accountNo || "Non Member Signature"} <DownOutlined />
            </Button>
          </Dropdown>
        </Typography.Text>

        <Typography.Title level={4}>Member Details</Typography.Title>


        <Table
          loading={loading}
          columns={[
            { title: "Savings Account No", dataIndex: "savingsaccountno" },
            { title: "Membership ID", dataIndex: "membershipid", render: (value) => <span>${value}</span> },
            { title: "Member Name", dataIndex: "membername", render: (value) => <span>${value}</span> },
            { title: "Mobile Number", dataIndex: "mobilenumber" },
            { title: "Account Balance", dataIndex: "accountbalance" },
            { title: "Withdrawal Amount", dataIndex: "withdrawalamount" },
          ]}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }} />
        <Typography.Title level={4}>Entries</Typography.Title>
        <Typography.Text className="left-text">Total Withdrawal Amount:
          <Dropdown overlay={generateDropdownMenu(1, ["Select",])}>
            <Button className="dropdown-select">
              {accountNo || "Total Deposit amount"} <DownOutlined />
            </Button>
          </Dropdown>
        </Typography.Text>

        <Typography.Text className="left-text">Narration:
          <Dropdown overlay={generateDropdownMenu(1, ["Select",])}>
            <Button className="dropdown-select">
              {accountNo || "Enter Narration"} <DownOutlined />
            </Button>
          </Dropdown>
        </Typography.Text>
        <Typography.Title level={4}>Payment Details</Typography.Title>

        <div className='radioContainer'>
          <span className='firstImageText'>Mode of Payment:</span>
          <div className='radios'>
            <label>
              <input
                type="radio"
                value="cash"
                checked={selectedOption === 'cash'}
                onChange={handleOptionChange} />
              Cash
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="Cheque"
                checked={selectedOption === 'Cheque'}
                onChange={handleOptionChange} />
              Cheque
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="Adjustment"
                checked={selectedOption === 'Adjustment'}
                onChange={handleOptionChange} />
              Adjustment
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="NFET"
                checked={selectedOption === 'NFET'}
                onChange={handleOptionChange} />
              NFET
            </label>
          </div>

        </div>



        <Typography.Text className="left-text">Mode of payment:
          <Dropdown overlay={generateDropdownMenu(1, ["Select",])}>
            <Button className="dropdown-select">
              {accountNo || "Enter Narration"} <DownOutlined />
            </Button>
          </Dropdown>
        </Typography.Text>
        <Typography.Text className="left-text">Bank name:
          <Dropdown overlay={generateDropdownMenu(1, ["Select",])}>
            <Button className="dropdown-select">
              {accountNo || "Select Bank name"} <DownOutlined />
            </Button>
          </Dropdown>
        </Typography.Text>
        <Typography.Text className="left-text">Cheque No:
          <Dropdown overlay={generateDropdownMenu(1, ["Select",])}>
            <Button className="dropdown-select">
              {accountNo || "Select Cheque No"} <DownOutlined />
            </Button>
          </Dropdown>
        </Typography.Text>
      </Space>

      <Modal
        title="Print Options"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Space size={10} direction="horizontal">
          <Button onClick={() => setFormat("excel")}>Excel</Button>
          <Button onClick={() => setFormat("pdf")}>PDF</Button>
          {/* <Button onClick={() => setFormat("word")}>Word</Button> */}
        </Space>
      </Modal>
    </div>
  );
}

export default Withdraw;