import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import v from "../components/Vehicleform.module.css";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import { Option } from "antd/es/mentions";
import jsPDF from "jspdf";
import 'jspdf-autotable';
const RPTDemandDetail = ({data1}) => {
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

  const exportPDF = () => {

    const doc = new jsPDF();
    doc.setFontSize(10);
    doc.text('name:ram transport \nemail:email@gmail.com \nmobilenumber:7222082282 \naddress:106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP \nreportname:Vehicle Scheduled Summary \ndate:4/20/2023 \ndate_From : 4/20/2023 to : 4/20/2023 ', 10, 10);

 doc.autoTable({ html:"#my-table",

 theme:'grid',
 headStyles:{fillColor: "#151B54"},
 margin: { top: 50 },

})
 // Save the PDF document
 doc.save('data-report.pdf');
}
  return (
    <div>
      <React.Fragment>
        <div className=" sm:w-[99%]  sm:m-auto ">
          <div className="">
            <div className="">
              <div className=" relative sm:w-full sm:m-auto w-full   h-96 border-black ">
                <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">
                  
                RPT Demand Detail
                </div>
                <div
                  ref={conponentPDF}
                  className="  pb-2"
                >
                  <table id="my-table" className=" w-full ">
                    <thead className="bg-[#151B54] w-full text-white">
                      <tr>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">Sr. No</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Enq id</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Req Date</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300"> Enq date/time</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">From</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">To</th>
                        {/* <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Demand by</th> */}
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle type</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle Height</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle size </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle body type</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle capacity</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Good Name</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Demand By</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Total Weight</th></tr>
                    </thead>
                    <tbody>
                      {
                      data1.map( (uData, index)=>(
                      <tr
                       key={index}
                      >
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{1}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{"a."}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{"a."}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{"a."}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{"a.act"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{"a.on"}</td>
                        {/* <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{"a.us"}</td> */}
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{"a.ate"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{"a_date"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{"a.l_weight"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">{"a.s_name"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">ghj</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">ghj
</td> <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">ghj</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] border border-slate-300">ghj
</td>
                      </tr>
                       )) } 
                    </tbody>
                  </table>
                  <div    style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.5',
        fontSize: '48px',
        color: 'red',
        transform: 'rotate(0deg)',
        pointerEvents: 'none',
      }}>
                    <img className="w-60" src="transduniyalogo.png" alt="" />
                  </div>
                  <h1 className="text-end text-xs">
                    Powered by : www.transduniya.com-97553-22022{" "}
                  </h1>
                </div>
              </div>
              <div className="m-auto w-full text-center">
                <button
                  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white "
                  onClick={exportPDF}
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

export default RPTDemandDetail;
