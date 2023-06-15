import React, { useState, useEffect, useRef } from "react";

// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import "jspdf-autotable";
import r from "./rpt.module.css";
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
const RPTFreight = () => {
  const [data1, setData] = useState([]);
  const [data, setDate] = useState({
    name: "ram transport",
    email: "email@gmail.com",
    mobilenumber: 7222082282,
    address: "106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP",
    reportname: "Freight",
    date: "4/20/2023",
    date_From: "4/20/2023",
    to: "4/20/2023",
  });
  const conponentPDF = useRef();
  const [freight_register, setfreight_register] = useState({
    booking_no: "",
    vehicle_no: "",
    from: "",
    to: "",
  });
 

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
    doc.save("data-report.pdf");
  };
  const onSubmitform = (e) => {
    e.preventDefault();
  };
useEffect(()=>{
  setData(
    userData.filter(
      (res) =>
        res.vehicle_no.toString().includes(freight_register.vehicle_no) &&
        res.vehicle_no.toString().includes(freight_register.booking_no) &&
        res.from.toLowerCase().includes(freight_register.from.toLowerCase()) &&
        res.to.toLowerCase().includes(freight_register.to.toLowerCase())
    )
  );
},[freight_register.vehicle_no,freight_register.booking_no,freight_register.from,freight_register.to])

  return (
    <div>
      <React.Fragment>
        <div className=" sm:w-[99%]  sm:m-auto ">
          <div className="">
          <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">
                  {" "}
                  Freight Register
                </div>
          <form
                onSubmit={onSubmitform}
                className="flex px-2  flex-col gap-4 pb-8   justify-center items-center shadow "
              >
                <div className="grid grid-cols-2 gap-2  sm:flex  sm:justify-around w-[100%] sm:gap-1">
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

                <div className="flex justify-around w-full gap-2">
                  
                </div>

                
              </form>
            <div className="">
              <div
                ref={conponentPDF}
                className=" relative sm:w-full sm:m-auto w-full  "
              >
              
                <div className=" pb-2">
                  <div className=" border-1  border-black  w-[100%] ">
                    <h1 className=" pl-1 font-bold  text-[10px]">
                      {" "}
                      {data.name}
                    </h1>
                    <h1 className=" pl-1 font-bold  text-[10px]">
                      {" "}
                      {data.email}
                    </h1>
                    <p className="pl-1 text-[10px] ">{data.mobilenumber} </p>
                    <p className="pl-1 text-[10px]">{data.address}</p>
                    <p className="pl-1 text-[10px]">{data.reportname}</p>

                    <h1 className="pl-1 font-bold  text-[10px] border border-t-1  border-slate-700 border-b-0 border-r-0 border-l-0 ">
                      Date From : {data.date_From} To :{data.to}
                    </h1>
                  </div>
                  <table id="my-table" className=" w-full relative">
                    <thead className="bg-[#151B54] w-full text-white">
                      <tr>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">
                          Sr. No
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Booking Id
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Booking Number
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          vehicle No{" "}
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Goods
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          From{" "}
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          To
                        </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Rate / Ton
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data1?.map((uData, index) => (
                        <tr key={index}>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            {index + 1}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            {index + 1}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            {index + 1}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            {uData.from}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            {index + 1}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            {index + 1}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            {index + 1}
                          </td>
                          <td className="lg:text-[11px] text-[0.51rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base ">
                            {index + 1}
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
                      <img className=" w-20 sm:w-60" src="transduniyalogo.png" alt="" />
                    </div>
                  </table>
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

export default RPTFreight;
