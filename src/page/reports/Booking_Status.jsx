import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import { DatePicker } from "antd";

const Booking_Status = () => {
    
      

    const [data,setDate]=useState([])
    const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);
   
    const [freight_slip_no,setfreight_slip_no]=useState("")
    const [booking_date,setbooking_date]=useState("")
    const [booking_no,setBooking_no]=useState("")
    const [pod_no,setPod_no]=useState("")
    const [freight_slip_date,setfreight_slip_date]=useState("")
    const [loading_date,setloading_date]=useState("")
    const [loading_no,setloading_no]=useState("")
    const [pod_date,setpod_date]=useState("")
    
    useEffect( ()=>{
        const registerUserdata= async()=>{
            axios.get("http://localhost:3004/booking")  
            .then(res=>{setUserdata(res.data)
                setDate(res.data)} )
            .catch(error=>console.log(error)); 
            
        }
        registerUserdata();
        
        // setDate(userData.filter((res)=>res.freight_slip_no.includes(freight_slip_no)))
    },[]);
    useEffect(()=>{
        setDate(userData.filter((res)=>res.freight_slip_no.includes(freight_slip_no)))
    },[freight_slip_no]);

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
        setDate(userData.filter((res)=>res.loading_date.includes(loading_date)))
   
    },[loading_date])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.loading_no.includes(loading_no)))
   
    },[loading_no])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.pod_date.slice(0,1)==pod_date||res.pod_date.slice(0,2)==pod_date||res.pod_date.slice(0,3)==pod_date||res.pod_date.slice(0,4)==pod_date||res.pod_date==pod_date||res.pod_date.includes(pod_date)))
   
    },[pod_date])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.freight_slip_date.includes(freight_slip_date)))
   
    },[freight_slip_date])

   
    console.log(userData)
    console.log(booking_date)
    return (
        <div>
     <React.Fragment>
            <div className=" sm:w-[99%]  sm:m-auto ">
                <div className="">
                    <div className="">
                      <div ref={conponentPDF}  className=" relative sm:w-full sm:m-auto w-full    border-black ">
                    <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full"> Booking Status </div> 
                    <div className="  pb-2">
                    <div className="m-auto sm:m-0 w-[80%] sm:w-full grid grid-cols-2 gap-2 px-2 sm:grid sm:grid-cols-6 sm:gap-2 sm:py-3">
                        <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Freight slip No :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="number" placeholder="Search by Freight slip No" value={freight_slip_no} onChange={(e)=>setfreight_slip_no(e.target.value)} />
                </div>
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Loading No :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="number" placeholder="Search by Loading No" value={loading_no} onChange={(e)=>setloading_no(e.target.value)} />
                </div>
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Pod No :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="number" placeholder="Search by Pod No" value={pod_no} onChange={(e)=>setPod_no(e.target.value)} />
                </div>
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Booking No :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="text" placeholder="Search by booking no" value={booking_no} onChange={(e)=>setBooking_no(e.target.value)} />
                </div>

                
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Booking date :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="date" placeholder="Search by Booking date" value={booking_date} onChange={(e)=>setbooking_date(e.target.value)} />
           
                </div>
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Pod Date :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="date" placeholder="Search by Pod Date" value={pod_date} onChange={(e)=>setpod_date(e.target.value)} />
                </div>
                
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Loading Date :  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="date" placeholder="Search by Loading Date" value={loading_date} onChange={(e)=>setloading_date(e.target.value)} />
                </div>
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Freight Slip  Date:  </label>
             <input className="border border-collapse px-1 text-[10px] w-28 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="date" placeholder="Search by Freight Slip  Date:" value={freight_slip_date} onChange={(e)=>setfreight_slip_date(e.target.value)} />
                </div>
                    </div>
                    <table className=" w-full " >
                        <thead className="bg-[#151B54] w-full text-white">
                           <tr>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">Sr. No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Booking No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Booking Date</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Pod No  </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Pod Date  </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300"> Loading No </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Loading date </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Freight Slip Date</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Freight Slip No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Action</th>
                            
                            </tr>  
                        </thead>
                        <tbody>
                            {
                                data.map( (uData, index)=>(
                                 <tr key={index}>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_no}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.pod_no}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.pod_date}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.loading_no}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.loading_date}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.freight_slip_no}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.freight_slip_date}</td>
                         
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

</div> 

                    </div>
                </div>
            </div>           
        </React.Fragment>
    </div>
  )
}

export default Booking_Status
