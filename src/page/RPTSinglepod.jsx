import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import r from './rptsinglepod.module.css'
import rr from "./rpt.module.css"
const RPTSinglepod = () => {
  const conponentPDF = useRef();
  const ref = useRef();

  const [userData, setUserdata] = useState([]);
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",

  });
  const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('#loading');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('l', 'px', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight =150;
      doc.addImage(imgData, 'PNG', 1, 1, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }
  return (
    <div className='w-[98%] m-auto mt-10'>
      <div id="loading"  className='sm:w-[80%] m-auto sm:p-20'>

     
     <div ref={conponentPDF}   class={`grid grid-cols-4 m-auto relative gap-0  ${r.border}`}>
  <div class="pl-1 pt-1 pb-2  ">POD ID:</div>
  <div class="pl-1 pt-1 pb-2">POD NO:</div>
  <div class="pl-1 pt-1 pb-2 ">POD DATE/TIME</div>
  <div class="pl-1 pt-1 pb-2 ">Vehicle no:</div>
  <div class="pl-1 pt-1 pb-2 ">Booking id:</div>
  <div class="pl-1 pt-1 pb-2">Booking date/time:</div>
  <div class="pl-1 pt-1 pb-2 "> <p>Station fro :</p>
  <p>Station to :</p> </div>
  <div class="pl-1 pt-1 pb-2 ">
    <p>Reporting date/time</p>
    <p>Unloading date/time</p>
  

    </div>
  <div class="pl-1 pt-1 pb-2  col-span-2 ...">Driver name:</div>
  <div class="pl-1 pt-1 pb-2">Goods name</div>
  <div class=" pl-1 pt-1 pb-2 ">
    
    <p>Loading weight:</p>
    <p>Unloading weight:</p>
    <p>Weight difference:</p>
    

</div>
  <div class=" pl-1 pt-1 pb-2 col-start-1 col-end-5 ...">Submitted by :Transporter name</div>
  <div   style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.1',
        fontSize: '48px',
        // color: 'red',
        transform: 'rotate(0deg)',
        pointerEvents: 'none',
      }}>

<img className="w-20 sm:w-60" src="transduniyalogo.png" alt="" />

</div>
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
  )
}

export default RPTSinglepod
