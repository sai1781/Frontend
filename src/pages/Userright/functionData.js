import { Avatar, Button, Form, Input, Modal, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";
import {  Select } from 'antd'; // Import Form and Select from Ant Design
const { Option } = Select; // Destructure Option from Select
function FunctionData() {
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
          Add Function
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
        title="Add User"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button key="cancel" style={{backgroundColor:'orange'}} onClick={handleModalCancel}>
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
          {/* <Form.Item label="Module Name" name="ModuleName" rules={[{ required: true, message: 'Please input first name!' }]}>
            <Input />
          </Form.Item> */}
          <Form.Item name="grTypeoupId" label="ModuleName" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Select placeholder="Select Type" className='Select2'>
                <Option value="teacher">Select</Option>
                <Option value="Admin">Admin</Option>
                <Option value="Ramesh">Ramesh</Option>
                <Option value="Sai">Sai</Option>
                <Option value="Abhilash">Abhilash</Option>
                <Option value="Tirupathi">Tirupathi</Option>

              </Select>
            </Form.Item>
          <Form.Item label="Function Name" name="functionName" rules={[{ required: true, message: 'Please input first name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="grTypeoupId" label="functionURL" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Select placeholder="Select Type" >
                <Option value="teacher">Select</Option>
                <Option value="Admin">Admin/Grouproles.aspx</Option>
                <Option value="user">Admin/Grouproles.aspx</Option>

              </Select>
            </Form.Item>
          {/* Add other form fields as needed */}
        </Form>
      </Modal>
    </Space>
  );
}

export default FunctionData;
