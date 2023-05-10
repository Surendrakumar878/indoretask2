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
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import v from "../components/Vehicleform.module.css";
const { Option } = Select;
// import LoadingButton from "@mui/lab/LoadingButton";
const PodRegisterForm = () => {
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
      //   country_id: values.country_id,
      //   office_phone_number: values.office_phone_number,
      //   email: values.email,
      //   website: values.website,
      //   company_registeration: values.company_registeration,
      //   owner_aadhar_card: values.owner_aadhar_card,
      //   gst_certificate: values.gst_certificate,
      //   company_visiting_card: values.company_visiting_card,
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
        <h2 id={v.heading}>POD Entry</h2>
        <div className={v.mainForm}>
          <Card hoverable bodyStyle={{ padding: "0" }}>
            {/* <Button onClick={welcom}> save</Button> */}
            <Form layout="vertical" autoComplete="off" onFinish={saveData}>
              {/* <h3 className={v.card_menu}>  ENQUIRY DETAILS</h3> */}
              <Row>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="pod_id"
                    label={<lable style={{ fontSize: "15px" }}>POD ID: </lable>}
                    rules={[
                      {
                        // required: true,
                        message: "Please input your  POD ID!",
                      },
                    ]}
                    style={{ width: "96%" }}
                    hasFeedback
                  >
                    {/* <Tooltip title="Enter Your Comapny Name"> */}
                    <Input placeholder="POD ID" value="3223452" tabIndex={1} />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="pod_no"
                    label={<lable style={{ fontSize: "15px" }}>POD NO: </lable>}
                    rules={[
                      {
                        // required: true,
                        message: "Please input your  POD NO!",
                      },
                    ]}
                    style={{ width: "96%" }}
                    hasFeedback
                  >
                    {/* <Tooltip title="Enter Your Comapny Name"> */}
                    <Input placeholder="POD NO" tabIndex={1} />
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Address" > */}
                    <DatePicker
                      className="w-full"
                      showTime
                      placeholder="POD DATE"
                      onChange={onChange}
                      onOk={onOk}
                    />

                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="booking_id"
                    label={
                      <label style={{ fontSize: "15px" }}> Booking id:</label>
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
                              " Number has to be a Booking id."
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
                      placeholder="Booking id"
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Address" > */}
                    <DatePicker
                      className="w-full"
                      showTime
                      placeholder="booking date"
                      onChange={onChange}
                      onOk={onOk}
                    />

                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
              </Row>
              {/* VEHICLE DETAILS */}
              {/* <h3 className={v.card_menu}> VEHICLE DETAILS</h3> */}

              {/* GOODS DETAILS */}
              {/* <h3 className={v.card_menu}> GOODS DETAILS</h3> */}

              <Row>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="vehicle_no"
                    label={
                      <label style={{ fontSize: "15px" }}>Vehicle no:</label>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your Vehicle no!",
                      },
                      () => ({
                        validator(_, value) {
                          if (!value) {
                            return Promise.reject();
                          }
                          if (isNaN(value)) {
                            return Promise.reject(
                              "no_of_tyres  Number has to be a Vehicle no."
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
                      placeholder="Vehicle no"
                      type="tel"
                      onKeyPress={handlePhoneKeyPress}
                      tabIndex={8}
                    />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
                <Col className={v.select_option_col}>
                  <Form.Item
                    name="driver_name"
                    label={
                      <label style={{ fontSize: "15px" }}> Driver name:</label>
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
                      placeholder="driver_name"
                      type="tel"
                      onKeyPress={handlePhoneKeyPress}
                      maxLength={15}
                      tabIndex={9}
                    />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    <Input placeholder="Goods Name" tabIndex={11} />
                    {/* </Tooltip> */}
                  </Form.Item>
                </Col>
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    <Input placeholder="From" tabIndex={9} />
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Website URL"> */}
                    <Input placeholder="To" tabIndex={10} />
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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Address" > */}
                    <DatePicker
                      className="w-full"
                      showTime
                      placeholder="Reporting date"
                      onChange={onChange}
                      onOk={onOk}
                    />

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
                    style={{ width: "96%" }}
                  >
                    {/* <Tooltip title="Enter Your Address" > */}
                    <DatePicker
                      className="w-full"
                      showTime
                      placeholder="Unloading_date"
                      onChange={onChange}
                      onOk={onOk}
                    />

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
export default PodRegisterForm;
// advanc %
