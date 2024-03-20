
import { Col, DatePicker, Form, Row, Space, Table, Typography,Button } from "antd";
import { useEffect, useState } from "react";
import { getCustomers } from "../../../../API";
import { SyncOutlined} from '@ant-design/icons';
import './ChecksInBank.css';
const ChecksInBank =() => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  const handleAddUser = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Typography.Title level={4} id="text">Cheques In Bank</Typography.Title>

       <Form layout="horizontal" className="ChecksIn">
      <Row>
        <Col span={6}>
          <Form.Item label="Date" name="date">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Button className="btn2"
            icon={<SyncOutlined />}
          >
            Refresh
          </Button>
        </Col>
        {/* Add other Form Items as needed */}
      </Row>
    </Form>

      <div className="table">
      <Table
        loading={loading}
        columns={[
          {
            title: "Passed",
            dataIndex: "id",
          },
          {
            title: "Returned",
            dataIndex: "firstName",
          },
          {
            title: "Cheque No",
            dataIndex: "lastName",
          },
          {
            title: "Deposited Date",
            dataIndex: "email",
          },
          {
            title: "Deposited Amount",
            dataIndex: "email", // Ensure correct dataIndex for Amount
            },
          
            {
                title: "Bank Name",
                dataIndex: "email", // Ensure correct dataIndex for Amount
            },
            
          {
            title: "Particulars",
            dataIndex: "email", // Ensure correct dataIndex for Amount
            },
          
            {
                title: "Deposited Bank",
                dataIndex: "email", // Ensure correct dataIndex for Amount
            },
            
         
        ]}
        dataSource={dataSource}
                  pagination={{
            pageSize:5,
        }} // Disable pagination if you want to show all data at once
      />
        {/* <Table
          loading={loading}
          columns={[
            // ... other columns

            {
              title: "Issued Date",
              dataIndex: "issuedDate",
              render: (text, record) => (
                <DatePicker
                  onChange={(date, dateString) => {
                    // Handle date change logic here if needed
                  }}
                />
              ),
            },
            // ... other columns
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        /> */}
      </div>

      {/* Add User Modal */}
      {/* Uncomment and modify your Modal as needed */}
      {/* <Modal
        title="Share Capital"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button key="cancel" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick="">
            Add User
          </Button>,
        ]}
        style={{ minWidth: "70%", minHeight: "70%" }}
      >
        {/* Your Form logic goes here */}
      {/* </Modal> */}
    </div>
  );
}

export default ChecksInBank;
