import {
  Button,
  Checkbox,
  DatePicker,
  Dropdown,
  Input,
  Menu,
  Modal,
  Space,
  Table,
  Typography,
} from "antd";
import {
  DownOutlined,
  PrinterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrders } from "../../../../API";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx"; // Import xlsx library for Excel
// import { saveAs } from 'file-saver'; // Import file-saver for saving files
import JSZip from "jszip";
import Docxtemplater from "docxtemplater"; // Correct import
import "./MisScheduleTb.css";
import { saveAs } from "file-saver";

const MisScheduleTb = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [depositType, setDepositType] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [format, setFormat] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [searchValue, setSearchValue] = useState("");

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

  const generatePDF = (data) => {
    const doc = new jsPDF();

    doc.autoTable({
      head: [["Title", "Price", "Discounted Price", "Quantity", "Total"]],
      body: data.map((item) => [
        item.title,
        `$${item.price}`,
        `$${item.discountedPrice}`,
        item.quantity,
        item.total,
      ]),
    });
    // Save as 'tableData.pdf'
    doc.save("tableData.pdf");
  };
  const generateExcel = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([excelBuffer], { type: "application/octet-stream" }),
      "tableData.xlsx"
    );
  };

  const generateWord = (data) => {
    const zip = new JSZip();
    const doc = new Docxtemplater();

    try {
      doc.loadZip(zip);
      doc.setData({ data });
      doc.compile();
      doc.render();
      const generatedDoc = doc.getZip().generate({ type: "blob" });
      saveAs(generatedDoc, "tableData.docx");
    } catch (error) {
      console.error("Error generating Word document:", error);
    }
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
    console.log("Data posted:", {
      depositType,
      accountNo,
      selectedFromDate,
      selectedToDate,
    });
  };

  const handleModalOk = () => {
    // Logic to handle selected format (Excel, PDF, Word)
    console.log("Selected Format:", format);
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
    <div className="reports-container accountContainer">
      <h2 className="pb-3" style={{ color: "#E47B25" }}>
        MIS SheduledTB
      </h2>
      <Space size={20} direction="vertical" style={{ width: "100%" }}>
        <div
          className="dropdown-container"
          style={{
            border: "2px solid #d9d9d9",
            width: "100%",
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Space size={10} align="center">
            <Checkbox>
              <b>AS on Date</b>
            </Checkbox>

            <Typography.Text>
              <b>From Date:</b>
            </Typography.Text>
            <DatePicker onChange={(date) => setSelectedFromDate(date)} />
            <Typography.Text>
              <b>To Date:</b>
            </Typography.Text>
            <DatePicker onChange={(date) => setSelectedToDate(date)} />

            <Button
              type="primary"
              icon={<PrinterOutlined />}
              onClick={handlePrintButtonClick}
            >
              Print
            </Button>
          </Space>
        </div>

        <Typography.Title level={4}>Orders</Typography.Title>
        <Table
          loading={loading}
          columns={[
            { title: "Title", dataIndex: "title" },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "DiscountedPrice",
              dataIndex: "discountedPrice",
              render: (value) => <span>${value}</span>,
            },
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
        </Space>
      </Modal>
    </div>
  );
};
export default MisScheduleTb;
