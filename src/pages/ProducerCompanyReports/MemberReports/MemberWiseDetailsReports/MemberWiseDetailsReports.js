import { Button, Dropdown, Menu, Modal, Space, Table, Typography } from "antd";
import { DownOutlined, PrinterOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrders } from "../../../../API";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx'; // Import xlsx library for Excel
import { saveAs } from 'file-saver'; // Import file-saver for saving files
import './MemberWiseDetailsReports.css'

const orangeColor = '#E47B25'; 
const bluecolor ='#268DCB'
const MemberWiseDetailsReports = ()  => {
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
    
    doc.autoTable({
      head: [
        ['Title', 'Price', 'Discounted Price', 'Quantity', 'Total'],
      ],
      body: data.map(item => [item.title, `$${item.price}`, `$${item.discountedPrice}`, item.quantity, item.total]),
    });

    // Save as 'tableData.pdf'
    doc.save('tableData.pdf');
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
      <Space size={10} align="center" style={{ border: '2px solid #d9d9d9', padding: '15px' }}>
  <Typography.Text>Member Id:</Typography.Text>
  <Dropdown overlay={generateDropdownMenu(1, ["select","12345", "123456", "1234567"])} placement="bottomRight">
  <Button className="dropdown-select" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>{accountNo || "Member Id"}</span>
    <DownOutlined />
  </Button>
</Dropdown>
  <Button  type="primary"  style={{ backgroundColor: bluecolor, height: "35px", width: "145px" }}> Apply</Button>
<Button type="primary" icon={<PrinterOutlined />} onClick={handlePrintButtonClick} style={{ backgroundColor: orangeColor,height: "35px", width: "145px"}}>Print
</Button>
</Space>
<Typography.Title level={4} style={{ color: '#E47B25' }}>Orders</Typography.Title>

        <Table
          loading={loading}
          columns={[
            { title: "Title", dataIndex: "title" },
            { title: "Price", dataIndex: "price", render: (value) => <span>${value}</span> },
            { title: "DiscountedPrice", dataIndex: "discountedPrice", render: (value) => <span>${value}</span> },
            { title: "Quantity", dataIndex: "quantity" },
            { title: "Total", dataIndex: "total" },
          ]}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
        />
      </Space>

      <Modal
        title="Print Options"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Space size={10} direction="horizontal">
          <Button onClick={() => setFormat("excel")} >Excel</Button>
          <Button onClick={() => setFormat("pdf")}>PDF</Button>
          {/* Add button for Word */}
          {/* <Button onClick={() => setFormat("word")}>Word</Button> */}
        </Space>
      </Modal>
    </div>
  );
}

export default MemberWiseDetailsReports;
