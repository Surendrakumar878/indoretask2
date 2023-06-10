import React, { useEffect } from "react";
import { Input, Select, Space } from "antd";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

import { useNavigate, useNavigation } from "react-router-dom";
// import {  useNavigation } from "react-router-dom";
import { Report } from "bv-react-data-report";
import RPTVehiclescheduledsummary from "../page/RPTVehiclescheduledsummary";
import RPTUserdetails from "../page/RPTUserdetails";
import RPTOverallcurrentbalances from "./../page/RPTOverallcurrentbalances";
import RPTVehiclebookingsummary from "./../page/RPTVehiclebookingsummary";
// import RPTVehiclescheduledsummary from './../page/RPTVehiclescheduledsummary';
import RPTOverallwallet from "./../page/RPTOverallwallet";
import RPTPodRegister from "./../page/RPTPodRegister";
import RPTFreight from "./../page/RPTFreight";
import RPTVehicleHireHistory from "./../page/reports/RPTVehicleHireHistory";
import RPTVehicleMasterInformation from "./../page/reports/RPTVehicleMasterInformation";
import RPTVehicleschedulehistotry from "./../page/reports/RPTVehicleschedulehistotry";
import RPTDemandDetail from "./../page/reports/RPTDemandDetail";
import RPTNotificationReport from "./../page/reports/RPTNotificationReport";
import RPTPromotionReport from "./../page/reports/RPTPromotionReport";
// import filters from "pagedjs/src/modules/filters";

const Dropdownd = () => {
  const [view, setView] = useState("");
  const navigate = useNavigate();
  const [report, setReport] = useState("");

  // console.log(data1);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setReport(value);
    setView("");
  };

  // filters
  const [Userdetails, setUserdetails] = useState({
    user_name: "",
    registered_number: "",
  });
  const [Overall_wallet_Summary, setOverall_wallet_Summary] = useState({
    user_name: "",
    registered_number: "",
  });
  const [Vehicle_Scheduled_Summary, setVehicle_Scheduled_Summary] = useState({
    user_name: "",
    registered_number: "",
    scheduled_date: "",
    vehicle_no: "",
  });
  const [Vehicle_Booking_Summary, setVehicle_Booking_Summary] = useState({
    user_name: "",
    registered_number: "",
    booking_date: "",
    vehicle_no: "",
    from: "",
    to: "",
    owner_name: "",
  });

  const [Overall_Current_Balances, setOverall_Current_Balances] = useState({
    user_name: "",
    registered_number: "",
  });

  const [pod_register, setpod_register] = useState({
    pod_date: "",
    booking_no: "",
    booking_date: "",
    vehicle_no: "",
    from: "",
    to: "",
  });
  const [freight_register, setfreight_register] = useState({
    booking_no: "",
    vehicle_no: "",
    from: "",
    to: "",
  });
  console.log(pod_register);

  const [vehicle_hire_history, setvehicle_hire_history] = useState({
    hire_date: "",
    pod_no: "",
    company_name: "",
    vehicle_no: "",
    from: "",
    to: "",
  });
  const [vehicle_master_information, setRPTVehicleMasterInformation] = useState(
    {
      vehicle_no: "",
      owner_name: "",
    }
  );
  const [vehicle_schedule_histotry, setvehicle_schedule_histotry] = useState({
    sch_date: "",

    driver_name: "",
    vehicle_no: "",
    from: "",
    to: "",
  });
  const [demand_detail, setdemand_detail] = useState({
    req_date: "",

    demand_by: "",
    vehicle_type: "",
    from: "",
    to: "",
  });
  const [notification_register, setnotification_register] = useState({
    no_date: "",

    end_date: "",
    no_type: "",
  });
  const [Promotion_report, setPromotion_report] = useState({
    promotion_date: "",

    end_date: "",
    promotion_type: "",
  });

  const onSubmitform = (e) => {
    e.preventDefault();
    console.log("object", report);
    if (report === "Overall_Current_Balances") {
      setView("RPToverallcurrentbalances");
      setDate(
        userData.filter(
          (res) =>
            res.user_name.includes(Overall_Current_Balances.user_name) &&
            res.registered_number.includes(
              Overall_Current_Balances.registered_number
            )
        )
      );
    } else if (report === "Vehicle_Booking_Summary") {
      setView("RPTVehiclebookingsummary");
      setDate(
        userData.filter(
          (res) =>
            res.user_name.includes(Vehicle_Booking_Summary.user_name) &&
            res.registered_number.includes(
              Vehicle_Booking_Summary.registered_number
            ) &&
            res.booking_date.includes(Vehicle_Booking_Summary.booking_date) &&
            res.vehicle_no.includes(Vehicle_Booking_Summary.vehicle_no) &&
            res.from.includes(Vehicle_Booking_Summary.from) &&
            res.to.includes(Vehicle_Booking_Summary.to) &&
            res.owner_name.includes(Vehicle_Booking_Summary.owner_name)
        )
      );
    } else if (report === "Vehicle_Scheduled_Summary") {
      setView("RPTvehiclescheduledsummary");
      setDate(
        userData.filter(
          (res) =>
            res.user_name.includes(Vehicle_Scheduled_Summary.user_name) &&
            res.registered_number.includes(
              Vehicle_Scheduled_Summary.registered_number
            ) &&
            res.scheduled_date.includes(
              Vehicle_Scheduled_Summary.scheduled_date
            ) &&
            res.vehicle_no.includes(Vehicle_Scheduled_Summary.vehicle_no)
        )
      );
    } else if (report === "Overall_wallet_Summary") {
      setView("RPTOverallwallet");
      setDate(
        userData.filter(
          (res) =>
            res.user_name.includes(Overall_wallet_Summary.user_name) &&
            res.registered_number.includes(
              Overall_wallet_Summary.registered_number
            )
        )
      );
    } else if (report === "Userdetails") {
      setView("userdetail");
      setDate(
        userData.filter(
          (res) =>
            res.user_name.includes(Userdetails.user_name) &&
            res.registered_number.includes(Userdetails.registered_number)
        )
      );
    } else if (report === "pod_register") {
      setView("RPTpodRegister");
      setDate(
        userData.filter(
          (res) =>
            res.vehicle_no.includes(pod_register.vehicle_no) &&
            res.to.includes(pod_register.to) &&
            res.pod_date.includes(pod_register.pod_date) &&
            res.booking_no.includes(pod_register.booking_no) &&
            res.booking_date.includes(pod_register.booking_date) &&
            res.from.includes(pod_register.from)
        )
      );
    } else if (report === "freight_register") {
      setView("RPTfreight");
      setDate(
        userData.filter(
          (res) =>
            res.vehicle_no.includes(freight_register.vehicle_no) &&
            res.booking_no.includes(freight_register.booking_no) &&
            res.from.includes(freight_register.from) &&
            res.to.includes(freight_register.to)
        )
      );
    } else if (report === "vehicle_hire_history") {
      setView("RPTVehicleHireHistory");
      setDate(
        userData.filter(
          (res) =>
            res.hire_date.includes(vehicle_hire_history.hire_date) &&
            res.pod_no.includes(vehicle_hire_history.pod_no) &&
            res.company_name.includes(vehicle_hire_history.company_name) &&
            res.vehicle_no.includes(vehicle_hire_history.vehicle_no) &&
            res.from.includes(vehicle_hire_history.from) &&
            res.to.includes(vehicle_hire_history.to)
        )
      );
    } else if (report === "vehicle_master_information") {
      setView("RPTVehicleMasterInformation");
      setDate(
        userData.filter(
          (res) =>
            res.vehicle_no.includes(vehicle_master_information.vehicle_no) &&
            res.owner_name.includes(vehicle_master_information.owner_name)
        )
      );
    } else if (report === "vehicle_schedule_histotry") {
      setView("RPTVehicleschedulehistotry");
      setDate(
        userData.filter(
          (res) =>
            res.vehicle_no.includes(vehicle_schedule_histotry.vehicle_no) &&
            res.sch_date.includes(vehicle_schedule_histotry.sch_date) &&
            res.driver_name.includes(vehicle_schedule_histotry.driver_name) &&
            res.from.includes(vehicle_schedule_histotry.from) &&
            res.to.includes(vehicle_schedule_histotry.to)
        )
      );
    } else if (report === "demand_detail") {
      setView("RPTDemandDetail");
      setDate(
        userData.filter(
          (res) =>
            res.req_date.includes(demand_detail.req_date) &&
            res.demand_by.includes(demand_detail.demand_by) &&
            res.vehicle_type.includes(demand_detail.vehicle_type) &&
            res.to.includes(demand_detail.to) &&
            res.from.includes(demand_detail.from)
        )
      );
    } else if (report === "notification_register") {
      setView("RPTNotificationReport");
      setDate(
        userData.filter(
          (res) =>
            res.no_type.includes(notification_register.no_type) &&
            res.no_date.includes(notification_register.no_date) &&
            res.end_date.includes(notification_register.end_date)
        )
      );
    } else if (report === "Promotion_report") {
      setView("RPTPromotionReport");
      setDate(
        userData.filter(
          (res) =>
            res.promotion_type.includes(Promotion_report.promotion_type) &&
            res.end_date.includes(Promotion_report.registered_number) &&
            res.promotion_date.includes(Promotion_report.registered_number)
        )
      );
    }
  };

  const [data, setDate] = useState([]);

  const [userData, setUserdata] = useState([]);

  useEffect(() => {
    const registerUserdata = async () => {
      axios
        .get("http://localhost:3004/Userdetails")
        .then((res) => {
          setUserdata(res.data);
          setDate(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    };
    registerUserdata();
  }, []);

  return (
    <div>
      <div className="sm:flex sm:flex-col sm:justify-center">
        {/* second */}
        <div className="">
          <div className="flex flex-col gap-0  sm:w-[98%] m-auto   mb-5">
            <h1 className=" text-center w-full m-auto  font-bold text-4xl bg-[#151B54] text-white p-4 ">
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
                { value: "Userdetails", label: "User details" },
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
                {
                  value: "vehicle_hire_history",
                  label: "Vehicle Hire History",
                },
                {
                  value: "vehicle_master_information",
                  label: "Vehicle Master Information",
                },

                {
                  value: "vehicle_schedule_histotry",
                  label: "Vehicle Schedule Histotry",
                },
                { value: "demand_detail", label: "Demand Detail" },
                {
                  value: "notification_register",
                  label: "Notification Register",
                },
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
                <div className="flex justify-around w-full gap-2 ">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Scheduled date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      type="date"
                      value={Vehicle_Scheduled_Summary.scheduled_date}
                      onChange={(e) =>
                        setVehicle_Scheduled_Summary({
                          ...Vehicle_Scheduled_Summary,
                          scheduled_date: e.target.value,
                        })
                      }
                      placeholder={"Scheduled date"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      User Name
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Vehicle_Scheduled_Summary.user_name}
                      onChange={(e) =>
                        setVehicle_Scheduled_Summary({
                          ...Userdetails,
                          user_name: e.target.value,
                        })
                      }
                      placeholder={" User Name"}
                    />
                  </div>
                </div>

                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Register Number
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Vehicle_Scheduled_Summary.registered_number}
                      onChange={(e) =>
                        setVehicle_Scheduled_Summary({
                          ...Vehicle_Scheduled_Summary,
                          registered_number: e.target.value,
                        })
                      }
                      placeholder={"  Register Number"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Vehicle Number
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Vehicle_Scheduled_Summary.vehicle_no}
                      onChange={(e) =>
                        setVehicle_Scheduled_Summary({
                          ...Vehicle_Scheduled_Summary,
                          vehicle_no: e.target.value,
                        })
                      }
                      placeholder={"Vehicle Number"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/2 sm:w-1/6 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid && formik.isSubmitting}
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
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      User Name
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Userdetails.user_name}
                      onChange={(e) =>
                        setUserdetails({
                          ...Userdetails,
                          user_name: e.target.value,
                        })
                      }
                      placeholder={"  User Name"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Registered Number
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Userdetails.registered_number}
                      onChange={(e) =>
                        setUserdetails({
                          ...Userdetails,
                          registered_number: e.target.value,
                        })
                      }
                      placeholder={"Registered number"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 sm:w-1/3 w-[55%] p-2 sm:px-6 rounded-md font-thin   text-white  disabled:bg-red-500 disabled:cursor-not-allowed "
                  // disabled={!formik.isValid && formik.isSubmitting}
                >
                  Generate Report
                </button>
              </form>
            )}
            {report == "Vehicle_Booking_Summary" && (
              <form
                // onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Booking date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      type="date"
                      value={Vehicle_Booking_Summary.booking_date}
                      onChange={(e) =>
                        setVehicle_Booking_Summary({
                          ...Vehicle_Booking_Summary,
                          booking_date: e.target.value,
                        })
                      }
                      placeholder={"Booking date"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      User Name
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Vehicle_Booking_Summary.user_name}
                      onChange={(e) =>
                        setVehicle_Booking_Summary({
                          ...Vehicle_Booking_Summary,
                          user_name: e.target.value,
                        })
                      }
                      type="text"
                      placeholder={"User Name"}
                    />
                  </div>
                </div>

                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Register Number
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Vehicle_Booking_Summary.registered_number}
                      onChange={(e) =>
                        setVehicle_Booking_Summary({
                          ...Vehicle_Booking_Summary,
                          registered_number: e.target.value,
                        })
                      }
                      placeholder={"   Register Number"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Vehicle Number
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Vehicle_Booking_Summary.vehicle_no}
                      onChange={(e) =>
                        setVehicle_Booking_Summary({
                          ...Vehicle_Booking_Summary,
                          vehicle_no: e.target.value,
                        })
                      }
                      placeholder={" Vehicle Number"}
                    />
                  </div>
                </div>
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      From
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Vehicle_Booking_Summary.from}
                      onChange={(e) =>
                        setVehicle_Booking_Summary({
                          ...Vehicle_Booking_Summary,
                          from: e.target.value,
                        })
                      }
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      To
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Vehicle_Booking_Summary.to}
                      onChange={(e) =>
                        setVehicle_Booking_Summary({
                          ...Vehicle_Booking_Summary,
                          to: e.target.value,
                        })
                      }
                      placeholder={"To"}
                    />
                  </div>
                </div>
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Owner Name
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Vehicle_Booking_Summary.owner_name}
                      onChange={(e) =>
                        setVehicle_Booking_Summary({
                          ...Vehicle_Booking_Summary,
                          owner_name: e.target.value,
                        })
                      }
                      placeholder={" Owner Name"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={onSubmitform}
                  className="border bg-orange-500 w-1/2 sm:w-1/6 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
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
                <div className="flex justify-around w-full px-2 gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      User Name
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Overall_wallet_Summary.user_name}
                      onChange={(e) =>
                        setOverall_wallet_Summary({
                          ...Overall_wallet_Summary,
                          user_name: e.target.value,
                        })
                      }
                      type="text"
                      placeholder={"  User Name"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Registered Number
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Overall_wallet_Summary.registered_number}
                      onChange={(e) =>
                        setOverall_wallet_Summary({
                          ...Overall_wallet_Summary,
                          registered_number: e.target.value,
                        })
                      }
                      placeholder={"Registered number"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/2 sm:w-1/6 p-2 sm:px-6 rounded-md font-thin   text-white  disabled:bg-red-500 disabled:cursor-not-allowed "
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
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      User Name
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Overall_Current_Balances.user_name}
                      onChange={(e) =>
                        setOverall_Current_Balances({
                          ...Overall_Current_Balances,
                          user_name: e.target.value,
                        })
                      }
                      placeholder={"  User Name"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Registered Number
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Overall_Current_Balances.registered_number}
                      onChange={(e) =>
                        setOverall_Current_Balances({
                          ...Overall_Current_Balances,
                          registered_number: e.target.value,
                        })
                      }
                      placeholder={"Registered number"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/2 sm:w-1/6 p-2 sm:px-6 rounded-md font-thin   text-white  disabled:bg-red-500 disabled:cursor-not-allowed "
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
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Booking no
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={pod_register.booking_no}
                      onChange={(e) =>
                        setpod_register({
                          ...pod_register,
                          booking_no: e.target.value,
                        })
                      }
                      placeholder={"Booking no"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Booking Date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      type="date"
                      value={pod_register.booking_date}
                      onChange={(e) =>
                        setpod_register({
                          ...pod_register,
                          booking_date: e.target.value,
                        })
                      }
                      placeholder={"  Booking Date"}
                    />
                  </div>
                </div>

                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Vehicle No
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={pod_register.vehicle_no}
                      onChange={(e) =>
                        setpod_register({
                          ...pod_register,
                          vehicle_no: e.target.value,
                        })
                      }
                      placeholder={"Vehicle No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      POD Date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={pod_register.pod_date}
                      onChange={(e) =>
                        setpod_register({
                          ...pod_register,
                          pod_date: e.target.value,
                        })
                      }
                      type="date"
                      placeholder={"  POD Date"}
                    />
                  </div>
                </div>
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      From
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={pod_register.from}
                      onChange={(e) =>
                        setpod_register({
                          ...pod_register,
                          from: e.target.value,
                        })
                      }
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      To
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={pod_register.to}
                      onChange={(e) =>
                        setpod_register({ ...pod_register, to: e.target.value })
                      }
                      placeholder={"To"}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="border bg-orange-500 w-1/2 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
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
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Booking No
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={freight_register.booking_no}
                      onChange={(e) =>
                        setfreight_register({
                          ...freight_register,
                          booking_no: e.target.value,
                        })
                      }
                      placeholder={"Booking No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Vehicle No
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={freight_register.vehicle_no}
                      onChange={(e) =>
                        setfreight_register({
                          ...freight_register,
                          vehicle_no: e.target.value,
                        })
                      }
                      placeholder={"Vehicle No"}
                    />
                  </div>
                </div>

                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      From
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={freight_register.from}
                      onChange={(e) =>
                        setfreight_register({
                          ...freight_register,
                          from: e.target.value,
                        })
                      }
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      To
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={freight_register.to}
                      onChange={(e) =>
                        setfreight_register({
                          ...freight_register,
                          to: e.target.value,
                        })
                      }
                      placeholder={"To"}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="border bg-orange-500 w-1/2 sm:w-1/6 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
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
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Vehicle No
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_hire_history.vehicle_no}
                      onChange={(e) =>
                        setvehicle_hire_history({
                          ...vehicle_hire_history,
                          vehicle_no: e.target.value,
                        })
                      }
                      placeholder={"Vehicle No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Hire Date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_hire_history.hire_date}
                      onChange={(e) =>
                        setvehicle_hire_history({
                          ...vehicle_hire_history,
                          hire_date: e.target.value,
                        })
                      }
                      type="date"
                      placeholder={"Hire Date"}
                    />
                  </div>
                </div>

                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      POD No
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_hire_history.pod_no}
                      onChange={(e) =>
                        setvehicle_hire_history({
                          ...vehicle_hire_history,
                          pod_no: e.target.value,
                        })
                      }
                      placeholder={"POD No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Company Name
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_hire_history.company_name}
                      onChange={(e) =>
                        setvehicle_hire_history({
                          ...vehicle_hire_history,
                          company_name: e.target.value,
                        })
                      }
                      placeholder={"Company Name"}
                    />
                  </div>
                </div>
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      From
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_hire_history.from}
                      onChange={(e) =>
                        setvehicle_hire_history({
                          ...vehicle_hire_history,
                          from: e.target.value,
                        })
                      }
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      To
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_hire_history.to}
                      onChange={(e) =>
                        setvehicle_hire_history({
                          ...vehicle_hire_history,
                          to: e.target.value,
                        })
                      }
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
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Vehicle No
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_master_information.vehicle_no}
                      onChange={(e) =>
                        setRPTVehicleMasterInformation({
                          ...vehicle_master_information,
                          vehicle_no: e.target.value,
                        })
                      }
                      placeholder={"  Vehicle No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Owner Name
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_master_information.owner_name}
                      onChange={(e) =>
                        setRPTVehicleMasterInformation({
                          ...vehicle_master_information,
                          owner_name: e.target.value,
                        })
                      }
                      placeholder={"Owner Name"}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="border bg-orange-500 w-1/2 sm:w-1/6 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                 
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
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Vehicle No
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_schedule_histotry.vehicle_no}
                      onChange={(e) =>
                        setvehicle_schedule_histotry({
                          ...vehicle_schedule_histotry,
                          vehicle_no: e.target.value,
                        })
                      }
                      placeholder={"Vehicle No"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Sch Date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_schedule_histotry.sch_date}
                      onChange={(e) =>
                        setvehicle_schedule_histotry({
                          ...vehicle_schedule_histotry,
                          sch_date: e.target.value,
                        })
                      }
                      type="date"
                      placeholder={"sch Date"}
                    />
                  </div>
                </div>

                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      From
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_schedule_histotry.from}
                      onChange={(e) =>
                        setvehicle_schedule_histotry({
                          ...vehicle_schedule_histotry,
                          from: e.target.value,
                        })
                      }
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      To
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_schedule_histotry.to}
                      onChange={(e) =>
                        setvehicle_schedule_histotry({
                          ...vehicle_schedule_histotry,
                          to: e.target.value,
                        })
                      }
                      placeholder={"To"}
                    />
                  </div>
                </div>
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Driver Name
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={vehicle_schedule_histotry.driver_name}
                      onChange={(e) =>
                        setvehicle_schedule_histotry({
                          ...vehicle_schedule_histotry,
                          driver_name: e.target.value,
                        })
                      }
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
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Req Date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={demand_detail.req_date}
                      onChange={(e) =>
                        setdemand_detail({
                          ...demand_detail,
                          req_date: e.target.value,
                        })
                      }
                      type="date"
                      placeholder={"Req Date"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Vehicle Type
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={demand_detail.vehicle_type}
                      onChange={(e) =>
                        setdemand_detail({
                          ...demand_detail,
                          vehicle_type: e.target.value,
                        })
                      }
                      placeholder={"Vehicle Type"}
                    />
                  </div>
                </div>

                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      From
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={demand_detail.from}
                      onChange={(e) =>
                        setdemand_detail({
                          ...demand_detail,
                          from: e.target.value,
                        })
                      }
                      placeholder={"From"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      To
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={demand_detail.to}
                      onChange={(e) =>
                        setdemand_detail({
                          ...demand_detail,
                          to: e.target.value,
                        })
                      }
                      placeholder={"To"}
                    />
                  </div>
                </div>
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Demand By
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={demand_detail.demand_by}
                      onChange={(e) =>
                        setdemand_detail({
                          ...demand_detail,
                          demand_by: e.target.value,
                        })
                      }
                      placeholder={"Demand By"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border bg-orange-500 w-1/2 sm:w-1/6 p-2 sm:px-6 rounded-md font-thin  duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
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
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      No Date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={notification_register.no_date}
                      onChange={(e) =>
                        setnotification_register({
                          ...notification_register,
                          no_date: e.target.value,
                        })
                      }
                      type="date"
                      placeholder={"  No Date"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      End Date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={notification_register.end_date}
                      onChange={(e) =>
                        setnotification_register({
                          ...notification_register,
                          end_date: e.target.value,
                        })
                      }
                      type="date"
                      placeholder={"End  Date"}
                    />
                  </div>
                </div>
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      No Type
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={notification_register.no_type}
                      onChange={(e) =>
                        setnotification_register({
                          ...notification_register,
                          no_type: e.target.value,
                        })
                      }
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
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Promotion Date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Promotion_report.req_date}
                      onChange={(e) =>
                        setPromotion_report({
                          ...Promotion_report,
                          req_date: e.target.value,
                        })
                      }
                      type="date"
                      placeholder={"  Promotion Date"}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      End Date
                    </label>

                    <Input
                      max="2099-12-25"
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Promotion_report.end_date}
                      onChange={(e) =>
                        setPromotion_report({
                          ...Promotion_report,
                          end_date: e.target.value,
                        })
                      }
                      type="date"
                      placeholder={"End  Date"}
                    />
                  </div>
                </div>
                <div className="flex justify-around w-full gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="block text-gray-700 font-bold mb-1">
                      Promotion Type
                    </label>

                    <Input
                      className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                      value={Promotion_report.promotion_type}
                      onChange={(e) =>
                        setPromotion_report({
                          ...Promotion_report,
                          promotion_type: e.target.value,
                        })
                      }
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

          {view == "userdetail" && (
            <div>
              <RPTUserdetails data1={[...data]} />
            </div>
          )}
          {view == "RPToverallcurrentbalances" && (
            <div>
              <RPTOverallcurrentbalances data1={[...data]} />
            </div>
          )}
          {view == "RPTVehiclebookingsummary" && (
            <div>
              <RPTVehiclebookingsummary data1={[...data]} />
            </div>
          )}
          {view == "RPTvehiclescheduledsummary" && (
            <div>
              <RPTVehiclescheduledsummary data1={[...data]} />
            </div>
          )}
          {view == "RPTOverallwallet" && (
            <div>
              <RPTOverallwallet data1={[...data]} />
            </div>
          )}
          {view == "RPTpodRegister" && (
            <div>
              <RPTPodRegister data1={[...data]} />
            </div>
          )}
          {view == "RPTfreight" && (
            <div>
              <RPTFreight data1={[...data]} />
            </div>
          )}
          {view == "RPTVehicleHireHistory" && (
            <div>
              <RPTVehicleHireHistory data1={[...data]} />
            </div>
          )}
          {view == "RPTVehicleMasterInformation" && (
            <div>
              <RPTVehicleMasterInformation data1={[...data]} />
            </div>
          )}
          {view == "RPTVehicleschedulehistotry" && (
            <div>
              <RPTVehicleschedulehistotry data1={[...data]} />
            </div>
          )}
          {view == "RPTDemandDetail" && (
            <div>
              <RPTDemandDetail data1={[...data]} />
            </div>
          )}
          {view == "RPTNotificationReport" && (
            <div>
              <RPTNotificationReport data1={[...data]} />
            </div>
          )}
          {view == "RPTPromotionReport" && (
            <div>
              <RPTPromotionReport data1={[...data]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdownd;
