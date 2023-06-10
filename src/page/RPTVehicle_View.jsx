import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import r from "./rpt.module.css"
const RPTVehicle_View = () => {
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
                  {" "}
                  vehicleview{" "}
                </div>
                <div
                  ref={conponentPDF}
                  className="  pb-2"
                >
                  <table id="my-table" className=" w-full relative">
                    <thead className="bg-[#151B54] w-full text-white">
                      <tr>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">Sr. No</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">Enq id</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  "> Enq date</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">From</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">To</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">Demand by</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">Vehicle type</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">Vehicle Height</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">Vehicle size </th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">Vehicle body type</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">Vehicle capacity</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">Good Name</th>
                        <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">Total Weight</th></tr>
                    </thead>
                    <tbody>
                      {/* { */}
                      {/* // userData.map( (uData, index)=>( */}
                      <tr
                      //  key={index}
                      >
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{1}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{"a."}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{"a."}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{"a."}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{"a.act"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{"a.on"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{"a.us"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{"a.ate"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{"a_date"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{"a.l_weight"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">{"a.s_name"}</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">ghj</td>
                        <td className="sm:px-1 px-1 sm:text-base text-[8px] ">ghj
</td>
                      </tr>
                      {/* )) } */}
                    </tbody>
                    <tfoot>
        <tr>
            <th colspan="7" scope="row">Totals</th>
            <td>21,000</td>
        </tr>
    </tfoot>
    <div   style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.2',
        fontSize: '48px',
        color: 'red',
        transform: 'rotate(0deg)',
        pointerEvents: 'none',
      }}>

<img className="w-60" src="transduniyalogo.png" alt="" />

</div>         
                  </table>
          
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

export default RPTVehicle_View;
