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

import v from "./GPSrequierement.module.css";
const { Option } = Select;
// import LoadingButton from "@mui/lab/LoadingButtxon";
const FRMPurchesTyer = () => {
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
    
    const reg_data = {
      req_id: values.req_id,
      total_tyer_require: values.total_tyer_require,
      tyer_company: values.tyer_company,
      tyer_model: values.tyer_model,
      total_qty: values.total_qty,
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
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col gap-4 bg-white mb-10">
        <h2 id={v.heading}> Purches Tyer </h2>
        <div className={v.mainForm}>
          <Card hoverable bodyStyle={{ padding: "0" }}>
            <Form layout="vertical" autoComplete="off" onFinish={saveData}>
              <Row>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="req_id"
                    label={<lable style={{ fontSize: "15px" }}>REQ ID: </lable>}
                    rules={[
                      {
                        // required: true,
                        message: "Please input your  Entry ID!",
                      },
                    ]}
                    style={{ width: "96%", marginBottom: "10px" }}
                    hasFeedback
                  >
                    
                    <Input
                      placeholder="Entry ID"
                      value="3223452"
                      tabIndex={1}
                    />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="req_date_time"
                    label={
                      <lable style={{ fontSize: "15px" }}>REQ Date/TIME </lable>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your  !",
                      },
                    ]}
                    style={{ width: "96%", marginBottom: "10px" }}
                    hasFeedback
                  >
                    {/* <Tooltip title="Enter Your Comapny Name"> */}
                    <input max="2099-12-25T23:59" 
                  //  value={"hire_date_time"} 
                  //  onChange={(e)=>sethire_date_time(e.target.value)} 

                   class="placeholder:italic placeholder:text-slate-400 block bg-white w-[100%] rounded-md border border-slate-300  py-[5px] pl-1 sm:pl-3 pr-1  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>

                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
               
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="total_tyer_require"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        {" "}
                       Total Tyer Require
                      </label>
                    }
                    hasFeedback
                    style={{ width: "96%", marginBottom: "10px" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },
                    ]}
                  >
              
                    <Select
                      showSearch
                     
                      placeholder=" Total Tyer require"
                      optionFilterProp="children"
                      tabIndex={4}
                    >
                     
                        <Option value={"opton1"}>{"opton1"}</Option>
                 
                    </Select>

                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name=" tyer_company"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        {" "}
                        Tyer Company
                      </label>
                    }
                    hasFeedback
                    style={{ width: "96%", marginBottom: "10px" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },
                    ]}
                  >
                    {/* <Tooltip title="Enter GST Number"> */}
                    <Select
                      showSearch
                      // onChange={getCityName}
                      placeholder=" Tyer Company"
                      optionFilterProp="children"
                      tabIndex={4}
                    >
                      {/* {state.map((items) => ( */}
                        <Option value={"opton1"}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>

                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="  tyer_model"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        {" "}
                        Tyer Model
                      </label>
                    }
                    hasFeedback
                    style={{ width: "96%", marginBottom: "10px" }}
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Total weight!",
                      },
                    ]}
                  >
                    {/* <Tooltip title="Enter GST Number"> */}
                    <Select
                      showSearch
                      // onChange={getCityName}
                      placeholder="Tyer Model"
                      optionFilterProp="children"
                      tabIndex={4}
                    >
                      {/* {state.map((items) => ( */}
                        <Option value={"opton1"}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>

                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="total_qty"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        {" "}
                        Total Qty
                      </label>
                    }
                    hasFeedback
                    style={{ width: "96%", marginBottom: "10px" }}
                    rules={[
                      {
                        required: true,
                     
                      },
                    ]}
                  >
                   
                   <Input
                      placeholder="  Total Qty"
                      value="3223452"
                      tabIndex={1}
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
export default FRMPurchesTyer;
