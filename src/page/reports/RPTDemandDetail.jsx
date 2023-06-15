import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

import { useReactToPrint } from "react-to-print";

import jsPDF from "jspdf";
import "jspdf-autotable";
import r from "../rpt.module.css";
import { Input } from "antd";
const userData = [
  {
    id: 1,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: 4,
    from: "bhopal1",
    to: "indore1",
    vehicle_type: "abcde",
  },
  {
    id: 2,
    booking_id: 34234,
    booking_no: "12303",
    booking_date: "2023-05-25T00:58",
    vehicle_no: 3,
    from: "bhopal3",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 3,
    booking_id: 34234,
    booking_no: "12304",
    booking_date: "2023-05-25T00:50",
    vehicle_no: 2,
    from: "bhopal3",
    to: "indore3",
    vehicle_type: "abcde",
  },
  {
    id: 4,
    vehicle_id: 6536456,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25",
    vehicle_no: 5,
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
  {
    id: 5,
    booking_id: 34234,
    booking_no: "12302",
    booking_date: "2023-05-25T00:59",
    vehicle_no: 1,
    from: "bhopal",
    to: "indore",
    vehicle_type: "abcde",
  },
];
const RPTDemandDetail = () => {
  const [data1, setData] = useState([]);
  const conponentPDF = useRef();
 
  const [demand_detail, setdemand_detail] = useState({
    req_date: "",

    demand_by: "",
    vehicle_type: "",
    from: "",
    to: "",
  });
  

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
  });
  console.log(userData);

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
  const onSubmitform = (e) => {
    e.preventDefault();
  };
  useEffect(()=>{
    setData(
      userData.filter(
        (res) =>
          res.booking_date.includes(demand_detail.req_date) &&
          res.from.toLowerCase().includes(demand_detail.demand_by.toLowerCase()) &&
          res.from.toLowerCase().includes(demand_detail.vehicle_type.toLowerCase()) &&
          res.to.toLowerCase().includes(demand_detail.to.toLowerCase()) &&
          res.from.toLowerCase().includes(demand_detail.from.toLowerCase())
      )
    );
  },)
  return (
    <div>
      <React.Fragment>
        <div className=" sm:w-[99%]  sm:m-auto ">
          <div className="">
          <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">
                  RPT Demand Detail
                </div>
            <div className="">
            <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="grid grid-cols-2 gap-2  sm:flex  sm:justify-around w-[100%] sm:gap-1">
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

               
              </form>
              <div className=" relative sm:w-full sm:m-auto w-full   h-96 border-black ">
                
                <div ref={conponentPDF} className="  pb-2 overflow-x-auto ">
                  <table id="my-table" className=" w-full relative">
                    <thead className="bg-[#151B54] w-full text-white">
                      <tr>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base ">
                          SR. NO
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          ENQ ID
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          REQ DATE
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          {" "}
                          ENQ DATE/TIME
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          FROM                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          TO
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          VEHICLE TYPE
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          VEHICLE HEIGHT
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          VEHICLE SIZE{" "}
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          VEHICLE BODY TYPE
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          VEHICLE CAPACITY
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          GOOD NAME
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          DEMAND BY
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                          TOTAL WT
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data1?.map((uData, index) => (
                        <tr key={index}>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {1}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {"a."}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {"a."}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {"a."}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {"a.act"}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {"a.on"}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {"a.ate"}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {"a_date"}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {"a.l_weight"}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {"a.s_name"}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {uData.from}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            {uData.to}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            ghj
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                            ghj
                          </td>
                        </tr>
                      ))}
                    </tbody>
                   
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
                      <img className="w-60" src="transduniyalogo.png" alt="" />
                    </div>
                  </table>

                  <h1 className="text-end text-xs">
                    Powered by : www.transduniya.com-97553-22022{" "}
                  </h1>
                </div>
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

export default RPTDemandDetail;
