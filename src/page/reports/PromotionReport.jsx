import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";

const PromotionReport = () => {
  const [data, setDate] = useState({
    name: "ram transport",
    email: "email@gmail.com",
    mobilenumber: 7222082282,
    address: "106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP",
    reportname: "Promotion Register",
    date: "4/20/2023",
    date_From: "4/20/2023",
    to: "4/20/2023",
  });
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
        <div className=" sm:w-[80%]  sm:m-auto ">
          <div className="">
            <div className="">
              <div
                ref={conponentPDF}
                className=" relative sm:w-full sm:m-auto w-full  bordre border-collapse border-2 h-96 border-black "
              >
                <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">
                  {" "}
                  Promotion Register{" "}
                </div>

                <div className=" bordre border-collapse border-2  border-slate-700 pb-2 ">
                  <div>
                    <h1 className=" pl-1  font-bold  text-[10px]">
                      {" "}
                      {data.name}
                    </h1>
                    <h1 className=" pl-1  font-bold  text-[10px]">
                      {" "}
                      {data.email}{" "}
                    </h1>
                    <p className="pl-1 text-[10px] ">{data.mobilenumber} </p>
                    <p className="pl-1 text-[10px]">{data.address}</p>
                    <p className="pl-1 text-[10px]">{data.reportname}</p>
                    <h2 className="pl-1 font-bold  text-[10px] border border-t-2  border-slate-700 border-b-0 border-r-0 border-l-0">
                      Date :{data.date}
                    </h2>

                    <h1 className="pl-1 font-bold  text-[10px] border border-t-2  border-slate-700 border-b-0 border-r-0 border-l-0">
                      Date From : {data.date_From}To :{data.to}
                    </h1>
                  </div>
                  <table className=" w-full ">
                    <thead className="bg-[#151B54] w-full text-white text-[10px]">
                      <tr>
                        <th className=" lg:text-[10px]  p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Sr. No
                        </th>
                        <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Promotion id
                        </th>
                        <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          {" "}
                          Promotion Date/time
                        </th>
                        <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Promotion End Date/time
                        </th>
                        <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Promotion Type 
                        </th>
                        <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">
                          Promotion Messages
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.map((uData, index) => (
                        <tr key={index}>
                          <td className="sm:px-2 px-2 sm:text-base text-base border border-slate-300">
                            {index + 1}
                          </td>
                          <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                            {uData.schedule_date_time}
                          </td>
                          <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                            {uData.user_id}
                          </td>
                          <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                            {uData.username}
                          </td>
                          <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                            {uData.registered_number}
                          </td>

                          <td></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="absolute top-40 w-96 left-96 opacity-10">
                    <img className="w-full" src="transduniyalogo.png" alt="" />
                  </div>
                </div>
                <h1 className="text-end text-xs">
                  Powered by : www.transduniya.com-97553-22022{" "}
                </h1>
              </div>
              <div className="m-auto w-full text-center">
                <button
                  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white "
                  onClick={generatePDF}
                >
                  Download
                </button>{" "}
                <button
                  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white "
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

export default PromotionReport;