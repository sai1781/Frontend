import React from "react";
import {
  FileAddOutlined,
  StepBackwardOutlined,
  CaretLeftOutlined,
  StepForwardOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Typography } from "antd";

const BankInfo = () => {
  return (
    <>
      <Typography.Title level={4} id="text">
        Bank Information
      </Typography.Title>
      <Table responsive="sm">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Account Name</th>
            <th>Bank Name</th>
            <th>Bank Branch</th>
            <th>Account No.</th>
            <th>Overdraft Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FileAddOutlined />
            </td>
            <td>1</td>
            <td>Coastal Bank</td>
            <td>Coastal Bank</td>
            <td>Coastal Bank</td>
            <td>Coastal Bank</td>
            <td>Coastal Bank</td>
          </tr>
          <tr>
            <td>
              <FileAddOutlined />
            </td>
            <td>2</td>
            <td>IDFC Bank</td>
            <td>IDFC Bank</td>
            <td>IDFC Bank</td>
            <td>IDFC Bank</td>
            <td>IDFC Bank</td>
          </tr>
          <tr>
            <td>
              <StepBackwardOutlined /> <CaretLeftOutlined />
            </td>
            <td>Page 1 of 1</td>
            <td>
              <StepForwardOutlined /> <CaretRightOutlined />{" "}
              <FontAwesomeIcon icon={faRefresh} />
            </td>
            <td>
              <InputGroup>
                <Form.Control />
                <DropdownButton
                  variant="outline-secondary"
                  id="input-group-dropdown-1"
                  align="end"
                >
                  <Dropdown.Item href="#">8</Dropdown.Item>
                  <Dropdown.Item href="#">16</Dropdown.Item>
                  <Dropdown.Item href="#">32</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </td>
            <td></td>
            <td></td>
            <td>Displaying 1-2 of 2</td>
          </tr>
        </tbody>
      </Table>
      <div style={{ textAlign: "center" }}>
        <Button className="btn1">Add</Button>{" "}
        <Button className="btn2">Modify</Button> <Button>Delete</Button>
      </div>
    </>
  );
};
export default BankInfo;
