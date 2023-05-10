import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import v from "../components/Vehicleform.module.css";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import { Option } from "antd/es/mentions";

const Vehicle_View = () => {
  const conponentPDF = useRef();
  const [userData, setUserdata] = useState([]);

  useEffect(() => {
    const registerUserdata = async () => {
      axios
        .get("http://localhost:4000/Vehicle")
        .then((res) => setUserdata(res.data.data))
        .catch((error) => console.log(error));
    };
    registerUserdata();
  }, []);

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  console.log(userData);
  return (
    <div>
      <React.Fragment>
        <div className=" sm:w-[99%]  sm:m-auto ">
          <div className="">
            <div className="">

              
              <div
               
                className=" relative sm:w-full sm:m-auto w-full  bordre border-collapse border-2 h-96 border-black "
              >
                <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">
                  {" "}
                  vehicleview{" "}
                </div>

                <div className="flex flex-wrap  ">
                    
                <Col className="pt-4">
              <Form.Item
                  name="enq_date"
                  label={<label style={{ fontSize: "15px" }}>Enq Date</label>}
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
                    placeholder="enq date"
                    // onChange={onChange}
                    // onOk={onOk}
                  />

                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
              <Col className="pt-4">
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
                  style={{ width: "96%" }}
                >
                  {/* <Tooltip title="Enter Your Website URL"> */}
                  <Input placeholder="From" tabIndex={9} />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>


              <Col className="pt-4">
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
                  style={{ width: "96%" }}
                >
                  {/* <Tooltip title="Enter Your Website URL"> */}
                  <Input placeholder="To" tabIndex={10} />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>





                

                    <div className="pt-4">
                      <Form.Item
                        // className="w-80"
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
                          placeholder="vehicle body type"
                          optionFilterProp="children"
                          tabIndex={4}
                        >
                          {/* {state.map((items) => ( */}
                          <Option value={"opton1"}>{"opton1"}</Option>
                          {/* ))} */}
                        </Select>
                      </Form.Item>
                    </div>
                    <div className="pt-4">
                      <Form.Item
                        // className="w-80"
                        name="vehicle_type"
                        label={
                          <label style={{ fontSize: "15px" }}>
                            Vehicle Type
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
                          placeholder="vehicle body type"
                          optionFilterProp="children"
                          tabIndex={4}
                        >
                          {/* {state.map((items) => ( */}
                          <Option value={"opton1"}>{"opton1"}</Option>
                          {/* ))} */}
                        </Select>
                      </Form.Item>
                    </div>
                    <div className="pt-4">
                      <Form.Item
                        // className="w-80"
                        name="vehicle_size"
                        label={
                          <label style={{ fontSize: "15px" }}>
                            Vehicle size
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
                          placeholder="vehicle body type"
                          optionFilterProp="children"
                          tabIndex={4}
                        >
                          {/* {state.map((items) => ( */}
                          <Option value={"opton1"}>{"opton1"}</Option>
                          {/* ))} */}
                        </Select>
                      </Form.Item>
                    </div>
                    <div className="pt-4">
                      <Form.Item
                        // className="w-80"
                        name="vehicle_capacity"
                        label={
                          <label style={{ fontSize: "15px" }}>
                            Vehicle capacity
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
                          placeholder="vehicle body type"
                          optionFilterProp="children"
                          tabIndex={4}
                        >
                          {/* {state.map((items) => ( */}
                          <Option value={"opton1"}>{"opton1"}</Option>
                          {/* ))} */}
                        </Select>
                      </Form.Item>
                    </div>
                    <div className="pt-4">
                      <Form.Item
                        // className="w-80"
                        name="vehicle_height"
                        label={
                          <label style={{ fontSize: "15px" }}>
                            Vehicle height
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
                          placeholder="vehicle body type"
                          optionFilterProp="children"
                          tabIndex={4}
                        >
                          {/* {state.map((items) => ( */}
                          <Option value={"opton1"}>{"opton1"}</Option>
                          {/* ))} */}
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                <div  ref={conponentPDF} className=" bordre border-collapse border-2  border-slate-700 pb-2">
                
                  <table className=" w-full ">
                    <thead className="bg-[#151B54] w-full text-white">
                      <tr>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Sr. No
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Enq id
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          {" "}
                          Enq date
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          From{" "}
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          To{" "}
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Demand by
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Vehicle type
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Vehicle Height
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Vehicle size
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Vehicle body type
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Vehicle capacity
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Good Name
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Total Weight
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* { */}
                      {/* // userData.map( (uData, index)=>( */}
                      <tr
                      //  key={index}
                      >
                        <td className="sm:px-2 px-2 sm:text-base text-base border border-slate-300">
                          {1}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {"uData."}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {"uData."}
                        </td>

                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {"uData.city"}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {"uData.contact"}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {"uData.person"}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {"uData.status"}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {"uData.Registration_date"}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {"uData.activation_date"}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {"uData.total_weight"}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {"uData.goods_name"}
                        </td>

                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          ghj
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          ghj
                        </td>
                      </tr>
                      {/* )) } */}
                    </tbody>
                  </table>
                  <div className="absolute top-40 w-96 left-96 opacity-10">
                    <img className="w-full" src="transduniyalogo.png" alt="" />
                  </div>
                  <h1 className="text-end text-xs">
                    Powered by : www.transduniya.com-97553-22022{" "}
                  </h1>
                </div>
              </div>
              <div className="m-auto w-full text-center" >
                    <button className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " onClick={ generatePDF}>Download</button>  <button className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " onClick={ generatePDF}>Print</button>                       
                    </div> 
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Vehicle_View;
