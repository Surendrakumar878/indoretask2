import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import "jspdf-autotable";
import r from "./rpt.module.css";
import { Input } from "antd";
const booking = [
 
  {
    id: 3,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 4,
    vehicle_id: 6536456,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 5,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 6,
    vehicle_id: 534535,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-13",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 1,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 2,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 3,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 4,
    vehicle_id: 6536456,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 5,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 6,
    vehicle_id: 534535,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-13",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 1,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 2,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 3,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 4,
    vehicle_id: 6536456,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 5,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 6,
    vehicle_id: 534535,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-13",
    vehicle_no: "12302",
    from: "bhopal1",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 1,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:54",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 2,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:53",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 3,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:51",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 4,
    vehicle_id: 6536456,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:52",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 5,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:50",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 6,
    vehicle_id: 534535,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-13",
    vehicle_no: "12302",
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
];
const RPTVehiclescheduledsummary = ({ data2 }) => {
  const [data1, setData] = useState({
    name: "ram transport",
    email: "email@gmail.com",
    mobilenumber: 7222082282,
    address: "106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP",
    reportname: "Vehicle Scheduled Summary",
    date: "4/20/2023",
    date_From: "4/20/2023",
    to: "4/20/2023",
  });
  const conponentPDF = useRef();

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
  });

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(10);
    doc.text(
      "name:ram transport \nemail:email@gmail.com \nmobilenumber:7222082282 \naddress:106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP \nreportname:Vehicle Scheduled Summary \ndate:4/20/2023 \ndate_From : 4/20/2023 to : 4/20/2023 ",
      10,
      10
    );

    doc.autoTable({
      html: "#my-table",

      theme: "grid",
      headStyles: { fillColor: "#151B54" },
      margin: { top: 50 },
    });
    // Save the PDF document
    doc.save("data-report.pdf");
  };
  const [data, setDate] = useState([]);
  const [Vehicle_Scheduled_Summary, setVehicle_Scheduled_Summary] = useState({
    user_name: "",
    registered_number: "",
    scheduled_date: "",
    vehicle_no: "",
  });
  const onSubmitform = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    setDate(
      booking.filter(
        (res) =>
          res.from.toLowerCase().includes(Vehicle_Scheduled_Summary.user_name.toLowerCase()) &&
          res.booking_no.includes(Vehicle_Scheduled_Summary.registered_number) &&
          res.booking_date.includes(Vehicle_Scheduled_Summary.scheduled_date) &&
          res.vehicle_no.includes(Vehicle_Scheduled_Summary.vehicle_no)
      )
    );
  }, [
    Vehicle_Scheduled_Summary.user_name,
    Vehicle_Scheduled_Summary.vehicle_no,
    Vehicle_Scheduled_Summary.registered_number,
    Vehicle_Scheduled_Summary.scheduled_date
  ]);

  return (
    <div>
      <React.Fragment>
        <div className=" sm:w-[80%]  sm:m-auto ">
          <div className="">
            <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">
              {" "}
              Vehicle Scheduled Summary{" "}
            </div>
            <div className="">
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
                          ...Vehicle_Scheduled_Summary,
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
              </form>
              <div ref={conponentPDF} className="  sm:w-full sm:m-auto w-full">
                <div className="  pb-2">
                  <div className="  border-1  border-black  w-[100%] ">
                    <h1 className=" pl-1 font-bold  text-[10px]">
                      {" "}
                      {data1.name}
                    </h1>
                    <h1 className=" pl-1 font-bold  text-[10px]">
                      {" "}
                      {data1.email}{" "}
                    </h1>
                    <p className="pl-1 text-[10px] ">{data1.mobilenumber} </p>
                    <p className="pl-1 text-[10px]">{data1.address}</p>
                    <p className="pl-1 text-[10px]">{data1.reportname}</p>

                    <h1 className="pl-1 font-bold  text-[10px] border border-t-1  border-slate-700 border-b-0 border-r-0 border-l-0 ">
                      Date From : {data1.date_From} To :{data1.to}
                    </h1>
                  </div>
                  <div className="overflow-x-auto">
                    <table id="my-table" className=" w-full relative ">
                      <thead className="bg-[#151B54] w-full text-white">
                        <tr>
                          <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base ">
                            Sr. No
                          </th>
                          <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            {" "}
                            Schedule Date/Time
                          </th>
                          <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            User Id
                          </th>
                          <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            User Name
                          </th>
                          <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            Registered Number
                          </th>
                          <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            Vehicle No Scheduled{" "}
                          </th>
                          <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            Current Status{" "}
                          </th>
                          <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            Freight
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((uData, index) => (
                          <tr key={index}>
                            <td className="sm:px-2 px-2 sm:text-base text-[0.41rem]">
                              {index + 1}
                            </td>
                            <td className="sm:px-3 px-2 sm:text-base text-[0.41rem]">
                              {uData.booking_date}
                            </td>
                            <td className="sm:px-3 px-2 sm:text-base text-[0.41rem]">
                              {uData.vehicle_id}
                            </td>
                            <td className="sm:px-3 px-2 sm:text-base text-[0.41rem]">
                              {uData.from}
                            </td>
                            <td className="sm:px-3 px-2 sm:text-base text-[0.41rem]">
                              {uData.booking_no}
                            </td>
                            <td className="sm:px-3 px-2 sm:text-base text-[0.41rem]">
                              {uData.booking_no}
                            </td>
                            <td className="sm:px-3 px-2 sm:text-base text-[0.41rem]">
                              {uData.booking_date}
                            </td>
                            <td className="sm:px-3 px-2 sm:text-base text-[0.41rem]">
                              {uData.booking_date}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colspan="7" scope="row">
                            Totals
                          </th>
                          <td>21,000</td>
                        </tr>
                      </tfoot>
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          opacity: "0.2",
                          fontSize: "48px",
                          color: "red",
                          transform: "rotate(0deg)",
                          pointerEvents: "none",
                        }}
                      >
                        <img
                          className="w-60"
                          src="transduniyalogo.png"
                          alt=""
                        />
                      </div>
                    </table>
                  </div>
                </div>
                <h1 className="text-end text-xs">
                  Powered by : www.transduniya.com-97553-22022{" "}
                </h1>
              </div>
              <div className="m-auto w-full flex justify-center gap-2 text-center">
                <button
                  className=" bg-[#151B54] py-1 px-2 w-24 text-sm mt-10 rounded-md text-white "
                  onClick={exportPDF}
                >
                  Download
                </button>{" "}
                <button
                  className=" bg-[#151B54] py-1 px-2 w-16 text-sm mt-10 rounded-md text-white "
                  onClick={generatePDF}
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default RPTVehiclescheduledsummary;
