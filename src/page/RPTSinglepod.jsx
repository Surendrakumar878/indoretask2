import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';

const RPTSinglepod = () => {
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
      const doc = new jsPDF('l', 'px', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 1, 1, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }
  return (
    <div className='w-[98%] m-auto mt-10'>
      <div id="loading"  className='sm:w-[60%] m-auto sm:p-20'>

     
     <div ref={conponentPDF}   class="grid grid-cols-4 m-auto relative  gap-0">
  <div class=" border-collapse border border-black border-2 ">POD ID:</div>
  <div class=" border-collapse border border-black border-t-2 border-r-2 border-b-2 border-l-0">POD NO:</div>
  <div class=" border-collapse border border-black  border-t-2 border-r-2 border-b-2 border-l-0 ">POD DATE/TIME</div>
  <div class=" border-collapse border border-black  border-t-2 border-r-2 border-b-2 border-l-0 ">Vehicle no:</div>
  <div class=" border-collapse border border-black  border-t-0 border-r-2 border-b-2 border-l-2 ">Booking id:</div>
  <div class=" border-collapse border border-black  border-t-0 border-r-2 border-b-2 border-l-0">Booking date/time:</div>
  <div class=" border-collapse border border-black  border-t-0 border-r-2 border-b-2 border-l-0 "> <p>Station fro :</p>
  <p>Station to :</p> </div>
  <div class=" border-collapse border border-black  border-t-0 border-r-2 border-b-2 border-l-0 ">
    <p>Reporting date/time</p>
    <p>Unloading date/time</p>
  

    </div>
  <div class=" border-collapse border border-black  border-t-0 border-r-2 border-b-0 border-l-2  col-span-2 ...">Driver name:</div>
  <div class="border-collapse border border-black  border-t-0 border-r-2 border-b-0 border-l-0 ...">Goods name</div>
  <div class="  border-collapse border border-black  border-t-0 border-r-2 border-b-0 border-l-0 ...">
    
    <p>Loading weight:</p>
    <p>Unloading weight:</p>
    <p>Weight difference:</p>
    

</div>
  <div class="  border-collapse border border-black  border-t-2 border-r-2 border-b-2 border-l-2 col-start-1 col-end-5 ...">Submitted by :Transporter name</div>
</div>
</div>
<div   style={{
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
  )
}

export default RPTSinglepod
