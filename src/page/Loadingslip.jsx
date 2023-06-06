import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import loading from "./loading.module.css";
const Loadingslip = () => {
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Loadingslip",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  const downloadPDF = () => {
    const capture = document.querySelector("#loading");

    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = 150;
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);

      doc.save("receipt.pdf");
    });
  };

  return (
    <div className="py-1">
      <div ref={conponentPDF} id="loading" className=" ">
        <div className="   w-[98%] sm:w-[90%] m-auto sm:m-auto py-4 ">
          <h1 className=" text-center text-base font-bold sm:font-bold sm:text-3xl sm:text-center">
            Loadingslip
          </h1>
          <h1 className=" text-center text-base font-bold sm:font-bold sm:text-3xl sm:text-center">
            VEHICLE NO : 47564
          </h1>
          <div>
            <div
              className={`${loading.border}  grid grid-cols-7 mt-4   text-[9px] sm:text-base`}
            >
              <div className="col-start-1 col-end-8 flex">
                <div className=" w-1/2 pl-1    pb-4">Booking no:123264734</div>
                <div className=" w-1/2 pl-1  " style={{borderRight:"0px"}} >Booking date / Time :12-12-2022</div>
              </div>
              <div className="col-start-1 pb-2 pt-1 col-end-8 text-center font-bold     bg-zinc-300">
                PARTY DETAILS
              </div>
              <div className="col-start-1 col-end-8 flex">
                <div class="w-1/2 pl-1 ">
                  <p>Consignor name:xyzxyzxyzzyx </p>
                 
                  <p>
                    Address:Primus 20th Main Rd Next to Siddam Setty Complex 5th
                    Block Koramangala Sjr Fl 5, Bengaluru, Karnataka, 560034,
                    India
                  </p>
                  <p> Phone :98989898989</p>
                  <p>GST : injfbkf7465jhf</p>
                </div>
                <div className="w-1/2  pb-2 pt-1 pl-1  " style={{borderRight:"0px"}}>
                  <p>Consignee name:xyzxyzxyzzyx</p>
                
                  <p>
                    Address:Primus 20th Main Rd Next to Siddam Setty Complex 5th
                    Block Koramangala Sjr Fl 5, Bengaluru, Karnataka, 560034,
                    India
                  </p>
                  <p> Phone :9898989898</p>
                  <p>GST :injfbkf7465jhf</p>
                </div>
              </div>

              <div class="col-start-1 col-end-8 pb-2 pt-1 text-center font-bold  bg-zinc-300   ">
                LOAD PICKUP / DELIVERY
              </div>
              <div className="col-start-1 col-end-8 flex" style={{borderRight:"0px"}}>
                <div class=" w-1/2 pl-1  " >
                  Load Pickup Address :Primus 20th Main Rd Next to Siddam Setty
                  Complex 5th Block Koramangala Sjr Fl 5, Bengaluru, Karnataka,
                  560034, India
                </div>
                <div className=" w-1/2 pl-1   pb-2 pt-10">
                  Load Delivery Address :Primus 20th Main Rd Next to Siddam
                  Setty Complex 5th Block Koramangala Sjr Fl 5, Bengaluru,
                  Karnataka, 560034, India
                </div>
              </div>
              <div className="col-start-1  pb-2 pt-1 col-end-8 text-center font-bold  bg-zinc-300   ">
                GOODS DETAILS
              </div>

              <div className="pb-2 pt-1 pl-1 col-start-1  col-end-2  ">Pkgs:12</div>
              <div className="pb-2 pt-1 pl-1 col-start-2  col-end-4 ">Pkg type:xyz</div>
              <div className="pb-2 pt-1 pl-1 col-start-4  col-end-6 ">Goods Name:</div>
              <div className="pb-2 pt-1 pl-1 col-start-6  col-end-7">Actual wt</div>
              <div className="pb-2 pt-1 pl-1 col-start-7  col-end-8 ">Charged WT</div>
             
<div  className=" col-start-1 pb-2 pt-0  col-end-4 bg-zinc-300 text-center font-bold" >Invoice </div>
<div  className=" col-start-4 pb-2 pt-0  col-end-8 bg-zinc-300 text-center font-bold" >e-bill </div>
<div  className=" col-start-1 pb-0 pt-0  col-end-4 grid grid-cols-3 " > 
<div>ew</div>
<div>ew</div>
<div style={{borderRight:"0px"}} >ew</div> </div>
<div  className="grid grid-cols-3  col-start-4 pb-0 pt-0  col-end-8 " >
  <div>ew</div>
<div>ew</div>
<div style={{borderRight:"0px"}}>ew</div>  </div>


              <div className=" col-start-1 pb-2 pt-0  col-end-5 relative " style={{borderRight:"0px"}}>
                <h1 className=" border-r-0 pb-2 pt-1 pl-1 font-bold bg-zinc-300 text-center">
                  VEHICLE DETAILS
                </h1>
                <p className="pl-1">Vehicle no :9898989898</p>
                <p className="pl-1">Chasis no :9898989898</p>
                <p className="pl-1">Engine no :9898989898</p>
                <p className="pl-1">Owner name:9898989898</p>
                <p className="pl-1">Owner PAN no:9898989898</p>
                <p className="pl-1">Owner contact no:9898989898 </p>
                <div    style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        opacity: '0.5',
        fontSize: '48px',
        // color: 'red',
        transform: 'rotate(0deg)',
        pointerEvents: 'none',
      }}>

<img className="w-20 sm:w-40 pr-4" src="transduniyalogo.png" alt="" />

</div>
              </div>
             

              <div className=" col-start-5 col-end-8  ">
                <h1 className="text-center pb-2 pt-1 font-bold  bg-zinc-300">
                  DRIVER DETAILS
                </h1>
                <p className="pl-1">Driver name:</p>
                <p className="pl-1">Driver contact no:</p>
                <p className="pl-1">Driver license no:</p>
              </div>
             

             
              
            </div>
          </div>
          <h1 className="text-end text-xs">
            Powered by : www.transduniya.com-97553-22022
          </h1>
        
          {/* </table> */}
        </div>
      </div>
      <div className="m-auto w-full flex justify-center gap-2 text-center">
        <button
          className=" bg-[#151B54] py-1 px-2 w-24 text-sm mt-10 rounded-md text-white "
          onClick={downloadPDF}
        >
          Download
        </button>{" "}
        <button
          className=" bg-[#151B54] py-1 px-2 w-16 text-sm mt-10 rounded-md text-white "
          onClick={generatePDF}
        >
          Print
        </button>
        <button
          className=" bg-[#151B54] py-1 px-2 w-16 text-sm mt-10 rounded-md text-white "
         
        >
          close
        </button>
      
      </div>
    </div>
  );
};

export default Loadingslip;
