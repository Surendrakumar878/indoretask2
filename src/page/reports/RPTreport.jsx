import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Report from "bv-react-data-report";
// import 'bv-react-data-report/dist/index.css';
import jsPDF from "jspdf";

import "jspdf-autotable";
import html2canvas from "html2canvas";
import { Table } from "antd";
// import { blueGrey } from "@mui/material/colors";

// import { data } from "./example.js";

const RPTreport = () => {
  const conponentPDF = useRef();
  const ref = useRef();

  const [userData, setUserdata] = useState([]);
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector("#loading");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  return (
    <div className="py-10">
      <div ref={conponentPDF} id="loading" className=" p-2">
        <div className="   w-[100%] sm:w-[100%]  border-2 border-slate-400 m-auto py-3">
          <div className=" border-r-0 border-l-0 border-b-2 border-t-0  border-slate-400">
            {" "}
            <h1 className=" text-center text-base font-semibold sm:font-bold sm:text-3xl sm:text-center">
              RAHUL ROADLINES
            </h1>
            <p className=" text-center text-xs font-semibold sm:font-bold sm:text-base sm:text-center">
              H.O : Plot no-106,Near Pani Pouch Factory,Opp.Star Steel,Bhopal
              Mobile-9754167448,07554277142 B.O : Near Parik Transport wali
              Gali,New Loha Mandi,Indore
              Mobile9303721552,9039042350,07314278131B.O : Glend
              Mark,Pharmaceutical,S.R.Compound,Dewas Naka,Indore
              Mobile-9165676360
            </p>
          </div>
          <div className="text-[9px] sm:text-base  m-1 border-black flex justify-around gap-2 ">
            {" "}
            <div className="w-1/2">
              <h3 className="font-bold   border-r-2 border-l-2 border-b-2 border-t-2 border-slate-400 ">GST No : 23AQBPP4905G1Z4</h3>
              <h3 className="font-bold   border-r-2 border-l-2 border-b-2 border-t-0 border-slate-400 ">SUBJECT TO INDORE JURISDICTION</h3>
              <h3 className="font-bold   border-r-2 border-l-2 border-b-2 border-t-0 border-slate-400 ">GOODS BOOKED AT OWNERS RISK</h3>
              <h3 className="font-bold text-base sm:text-2xl   border-r-2 border-l-2 border-b-2 border-t-0 border-slate-400 ">CONSIGNOR COPY
</h3>{" "}
            </div>
            <div className="w-1/2 flex-col gap-1 flex">
              <div className="flex border-collapse border-2 border-slate-400  ">
                <h3 className=" w-1/2 font-bold   border-r-2 border-l-0 border-b-0 border-t-0 border-slate-400 ">GR No : BHP135860</h3>
                <h3 className=" w-1/2 font-bold   border-r-0 border-l-0 border-b-0 border-t-0 border-black ">GR Date : 27/05/2023</h3>{" "}
              </div>
              <h3 className="font-bold   border-r-2 border-l-2 border-b-2 border-t-2 border-slate-400 ">From : BHOPAL</h3>
              <h3 className="font-bold   border-r-2 border-l-2 border-b-2 border-t-2 border-slate-400 ">To : RAJGARH (DHAR)</h3>
              <h3 className="font-bold   border-r-2 border-l-2 border-b-2 border-t-2 border-slate-400 ">Vehicle No :</h3>
            </div>{" "}
          </div>
          <div className=" border-r-0 border-l-0 border-b-2 border-t-2 text-[8px] sm:text-base  border-slate-400 flex flex-row justify-between ">
            <div>
              {" "}
              <div>
              <span className="font-bold">Consignor's Name & Address : </span> <span>  VETERINARY DISTRIBUTORS P. LTD</span>

              </div>
              <div>
              <span className="font-bold">Consignee Name & Address : </span> <span>Mukati Pharmaceuticals 8462082856 </span>

              </div>
            </div>
            <div>
              {" "}
              <div>

              <span className="font-bold">GST No. :</span>23AADCV9878P1ZB <span></span>
              </div>
              <div>

              <span className="font-bold">GST No. : </span> <span>23CILPP0641R1ZS</span>
              </div>
            </div>
          </div>
          <div className=" m-1 ">
            <div>
              <div className="text-[8px] sm:text-base border border-r-0 border-l-0 border-b-2 border-t-2 border-black grid grid-cols-8">
                
                <div className=" border-r-0 border-l-2 border-b-2 border-t-2 border-slate-400"  >Quantity</div>
                <div className=" border-r-0 border-l-2 border-b-2 border-t-2 border-slate-400" >Packing Mode</div>
                <div className=" border-r-0 border-l-2 border-b-2 border-t-2 border-slate-400" >Said To Content</div>
                <div className="border-r-2 border-l-2 border-b-2 border-t-2 border-slate-400">
                  <div class="   grid grid-cols-6 gap-0">
                    <div class=" border-r-1 border-l-1 border-b-2 border-t-0 border-slate-400 col-start-1 col-end-7 ...">
                      Weight
                    </div>
                    <div class=" border-r-2 border-l- border-b-0 border-t-0 border-slate-400 col-start-1 col-end-4 ...">
                      Actual
                    </div>
                    <div class=" border-r-1 border-l-1 border-b-0 border-t-0 border-slate-400 col-start-4 col-end-7 col-span-2 ...">
                      Charged
                    </div>
                  </div>
                </div>
                <div  className=" border-r-2 border-l-0 border-b-2 border-t-2 border-slate-400">Rate</div>
                <div  className=" border-r-2 border-l-0 border-b-2 border-t-2 border-slate-400">Freight </div>
                <div  className=" border-r-2 border-l-0 border-b-2 border-t-2 border-slate-400">Total</div>
               
                  <div class=" border-r-2 border-l-0 border-b-2 border-t-0 border-slate-400 grid grid-cols-6 gap-0">
                    <div class="  border-r-0 border-l-0 border-b-2 border-t-2 border-slate-400 col-start-1 col-end-7 ...">
                      Amount
                    </div>
                    <div class="  border-r-2 border-l-0 border-b-0 border-t-0 border-slate-400 col-start-1 col-end-4 ...">
                      Rs
                    </div>
                    <div class=" border-r-0 border-l-0 border-b-0 border-t-0 border-slate-400 col-start-4 col-end-7 col-span-2 ...">
                      Ps
                    </div>
                  </div>
              
              
                <div className=" border-r-0 border-l-2 border-b-2 border-t-0 border-slate-400">2</div>
                <div className=" border-r-0 border-l-2 border-b-2 border-t-0 border-slate-400">C/.R</div>
                <div className=" border-r-0 border-l-2 border-b-2 border-t-0 border-slate-400">MEDICINE</div>
                
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="  border-r-2 border-l-2 border-b-2 border-t-0 border-slate-400 col-start-1 col-end-4 ...">
                    40
                    </div>
                    <div class="  border-r-2 border-l-0 border-b-2 border-t-0 border-slate-400 col-start-4 col-end-7 col-span-2 ...">
                    40
                    </div>
                 
                </div>
                <div className=" border-r-2 border-l-0 border-b-2 border-t-0 border-slate-400">TBB</div>
                <div className=" border-r-2 border-l-0 border-b-2 border-t-0 border-slate-400">TBB </div>
                <div className=" border-r-2 border-l-0 border-b-2 border-t-0 border-slate-400">Total Freight</div>
               
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="  border-r-2 border-l-0 border-b-2 border-t-0 border-slate-400 col-start-1 col-end-4 ...">
                      TBB
                    </div>
                    <div class=" border-r-2 border-l-0 border-b-2 border-t-0 border-slate-400  col-start-4 col-end-7 col-span-2 ">
                      
                    </div>
               
                </div>

                {/* 3rd */}
             
              <div className="font-bold text-[8px] sm:text-base  border-r-2 border-l-2 text-right border-b-0 border-t-0 border-slate-400 col-start-1 col-end-8" >Sub Total</div>
              <div className="   col-start-8 col-end-9 grid grid-cols-6 gap-0"> 
              
                   
                   <div class="  border-r-2 border-l-0 border-b-0 border-t-0 border-slate-400 col-start-1 col-end-4 ...">
                     TBB
                   </div>
                   <div class=" border-r-2 border-l-0 border-b-0 border-t-0 border-slate-400  col-start-4 col-end-7 col-span-2 ">
                     
                   </div>
               
              
              </div> 


              <div className=" font-bold text-[8px] sm:text-base border-r-0 border-l-2 border-b-0 border-t-2 border-slate-400">Total Packages :</div>
              <div className=" font-bold text-[8px] sm:text-base border-r-0 border-l-2 border-b-0 border-t-2 border-slate-400">C/.R</div>
              <div className=" font-bold text-[8px] sm:text-base border-r-2 border-l-2 border-b-0 border-t-2 border-slate-400"></div>
                <div>
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="font-bold text-[8px] sm:text-base  border-r-2 border-l-0 border-b-0 border-t-2 border-slate-400 col-start-1 col-end-4 ...">
                    40
                    </div>
                    <div class="font-bold text-[8px] sm:text-base  border-r-2 border-l-0 border-b-0 border-t-2 border-slate-400 col-start-4 col-end-7 col-span-2 ...">
                    40
                    </div>
                  </div>
                </div>
                <div className="font-bold text-[8px] sm:text-base border-r-2 border-l-1 border-b-0 border-t-2 border-slate-400"></div>
                <div className="font-bold text-[8px] sm:text-base border-r-2 border-l-1 border-b-0 border-t-2 border-slate-400"> </div>
                <div className="font-bold text-[8px] sm:text-base border-r-2 border-l-1 border-b-0 border-t-2 border-slate-400">Tax Amount </div>
                
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="  border-r-2 border-l-0 border-b-0 border-t-2 border-slate-400 col-start-1 col-end-4 ...">
                      TBB
                    </div>
                    <div class=" border-r-2 border-l-0 border-b-0 border-t-2 border-slate-400  col-start-4 col-end-7 col-span-2 ">
                      
                   
                  </div>
                </div>
                <div className=" font-bold text-[8px] sm:text-base border-r-2 border-l-2 border-b-0 border-t-2 border-slate-400">Invoice No. :</div>
                <div className=" font-bold text-[8px] sm:text-base border-r-2 border-l-1 border-b-0 border-t-2 border-slate-400">131</div>
                <div className=" font-bold text-[8px] sm:text-base border-r-2 border-l-1 border-b-0 border-t-2 border-slate-400">Values Rs. :</div>
                
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="font-bold text-[8px] sm:text-base  border-r-2 border-l-0 border-b-0 border-t-2 border-slate-400 col-start-1 col-end-4 ...">
                    13687.00
                    </div>
                    <div class="font-bold text-[8px] sm:text-base  border-r-2 border-l-0 border-b-0 border-t-2 border-slate-400 col-start-4 col-end-7 col-span-2 ...">
                    
                    </div>
                  
                </div>
                <div className=" font-bold text-[8px] sm:text-base border-r-2 border-l-1 border-b-0 border-t-2 border-slate-400"></div>
                <div className=" font-bold text-[8px] sm:text-base border-r-2 border-l-1 border-b-0 border-t-2 border-slate-400"> </div>
                <div className=" font-bold text-[8px] sm:text-base border-r-2 border-l-1 border-b-0 border-t-2 border-slate-400">Advance</div>
                
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class="  border-r-2 border-l-0 border-b-0 border-t-2 border-slate-400 col-start-1 col-end-4 ...">
                      TBB
                    </div>
                    <div class="border- border-r-2 border-l-0 border-b-0 border-t-2 border-slate-400  col-start-4 col-end-7 col-span-2 ">
                      
                    
                  </div>
                </div>


                <div  class=" font-bold border-r-2 border-l-2 border-b-0 border-t-2 border-slate-400 col-start-1 col-end-5">Private Marka : </div>
                <div  class="  border-r-2 border-l-1 border-b-0 border-t-2 border-slate-400 col-start-5 col-end-6"> </div>
                <div  class="  border-r-2 border-l-1 border-b-0 border-t-2 border-slate-400 col-start-6 col-end-9"> </div>
               
                <div  class="  border-r-2 border-l-2 border-b-2 font-bold border-t-2 border-slate-400 col-start-1 col-end-5">Transport Delivery</div>
                <div  class="  border-r-2 border-l-1 border-b-2 font-bold border-t-2 border-slate-400 col-start-5 col-end-6">TO BE BILLED</div>
                <div  class="  border-r-2 border-l-1 border-b-2 font-bold border-t-2 border-slate-400 col-start-6 col-end-7">TBB</div>
                <div  class="  border-r-2 border-l-1 border-b-2 font-bold border-t-2 border-slate-400 col-start-7 col-end-8">Grand Total</div>
                <div  class="  border-r-2 border-l-1 border-b-2 font-bold border-t-2 border-slate-400 col-start-8 col-end-9"><div class=" grid grid-cols-6 gap-0">
                   
                   <div class="  border-r-2 border-l-1 border-b-0 border-t-0 border-slate-400 col-start-1 col-end-4 ...">
                     TBB
                   </div>
                   <div class="border- border-r-0 border-l-0 border-b-0 border-t-0 border-slate-400  col-start-4 col-end-7 col-span-2 ">
                     
                   </div>
                 </div></div>
              
              </div>
             

{/* nknj */}
              <div
                style={{
                  position: "fixed",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: ".0",
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
          <div className="border-2 m-1 flex justify-between border-slate-400">
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
        <div></div>
      </div>
    </div>
  );
};

export default RPTreport;
