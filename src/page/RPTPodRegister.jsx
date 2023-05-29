import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import 'jspdf-autotable';
const RPTPodRegister = () => {
    const [data,setDate]=useState({
        name:"ram transport",
        email:"email@gmail.com",
        mobilenumber:7222082282,
        address:"106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP",
        reportname:"Pod Register",
        date:"4/20/2023",
        date_From : "4/20/2023" ,
        to : "4/20/2023"

    })
        const conponentPDF= useRef();
        const [userData, setUserdata]= useState([1,3,4,4,4,4,4,4,4,4,4,4,4,4,4]);
      
        useEffect( ()=>{
            const registerUserdata= async()=>{
             axios.get("http://localhost:4000/Vehicle")  
             .then(res=>setUserdata(res.data.data) )
             .catch(error=>console.log(error)); 
    
            }
            registerUserdata();
        },[]);
    
        const generatePDF= useReactToPrint({
            content: ()=>conponentPDF.current,
            documentTitle:"Userdata",
            onAfterPrint:()=>alert("Data saved in PDF")
        });
           console.log(userData)
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
                      
                    
                   <div ref={conponentPDF}  className=" relative sm:w-full sm:m-auto w-auto lg:w-auto  ">
                    <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full"> POD Register</div> 
                    <div className="  pb-2">

                    
                    <div className=" border border-t-1  border-slate-700 border-b-1 border-r-1 border-l-1 w-[99.%] ">
                <h1 className=" pl-1 font-bold  text-[10px]"> {data.name}</h1>
                <h1 className=" pl-1 font-bold  text-[10px]"> {data.email} </h1>
                <p className="pl-1 text-[10px] ">{data.mobilenumber} </p>
                <p className="pl-1 text-[10px]">{data.address}</p>
                <p className="pl-1 text-[10px]">{data.reportname}</p>
               
              
                <h1 className="pl-1 font-bold  text-[10px] border border-t-1  border-slate-700 border-b-0 border-r-0 border-l-0 ">
                  Date From : {data.date_From} To :{data.to}
                </h1>
                </div>
                    <table id="my-table" className=" w-full " >
                        <thead className="bg-[#151B54] w-full text-white">
                           <tr>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">Sr. No</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300"> Pod No</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Pod Date</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Booking Id</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Booking Number</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Booking Date/Time</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">vehicle No </th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">From </th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">To</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Goods</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Loading wt</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Unloading wt</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300"> Difference wt</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Reporting Date/Time</th>
                            <th className="lg:text-[10px] text-[8px] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Unloading Date/Time</th>
                            </tr>  
                        </thead>
                        <tbody>
                            {
                                userData.map( (uData, index)=>(
                                 <tr key={index}>
                                <td className="sm:px-2 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] border border-slate-300">{index+1}</td>
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

<img className="w-40" src="transduniyalogo.png" alt="" />

</div>
</div>
<h1 className="text-end text-xs">Powered by : www.transduniya.com-97553-22022 </h1>
</div>
<div className="m-auto w-full text-center" >
                    <button className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " onClick={exportPDF}>Download</button>  <button className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " onClick={ generatePDF}>Print</button>                       
                    </div> 
                    </div>
                </div>
            </div>           
        </React.Fragment>
    </div>
  )
}

export default RPTPodRegister