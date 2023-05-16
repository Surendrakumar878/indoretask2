import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import { DatePicker } from "antd";

const View_Pod = () => {
    
      

    const [data,setDate]=useState([])
    const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);
   
    const [vehicle,setVehicle]=useState()
    const [booking_date,setbooking_date]=useState("")
    const [booking_no,setBooking_no]=useState()
    const [pod_no,setPod_no]=useState()
    const [report_date,setReport_date]=useState("")
    const [unloading_date,setunloading_date]=useState()
    const [pod_date,setpod_date]=useState("")
    console.log(vehicle)
    useEffect( ()=>{
        const registerUserdata= async()=>{
            axios.get("http://localhost:3004/pod")  
            .then(res=>setUserdata(res.data) )
            .catch(error=>console.log(error)); 
            
        }
        registerUserdata();
        
        setDate(userData.filter((res)=>res.vehicle_no.slice(0,1)==vehicle||res.vehicle_no.slice(0,2)==vehicle||res.vehicle_no.slice(0,3)==vehicle||res.vehicle_no.slice(0,4)==vehicle||res.vehicle_no==vehicle||res.vehicle_no.includes(vehicle)))
    },[vehicle]);
    

    useEffect(()=>{
        setDate(userData.filter((res)=>res.pod_no.slice(0,1)==pod_no||res.pod_no.slice(0,2)==pod_no||res.pod_no.slice(0,3)==pod_no||res.pod_no.slice(0,4)==pod_no||res.pod_no==pod_no||res.pod_no.includes(pod_no)))
   
    },[pod_no])

    useEffect(()=>{
        setDate(userData.filter((res)=>res.booking_no.slice(0,1)==booking_no||res.booking_no.slice(0,2)==booking_no||res.booking_no.slice(0,3)==booking_no||res.booking_no.slice(0,4)==booking_no||res.booking_no==booking_no||res.booking_no.includes(booking_no)))
   
    },[booking_no])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.booking_date.slice(0,1)==booking_date||res.booking_date.slice(0,2)==booking_date||res.booking_no.slice(0,3)==booking_date||res.booking_date.slice(0,4)==booking_date||res.booking_date==booking_date||res.booking_date.includes(booking_date)))
   
    },[booking_date])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.unloading_date.slice(0,1)==unloading_date||res.booking_no.slice(0,2)==booking_no||res.booking_no.slice(0,3)==booking_no||res.booking_no.slice(0,4)==booking_no||res.booking_no==booking_no||res.unloading_date.includes(unloading_date)))
   
    },[unloading_date])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.pod_date.slice(0,1)==pod_date||res.pod_date.slice(0,2)==pod_date||res.pod_date.slice(0,3)==pod_date||res.pod_date.slice(0,4)==pod_date||res.pod_date==pod_date||res.pod_date.includes(pod_date)))
   
    },[pod_date])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.report_date.slice(0,1)==report_date||res.report_date.slice(0,2)==report_date||res.report_date.slice(0,3)==report_date||res.report_date.slice(0,4)==report_date||res.report_date==report_date||res.report_date.includes(report_date)))
   
    },[report_date])

   
    console.log(userData)
    console.log(booking_date)
    return (
        <div>
     <React.Fragment>
            <div className=" sm:w-[99%]  sm:m-auto ">
                <div className="">
                    <div className="">
                      <div ref={conponentPDF}  className=" relative sm:w-full sm:m-auto w-full    border-black ">
                    <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full"> POD VIEW </div> 
                    <div className="  pb-2">
                    <div className="m-auto sm:m-0 w-[90%] grid grid-cols-2 gap-2 px-2 sm:grid sm:grid-cols-6 sm:gap-2 sm:py-3">
                        <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Vehicle No :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="number" placeholder="Search by Vehicle" value={vehicle} onChange={(e)=>setVehicle(e.target.value)} />
                </div>
                <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Pod No :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="number" placeholder="Search by pod no" value={pod_no} onChange={(e)=>setPod_no(e.target.value)} />
                </div>
                <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Booking No :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="text" placeholder="Search by booking no" value={booking_no} onChange={(e)=>setBooking_no(e.target.value)} />
                </div>

                
                <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Booking date :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="date" placeholder="Search by Vehicle" value={booking_date} onChange={(e)=>setbooking_date(e.target.value)} />
           
                </div>
                <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Pod Date :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="date" placeholder="Search by Name" value={pod_date} onChange={(e)=>setpod_date(e.target.value)} />
                </div>
                
                <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Report Date :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="date" placeholder="Search by Vehicle" value={report_date} onChange={(e)=>setReport_date(e.target.value)} />
                </div>
                <div>
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Unloading Date:  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 sm:w-32 sm:text-xs rounded-sm" type="date" placeholder="Search by Name" value={unloading_date} onChange={(e)=>setunloading_date(e.target.value)} />
                </div>
                    </div>
                    <table className=" w-full " >
                        <thead className="bg-[#151B54] w-full text-white">
                           <tr>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">Sr. No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300"> Pod Id</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Pod No  </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Pod Date  </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Booking No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Booking Date</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle No </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Report Date</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Unloading Date</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Action</th>
                            
                            </tr>  
                        </thead>
                        <tbody>
                            {
                                data.map( (uData, index)=>(
                                 <tr key={index}>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.pod_id}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.pod_no}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.pod_date}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_no}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.vehicle_no}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.report_date}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.unloading_date}</td>
                         
                                <td className="sm:px-3 px-2 sm:text-base text-base border lg:text-[11px] border-slate-300"> 
                                
                                <div className="  m-auto">

                                <button className=" center bg-[#151B54] sm:py-2 sm:px-2 w-16 m-auto sm:w-32 sm:text-base text-[6px] lg:text-[11px] rounded-md text-white ">Edit</button> 
                                
                                </div>
                                </td>
                              
                                
                            </tr>
                            )) }
                        </tbody>                        
                    </table>         
                  
</div>
<h1 className="text-end text-xs">Powered by : www.transduniya.com-97553-22022 </h1>
</div> 
{/* <div className="m-auto w-full text-center flex gap-2 justify-center " >
                    <button className="btn btn-success bg-[#151B54] py-2 px-2 w-14 sm:w-32 text-[10px] sm:text-base mt-10 rounded-lg text-white " onClick={ generatePDF}>Download</button>  
                    <button className="btn btn-success bg-[#151B54] py-2 px-2 w-14 sm:w-32 text-[10px] sm:text-base mt-10 rounded-lg text-white " onClick={ generatePDF}>Print</button>                       
                    </div>  */}
                    </div>
                </div>
            </div>           
        </React.Fragment>
    </div>
  )
}

export default View_Pod
