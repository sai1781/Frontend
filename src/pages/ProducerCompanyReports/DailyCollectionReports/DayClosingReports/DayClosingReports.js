import { Button, DatePicker, Modal, Space, Table, Typography } from "antd";
import { PrinterOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrders } from "../../../../API";
import "./daily.css"; // Import the CSS file for custom styles
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx'; // Import xlsx library for Excel
import { saveAs } from 'file-saver'; // Import file-saver for saving files
import { Checkbox } from 'antd';
import { saveAs as saveAsDocx } from 'file-saver'; // Import saveAs with different name to avoid conflicts
import JSZip from 'jszip';
import { Docxtemplater } from 'docxtemplater'; // Import Docxtemplater

const DayClosingReport = () => {
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
    const docx = new Docxtemplater(zip); 
    try {
      docx.loadZip(new JSZip(docx));
      docx.setData({ data });   
      docx.compile();     
      docx.render();   
      const blob = docx.getZip().generate({ type: "blob" });
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
        <Space size={10}>
          <Checkbox checked={isChecked} onChange={handleCheckboxChange}>As On A Date!</Checkbox>
          <Typography.Text>From Date:</Typography.Text>
          <DatePicker onChange={date => setSelectedFromDate(date)} />
          <Typography.Text>To Date:</Typography.Text>
          <DatePicker onChange={date => setSelectedToDate(date)} />
          <Button type="primary" onClick={handleApplyButtonClick}>
            Apply
          </Button>
          <Button type="primary" icon={<PrinterOutlined />} onClick={handlePrintButtonClick}>
            Print
          </Button>
        </Space>
        <Typography.Title level={4}>Orders</Typography.Title>
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

export default DayClosingReport;
