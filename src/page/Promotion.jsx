import { Button, Input, message, Form, Row, Radio, Col, Upload, Card, Select, Tooltip, Modal, DatePicker } from 'antd';
import { React, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from 'react-router-dom';
// import { Empregister, GetCountryName, GetStateName, GetCityName, RegisterationNumberValidationName } from '../../../services/Services'
import { UploadOutlined } from '@ant-design/icons';
import './Register.css'
// import logo from '../../../assets/image/transduniyalogofinal.png'
import TextArea from 'antd/es/input/TextArea';
import n from "./Promotion.module.css"
const { Option } = Select;

const Promotion = () => {
  const navigate = useNavigate();
  const [verfied, setVerifed] = useState(false);
 
  useEffect(() => {
    // getCountryName()

  }, [])
 


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
  const [fileList3, setFile3] = useState([])
  const fileProps3 = {
    multiple: false,
    fileList1,

    onRemove: (file) => {
      const index = fileList3.indexOf(file);
      const newFileList = fileList3.slice();
      newFileList.splice(index, 1);
      setFile3(newFileList);
    },

    beforeUpload: (file) => {
      setFile3([...fileList3, file]);
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
      Promotion_id: values.Promotion_id,
      Promotion_date_time: values.Promotion_date_time,
      Promotion_messages: values.Promotion_messages,
      image1: values.image1,
      image2: values.image2,
      pdf1: values.pdf1,
      type_id: values.type_id,
      pdf2: values.pdf2,
      
    }
    console.log(reg_data)
    
  };


  const handlePhoneKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    const isNumeric = charCode >= 48 && charCode <= 57; // check if the key pressed is a number
    const isBackspace = charCode === 8; // check if the key pressed is the backspace key
    const phone = e.target.value.replace(/\D/g, ''); // remove all non-numeric characters
    const isValid = phone.length === 10 || isBackspace; // check if the input is a 10-digit number or the backspace key
    if (!isNumeric && !isBackspace) {
      e.preventDefault(); // prevent the input of non-numeric characters
    }

    if (isValid) {
      e.target.value = phone; // update the input value with the valid phone number
    }
  };

  
  return (
    <>
      <h2 id={n.heading}>Promotion by Admin</h2>
      <div className='mainForm'>
        
        <Card hoverable bodyStyle={{ padding: "0" }} >
        
          <Form layout="vertical" autoComplete="off" onFinish={saveData} >


            <h3 className={n.card_menu}>Promotion Type</h3>
            <Form.Item name="type_id"
              rules={[
                {
                  required: true,
                  message: "Please Select User Type !"
                }
              ]}
              style={{ paddingLeft: "20px" }}
              // label={<lable style={{ fontSize: "18px" }}><b>User Type : </b></lable>}
              hasFeedback
            >
              <Radio.Group style={{ paddingLeft: "20px" }}>
                <Radio value="3" style={{ fontSize: "18px" }}>Company </Radio>
                <Radio value="2" style={{ fontSize: "18px" }}>Transporter </Radio>
                <Radio value="4" style={{ fontSize: "18px" }}>Reseller</Radio>
                <Radio value="5" style={{ fontSize: "18px" }}>All</Radio>

              </Radio.Group>
            </Form.Item>

            <h3 className={n.card_menu}>Promotion </h3>
            <Row>
            <Col className={n.select_option_col}>
            <Form.Item name="Promotion_id"
                label={<lable style={{ fontSize: "15px" }}>Promotion id</lable>}
                rules={[
                  {
                    required: true,
                    message: "Please input your Promotion_id !"
                  }
                ]}
                style={{  width: "96%" }}
                hasFeedback

              >
                {/* <Tooltip title="Enter Your Comapny Name"> */}
                <Input placeholder='Promotion' tabIndex={1} />
                {/* </Tooltip> */}

              </Form.Item>
            </Col>


            <Col className={n.select_option_col}>
              <Form.Item
                  name="Promotion_date_time"
                  label={<label style={{ fontSize: "15px" }}>Promotion Date/time</label>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  hasFeedback
                  style={{  width: "96%" }}
                >
                  {/* <Tooltip title="Enter Your Address" > */}
                  <DatePicker
                    className="w-full"
                    showTime
                    placeholder=" Time"
                    onChange={onChange}
                    // onOk={onOk}
                  />

                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Form.Item name="Promotion_messages"
                label={<label style={{ fontSize: "15px" }}>Promotion Messages</label>}
                rules={[
                  {
                    required: true,
                    message: "Please input your Promotion Messages!"
                  }
                ]}
                hasFeedback

                style={{ paddingLeft: "20px", width: "96%" }}
              >
                {/* <Tooltip title="Enter Your Address" > */}
                <TextArea placeholder='Promotion Messages' tabIndex={2} />
                {/* </Tooltip> */}
              </Form.Item>
            </Row>
           

            


          

          
            

            <h3 className='card_menu'>DOCUMENTS</h3>
            <Row>
              <Col className='upload_col'>
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


              <Col className='upload_col'>
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

              <Col className='upload_col'>
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

              <Col className='upload_col'>
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
export default Promotion;
