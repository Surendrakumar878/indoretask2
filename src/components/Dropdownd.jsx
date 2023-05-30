import React, { useEffect } from "react";
import { Select, Space } from "antd";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

import { useNavigate, useNavigation } from "react-router-dom";
// import {  useNavigation } from "react-router-dom";
import { Report } from "bv-react-data-report";
import RPTVehiclescheduledsummary from "../page/RPTVehiclescheduledsummary";
import RPTUserdetails from "../page/RPTUserdetails";

const data = [
  {
    date: "2023-04-19T14:02",
    enqdate: "2023-04-19T14:02",
    from: "bhopal",
    to: "INDORE",

    vehiclesno: "34",
    party: "surendar1",
    booking: "234234",
    _id: "1",
  },

  {
    date: "2023-04-19T14:02",
    enqdate: "2023-04-19T14:02",
    from: "bhopal",
    to: "INDORE",

    vehiclesno: "34",
    party: "surendar1",
    booking: "234234",
    _id: "1",
  },
  {
    date: "2023-04-19T14:02",
    enqdate: "2023-04-19T14:02",
    from: "bhopal",
    to: "INDORE",

    vehiclesno: "34",
    party: "surendar1",
    booking: "234234",
    _id: "1",
  },
];
const Dropdownd = () => {

  const [searchParams, setSearchParams] = useSearchParams();
    
  const [category, setCategory] = useState(searchParams.getAll("category") || []);

  const HandleFilter = (e) => {
      
  }

 
  const navigate = useNavigate();
  const [report, setReport] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  

  const data1 = data.filter((item) => item.date === "2023-04-19T14:00");

  console.log(data1);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setReport(value);
    if (value === "report 1") {
      console.log(value);
      setShow(true);
      setShow2(false);
      setShow3(false);
    } else if (value === "report 2") {
      setShow(false);
      setShow2(true);
      setShow3(false);
    } else if (value === "report 3") {
      setShow(false);
      setShow2(false);
      setShow3(true);
    }
  };

  const initialValues = {
    from: "",
    date: "04/18/2023",
    enqdate: "04/18/2023",
    to: "",
    vehicleno: "",
    booking: "",
    party: "",
  };
  const onSubmitform = (e) => {
    e.preventDefault();
    console.log("object", report);
    if (report === "report 2") {
      navigate("/RPTfreight");
    } else if (report === "Overall_Current_Balances") {
      navigate("/RPToverallcurrentbalances");
    } else if (report === "Vehicle_Booking_Summary") {
      navigate("/RPTVehiclebookingsummary");
    } else if (report === "Vehicle_Scheduled_Summary") {
      navigate("/RPTvehiclescheduledsummary");
    } else if (report === "Overall_wallet_Summary") {
      navigate("/RPTOverallwallet");
    } else if (report === "Userdetails") {
     
      let newCategory = [...category];
     
      setCategory(newCategory)
      navigate("/RPTUserdetails")
      // return <RPTUserdetails dat={"dhgf"} />
    }
    else if (report === "pod_register") {
      navigate("/RPTpodRegister");
    } else if (report === "freight_register") {
      navigate("/RPTfreight");
    } else if (report === "vehicle_hire_history") {
      navigate("/RPTVehicleHireHistory");
    } else if (report === "vehicle_master_information") {
      navigate("/RPTVehicleMasterInformation");
    } 

    else if (report === "vehicle_schedule_histotry") {
      navigate("/RPTVehicleschedulehistotry");
    } else if (report === "demand_detail") {
      navigate("/RPTDemandDetail");
    } else if (report === "notification_register") {
      navigate("/RPTNotificationReport");
    } else if (report === "Promotion_report") {
      navigate("/RPTPromotionReport");
    } 

  };
  useEffect(() => {
    const params = {};
    category && (params.category = category);
    
    setSearchParams(params);
}, [category, setSearchParams])
console.log(category)
  return (
    <div>
      <div className="sm:flex sm:flex-col sm:justify-center">
        {/* second */}
        <div className="">
          <div className="flex flex-col gap-0  sm:w-[30%] m-auto   mb-5">
            <h1 className=" text-center w-full m-auto mt-3 font-bold text-4xl bg-[#151B54] text-white p-4 rounded-t-md">
              Report
            </h1>
            <h1 className=" my-1 text-center bg-[#151B54] text-white w-full   sm:p-4  m-auto font-bold mb-0">
              Select Report
            </h1>
            <Select
              defaultValue="Report "
              className="sm:w-[29rem] sm:p-2"
              onChange={handleChange}
              options={[
                { value: "Userdetails", label: "RPTUser details" },
                {
                  value: "Overall_wallet_Summary",
                  label: "Overall wallet Summary",
                },
                {
                  value: "Vehicle_Scheduled_Summary",
                  label: "Vehicle Scheduled Summary",
                },
                {
                  value: "Vehicle_Booking_Summary",
                  label: "Vehicle Booking Summary ",
                },
                {
                  value: "Overall_Current_Balances",
                  label: "Overall Current Balances",
                },
                { value: "pod_register", label: "POD Register" },
                { value: "freight_register", label: "Freight Register" },
                { value: "vehicle_hire_history", label: "Vehicle Hire History" },
                { value: "vehicle_master_information", label: "Vehicle Master Information" },
                
                { value: "vehicle_schedule_histotry", label: "Vehicle Schedule Histotry" },
                { value: "demand_detail", label: "Demand Detail" },
                { value: "notification_register", label: "Notification Register" },
                { value: "Promotion_report", label: "Promotion report" },
              ]}
            />

            <label className="w-full sm:w-full sm:p-2 text-center m-auto block bg-[#151B54] text-white font-bold mb-0">
              Select Report filter
            </label>
           
            {report == "Vehicle_Scheduled_Summary" && (
              <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-4 ">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Scheduled date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Scheduled date"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      User Name
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={" User Name"}
                    />
                  </div>
                </div>

                <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Register Number
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"  Register Number"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Vehicle Number
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Vehicle Number"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  generate Report
                </button>
              </form>
            )}
            {report == "Userdetails" && (
              <form
                onSubmit={onSubmitform}
                className="flex  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full px-2 sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      User Name
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"  User Name"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Registered Number
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Registered number"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin   text-white  disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  Generate Report
                </button>
              </form>
            )}
            {report == "Vehicle_Booking_Summary" && (
              <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Booking date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Booking date"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      User Name
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"User Name"}
                    />
                  </div>
                </div>

                <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Register Number
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"   Register Number"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Vehicle Number
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={" Vehicle Number"}
                    />
                  </div>
                </div>
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      From
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      To
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"To"}
                    />
                  </div>
                </div>
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Owner Name
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={" Owner Name"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  generate Report
                </button>
              </form>
            )}
            {report == "Overall_wallet_Summary" && (
              <form
                onSubmit={onSubmitform}
                className="flex  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full px-2 sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      User Name
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"  User Name"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Registered Number
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Registered number"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin   text-white  disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  Generate Report
                </button>
              </form>
            )}
            {report == "Overall_Current_Balances" && (
              <form
                onSubmit={onSubmitform}
                className="flex  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full px-2 sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      User Name
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"  User Name"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Registered Number
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Registered number"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin   text-white  disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  Generate Report
                </button>
              </form>
            )}

            {report == "pod_register" && (
              <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Booking no
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Booking no"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Booking Date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"  Booking Date"}
                    />
                  </div>
                </div>

                <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Vehicle No
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Vehicle No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      POD Date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"  POD Date"}
                    />
                  </div>
                </div>
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      From
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      To
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"To"}
                    />
                  </div>
                </div>
               
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  generate Report
                </button>
              </form>
            )}
             {report == "freight_register" && (
              <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Booking No
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Booking No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                    Vehicle No
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Vehicle No"}
                    />
                  </div>
                </div>

              
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      From
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      To
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"To"}
                    />
                  </div>
                </div>
               
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  generate Report
                </button>
              </form>
            )}
             {report == "vehicle_hire_history" && (
              <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Vehicle No
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Vehicle No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Hire Date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      type="date"
                      placeholder={"Hire Date"}
                    />
                  </div>
                </div>

                <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      POD No
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                    
                      placeholder={"POD No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Company Name
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                    
                      placeholder={"Company Name"}
                    />
                  </div>
                </div>
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      From
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                  
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      To
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                    
                      placeholder={"To"}
                    />
                  </div>
                </div>
               
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  generate Report
                </button>
              </form>
            )}
             {report == "vehicle_master_information" && (
              <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Vehicle No
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"  Vehicle No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                    Owner Name
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Owner Name"}
                    />
                  </div>
                </div>

                
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  generate Report
                </button>
              </form>
            )}

             {report == "vehicle_schedule_histotry" && (
              <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Vehicle No
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Vehicle No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Sch Date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      type="date"
                      placeholder={"sch Date"}
                    />
                  </div>
                </div>

                
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      From
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                  
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      To
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                    
                      placeholder={"To"}
                    />
                  </div>
                  
                </div>
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Driver Name
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={" Driver Name"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  generate Report
                </button>
              </form>
            )}
            {report == "demand_detail" && (
              <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Req Date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Req Date"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Vehicle Type
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      type="date"
                      placeholder={"Vehicle Type"}
                    />
                  </div>
                </div>

                
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      From
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                  
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      To
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                    
                      placeholder={"To"}
                    />
                  </div>
                  
                </div>
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                    Demand By
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Demand By"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  generate Report
                </button>
              </form>
            )}
            {report == "notification_register" && (
              <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      No Date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      type="date"
                      placeholder={"  No Date"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      End Date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      type="date"
                      placeholder={"End  Date"}
                    />
                  </div>
                </div>
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                    No Type
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"No type"}
                    />
                  </div>
                </div>
                
               
               
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  generate Report
                </button>
              </form>
            )} 
             {report == "Promotion_report" && (
              <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      Promotion Date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      type="date"
                      placeholder={"  Promotion Date"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                      End Date
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      type="date"
                      placeholder={"End  Date"}
                    />
                  </div>
                </div>
                <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-2">
                    Promotion Type
                    </label>
                    {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                    <input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      name={"name"}
                      // {...rest}
                      placeholder={"Promotion type "}
                    />
                  </div>
                </div>
                
               
               
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/3 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  generate Report
                </button>
              </form>
            )} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdownd;
