// import { Form, Formik } from "formik";
import { useState } from "react";
import {
  Button,
  Input,
  message,
  Form,
  Row,
  Radio,
  Col,
  Upload,
  Card,
  Select,
  Tooltip,
  Modal,
} from "antd";

import { DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import v from "./GPSrequierement.module.css";
const { Option } = Select;
// import LoadingButton from "@mui/lab/LoadingButton";
const FRMGPSrequierement = () => {
  const { RangePicker } = DatePicker;
  function onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  }

  function onOk(value) {
    console.log("onOk: ", value);
  }
  const [fileList1, setFile1] = useState([]);
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
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  const [fileList2, setFile2] = useState([]);
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
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  const [fileList3, setFile3] = useState([]);

  const [fileList4, setFile4] = useState([]);
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
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  

  const saveData = async (values) => {
    console.log(values);
    const reg_data = {
        entry_id: values.entry_id,
        no_of_vehicle: values.no_of_vehicle,
        government_approve: values.government_approve,
        current_gps_company: values.current_gps_company,
        current_gps_yearly_charges: values.current_gps_yearly_charges,
    
    };
    console.log(reg_data);
  };
  const handlePhoneKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    const isNumeric = charCode >= 48 && charCode <= 57; // check if the key pressed is a number
    const isBackspace = charCode === 8; // check if the key pressed is the backspace key
    const phone = e.target.value.replace(/\D/g, ""); // remove all non-numeric characters
    
    if (!isNumeric && !isBackspace) {
      e.preventDefault(); // prevent the input of non-numeric characters
    }

    
  };
  const [value, setValue] = useState(1);
  const onChange1 = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col gap-4 bg-white mb-10">
        <h2 id={v.heading}>FRMGPSrequierement </h2>
        <div className={v.mainForm}>
          <Card hoverable bodyStyle={{ padding: "0" }}>
          
            <Form layout="vertical" autoComplete="off" onFinish={saveData}>
           
              <Row>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="entry_id"
                    label={<lable style={{ fontSize: "15px" }}>Entry ID: </lable>}
                    rules={[
                      {
                        // required: true,
                        message: "Please input your  Entry ID!",
                      },
                    ]}
                    style={{ width: "96%" }}
                    hasFeedback
                  >
                    {/* <Tooltip title="Enter Your Comapny Name"> */}
                    <Input placeholder="Entry ID" value="3223452" tabIndex={1} />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="no_of_vehicle"
                    label={<lable style={{ fontSize: "15px" }}>NO Of Vehicle </lable>}
                    rules={[
                      {
                        required: true,
                        message: "Please input your  NO of Vehicle!",
                      },
                    ]}
                    style={{ width: "96%" }}
                    hasFeedback
                  >
                    {/* <Tooltip title="Enter Your Comapny Name"> */}
                    <Select
                      showSearch
                      placeholder=" NO Of Vehicle"
                      optionFilterProp="children"
                      style={{
                        width: "100%",
                      }}
                      tabIndex={5}
                    >
                      {/* {city.map((items) => ( */}
                      <Option value={"opton1"}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="government_approve"
                    label={
                      <label style={{ fontSize: "15px" }}> Government Approve </label>
                    }
                    hasFeedback
                    style={{ width: "96%" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },

                    
                    ]}
                  >
                    {/* <Tooltip title="Enter GST Number"> */}
                    <Radio.Group onChange={onChange1} value={value}>
      <Radio value={1}>Yes</Radio>
      <Radio value={2}>No</Radio>
    
    </Radio.Group>

                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
               
                
              </Row>
             
              <Row>
             

                <Col className={v.select_option_col}>
                  <Form.Item
                    name="current_gps_company"
                    label={
                      <label style={{ fontSize: "15px" }}>current gps company</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your current gps company!",
                      },
                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }
                          if (isNaN(value)) {
                            return Promise.reject(
                              "no_of_tyres  Number has to be a current gps company."
                            );
                          }

                          return Promise.resolve();
                        },
                      }),
                    ]}
                    hasFeedback
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    <Input
                      placeholder="current gps company"
                      type="tel"
                      onKeyPress={handlePhoneKeyPress}
                      tabIndex={8}
                    />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="current_gps_yearly_charges"
                    label={
                      <label style={{ fontSize: "15px" }}> current gps yearly charges</label>
                    }
                    hasFeedback
                    style={{ width: "96%" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },

                  
                    ]}
                  >
                    {/* <Tooltip title="Enter GST Number"> */}
                    <Input
                      placeholder="current gps yearly charges"
                      type="tel"
                      onKeyPress={handlePhoneKeyPress}
                      maxLength={15}
                      tabIndex={9}
                    />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
              </Row>
            

            

            
              
           
              <div className=" m-auto w-40 pb-20">
                <Form.Item className="w-40 m-auto">
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
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};
export default FRMGPSrequierement;

