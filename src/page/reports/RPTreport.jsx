import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";

import "jspdf-autotable";
import html2canvas from "html2canvas";

import r from "./rptreport.module.css"
const RPTreport = () => {
  const conponentPDF = useRef();
  const ref = useRef();

  const [userData, setUserdata] = useState([]);
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
   
  });
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector("#loading");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = 100;
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  return (
    <div className="py-10">
      <div ref={conponentPDF} id="loading" className=" p-2">
        <div className={`${r.border}  w-[100%] sm:w-[100%]   m-auto py-3`}>
          <div className=" ">
            {" "}
            <h1 className=" text-center text-base font-semibold sm:font-bold sm:text-3xl sm:text-center">
              RAHUL ROADLINES
            </h1>
            <p className=" pt-1 pb-3 pl-1 text-center text-xs font-semibold sm:font-bold sm:text-base sm:text-center">
              H.O : Plot no-106,Near Pani Pouch Factory,Opp.Star Steel,Bhopal
              Mobile-9754167448,07554277142 B.O : Near Parik Transport wali
              Gali,New Loha Mandi,Indore
              Mobile9303721552,9039042350,07314278131B.O : Glend
              Mark,Pharmaceutical,S.R.Compound,Dewas Naka,Indore
              Mobile-9165676360
            </p>
          </div>
          <div className="text-[9px] sm:text-base p-1 flex justify-around gap-2 ">
            {" "}
            <div className={`${r.border1} w-1/2`}>
              <h3 className="font-bold pt-1 pb-2 pl-1  ">GST No : 23AQBPP4905G1Z4</h3>
              <h3 className="font-bold pt-1 pb-2 pl-1  " style={{borderTop:"0px" }} >SUBJECT TO INDORE JURISDICTION</h3>
              <h3 className="font-bold pt-1 pb-2 pl-1  " style={{borderTop:"0px" }} >GOODS BOOKED AT OWNERS RISK</h3>
                </div>
            <div className={`${r.border1} w-1/2 flex-col gap-1 flex`}>
              <div className="flex   ">
                <h3 className=" w-1/2 font-bold  pt-1 pb-2 pl-2 " style={{borderRight:"0px solid"}}>GR No : BHP135860</h3>
                <h3 className=" w-1/2 font-bold  pt-1 pb-2 pl-2  " >GR Date : 27/05/2023</h3>{" "}
              </div>
              <h3 className="font-bold pt-1 pb-2 pl-1  ">From : BHOPAL</h3>
              <h3 className="font-bold pt-1 pb-2 pl-1  ">To : RAJGARH (DHAR)</h3>
              <h3 className="font-bold pt-1 pb-2 pl-1  ">Vehicle No :</h3>
            </div>{" "}
          </div>
          <div className="pt-1 pb-2 pl-1 pr-1  text-[8px] sm:text-base   flex flex-row justify-between ">
            <div>
              {" "}
              <div>
              <span className="font-bold pt-1 pb-2 pl-1">Consignor's Name & Address : </span> <span>  VETERINARY DISTRIBUTORS P. LTD</span>

              </div>
              <div>
              <span className="font-bold pt-1 pb-2 pl-1">Consignee Name & Address : </span> <span>Mukati Pharmaceuticals 8462082856 </span>

              </div>
            </div>
            <div>
              {" "}
              <div>

              <span className="font-bold pt-1 pb-2 pl-1">GST No. :</span>23AADCV9878P1ZB <span></span>
              </div>
              <div>

              <span className="font-bold pt-1 pb-2 pl-1">GST No. : </span> <span>23CILPP0641R1ZS</span>
              </div>
            </div>
          </div>
          <div className=" p-1 ">
            
              <div className={`${r.border2} text-[8px] sm:text-base  grid grid-cols-8`}>
                
                <div className="pt-1 pb-2 pl-1 "  >Quantity</div>
                <div className="pt-1 pb-2 pl-1 " >Packing Mode</div>
                <div className="pt-1 pb-2 pl-1 " >Said To Content</div>
                <div className="">
                  <div class="   grid grid-cols-6 gap-0">
                    <div class={` ${r.border3} pt-1 pb-2 pl-1  col-start-1 col-end-7 `}  style={{borderRight:"0px solid"}}>
                      Weight
                    </div>
                    <div class={` ${r.border3} pt-1 pb-2 pl-1   col-start-1 col-end-4 `} style={{borderRight:"1px solid",borderBottom:"0px"}}>
                      Actual
                    </div>
                    <div class={`${r.border3}  pt-1 pb-2 pl-1 col-start-4 col-end-7 col-span-2 `} style={{borderRight:"0px solid",borderBottom:"0px"}}>
                      Charged
                    </div>
                  </div>
                </div>
                <div  className="pt-1 pb-2 pl-1 ">Rate</div>
                <div  className="pt-1 pb-2 pl-1 ">Freight </div>
                <div  className="pt-1 pb-2 pl-1 ">Total</div>
               
                  <div class="  grid grid-cols-6 gap-0">
                    <div class={` ${r.border3} pt-1 pb-2 pl-1 col-start-1 col-end-7 `}  style={{borderRight:"0px solid"}}>
                      Amount
                    </div>
                    <div class={  ` ${r.border3} pt-1 pb-2 pl-1  col-start-1 col-end-4` } style={{borderRight:"1px solid",borderBottom:"0px"}}>
                      Rs
                    </div>
                    <div class={`  ${r.border3} pt-1 pb-2 pl-1 col-start-4 col-end-7 col-span-2`} style={{borderRight:"0px solid",borderBottom:"0px"}} >
                      Ps
                    </div>
                  </div>
              
              
                <div className="pt-1 pb-2 pl-1 ">2</div>
                <div className="pt-1 pb-2 pl-1 ">C/.R</div>
                <div className="pt-1 pb-2 pl-1 ">MEDICINE</div>
                
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="pt-1 pb-2 pl-1   col-start-1 col-end-4 ..."  style={{borderRight:"1px solid"}}>
                    40
                    </div>
                    <div class="pt-1 pb-2 pl-1   col-start-4 col-end-7 col-span-2 ..." style={{borderRight:"0px solid"}}>
                    40
                    </div>
                 
                </div>
                <div className=" pt-1 pb-2 pl-1">TBB</div>
                <div className=" pt-1 pb-2 pl-1">TBB </div>
                <div className=" pt-1 pb-2 pl-1 ">Total Freight</div>
               
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class=" pt-1 pb-2 pl-1  col-start-1 col-end-4 " style={{borderRight:"1px solid"}}>
                      TBB
                    </div>
                    <div class="pt-1 pb-2   col-start-4 col-end-7 col-span-2 pl-1" style={{borderRight:"0px solid"}}>
                      
                    </div>
               
                </div>

                {/* 3rd */}
             
              <div className="font-bold text-[8px] sm:text-base  border-r-2 border-l-2 text-right  col-start-1 col-end-8" >Sub Total</div>
              <div className="   col-start-8 col-end-9 grid grid-cols-6 gap-0"> 
              
                   
                   <div class="pt-1 pb-2 pl-1 col-start-1 col-end-4 ..." style={{borderRight:"1px solid"}}>
                     TBB
                   </div>
                   <div class="pt-1 pb-2 pl-1   col-start-4 col-end-7 col-span-2 " style={{borderRight:"0px solid"}}>
                     
                   </div>
               
              
              </div> 


              <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base ">Total Packages :</div>
              <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base ">C/.R</div>
              <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base "></div>
                <div>
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base   col-start-1 col-end-4 ..."  style={{borderRight:"1px solid"}}>
                    40
                    </div>
                    <div class="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base   col-start-4 col-end-7 col-span-2 ..." style={{borderRight:"0px solid"}}>
                    40
                    </div>
                  </div>
                </div>
                <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base "></div>
                <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base "> </div>
                <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base ">Tax Amount </div>
                
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="   col-start-1 col-end-4 ..." style={{borderRight:"1px solid"}}>
                      TBB
                    </div>
                    <div class="   col-start-4 col-end-7 col-span-2 " style={{borderRight:"0px solid"}}>
                      
                   
                  </div>
                </div>
                <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base ">Invoice No. :</div>
                <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base ">131</div>
                <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base ">Invoice Values Rs. :</div>
                
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base col-start-1 col-end-4 ..." style={{borderRight:"1px solid"}}>
                    13687.00
                    </div>
                    <div class="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base col-start-4 col-end-7 col-span-2 ..." style={{borderRight:"0px solid"}}>
                    
                    </div>
                  
                </div>
                <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base "></div>
                <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base "> </div>
                <div className="pt-1 pb-2 pl-1 font-bold text-[8px] sm:text-base ">Advance</div>
                
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="   col-start-1 col-end-4 ..." style={{borderRight:"1px solid"}}>
                      TBB
                    </div>
                    <div class="  col-start-4 col-end-7 col-span-2 " style={{borderRight:"0px solid"}}>
                      
                    
                  </div>
                </div>
                <div  class=" pt-1 pb-2 pl-1  col-start-1 col-end-5 font-bold text-[8px] sm:text-base ">Invoice Date:10-05-2030</div>
                <div  class=" col-start-5 col-end-6"></div>
                <div  class=" col-start-6 col-end-7"></div>
                <div  class=" col-start-7 col-end-8"></div>
                <div  class=" col-start-8 col-end-9"><div class=" grid grid-cols-6 gap-0">
                   
                   <div class="  pt-1 pb-2 pl-1 col-start-1 col-end-4 ..." style={{borderRight:"1px solid"}}>
                     TBB
                   </div>
                   <div class="pt-1 pb-2 pl-1  col-start-4 col-end-7 col-span-2 " style={{borderRight:"0px solid"}}>
                     
                   </div>
                 </div></div>
              
              
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
                  opacity: ".1",
                  fontSize: "48px",
                  color: "red",
                  transform: "rotate(0deg)",
                  pointerEvents: "none",
                }}
              >
                <img className="w-60 " src="transduniyalogo.png" alt="" />
              </div>
            </div>
          </div>

          <div className=" p-1 flex justify-between ">
            {" "}
            <h3 className="font-bold  sm:text-base text-xs pb-4">Delivery Address:
</h3>
            <h3  className="font-bold sm:text-base text-xs pt-4">Signature & Stamp
</h3>{" "}
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

export default RPTreport;
