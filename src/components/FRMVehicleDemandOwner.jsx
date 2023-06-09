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

import v from "./Vehicleform.module.css"
const { Option } = Select;
// import LoadingButton from "@mui/lab/LoadingButton";
const FRMVehicleDemandOwner = () => {
  const { RangePicker } = DatePicker;
  function onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  }

 
 

  

  const saveData = async (values) => {

    console.log(values)
    const reg_data = {
      enq_no: values.enq_no,
      enq_date: values.enq_date,
      vehicle_required_date: values.vehicle_required_date,
      vehicle_type: values.vehicle_type,
      vehicle_size: values.vehicle_size,
      vehicle_capacity: values.vehicle_capacity,
      no_of_tyres: values.no_of_tyres,
      from: values.from,
      to: values.to,
      goods_name: values.goods_name,
      total_weight: values.total_weight,
      vehicle_body_type: values.vehicle_body_type,
      vehicle_height: values.vehicle_height,

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
        <h2 id={v.heading}>FRM Vehicle Demand Owner  </h2>
        <div className={v.mainForm}>
        
         

          <Card hoverable bodyStyle={{ padding: "0" }}>
         
            <Form layout="vertical" autoComplete="off" onFinish={saveData}>
              <h3 className={v.card_menu}>  ENQUIRY DETAILS</h3>
             <Row>
              <Col className={v.select_option_col}>  
               <Form.Item
                  name="enq_no"
                  label={<lable style={{ fontSize: "15px" }}>Enq no </lable>}
                  rules={[
                    {
                      // required: true,
                      message: "Please input your  Enq no!",
                    }
                  ]}
                  style={{ width: "96px",marginBottom: "10px" }}
                  hasFeedback
                >
                  {/* <Tooltip title="Enter Your Comapny Name"> */}
                  <Input placeholder="3223452" disabled value="3223452" tabIndex={1} />
                  {/* </Tooltip> */}
                </Form.Item></Col>
              <Col className={v.select_option_col}>
              <Form.Item
                  name="enq_date"
                  label={<label style={{ fontSize: "15px" }}>Enq Date/Time</label>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  hasFeedback
                  style={{  width: "96%",marginBottom: "10px" }}
                >
                 
                   <input max="2099-12-25T23:59" 
                  
                   class="placeholder:italic placeholder:text-slate-400 block bg-white w-[90%] border border-slate-300 rounded-md py-1 pl-1 sm:pl-9 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


                  {/* </Tooltip> */}
                </Form.Item>
              </Col>

              <Col className={v.select_option_col}>
              <Form.Item
                  name="vehicle_required_date"
                  label={
                    <label style={{ fontSize: "15px" }}>
                      Vehicle required date/time :
                    </label>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your vehicle_required_date!",
                    },
                  ]}
                  hasFeedback
                  style={{  width: "96%",marginBottom: "10px" }}
                >
                  {/* <Tooltip title="Enter Your Address" > */}
                  <input max="2099-12-25T23:59" 
                 
                   class="placeholder:italic placeholder:text-slate-400 block bg-white w-[90%] border border-slate-300 rounded-md py-1 pl-1 sm:pl-9 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
            
              </Row>

              {/* VEHICLE DETAILS */}
              <h3 className={v.card_menu}> VEHICLE DETAILS</h3>
            
              <Row>
              <Col className={v.select_option_col}>
                  <Form.Item
                    name="vehicle_type"
                    label={
                      <label style={{ fontSize: "15px" }}>Vehicle Type :</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your Vehicle Type!",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    <Select
                      showSearch
                      // onChange={getStateName}
                      placeholder="Vehicle  Type"
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
                    name="vehicle_body_type"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        Vehicle Body Type
                      </label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your vehicle body type!",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    <Select
                      showSearch
                      // onChange={getCityName}
                      placeholder="Vehicle body type"
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
                    name="vehicle_height"
                    label={
                      <label style={{ fontSize: "15px" }}>Vehicle Height</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input yourVehicle Height!",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%",marginBottom: "10px" }}
                  >
                    <Select
                      showSearch
                      placeholder="Vehicle Height"
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
                  </Form.Item>
                </Col>

                <Col className={v.select_option_col}>
                  <Form.Item
                    name="vehicle_size"
                    label={
                      <label style={{ fontSize: "15px" }}>Vehicle size</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please enter Vehicle size ",
                      },
                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }
                          if (isNaN(value)) {
                            return Promise.reject(
                              "Vehicle size Number has to be a number."
                            );
                          }
                         
                          return Promise.resolve();
                        },
                      }),
                    ]}
                    style={{ width: "96%",marginBottom: "10px" }}
                    hasFeedback
                  >
                    {/* <Tooltip title="Enter PIN Number"> */}
                    <Select
                      showSearch
                      // onChange={getCityName}
                      placeholder="Vehicle size"
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
                    name="vehicle_capacity"
                    label={
                      <label style={{ fontSize: "15px" }}>
                        Vehicle Capacity:
                      </label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your Vehicle Capacity!",
                      },
                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }
                          if (isNaN(value)) {
                            return Promise.reject(
                              "Vehicle size Number has to be a number."
                            );
                          }
                         
                          return Promise.resolve();
                        },
                      }),
                      {
                        type: "text",
                      },
                    ]}
                    style={{ width: "96%",marginBottom: "10px" }}
                    hasFeedback
                  >
                    {/* <Tooltip title="Enter Email ID"> */}
                    <Select
                      showSearch
                      // onChange={getCityName}
                      placeholder="Vehicle capacity"
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
                  name="no_of_tyres"
                  label={
                    <label style={{ fontSize: "15px" }}>No of tyres:</label>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your no of tyres!",
                    },
                    () => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.reject();
                        }
                        if (isNaN(value)) {
                          return Promise.reject(
                            "no_of_tyres  Number has to be a number."
                          );
                        }
                       
                        return Promise.resolve();
                      },
                    }),
                  ]}
                  hasFeedback
                  style={{ width: "96%",marginBottom: "10px" }}
                >
                

                  <Select
                      showSearch
                      placeholder="No of tyres"
                      optionFilterProp="children"
                      style={{
                        width: "100%",
                      }}
                      tabIndex={5}
                    >
                      {/* {city.map((items) => ( */}
                        <Option value={1}>{"opton1"}</Option>
                      {/* ))} */}
                    </Select>
                </Form.Item>
              </Col>

              
              </Row>

              {/* GOODS DETAILS */}
              <h3 className={v.card_menu}> GOODS DETAILS</h3>
            
            <Row>
            
         
            
              <Col className={v.select_option_col}>
                <Form.Item
                  name="from"
                  label={<label style={{ fontSize: "15px" }}>Station from</label>}
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
               
                  <Select
                      showSearch
                      placeholder="From"
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
                  name="to"
                  label={<label style={{ fontSize: "15px" }}>Station To </label>}
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
                
                
                  <Select
                      showSearch
                      placeholder="To"
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

              <Col className={v.select_option_col}>
                <Form.Item
                  name="total_weight"
                  label={
                    <label style={{ fontSize: "15px" }}>Total weight</label>
                  }
                  
                  hasFeedback
                  style={{ width: "96%",marginBottom: "10px" }}
                  rules={[{
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
                        if (value.typeOf==="number") {
                          return Promise.resolve();
                        }
                        
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  {/* <Tooltip title="Enter GST Number"> */}
                  <Input
                    placeholder="Total weight"
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
export default FRMVehicleDemandOwner;
// advanc %
