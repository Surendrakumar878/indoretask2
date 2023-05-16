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

import v from "./contractentry.module.css";
const { Option } = Select;
// import LoadingButton from "@mui/lab/LoadingButton";
const Contract_Entry = () => {
  const { RangePicker } = DatePicker;
  function onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  }

  function onOk(value) {
    console.log("onOk: ", value);
  }

  const navigate = useNavigate();
  const [verfied, setVerifed] = useState(false);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [register, SetRegisterNumber] = useState([]);
  const [required, Setrequired] = useState(false);
  const [open, setOpen] = useState(false);

  function onChange() {
    setVerifed(true);
  }

  const saveData = async (values) => {
    console.log(values);
    const reg_data = {
        from_state: values.from_state,
        from_city: values.from_city,
        contract_date: values.contract_date,
      vehicle_type: values.vehicle_type,
      vehicle_size: values.vehicle_size,
      vehicle_capacity: values.vehicle_capacity,
      no_of_tyres: values.no_of_tyres,
      from: values.from,
      to_state: values.to,
      to_city: values.goods_name,
      contract_from: values.contract_from,
      vehicle_body_type: values.vehicle_body_type,
      vehicle_height: values.vehicle_height,
      contract_to: values.contract_to,
        advance: values.advance,
        payment: values.payment,
         
    };
    console.log(reg_data);
  };

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
        <h2 id={v.heading}>Contract Entry</h2>
        <div className={v.mainForm}>
          <Card hoverable bodyStyle={{ padding: "0" }}>
            {/* <Button onClick={welcom}> save</Button> */}
            <Form layout="vertical" autoComplete="off" onFinish={saveData}>
              <h3 className={v.card_menu}> ROOT REQUIRE </h3>
              <Row>

              <Col className={v.select_option_col}>
                  <Form.Item
                    name="from_state"
                    label={
                      <label style={{ fontSize: "15px" }}> From State</label>
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    {/* <Input placeholder="From" tabIndex={9} /> */}

                    <Select
                      showSearch
                      placeholder=" From State"
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
                    name="from_city"
                    label={
                      <label style={{ fontSize: "15px" }}>From City</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your From City!",
                      },
                      {
                        type: "text",
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    {/* <Input placeholder="To" tabIndex={10} /> */}
                    <Select
                      showSearch
                      placeholder="From City"
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
                    name="contract_date"
                    label={<label style={{ fontSize: "15px" }}>Contract Date</label>}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    hasFeedback
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Address" > */}
                    <Input
                      className="w-full"
                      type="date"
                      placeholder="Contract Date"
                      onChange={onChange}
                      onOk={onOk}
                    />
   {/* <DatePicker onChange={onChange} /> */}
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>

               

                <Col className={v.select_option_col}>
                  <Form.Item
                    name="to_state"
                    label={
                      <label style={{ fontSize: "15px" }}>To State</label>
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    {/* <Input placeholder="From" tabIndex={9} /> */}

                    <Select
                      showSearch
                      placeholder="To State"
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
                    name="to_city"
                    label={
                      <label style={{ fontSize: "15px" }}> To City </label>
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    {/* <Input placeholder="To" tabIndex={10} /> */}
                    <Select
                      showSearch
                      placeholder=" To City"
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
                    name="contract_from"
                    label={
                      <label style={{ fontSize: "15px" }}>Contract from</label>
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    {/* <Input placeholder="From" tabIndex={9} /> */}

                    <Select
                      showSearch
                      placeholder="Contract from"
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
                    name="contract_to"
                    label={
                      <label style={{ fontSize: "15px" }}>Contract To </label>
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    {/* <Input placeholder="To" tabIndex={10} /> */}
                    <Select
                      showSearch
                      placeholder="Contract To"
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
              </Row>

              {/* VEHICLE DETAILS */}
              <h3 className={v.card_menu}> VEHICLE DETAILS</h3>

              <Row>
                <Col className="select_option_col">
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
                    style={{ width: "96%" }}
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
                    style={{ width: "96%" }}
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
                    style={{ width: "96%" }}
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
                    
                    ]}
                    style={{ width: "96%" }}
                    hasFeedback
                  >
                    {/* <Tooltip title="Enter PIN Number"> */}
                   
                     <Select
                      showSearch
                      placeholder="Vehicle size"
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
                    
                      {
                        type: "text",
                      },
                    ]}
                    style={{ width: "96%" }}
                    hasFeedback
                  >
                    {/* <Tooltip title="Enter Email ID"> */}
                    

<Select
                      showSearch
                      placeholder="Vehicle Capacity"
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    {/* <Input placeholder="No of tyres" type="tel"
                    onKeyPress={handlePhoneKeyPress} tabIndex={8} /> */}
                    {/* </Tooltip> */}

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
              <h3 className={v.card_menu}>  FREIGHT DETAILS</h3>

              <Row>
               
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="advance"
                    label={
                      <label style={{ fontSize: "15px" }}>Advance % :</label>
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    <Input placeholder="Advance % " tabIndex={11} />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>

                <Col className={v.select_option_col}>
                  <Form.Item
                    name="payment"
                    label={
                      <label style={{ fontSize: "15px" }}>Payment</label>
                    }
                    hasFeedback
                    style={{ width: "96%" }}
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
                      placeholder="Payment"
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
export default Contract_Entry;
// advanc %
