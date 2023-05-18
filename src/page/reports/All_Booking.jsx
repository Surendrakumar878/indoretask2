import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";

const All_Booking = () => {
    

    const [data,setDate]=useState([])
    const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);
    const [vehicle,setVehicle]=useState()
    const [booking_date,setbooking_date]=useState("")
    const [booking_no,setBooking_no]=useState()
    const [from,setFrom]=useState("")
    const [to,setto]=useState()
    const [vehicle_type,setvehicle_type]=useState("")
    console.log(vehicle)
    useEffect( ()=>{
        const registerUserdata= async()=>{
            axios.get("http://localhost:3004/booking")  
            .then(res=>setUserdata(res.data) )
            .catch(error=>console.log(error)); 
            
        }
        registerUserdata();
        
        setDate(userData.filter((res)=>res.vehicle_no.slice(0,1)==vehicle||res.vehicle_no.slice(0,2)==vehicle||res.vehicle_no.slice(0,3)==vehicle||res.vehicle_no.slice(0,4)==vehicle||res.vehicle_no==vehicle||res.vehicle_no.includes(vehicle)))
    },[vehicle]);
    

    useEffect(()=>{
        setDate(userData.filter((res)=>res.from.slice(0,1)==from||res.from.slice(0,2)==from||res.from.slice(0,3)==from||res.from.slice(0,4)==from||res.from==from||res.from.includes(from)))
   
    },[from])

    useEffect(()=>{
        setDate(userData.filter((res)=>res.booking_no.slice(0,1)==booking_no||res.booking_no.slice(0,2)==booking_no||res.booking_no.slice(0,3)==booking_no||res.booking_no.slice(0,4)==booking_no||res.booking_no==booking_no||res.booking_no.includes(booking_no)))
   
    },[booking_no])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.booking_date.slice(0,1)==booking_date||res.booking_date.slice(0,2)==booking_date||res.booking_no.slice(0,3)==booking_date||res.booking_date.slice(0,4)==booking_date||res.booking_date==booking_date||res.booking_date.includes(booking_date)))
   
    },[booking_date])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.to.slice(0,1)==to||res.booking_no.slice(0,2)==booking_no||res.booking_no.slice(0,3)==booking_no||res.booking_no.slice(0,4)==booking_no||res.booking_no==booking_no||res.to.includes(to)))
   
    },[to])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.vehicle_type.slice(0,1)==vehicle_type||res.booking_no.slice(0,2)==booking_no||res.booking_no.slice(0,3)==booking_no||res.booking_no.slice(0,4)==booking_no||res.booking_no==booking_no||res.vehicle_type.includes(vehicle_type)))
   
    },[vehicle_type])

    const generatePDF= useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle:"Userdata",
        onAfterPrint:()=>alert("Data saved in PDF")
    });
    console.log(userData)
    
    
    
    
    //  const data2=userData.filter((res)=>res.vehicle_no.slice(0,1)==owner||res.vehicle_no.slice(0,2)==owner||res.vehicle_no.slice(0,3)==owner||res.vehicle_no.slice(0,4)==owner||res.vehicle_no==owner)
    
    console.log(booking_date)
    return (
        <div>
     <React.Fragment>
            <div className=" sm:w-[99%]  sm:m-auto ">
                <div className="">
                    <div className="">
                      
                    
                   <div ref={conponentPDF}  className=" relative sm:w-full sm:m-auto w-full    border-black ">
                    <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full"> All Booking </div> 
                    <div className="  pb-2">

                    <div className="m-auto sm:m-0 w-[80%] grid grid-cols-2 gap-2 px-2 sm:grid sm:grid-cols-6 sm:gap-2 sm:py-3">

                    <div className="w-full">
                        <label className=" text-[10px] sm:text-base " >Vehicle No :  </label>
             <input className="border border-collapse px-1 text-[10px] w-full lg:w-full sm:w-32 sm:text-xs rounded-sm" type="number" placeholder="Search by Vehicle No" value={vehicle} onChange={(e)=>setVehicle(e.target.value)} />
                </div  >
                <div className="w-full">
                        <label className=" text-[10px] sm:text-base " > Booking No :  </label>
             <input className="border border-collapse px-1 text-[10px] w-full lg:w-full sm:w-32 sm:text-xs rounded-sm" type="text" placeholder="Search by Booking No" value={booking_no} onChange={(e)=>setBooking_no(e.target.value)} />
                </div>

                
                <div className="w-full">
                        <label className=" text-[10px] sm:text-base " >Booking date :  </label>
             <input className="border border-collapse px-1 text-[10px] w-full lg:w-full sm:w-32 sm:text-xs rounded-sm" type="date" placeholder="Search by Booking date" value={booking_date} onChange={(e)=>setbooking_date(e.target.value)} />
                </div>
                <div className="w-full">
                        <label className=" text-[10px] sm:text-base " > From :  </label>
             <input className="border border-collapse px-1 text-[10px] w-full lg:w-full sm:w-32 sm:text-xs rounded-sm" type="text" placeholder="Search by From" value={from} onChange={(e)=>setFrom(e.target.value)} />
                </div>
                
                <div className="w-full">
                        <label className=" text-[10px] sm:text-base " >To :  </label>
             <input className="border border-collapse px-1 text-[10px] w-full lg:w-full sm:w-32 sm:text-xs rounded-sm" type="text   " placeholder="Search by To" value={to} onChange={(e)=>setto(e.target.value)} />
                </div>
                <div className="w-full">
                        <label className=" text-[10px] sm:text-base " > Vehicle Type:  </label>
             <input className="border border-collapse px-1 text-[10px] w-full sm:w-32 sm:text-xs rounded-sm" type="text" placeholder="Search by  Vehicle Type" value={vehicle_type} onChange={(e)=>setvehicle_type(e.target.value)} />
                </div>
                    </div>
                    <table className=" w-full " >
                        <thead className="bg-[#151B54] w-full text-white">
                           <tr>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">Sr. No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300"> Booking Id</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Booking No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Booking date</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle No </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">From</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">To</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle Type </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Action</th>
                            
                            </tr>  
                        </thead>
                        <tbody>
                            {
                                data.map( (uData, index)=>(
                                 <tr key={index}>
                                <td className="sm:px-2 px-2 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_id}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_no}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.vehicle_no}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.from}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.to}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.vehicle_type}</td>
                         
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

export default All_Booking
