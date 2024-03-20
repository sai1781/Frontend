import {  Button, Form, Input, Modal, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";
import { orange } from "@mui/material/colors";

function ModuleData() {
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

  // Handle form submission - add your logic here

  return (
    <Space size={20} direction="vertical">
      {/* <Typography.Title level={4}>Users</Typography.Title> */}

      <div style={{ textAlign: "right" }}>
        <Button type="primary" onClick={handleAddUser}>
          Add Module
        </Button>
      </div>

      <Table
        loading={loading}
        columns={[
          {
            title: "SI NO",
            dataIndex: "id",
          },
          {
            title: "User Name",
            dataIndex: "firstName",
          },
          {
            title: "Module Name",
            dataIndex: "lastName",
          },
          {
            title: "Function Name",
            dataIndex: "email",
          },
          {
            title: "Function Url",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
          {
            title: "address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>

      {/* Add User Modal */}
      <Modal
        title="Add Module"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button key="cancel" style={{backgroundColor:'orange'}}  onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" >
            Save
          </Button>,
        ]}
      >
        <Form
          // Add your form logic and fields here
          // You can use Ant Design Form components like Form.Item, Input, etc.
        >
          <Form.Item label="Module Name" name="ModuleName" rules={[{ required: false, message: 'Please input first name!' }]}>
            <Input />
          </Form.Item>
          {/* Add other form fields as needed */}
        </Form>
      </Modal>
    </Space>
  );
}

export default ModuleData;