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
import { Link, useNavigate } from "react-router-dom";

import v from "../../components/Vehicleform.module.css"
import TextArea from "antd/es/input/TextArea";
const { Option } = Select;
// import LoadingButton from "@mui/lab/LoadingButton";

const FRMresaler = () => {
  const { RangePicker } = DatePicker;
  function onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  }

 
 

  

  const saveData = async (values) => {

    console.log(values)
    const reg_data = {
      company_name: values.company_name,
      address: values.address,
      mobile_number: values.mobile_number,
      city: values.city,
      State: values.State,
      email_id: values.email_id,
      Interest_service: values.Interest_service,
      interest_for_city: values.interest_for_city,
      contact_name: values.contact_name,
      
    };
    console.log(reg_data)

  }

  const handlePhoneKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    const isNumeric = charCode >= 48 && charCode <= 57; // check if the key pressed is a number
    const isBackspace = charCode === 8; // check if the key pressed is the backspace key
    const phone = e.target.value.replace(/\D/g, ""); // remove all non-numeric characters
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
      <div className="flex flex-col gap-4 bg-white mb-10">
        <h2 id={v.heading}>ReSaler  </h2>
        <div className={v.mainForm}>
        
         

          <Card hoverable bodyStyle={{ padding: "0" }}>
         
            <Form layout="vertical" autoComplete="off" onFinish={saveData}>
          
             <Row>
              <Col className={v.select_option_col}>  
              <Form.Item
                  name="company_name"
                  label={
                    <label style={{ fontSize: "15px" }}>Company Name :</label>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your company name!",
                    },
                    {
                      type: "text",
                    },
                  ]}
                  hasFeedback
                  style={{ width: "96%",marginBottom: "10px" }}
                >
                  {/* <Tooltip title="Enter Your Website URL"> */}
                  <Input placeholder="company Name" tabIndex={11} />
                  {/* </Tooltip> */}
                </Form.Item>
                </Col>
              <Col className={v.select_option_col}>
              <Form.Item
                  name="address"
                  label={<label style={{ fontSize: "15px" }}>Address</label>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  hasFeedback
                  style={{  width: "96%",marginBottom: "10px" }}
                >
                 
                 <Input placeholder="Address" tabIndex={11} />

                  {/* </Tooltip> */}
                </Form.Item>
              </Col>

              <Col className={v.select_option_col}>
              <Form.Item
                  name=" mobile_number"
                  label={
                    <label style={{ fontSize: "15px" }}>
                      Mobile Number
                    </label>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your  Mobile Number!",
                    },
                  ]}
                  hasFeedback
                  style={{  width: "96%",marginBottom: "10px" }}
                >
                  {/* <Tooltip title="Enter Your Address" > */}
                  <Input placeholder="  Mobile Number" tabIndex={11} />

                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
            
              </Row>

              {/* VEHICLE DETAILS */}
             
            
              <Row>
              <Col className={v.select_option_col}>
                  <Form.Item
                    name="city"
                    label={
                      <label style={{ fontSize: "15px" }}>City</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your City!",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    <Select
                      showSearch
                      // onChange={getStateName}
                      placeholder="City"
                      optionFilterProp="children"
                      tabIndex={3}
                    >
                      {/* {country.map((items) => ( */}
                       <Option value={"opton1"}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="State"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        State
                      </label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your State!",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    <Select
                      showSearch
                      // onChange={getCityName}
                      placeholder="State"
                      optionFilterProp="children"
                      tabIndex={4}
                    >
                      {/* {state.map((items) => ( */}
                        <Option value={"opton1"}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>
                  </Form.Item>
                </Col>

                <Col className={v.select_option_col}>
                  <Form.Item
                    name="email_id"
                    label={
                      <label style={{ fontSize: "15px" }}>Email id</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input email id!",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    <Input placeholder="Email id" tabIndex={11} />
                  </Form.Item>
                </Col>

                <Col className={v.select_option_col}>
                  <Form.Item
                    name="website"
                    label={
                      <label style={{ fontSize: "15px" }}>Website</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please enter website ",
                      },
                      
                    ]}
                    style={{ width: "96%",marginBottom: "10px" }}
                    hasFeedback
                  >
                   
                    <Input placeholder="Website" tabIndex={11} />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name=" Interest_service"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        interest Service

                      </label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your Interest service!",
                      },
                     
                      {
                        type: "text",
                      },
                    ]}
                    style={{ width: "96%",marginBottom: "10px" }}
                    hasFeedback
                  >
                    {/* <Tooltip title="Enter Email ID"> */}
                    <TextArea  placeholder="interest Service" />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
            
                <Col className={v.select_option_col}>
                <Form.Item
                  name="interest_for_city"
                  label={
                    <label style={{ fontSize: "15px" }}>Interest for City:</label>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your Interest for City!",
                    },
                   
                  ]}
                  hasFeedback
                  style={{ width: "96%",marginBottom: "10px" }}
                >
                

                <Input placeholder="Interest for City" tabIndex={11} />
                </Form.Item>
              </Col>

              
              </Row>

           
            
            <Row>
            
         
            
             
            
              <Col className={v.select_option_col}>
                <Form.Item
                  name="contact_name"
                  label={
                    <label style={{ fontSize: "15px" }}>Contact Name :</label>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your contact name!",
                    },
                    {
                      type: "text",
                    },
                  ]}
                  hasFeedback
                  style={{ width: "96%",marginBottom: "10px" }}
                >
                  {/* <Tooltip title="Enter Your Website URL"> */}
                  <Input placeholder="Contact Name" tabIndex={11} />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>

             
            </Row>
              <div className=" m-auto w-40 pb-20">
                
                
                  <Form.Item className="w-40 m-auto" >
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
export default FRMresaler;
// advanc %
