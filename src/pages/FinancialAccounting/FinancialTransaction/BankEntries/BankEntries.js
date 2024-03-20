import {
  Avatar,
  Button,
  Form,
  Input,
  Modal,
  Rate,
  Space,
  Table,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../../../API";
import "./BankEntries.css";
const BankEntries = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log("it is working the transcascassdad");
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

  // Handle form submission - add your logic here
  return (
    <div>
      <Typography.Title level={4} id="text">
        Bank Entries
      </Typography.Title>
      {/* <Typography.Title level={4}>Users</Typography.Title> */}

      {/* <div style={{ textAlign: "right" }}>
          <Button  onClick={handleAddUser}>
            Add Function
          </Button>
        </div> */}

      <div style={{ width: "800px", height: "500px", overflow: "auto" }}>
        <Table
          loading={loading}
          columns={[
            {
              title: "SI NO",
              dataIndex: "id",
            },
            {
              title: "Date",
              dataIndex: "firstName",
            },
            {
              title: "Receipt No",
              dataIndex: "lastName",
            },
            {
              title: "Particulars",
              dataIndex: "email",
            },
            {
              title: "Amount",
              dataIndex: "email", // Ensure correct dataIndex for Amount
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }} // Disable pagination if you want to show all data at once
        />
      </div>

      {/* Add User Modal */}
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
        > */}
      {/* <Form
            // Add your form logic and fields here
            // You can use Ant Design Form components like Form.Item, Input, etc.
            className="field"
          >
            <fieldset>
              <Form.Item label="Member Type" name="Member Type" rules={[{ required: true, message: 'Please input  Member Type !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="MemberShip No./ID" name="MemberShip No./ID" rules={[{ required: true, message: 'Please input  MemberShip No./ID !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Admission No" name="Admission No" rules={[{ required: true, message: 'Please input  Admission No !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Customer Name" name="Customer Name" rules={[{ required: true, message: 'Please input Customer Name !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Nominee's Age" name="Nominee's Age Name" rules={[{ required: true, message: 'Please input Nominees Age !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Share Each of" name="Share Each of " rules={[{ required: true, message: 'Please input Share Each of !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Mobile No." name="Mobile No." rules={[{ required: true, message: 'Please input Mobile No. !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="No. Of Shares Held" name="No. Of Shares Held" rules={[{ required: true, message: 'Please input No. Of Shares Held !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Customer Age" name="Customer Age" rules={[{ required: true, message: 'Please input Customer Age !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Nominee's Age" name="Nominee's Age" rules={[{ required: true, message: 'Please input Nominees Age !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Relation" name="Relation" rules={[{ required: true, message: 'Please input Relation !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Issued Date" name="Issued Date" rules={[{ required: true, message: 'Please input Issued Date !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Total Amount" name="Total Amount" rules={[{ required: true, message: 'Please input Total Amount !' }]}>
                <Input />
              </Form.Item>
            </fieldset>
            {/* Add other form fields as needed */}
      {/* </Form> */}
      {/* </Modal> */}
    </div>
  );
};

export default BankEntries;
