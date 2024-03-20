import { Button, Dropdown, Menu, Modal, Space, Table, Typography,Row,Col } from "antd";
import { DownOutlined, PrinterOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrders } from "../../API";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx'; // Import xlsx library for Excel
import { saveAs } from 'file-saver'; // Import file-saver for saving files

function Downdata() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [depositType, setDepositType] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [format, setFormat] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  const generatePDF = (data) => {
    const doc = new jsPDF();
  };

  const generateExcel = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([excelBuffer], { type: "application/octet-stream" }), "tableData.xlsx");
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
    console.log("Data posted:", { depositType, accountNo, format });
  };

  const handleModalOk = () => {
    // Logic to handle selected format (Excel, PDF, Word)
    console.log("Selected Format:", format);
    setIsModalVisible(false);
    if (format === "pdf") {
      generatePDF(dataSource);
    } else if (format === "excel") {
      generateExcel(dataSource);
    }
    // Additional logic for other formats can be added here
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
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
          <Space size={10} align="center">
            

            <Typography.Text className="left-text">User Name:</Typography.Text>
            <Dropdown overlay={generateDropdownMenu(1, ["select","Admin", "kolla", "naveena","ramesh","rayudu","rprasad","sriram","swathi"])}>
              <Button className="dropdown-select" >
                {accountNo || "Select User Name"} < DownOutlined />
              </Button>
            </Dropdown>
            <Typography.Text className="left-text">Module Name:</Typography.Text>
            <Dropdown overlay={generateDropdownMenu(0, ["select"])}>
              <Button className="dropdown-select">
                {"Select"} <DownOutlined />
              </Button>
            </Dropdown>

           
          </Space>
        </div>
        <Typography.Title level={4} style={{ color: '#E47B25'}}>User Right Details</Typography.Title>
        <Table
          loading={loading}
          columns={[
            { title: "Select", dataIndex: "Select" },
            { title: "Feature Id", dataIndex: "Feature Id" },
            { title: "Feature Name", dataIndex: "Feature Name"},
            { title: "Module Id", dataIndex: "Module Id" },
          ]}></Table>
          <Row justify="center" style={{ marginTop: '20px',  }}>
      <Col>
        <Button type="" style={{ marginRight: '10px' , backgroundColor:"#268DCB", color:"white"}}>Active</Button>
              <Button style={{ backgroundColor: "#E47B25", color:"white"}}>Clear</Button>
      </Col>
    </Row>
        
      </Space>

      
    </div>
  );
}

export default Downdata;