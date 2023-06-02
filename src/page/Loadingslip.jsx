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
      const componentHeight = 150;
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }

  return (
    <div className="py-1">
       {/* <Report
        data={data}
        
  /> */}
      {/* <button onClick={downloadPDF}>Export to PDF</button> */}



      <div ref={conponentPDF} id="loading" className=" " >
      
      <div   className="   w-[98%] sm:w-[90%] m-auto sm:m-auto py-10 ">

      {/* <table id='my-table'> */}
        <h1 className=" text-center text-base font-semibold sm:font-bold sm:text-3xl sm:text-center">
          Loadingslip
        </h1>
        <h1 className=" text-center text-base font-semibold sm:font-bold sm:text-3xl sm:text-center">
          VEHICLE NO : 47564
        </h1>
        <div >
          <div  class="relative grid grid-cols-7 mt-4  border-2 border-black text-[9px] sm:text-base ">
            <div className="col-start-1 col-end-8 flex">
              <div class=" w-1/2    border-r-2 border-l-0 border-b-0 border-t-0 border-black pb-4">
                Booking no:123264734
              </div>
              <div class=" w-1/2   border-r-0 border-l-0 border-b-0 border-t-0">
                Booking date / Time :12-12-2022
              </div>
            </div>
            <div class="col-start-1 pb-2 col-end-8 text-center font-semibold   border-r-0 border-l-0 border-b-2 border-t-2 border-black  bg-zinc-400">
              PARTY DETAILS
            </div>
            <div  className="col-start-1 col-end-8 flex">
              <div class="w-1/2  border-r-2 border-l-0 border-b-0 border-t-0 border-black">
                <p>Consignor:xyzxyzxyzzyx </p>
                <p>name :xmmcxmcx,nc</p>
                <p>Address:Primus 20th Main Rd Next to Siddam Setty Complex 5th Block Koramangala Sjr Fl 5, Bengaluru, Karnataka, 560034, India</p>
                <p> Phone :98989898989</p>
                <p>GST : injfbkf7465jhf</p>
              </div>
              <div class="w-1/2  pb-2  border-r-2 border-l-0 border-b-2 border-t-0">
                <p>Consignee:xyzxyzxyzzyx</p>
                <p>name :xmmcxmcx</p>
                <p>Address:Primus 20th Main Rd Next to Siddam Setty Complex 5th Block Koramangala Sjr Fl 5, Bengaluru, Karnataka, 560034, India</p>
                <p> Phone :9898989898</p>
                <p>GST :injfbkf7465jhf</p>
              </div>
            </div>

            <div class="col-start-1 col-end-8 pb-2 text-center font-semibold  bg-zinc-400   border-r-0 border-l-0 border-b-2 border-t-2 border-black">
              LOAD PICKUP / DELIVERY
            </div>
            <div className="col-start-1 col-end-8 flex">
              <div class=" w-1/2   border-r-2 border-l-0 border-b-0 border-t-0 border-black">
                Load Pickup Address :Primus 20th Main Rd Next to Siddam Setty Complex 5th Block Koramangala Sjr Fl 5, Bengaluru, Karnataka, 560034, India
              </div>
              <div class=" w-1/2   border-r-2 border-l-0 border-b-2 border-t-0 pb-20">
                Load Delivery Address :Primus 20th Main Rd Next to Siddam Setty Complex 5th Block Koramangala Sjr Fl 5, Bengaluru, Karnataka, 560034, India
              </div>
            </div>
            <div class="col-start-1 pb-2 col-end-8 text-center font-semibold  bg-zinc-400   border-r-0 border-l-0 border-b-2 border-t-2 border-black">
              GOODS DETAILS
            </div>
            {/* 
          <div class="col-start-1 col-end-7 text-center font-semibold  ">

            <div className="grid grid-cols-7 border-r-0 border-l-0 border-b-2 border-t-0 border-black"> */}

            <div class="pb-2  border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Pkgs:12
            </div>
            <div class="pb-2  border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Pkg type:xyz
            </div>
            <div class="pb-2  border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Goods Name:
            </div>
            <div class=" pb-2 border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Actual wt
            </div>
            <div class="pb-2  border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Charged WT
            </div>
            <div class="pb-2  border-r-2 border-l-0 border-b-2 border-t-0 border-black">
              Rate
            </div>
            <div class="pb-2  border-r-0 border-l-0 border-b-2 border-t-0 border-black">
              Freight
            </div>
            {/* </div>
          </div> */}

            <div className=" col-start-1 pb-2 col-end-6  border-r-2 border-l-0 border-b-0 border-t-0 border-black">
              <h1 className=" border-r-0 pb-2 border-l-0 border-b-2 border-t-0 border-black bg-zinc-400 text-center">
                VEHICLE DETAILS
              </h1>
              <p>Vehicle no :9898989898</p>
              <p>Chasis no :9898989898</p>
              <p>Engine no :9898989898</p>
              <p>Owner name:9898989898</p>
              <p>Owner PAN no:9898989898</p>
              <p >Owner contact no:9898989898 </p>
            </div>
            <div className=" col-end-8 col-span-2 flex">
              <div className="w-1/2  border-r-2 border-l-0 border-b-0 border-t-0 border-black">
                Loading charges
              </div>
              <div className="w-1/2 "></div>
            </div>

            <div className=" col-start-1 col-end-6  border-r-2 border-l-0 border-b-0 border-t-2 border-black">
              <h1 className="text-center pb-2 border-r-0 border-l-0 border-b-2 border-t-0 border-black bg-zinc-400">
                DRIVER DETAILS
              </h1>
              <p>Driver name:</p>
              <p>Driver contact no:</p>
              <p>Driver license no:</p>
            </div>
            <div className=" col-end-8 col-span-2 flex   border-r-0 border-l-0 border-b-0 border-t-2 border-black">
              <div className="w-1/2  border-r-2 border-l-0 border-b-0 border-t-0 border-black text-[10px] sm:text-base ">
                Unloading charges
              </div>
              <div className="w-1/2 ">989898</div>
            </div>

            <div className=" col-start-1 pb-2 col-end-6   border-r-2 border-l-0 border-b-0 border-t-2 border-black">
              <p>
                {" "}
                Note : Vehicle,owner,party and driver documents are attached.
              </p>
            </div>
            <div className=" col-end-8  col-span-2 flex   border-r-0 border-l-0 border-b-0 border-t-2 border-black">
              <div className="w-1/2  border-r-2 border-l-0 border-b-0 border-t-0 border-black ">
                Total
              </div>
              <div className="w-1/2 ">9898989</div>
            </div>
          </div>
          <div    style={{
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
          className=" bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white "
          onClick={downloadPDF}
        >
          Download
        </button>{" "}
        <button
          className=" bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white "
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
