// import React, { useState } from 'react';
// import { Form, Radio, DatePicker, Input, Select, Button,Space, Row, Col } from 'antd';
// import { SyncOutlined, PlusOutlined } from '@ant-design/icons';
// import './GroupEntry.css'
// const { Option } = Select;

// const GroupEntry = () => {
//   const [selectedType, setSelectedType] = useState(null);

//   const handleRadioChange = (e) => {
//     setSelectedType(e.target.value);
//   };

//   const renderDetails = () => {
//     switch (selectedType) {
//       case 'formation':
//         return (
//           <div>
//             {/* Details to show when Formation is selected */}
//             <p>Formation Details</p>
//           </div>
//         );
//       case 'modification':
//         return (
//           <div>
//             {/* Details to show when Modification is selected */}
//             <p>Modification Details</p>
//           </div>
//         );
//       case 'deletion':
//         return (
//           <div>
//             {/* Details to show when Deletion is selected */}
//             <p>Deletion Details</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//      <Space>
//   <Button icon={<PlusOutlined />} className='ak'>
//     Add
//   </Button>
//   <Button icon={<SyncOutlined />} className='ak1'>
//     Refresh
//   </Button>
// </Space>


//       <Form className='Form' >
//       <Form.Item label="Type" className='Form'>
//   <Radio.Group onChange={handleRadioChange} value={selectedType}>
//     <Radio value="formation">Formation</Radio>
//     <Radio value="modification">Modification</Radio>
//     <Radio value="deletion">Deletion</Radio>
//   </Radio.Group>
// </Form.Item>


//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item name="date" label="Date">
//               <DatePicker className='Datepicker'/>
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item name="groupId" label="Group ID">
//             <Select placeholder="Select an occupation">
//                 <Option value="teacher">Select</Option>
//                 <Option value="doctor">GPM1/22_JLG/001</Option>
//                 {/* Add more options as needed */}
//                           </Select>
//                       </Form.Item>
//           </Col>
//         </Row>

//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item name="groupName" label="Group Name">
//               <Input />
//             </Form.Item>
//             <Form.Item name="memberId" label="Member ID">
//               <Input />
//             </Form.Item>
//           </Col>
//                   <Col span={12}>
//                   <Form.Item name="memberCount" label="Member Count">
//               <Input type="number" />
//             </Form.Item>
           
//             <Form.Item name="occupation" label="Occupation">
//               <Select placeholder="Select an occupation">
//                 <Option value="teacher">Teacher</Option>
//                 <Option value="doctor">Doctor</Option>
//                 <Option value="engineer">Engineer</Option>
//                 {/* Add more options as needed */}
//               </Select>
//             </Form.Item>
//           </Col>
//         </Row>

//         {renderDetails()}

//         <Form.Item>
//           <Button type="" icon={<span>+</span>} className='Button'>
//             Add
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default GroupEntry; 
import React, { useState } from 'react';
import { Form, Radio, DatePicker, Input, Button, Space, Row,  Select,Col } from 'antd';
import { SyncOutlined, PlusOutlined } from '@ant-design/icons';
import './GroupEntry.css';
const { Option } = Select;


const GroupEntry = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleRadioChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div>
      <Space>
        <Button className='buttonBlue' icon={<PlusOutlined />}>
          Add
        </Button>
        <Button className='buttonOrange' icon={<SyncOutlined />}>
          Refresh
        </Button>
      </Space>

      <Form
        style={{ width: "98%", padding: "20px", backgroundColor: "white", borderRadius: "20px", marginTop: '20px' }}
      >
        <Form.Item label="Type">
          <Radio.Group onChange={handleRadioChange} value={selectedType}>
            <Radio value="formation">Formation</Radio>
            <Radio value="modification">Modification</Radio>
            <Radio value="deletion">Deletion</Radio>
          </Radio.Group>
        </Form.Item>

        {selectedType === 'deletion' && (
          <>
            <Row gutter={12}>
      <Col span={8}>
        <Form.Item name="date" label="Date">
                  <DatePicker className='input' />
                </Form.Item>
               
       
      </Col>
      <Col span={8}>
      <Form.Item name="groupName" label="Group Name" className='input'>
          <Input />
        </Form.Item>
              </Col>
              <Col span={8}>
              <Form.Item name="groupId" label="Group ID" className='input'>
          <Select placeholder="Select a group">
            <Option value="group1">GPM1/22_JLG/001</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>
      </Col>
      {/* If you want a third column or more, just add another <Col> here */}
      <Form.Item className='Button'>
          <Button className='buttonBlue' icon={<span>+</span>} >
            Add
          </Button>
        </Form.Item>
    </Row>

        
          </>
        )}

        {/* Example of how you might handle fields for "formation" or "modification" */}
        {(selectedType === 'formation' || selectedType === 'modification') && (
          <>
            {/* Include any specific fields for 'formation' and 'modification' here */}
            <Form
        style={{ width: "98%", height: "120%", padding: "20px", backgroundColor: "white", borderRadius: "20px", marginTop: '20px' }}
      >
       
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="date" label="Date" >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="groupId" label="Group ID">
            <Select placeholder="Select an occupation">
                <Option value="teacher">Select</Option>
                <Option value="doctor">GPM1/22_JLG/001</Option>
                {/* Add more options as needed */}
                          </Select>
                      </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="groupName" label="Group Name">
              <Input />
            </Form.Item>
            <Form.Item name="memberId" label="Member ID">
              <Input />
            </Form.Item>
          </Col>
                  <Col span={12}>
                  <Form.Item name="memberCount" label="Member Count">
              <Input type="number" />
            </Form.Item>
           
            <Form.Item name="occupation" label="Occupation">
              <Select placeholder="Select an occupation">
                <Option value="teacher">Teacher</Option>
                <Option value="doctor">Doctor</Option>
                <Option value="engineer">Engineer</Option>
                {/* Add more options as needed */}
              </Select>
            </Form.Item>
          </Col>
        </Row>


        <Form.Item className='Button'>
          <Button className='buttonBlue' icon={<span>+</span>} >
            Add
          </Button>
        </Form.Item>
        </Form>
          </>
        )}
      </Form>
    </div>
  );
};

export default GroupEntry;