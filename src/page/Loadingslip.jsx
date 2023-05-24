import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";



import Report from 'bv-react-data-report';
// import 'bv-react-data-report/dist/index.css';
import jsPDF from 'jspdf'

import 'jspdf-autotable';
import html2canvas from "html2canvas";
// import { blueGrey } from "@mui/material/colors";

// import { data } from "./example.js";

const Loadingslip = () => {
  const conponentPDF = useRef();
  const ref = useRef();

  const [userData, setUserdata] = useState([]);
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('#loading');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }

  return (
    <div className="py-10">
       {/* <Report
        data={data}
        
  /> */}
      {/* <button onClick={downloadPDF}>Export to PDF</button> */}



      <div ref={conponentPDF} id="loading" className=" p-2" >
      
      <div   className=" bg-no-repeat bg-center  w-[100%] sm:w-[70%] m-auto py-10">

      {/* <table id='my-table'> */}
        <h1 className=" text-center text-base font-semibold sm:font-bold sm:text-3xl sm:text-center">
          Loadingslip
        </h1>
        <h1 className=" text-center text-base font-semibold sm:font-bold sm:text-3xl sm:text-center">
          VEHICLE NO : 47564
        </h1>
        <div >
          <div  class="relative grid grid-cols-7  border-2 border-black text-xs sm:text-base ">
            <div className="col-start-1 col-end-8 flex">
              <div class=" w-1/2   border border-r-2 border-l-0 border-b-0 border-t-0 border-black pb-4">
                Booking no
              </div>
              <div class=" w-1/2  border border-r-0 border-l-0 border-b-0 border-t-0">
                Booking date / Time :
              </div>
            </div>
            <div class="col-start-1 col-end-8 text-center font-semibold  border border-r-0 border-l-0 border-b-2 border-t-2 border-black  bg-zinc-400">
              PARTY DETAILS
            </div>
            <div  className="col-start-1 col-end-8 flex">
              <div class="w-1/2 border border-r-2 border-l-0 border-b-0 border-t-0 border-black">
                <p>Consignor </p>
                <p>name :</p>
                <p>Address:</p>
                <p> Phone :</p>
                <p>GST :</p>
              </div>
              <div class="w-1/2   border border-r-2 border-l-0 border-b-2 border-t-0">
                <p>Consignee</p>
                <p>name :</p>
                <p>Address:</p>
                <p> Phone :</p>
                <p>GST :</p>
              </div>
            </div>

            <div class="col-start-1 col-end-8 text-center font-semibold  bg-zinc-400  border border-r-0 border-l-0 border-b-2 border-t-2 border-black">
              LOAD PICKUP / DELIVERY
            </div>
            <div className="col-start-1 col-end-8 flex">
              <div class=" w-1/2  border border-r-2 border-l-0 border-b-0 border-t-0 border-black">
                Load Pickup Address :
              </div>
              <div class=" w-1/2  border border-r-2 border-l-0 border-b-2 border-t-0 pb-20">
                Load Delivery Address :
              </div>
            </div>
            <div class="col-start-1 col-end-8 text-center font-semibold  bg-zinc-400  border border-r-0 border-l-0 border-b-2 border-t-2 border-black">
              GOODS DETAILS
            </div>
            {/* 
          <div class="col-start-1 col-end-7 text-center font-semibold  ">

            <div className="grid grid-cols-7 border-r-0 border-l-0 border-b-2 border-t-0 border-black"> */}

            <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Pkgs
            </div>
            <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Pkg type
            </div>
            <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Goods Name
            </div>
            <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Actual wt
            </div>
            <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Charged WT
            </div>
            <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Rate
            </div>
            <div class=" border border-r-0 border-l-0 border-b-2 border-t-0 border-black">
              Freight
            </div>
            {/* </div>
          </div> */}

            <div className=" col-start-1 col-end-6 border border-r-2 border-l-0 border-b-0 border-t-0 border-black">
              <h1 className="border border-r-0 border-l-0 border-b-2 border-t-0 border-black bg-zinc-400 text-center">
                VEHICLE DETAILS
              </h1>
              <p>Vehicle no :</p>
              <p>Chasis no :</p>
              <p>Engine no :</p>
              <p>Owner name:</p>
              <p>Owner PAN no</p>
              <p>Owner contact no </p>
            </div>
            <div className=" col-end-8 col-span-2 flex">
              <div className="w-1/2 border border-r-2 border-l-0 border-b-0 border-t-0 border-black">
                Loading charges
              </div>
              <div className="w-1/2 "></div>
            </div>

            <div className=" col-start-1 col-end-6 border border-r-2 border-l-0 border-b-0 border-t-2 border-black">
              <h1 className="text-center border border-r-0 border-l-0 border-b-2 border-t-0 border-black bg-zinc-400">
                DRIVER DETAILS
              </h1>
              <p>Driver name:</p>
              <p>Driver contact no:</p>
              <p>Driver license no:</p>
            </div>
            <div className=" col-end-8 col-span-2 flex  border border-r-0 border-l-0 border-b-0 border-t-2 border-black">
              <div className="w-1/2 border border-r-2 border-l-0 border-b-0 border-t-0 border-black text-[10px] sm:text-base ">
                Unloading charges
              </div>
              <div className="w-1/2 "></div>
            </div>

            <div className=" col-start-1 col-end-6  border border-r-2 border-l-0 border-b-0 border-t-2 border-black">
              <p>
                {" "}
                Note : Vehicle,owner,party and driver documents are attached.
              </p>
            </div>
            <div className=" col-end-8 col-span-2 flex  border border-r-0 border-l-0 border-b-0 border-t-2 border-black">
              <div className="w-1/2 border border-r-2 border-l-0 border-b-0 border-t-0 border-black ">
                Total
              </div>
              <div className="w-1/2 "></div>
            </div>
          </div>
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
            <img className="w-60 " src="transduniyalogo.png" alt="" />
          </div>
        </div>
        <h1 className="text-end text-xs">
          Powered by : www.transduniya.com-97553-22022
        </h1>
        {/* </table> */}
        </div>

    
      </div>
      <div className="m-auto w-full text-center">
        <button
          className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white "
          onClick={downloadPDF}
        >
          Download
        </button>{" "}
        <button
          className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white "
          onClick={generatePDF}
        >
          Print
        </button>


        <div>
 
   
</div>
      </div>
    </div>
  );
};

export default Loadingslip;
