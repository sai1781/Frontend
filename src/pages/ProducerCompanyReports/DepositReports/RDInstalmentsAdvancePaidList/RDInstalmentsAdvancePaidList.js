import React, { useEffect, useState } from "react";
import { Button, DatePicker, Modal, Space, Table, Typography } from "antd";
import { PrinterOutlined } from "@ant-design/icons";
import { getOrders } from "../../../../API";
import "./daily.css"; // Import the CSS file for custom styles
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx'; // Import xlsx library for Excel
import { saveAs } from 'file-saver'; // Import file-saver for saving files
import { Checkbox } from 'antd';
import * as docx from 'docxtemplater';
import { saveAs as saveAsDocx } from 'file-saver'; // Import saveAs with different name to avoid conflicts
import JSZip from 'jszip';
import { Docxtemplater } from 'docxtemplater';
const orangeColor = '#E47B25'; 
const bluecolor ='#268DCB'

function Daily() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [depositType, setDepositType] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [format, setFormat] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []);

  const fetchData = () => {
    setLoading(true);
    getOrders({ depositType, accountNo, selectedFromDate, selectedToDate }).then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  };

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

  const generateWord = (data) => {
    const zip = new JSZip();
    const doc = new Docxtemplater();
  
    // Load the docxtemplater instance with a new zip
    doc.loadZip(new JSZip(docx));
  
    // Set the data for the template
    doc.setData({ data });
  
    try {
      // Render the template
      doc.render();
  
      // Get the generated document as a Blob
      const blob = doc.getZip().generate({ type: "blob" });
  
      // Save the document using file-saver
      saveAsDocx(blob, "tableData.docx");
    } catch (error) {
      console.error("Error generating Word document:", error);
    }
  };
  
  

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  
  const handleApplyButtonClick = () => {
    fetchData();
  };

  const handlePrintButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    if (format === "pdf") {
      generatePDF(dataSource);
    } else if (format === "excel") {
      generateExcel(dataSource);
    } else if (format === "word") {
      generateWord(dataSource);
    }
    // Additional logic for other formats can be added here
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="reports-container">
      <Space size={20} direction="vertical">
        <Space size={10} className="DReportscards">
          <Typography.Text>From Date:</Typography.Text>
            <DatePicker onChange={date => setSelectedFromDate(date)} style={{ width: '300px' }} />
          
            <Button
              type="primary"
              onClick={handleApplyButtonClick}
              style={{ backgroundColor: bluecolor, height: "35px", width: "150px" }}
            >
              Apply
            </Button>
            <Button
              type="primary"
              icon={<PrinterOutlined />}
              onClick={handlePrintButtonClick}
              style={{ backgroundColor: orangeColor, height: "35px", width: "150px" }}
            >
              Print
            </Button>
        </Space>
        <div>
        </div>
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
          <Button onClick={() => setFormat("excel")}>Excel</Button>
          <Button onClick={() => setFormat("pdf")}>PDF</Button>
          {/* <Button onClick={() => setFormat("word")}>Word</Button> */}
        </Space>
      </Modal>
    </div>
  );
}

export default Daily;
