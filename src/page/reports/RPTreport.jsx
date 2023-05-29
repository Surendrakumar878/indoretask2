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
        <div className="   w-[100%] sm:w-[100%]  border-2 border-black m-auto py-10">
          <div className="border-2 border-black">
            {" "}
            <h1 className=" text-center text-base font-semibold sm:font-bold sm:text-3xl sm:text-center">
              RAHUL ROADLINES
            </h1>
            <p className=" text-center text-base font-semibold sm:font-bold sm:text-base sm:text-center">
              H.O : Plot no-106,Near Pani Pouch Factory,Opp.Star Steel,Bhopal
              Mobile-9754167448,07554277142 B.O : Near Parik Transport wali
              Gali,New Loha Mandi,Indore
              Mobile9303721552,9039042350,07314278131B.O : Glend
              Mark,Pharmaceutical,S.R.Compound,Dewas Naka,Indore
              Mobile-9165676360
            </p>
          </div>
          <div className="border border-r-0 border-l-0 border-b-2 border-t-2  m-1 border-black flex justify-around ">
            {" "}
            <div>
              <h3>dmfbvjdhfbv</h3>
              <h3>dmfbvjdhfbv</h3>
              <h3>dmfbvjdhfbv</h3>
              <h3>dmfbvjdhfbv</h3>{" "}
            </div>
            <div>
              <div className="flex">
                <h3>dmfbvjdhfbv</h3>
                <h3>dmfbvjdhfbv</h3>{" "}
              </div>
              <h3>dmfbvjdhfbv</h3>
              <h3>dmfbvjdhfbv</h3>
              <h3>dmfbvjdhfbv</h3>
            </div>{" "}
          </div>
          <div className="border-2 m-1 border-black flex flex-row justify-between ">
            <div>
              {" "}
              <p>sds</p>
              <p>dfs</p>{" "}
            </div>
            <div>
              {" "}
              <p>dsf</p>
              <p>dsfs</p>{" "}
            </div>{" "}
          </div>
          <div className=" m- ">
            <div>
              <div className="border border-r-0 border-l-0 border-b-2 border-t-2 border-black grid grid-cols-8">
                
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black"  >Quantity</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black" >Packing Mode</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black" >Said To Content</div>
                <div>
                  <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black grid grid-cols-6 gap-0">
                    <div class="border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-7 ...">
                      Weight
                    </div>
                    <div class="border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-4 ...">
                      Actual
                    </div>
                    <div class="border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-4 col-end-7 col-span-2 ...">
                      Charged
                    </div>
                  </div>
                </div>
                <div  className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">Rate</div>
                <div  className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">Freight </div>
                <div  className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">Total</div>
                <div>
                  <div class="border border-r-1 border-l-1 border-b-2 border-t-2 border-black grid grid-cols-6 gap-0">
                    <div class=" border border-r-0 border-l-0 border-b-2 border-t-2 border-black col-start-1 col-end-7 ...">
                      Amount
                    </div>
                    <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-4 ...">
                      Rs
                    </div>
                    <div class="border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-4 col-end-7 col-span-2 ...">
                      Ps
                    </div>
                  </div>
                </div>
              
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">2</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">C/.R</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">MEDICINE</div>
                <div>
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-4 ...">
                    40
                    </div>
                    <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-4 col-end-7 col-span-2 ...">
                    40
                    </div>
                  </div>
                </div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">TBB</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">TBB </div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">Total Freight</div>
                <div>
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-4 ...">
                      TBB
                    </div>
                    <div class="border-collapse border-r-0 border-l-0 border-b-0 border-t-0 border-black  col-start-4 col-end-7 col-span-2 ">
                      
                    </div>
                  </div>
                </div>

                {/* 3rd */}
             
              <div className=" border border-r-1 border-l-1 text-right border-b-2 border-t-2 border-black col-start-1 col-end-8" >Sub Total</div>
              <div className=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-8 col-end-9"> 
              <div class=" grid grid-cols-6 gap-0">
                   
                   <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-4 ...">
                     TBB
                   </div>
                   <div class="border-collapse border-r-0 border-l-0 border-b-2 border-t-2 border-black  col-start-4 col-end-7 col-span-2 ">
                     
                   </div>
                 </div>
              
              </div> 


              <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">2</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">C/.R</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">MEDICINE</div>
                <div>
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-4 ...">
                    40
                    </div>
                    <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-4 col-end-7 col-span-2 ...">
                    40
                    </div>
                  </div>
                </div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">TBB</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">TBB </div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">Total Freight</div>
                <div>
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-4 ...">
                      TBB
                    </div>
                    <div class="border-collapse border-r-0 border-l-0 border-b-2 border-t-0 border-black  col-start-4 col-end-7 col-span-2 ">
                      
                    </div>
                  </div>
                </div><div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">2</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">C/.R</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">MEDICINE</div>
                <div>
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-4 ...">
                    40
                    </div>
                    <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-4 col-end-7 col-span-2 ...">
                    40
                    </div>
                  </div>
                </div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">TBB</div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">TBB </div>
                <div className="border border-r-1 border-l-1 border-b-2 border-t-2 border-black">Total Freight</div>
                <div>
                  <div class=" grid grid-cols-6 gap-0">
                   
                    <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-4 ...">
                      TBB
                    </div>
                    <div class="border-collapse border-r-1 border-l-0 border-b-0 border-t-1 border-black  col-start-4 col-end-7 col-span-2 ">
                      
                    </div>
                  </div>
                </div>


                <div  class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-5">Private Marka : </div>
                <div  class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-5 col-end-6"> </div>
                <div  class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-6 col-end-9"> </div>
               
                <div  class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-5">Transport Delivery</div>
                <div  class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-5 col-end-6">TO BE BILLED</div>
                <div  class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-6 col-end-7">TBB</div>
                <div  class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-7 col-end-8">Grand Total</div>
                <div  class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-8 col-end-9"><div class=" grid grid-cols-6 gap-0">
                   
                   <div class=" border border-r-1 border-l-1 border-b-2 border-t-2 border-black col-start-1 col-end-4 ...">
                     TBB
                   </div>
                   <div class="border-collapse border-r-0 border-l-0 border-b-0 border-t-0 border-black  col-start-4 col-end-7 col-span-2 ">
                     
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
          <div className="border-2 m-1 flex justify-between border-black">
            {" "}
            <h3>Delivery Address:
</h3>
            <h3>Delivery Address:
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
