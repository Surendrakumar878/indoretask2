// import { Form, Formik } from "formik";
import { useState } from "react";
import {
  Button,
  Input,

  Form,
  Row,

  Col,
  Upload,
  Card,
  Select,
  
} from "antd";

import { DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import v from "../components/Vehicleform.module.css";
const { Option } = Select;

const FRMPod = () => {
  
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
      booking_no: values.booking_no,
      vehicle_no: values.vehicle_no,
      booking_date: values.booking_date,
      driver_name: values.driver_name,
      driver_contact_no: values.driver_contact_no,
      goods_name: values.goods_name,
     from: values.from,
      to: values.to,
      Reporting_date: values.Reporting_date,
      Unloading_date: values.Unloading_date,
      pod_date: values.pod_date,
      loading_weight: values.loading_weight,
      unloading_weight: values.unloading_weight,
      Weight_difference: values.Weight_difference,

      pod1: values.pod1,
      pod2: values.pod2,
      weight_slip1: values.weight_slip1,
      weight_slip2: values.weight_slip2,
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

  return (
    <>
      <div className="flex flex-col gap-4 bg-white mb-0">
        <h2 id={v.heading}>POD Entry</h2>
        <div className={v.mainForm}>
          <Card hoverable bodyStyle={{ padding: "0" }}>
          <h3 className={`${v.card_menu} text-center`}>Booking Details</h3>
            <Form layout="vertical" autoComplete="off" onFinish={saveData}>
              <Row>
              <Col className={v.select_option_col}>
                  <Form.Item
                    name="booking_no"
                    label={
                      <label style={{ fontSize: "15px" }}> Booking No:</label>
                    }
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },

                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }

                          if (isNaN(value)) {
                            return Promise.reject(
                              " Number has to be a Booking no."
                            );
                          }
                          if (value.typeOf === "number") {
                            return Promise.resolve();
                          }

                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    {/* <Tooltip title="Enter GST Number"> */}
                    
                     <Select
                      showSearch
                      // onChange={getCityName}
                      placeholder="Booking no"
                      optionFilterProp="children"
                      tabIndex={4}
                    >
                      {/* {state.map((items) => ( */}
                        <Option value={"1"}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="vehicle_no"
                    label={
                      <label style={{ fontSize: "15px" }}>Vehicle No:</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your Vehicle No!",
                      },
                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }
                          if (isNaN(value)) {
                            return Promise.reject(
                              "No of tyres  Number has to be a Vehicle No."
                            );
                          }

                          return Promise.resolve();
                        },
                      }),
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    
                       <Select
                      showSearch
                      // onChange={getCityName}
                      placeholder="Vehicle No"
                      optionFilterProp="children"
                      tabIndex={4}
                    >
                      {/* {state.map((items) => ( */}
                        <Option value={"1"}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
              
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="booking_date"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        Booking date/time:
                      </label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input yourbooking_date!",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    {/* <Tooltip title="Enter Your Address" > */}
                    <input max="2099-12-25T23:59" 
                   
                  //  value={"hire_date_time"} 
                  //  onChange={(e)=>sethire_date_time(e.target.value)} 

                   class="placeholder:italic placeholder:text-slate-400 block  bg-white w-[100%] border border-slate-300 rounded-md py-[5px] pl-1 sm:pl-3 pr-1  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
              </Row>
             
              <Row>
               
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="driver_name"
                    label={
                      <label style={{ fontSize: "15px" }}> Driver name:</label>
                    }
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },

                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }

                          if (isNaN(value)) {
                            return Promise.reject(
                              " Number has to be a number."
                            );
                          }
                          if (value.typeOf === "number") {
                            return Promise.resolve();
                          }

                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    {/* <Tooltip title="Enter GST Number"> */}
                    <Input
                      placeholder="driver_name"
                      type="tel"
                      onKeyPress={handlePhoneKeyPress}
                      maxLength={15}
                      tabIndex={9}
                    />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="driver_contact_no:"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        {" "}
                        Driver Contact No:

                      </label>
                    }
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },

                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }

                          if (isNaN(value)) {
                            return Promise.reject(
                              " Number has to be a number."
                            );
                          }
                          if (value.typeOf === "number") {
                            return Promise.resolve();
                          }

                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    {/* <Tooltip title="Enter GST Number"> */}
                    <Input
                      placeholder="driver_contact_no"
                      type="tel"
                      onKeyPress={handlePhoneKeyPress}
                      maxLength={15}
                      tabIndex={9}
                    />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="goods_name"
                    label={
                      <label style={{ fontSize: "15px" }}>Goods Name :</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your Goods Name!",
                      },
                      {
                        type: "text",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    <Input placeholder="Goods Name" tabIndex={11} />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>

              </Row>
              <Row>
                
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="from"
                    label={
                      <label style={{ fontSize: "15px" }}>Station from</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your From!",
                      },
                      {
                        type: "text",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    {/* <Input placeholder="From" tabIndex={9} /> */}
                    <Select
                      showSearch
                      // onChange={getCityName}
                      placeholder="From"
                      optionFilterProp="children"
                      tabIndex={4}
                    >
                      {/* {state.map((items) => ( */}
                        <Option value={"1"}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="to"
                    label={
                      <label style={{ fontSize: "15px" }}>Station To </label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your To!",
                      },
                      {
                        type: "text",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    {/* <Input placeholder="To" tabIndex={10} /> */}
                    <Select
                      showSearch
                      // onChange={getCityName}
                      placeholder="To "
                      optionFilterProp="children"
                      tabIndex={4}
                    >
                      {/* {state.map((items) => ( */}
                        <Option value={"1"}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="Reporting_date"
                    label={
                      <label style={{ fontSize: "15px" }}>Reporting date/time</label>
                    }
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    {/* <Tooltip title="Enter Your Address" > */}
                    <input max="2099-12-25T23:59" 
                  //  value={"hire_date_time"} 
                  //  onChange={(e)=>sethire_date_time(e.target.value)} 

                   class="placeholder:italic placeholder:text-slate-400 block bg-white w-[100%] border border-slate-300 rounded-md py-[5px] pl-1 sm:pl-3 pr-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
              </Row>

              <Row>
           
                

               
              <Col className={v.select_option_col}>
                  <Form.Item
                    name="Reporting_date"
                    label={
                      <label style={{ fontSize: "15px" }}>Reporting date/time</label>
                    }
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    {/* <Tooltip title="Enter Your Address" > */}
                    <input max="2099-12-25T23:59" 
                  //  value={"hire_date_time"} 
                  //  onChange={(e)=>sethire_date_time(e.target.value)} 

                   class="placeholder:italic placeholder:text-slate-400 block bg-white w-[100%] rounded-md border border-slate-300  py-[5px] pl-1 sm:pl-3 pr-1  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="Unloading_date"
                    label={
                      <label style={{ fontSize: "15px" }}>Unloading date/time</label>
                    }
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    {/* <Tooltip title="Enter Your Address" > */}
                    <input max="2099-12-25T23:59" 
                  //  value={"hire_date_time"} 
                  //  onChange={(e)=>sethire_date_time(e.target.value)} 

                   class="placeholder:italic placeholder:text-slate-400 block bg-white w-[100%] border border-slate-300  py-[5px] pl-1 sm:pl-3 pr-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="pod_date"
                    label={
                      <label style={{ fontSize: "15px" }}>POD DATE/TIME</label>
                    }
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    {/* <Tooltip title="Enter Your Address" > */}
                    <input max="2099-12-25T23:59" 
                  //  value={"hire_date_time"} 
                  //  onChange={(e)=>sethire_date_time(e.target.value)} 

                   class="placeholder:italic placeholder:text-slate-400 block bg-white w-[100%] border border-slate-300  py-[5px] pl-1 sm:pl-3 pr-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
            
               

              
           </Row>

              <Row>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="loading_weight:"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        {" "}
                        Loading weight:

                      </label>
                    }
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },

                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }

                          if (isNaN(value)) {
                            return Promise.reject(
                              " Number has to be a number."
                            );
                          }
                          if (value.typeOf === "number") {
                            return Promise.resolve();
                          }

                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    {/* <Tooltip title="Enter GST Number"> */}
                    <Input
                      placeholder="loading_weight"
                      type="tel"
                      onKeyPress={handlePhoneKeyPress}
                      maxLength={15}
                      tabIndex={9}
                    />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>

                <Col className={v.select_option_col}>
                  <Form.Item
                    name="unloading_weight"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        {" "}
                        Unloading weight:
                      </label>
                    }
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },

                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }

                          if (isNaN(value)) {
                            return Promise.reject(
                              " Number has to be unloading_weight."
                            );
                          }
                          if (value.typeOf === "number") {
                            return Promise.resolve();
                          }

                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    {/* <Tooltip title="Enter GST Number"> */}
                    <Input
                      placeholder="unloading_weight"
                      type="tel"
                      onKeyPress={handlePhoneKeyPress}
                      maxLength={15}
                      tabIndex={9}
                    />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="Weight_difference"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        {" "}
                        Weight difference:
                      </label>
                    }
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },

                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }

                          if (isNaN(value)) {
                            return Promise.reject(
                              " Number has to be a number."
                            );
                          }
                          if (value.typeOf === "number") {
                            return Promise.resolve();
                          }

                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    {/* <Tooltip title="Enter GST Number"> */}
                    <Input
                      placeholder="Weight difference"
                      type="tel"
                      onKeyPress={handlePhoneKeyPress}
                      maxLength={15}
                      tabIndex={9}
                    />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
              </Row>
              <h3 className={`${v.card_menu} text-center`}>DOCUMENTS</h3>
            <Row>
              {/* pod1 */}
              <Col className={v.upload_col}>
                <Form.Item
                  name="pod1"
                  label={<label style={{ fontSize: "15px" }}> Pod1 </label>}
                  getValueFromEvent={({ file }) => file.originFileObj}
                  style={{ width: "96%",marginBottom: "10px" }}
                  rules={[
                    {
                      required: true,
                      message: "pod1!",
                    },
                  ]}
                  hasFeedback
                >
                  <Upload {...fileProps1}>
                    <Button icon={<UploadOutlined />} tabIndex={17}>
                      Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
              {/* pod2 */}
              <Col className={v.upload_col}>
                <Form.Item
                  name="pod2"
                  label={<label style={{ fontSize: "15px" }}>Pod2</label>}
                  getValueFromEvent={({ file }) => file.originFileObj}
                  style={{ width: "96%",marginBottom: "10px" }}
                  rules={[
                    {
                      required: true,
                      message: "pod2!",
                    },
                  ]}
                  hasFeedback
                >
                  <Upload {...fileProps2}>
                    <Button icon={<UploadOutlined />} tabIndex={18}>
                      Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
              {/* weight_slip */}
              <Col className={v.upload_col}>
                <Form.Item
                  name="weight_slip1"
                  label={<label style={{ fontSize: "15px" }}>Weight slip1</label>}
                  style={{ width: "96%",marginBottom: "10px" }}
                  rules={[
                    {
                      required: true,
                      message: "PDF!",
                    },
                  ]}
                  hasFeedback
                  getValueFromEvent={({ file }) => file.originFileObj}
                >
                  <Upload {...fileProps4} className="uploadField">
                    <Button icon={<UploadOutlined />} tabIndex={19}>
                      Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
              {/* weight_slip2 */}
              <Col className={v.upload_col}>
                <Form.Item
                  name="weight_slip2"
                  label={<label style={{ fontSize: "15px" }}>Weight Slip2</label>}
                  style={{ width: "96%",marginBottom: "10px" }}
                  rules={[
                    {
                      required: true,
                      message: "PDF!",
                    },
                  ]}
                  hasFeedback
                  getValueFromEvent={({ file }) => file.originFileObj}
                >
                  <Upload {...fileProps4} className="uploadField">
                    <Button icon={<UploadOutlined />} tabIndex={19}>
                      Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
              <div className=" m-auto w-40 pb-4">
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
export default FRMPod;

