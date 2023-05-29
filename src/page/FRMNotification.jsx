import { Button, Input, Form, Row, Radio, Col, Upload, Card, Select,  DatePicker, Checkbox } from 'antd';
import { React, useState } from "react";

import { UploadOutlined } from '@ant-design/icons';
// import './Register.css'

import TextArea from 'antd/es/input/TextArea';
import n from "./Notification.module.css"
import { Option } from 'antd/es/mentions';


const FRMNotification = () => {
 
  const [verfied, setVerifed] = useState(false);
 
  
 


  function onChange() {
    setVerifed(true);
  }
  const [fileList1, setFile1] = useState([])
  const fileProps1 = {
    multiple: false,
    fileList1,

    onRemove: (file) => {
      const index = fileList1.indexOf(file);
      const newFileList = fileList1.slice();
      newFileList.splice(index, 1);
      setFile1(newFileList);
    },

    beforeUpload: (file) => {
      setFile1([...fileList1, file]);
    },

    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },

  }
  const [fileList2, setFile2] = useState([])
  const fileProps2 = {
    multiple: false,
    fileList1,

    onRemove: (file) => {
      const index = fileList2.indexOf(file);
      const newFileList = fileList2.slice();
      newFileList.splice(index, 1);
      setFile2(newFileList);
    },

    beforeUpload: (file) => {
      setFile2([...fileList2, file]);
    },

    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },

  }
  
  
  const [fileList4, setFile4] = useState([])
  const fileProps4 = {
    multiple: false,
    fileList1,

    onRemove: (file) => {
      const index = fileList4.indexOf(file);
      const newFileList = fileList4.slice();
      newFileList.splice(index, 1);
      setFile4(newFileList);
    },

    beforeUpload: (file) => {
      setFile4([...fileList4, file]);
    },

    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },

  }
  const saveData = async (values) => {
    const reg_data = {
      notification_id: values.notification_id,
      notification_date_time: values.notification_date_time,
      notification_end_date_time: values.notification_end_date_time,
      notification_messages: values.notification_messages,
      image1: values.image1,
      image2: values.image2,
      pdf1: values.pdf1,
      type_id: values.type_id,
      pdf2: values.pdf2,
      
    }
    alert("success")
    console.log(reg_data)
    
  };


  

  
  return (
    <>
      <h2 id={n.heading}>Notification By Admin</h2>
      <div className={n.mainForm}>
        
        <Card hoverable bodyStyle={{ padding: "0" }} >
        
          <Form layout="vertical" autoComplete="off" onFinish={saveData} >


            <h3 className={n.card_menu}>FRMNotification Type</h3>
            <Form.Item name="type_id"
              rules={[
                {
                  required: true,
                  message: "Please Select User Type !"
                }
              ]}
              style={{ paddingLeft: "20px" }}
             
              hasFeedback
            >
            
              <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      <Col span={8}>
        <Checkbox value="A">Company</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">Transporter</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">Reseller</Checkbox>
      </Col>
      
    </Row>
  </Checkbox.Group>

            </Form.Item>

            <h3 className={n.card_menu}>Notification </h3>
            <Row>
            <Col className={n.select_option_col}>
            <Form.Item name="notification_id"
                label={<lable style={{ fontSize: "15px" }}>Notification id</lable>}
                rules={[
                  {
                    required: true,
                    message: "Please input your notification_id !"
                  }
                ]}
                style={{  width: "96%" }}
                hasFeedback

              >
                {/* <Tooltip title="Enter Your Comapny Name"> */}
                <Input placeholder='notification' tabIndex={1} />
                {/* </Tooltip> */}

              </Form.Item>
            </Col>


            <Col className={n.select_option_col}>
              <Form.Item
                  name="notification_date_time"
                  label={<label style={{ fontSize: "15px" }}>Notification Date/time</label>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  hasFeedback
                  style={{  width: "96%" }}
                >
                  {/* <Tooltip title="Enter Your Address" > */}
                  <input max="2099-12-25T23:59" 
                  //  value={"hire_date_time"} 
                  //  onChange={(e)=>sethire_date_time(e.target.value)} 

                   class="placeholder:italic placeholder:text-slate-400 block bg-white w-[90%] border border-slate-300 rounded-md py-1 pl-1 sm:pl-9 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


                  {/* </Tooltip> */}
                </Form.Item>
              </Col>

              <Col className={n.select_option_col}>
              <Form.Item
                  name="notification_end_date_time"
                  label={<label style={{ fontSize: "15px" }}>Notification End Date/time</label>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  hasFeedback
                  style={{  width: "96%" }}
                >
                  {/* <Tooltip title="Enter Your Address" > */}
                  <input max="2099-12-25T23:59" 
                  //  value={"hire_date_time"} 
                  //  onChange={(e)=>sethire_date_time(e.target.value)} 

                   class="placeholder:italic placeholder:text-slate-400 block bg-white w-[90%] border border-slate-300 rounded-md py-1 pl-1 sm:pl-9 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
              <Col className={n.select_option_col}>
                  <Form.Item
                    name="notification_type"
                    label={
                      <label style={{ fontSize: "15px" }}>Notification Type :</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your Vehicle Type!",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%" }}
                  >
                    <Select
                      showSearch
                      // onChange={getStateName}
                      placeholder="Notification  Type"
                      optionFilterProp="children"
                      tabIndex={3}
                    >
                      {/* {country.map((items) => ( */}
                       <Option value={"opton1"}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>
                  </Form.Item>
                </Col>
            </Row>
            <Row>
              <Form.Item name="notification_messages"
                label={<label style={{ fontSize: "15px" }}>Notification Messages</label>}
                rules={[
                  {
                    required: true,
                    message: "Please input your Notification Messages!"
                  }
                ]}
                hasFeedback

                style={{ paddingLeft: "20px", width: "96%" }}
              >
                {/* <Tooltip title="Enter Your Address" > */}
                <TextArea placeholder='Notification Messages' tabIndex={2} />
                {/* </Tooltip> */}
              </Form.Item>
           
            </Row>
           

            


          

          
            

            <h3 className={n.card_menu}>DOCUMENTS</h3>
            <Row>
              <Col className={n.upload_col}>
                <Form.Item
                  name="image1"

                  label={<label style={{ fontSize: "15px" }}> Image1 </label>}
                  getValueFromEvent={({ file }) => file.originFileObj}
                  rules={[
                    {
                      required: true,
                      message: "image1!"
                    }
                  ]}
                  hasFeedback
                >
                  <Upload {...fileProps1}>
                    <Button icon={<UploadOutlined />} tabIndex={17}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>


              <Col className={n.upload_col}>
                <Form.Item
                  name="image2"
                  label={<label style={{ fontSize: "15px" }}>Image2</label>}
                  getValueFromEvent={({ file }) => file.originFileObj}
                  rules={[
                    {
                      required: true,
                      message: "image2!"
                    }
                  ]}
                  hasFeedback

                >
                  <Upload {...fileProps2}>
                    <Button icon={<UploadOutlined />} tabIndex={18}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>

              <Col className={n.upload_col}>
                <Form.Item
                  name="pdf1"
                  label={<label style={{ fontSize: "15px" }}>PDF1</label>}
                  rules={[
                    {
                      required: true,
                      message: "PDF!"
                    }
                  ]}
                  hasFeedback
                  getValueFromEvent={({ file }) => file.originFileObj}
                >
                  <Upload {...fileProps4} className="uploadField">
                    <Button icon={<UploadOutlined />} tabIndex={19}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>

              <Col className={n.upload_col}>
                <Form.Item
                  name="pdf2"
                  label={<label style={{ fontSize: "15px" }}>PDF2</label>}
                  rules={[
                    {
                      required: true,
                      message: "PDF!"
                    }
                  ]}
                  hasFeedback
                  getValueFromEvent={({ file }) => file.originFileObj}
                >
                  <Upload {...fileProps4} className="uploadField">
                    <Button icon={<UploadOutlined />} tabIndex={19}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
            <div className='center'>

              <Row>
              <Form.Item className="w-40 m-auto pb-4">
                <button
                      type="submit"
                      // disabled={!verfied}
                      style={{
                        marginTop: "20px",

                        
                      }}
                      className="button m-auto w-40 bg-[#151B54] rounded-lg p-2 text-white hover:text-white "
                    >
                      Submit
                    </button>
                </Form.Item>
              </Row>
            </div>

          </Form>
        </Card>

      </div>
      {/* <Footer /> */}
    </>

  )
};
export default FRMNotification;
