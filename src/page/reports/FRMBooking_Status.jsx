import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
const FRMBooking_Status = () => {
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
                setDate(res.data.slice(0,100))} )
            .catch(error=>console.log(error)); 
            
        }
        registerUserdata();

    },[]);
    useEffect(()=>{
        setDate(userData.filter((res)=>res.freight_slip_no.includes(freight_slip_no)))
    },[freight_slip_no]);

    useEffect(()=>{
        setDate(userData.filter((res)=>res.pod_no.includes(pod_no)))
   
    },[pod_no])

    useEffect(()=>{
        setDate(userData.filter((res)=>res.booking_no.includes(booking_no)))
   
    },[booking_no])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.booking_date.includes(booking_date)))
   
    },[booking_date])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.loading_date.includes(loading_date)))
   
    },[loading_date])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.loading_no.includes(loading_no)))
   
    },[loading_no])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.pod_date.includes(pod_date)))
   
    },[pod_date])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.freight_slip_date.includes(freight_slip_date)))
   
    },[freight_slip_date])

   
    console.log(userData)
    console.log(booking_date)
    const [pagenumber, setPagenumber]= useState(0);
    const perpage=10;
    const pageclick= pagenumber*perpage;
    const countpage= Math.ceil(data.length/perpage);
   console.log(countpage)
    const changePage=({selected})=>{
      setPagenumber(selected);
    }
    return (
        <div>
     <React.Fragment>
            <div className=" sm:w-[99%]  sm:m-auto ">
                <div className="">
                    <div className="">
                      <div ref={conponentPDF}  className=" relative sm:w-full sm:m-auto w-full    border-black ">
                    <div className="mt-0 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full"> Booking Status </div> 
                    <div className="  pb-2">
                    <div className="m-auto sm:m-auto gap-1 w-[98%] sm:w-full grid grid-cols-2 py-2  px-2 sm:grid sm:grid-cols-6 sm:gap-1 sm:p-2 sm:py-3">
                        <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Freight slip No :  </label>
             <input className="border border-collapse p-1 sm:p-2 text-[12px]  w-40 lg:w-full sm:w-32 sm:text-xs rounded-md" type="number" placeholder="Search by Freight slip No" value={freight_slip_no} onChange={(e)=>setfreight_slip_no(e.target.value)} />
                </div>
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Loading No :  </label>
             <input className="border border-collapse p-1 sm:p-2 text-[12px]  w-40 lg:w-full sm:w-32 sm:text-xs rounded-md" type="number" placeholder="Search by Loading No" value={loading_no} onChange={(e)=>setloading_no(e.target.value)} />
                </div>
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Pod No :  </label>
             <input className="border border-collapse p-1 sm:p-2 text-[12px]  w-40 lg:w-full sm:w-32 sm:text-xs rounded-md" type="number" placeholder="Search by Pod No" value={pod_no} onChange={(e)=>setPod_no(e.target.value)} />
                </div>
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Booking No :  </label>
             <input className="border border-collapse p-1 sm:p-2 text-[12px]  w-40 lg:w-full sm:w-32 sm:text-xs rounded-md" type="text" placeholder="Search by booking no" value={booking_no} onChange={(e)=>setBooking_no(e.target.value)} />
                </div>

                
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Booking date :  </label>
             <input max="2099-12-25T23:59"  className="border border-collapse p-1 sm:p-2 text-[12px]  w-40 lg:w-full sm:w-32 sm:text-xs rounded-md" type="datetime-local" placeholder="Search by Booking date" value={booking_date} onChange={(e)=>setbooking_date(e.target.value)} />
           
                </div>
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Pod Date :  </label>
             <input max="2099-12-25T23:59" className="border border-collapse p-1 sm:p-2 text-[12px]  w-40 lg:w-full sm:w-32 sm:text-xs rounded-md" type="datetime-local" placeholder="Search by Pod Date" value={pod_date} onChange={(e)=>setpod_date(e.target.value)} />
                </div>
                
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >Loading Date :  </label>
             <input  max="2099-12-25T23:59"className="border border-collapse p-1 sm:p-2 text-[12px]  w-40 lg:w-full sm:w-32 sm:text-xs rounded-md" type="datetime-local" placeholder="Search by Loading Date" value={loading_date} onChange={(e)=>setloading_date(e.target.value)} />
                </div>
                <div className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Freight Slip  Date:  </label>
             <input max="2099-12-25T23:59" className="border border-collapse p-1 sm:p-2 text-[12px]  w-40 lg:w-full sm:w-32 sm:text-xs rounded-md" type="datetime-local" placeholder="Search by Freight Slip  Date:" value={freight_slip_date} onChange={(e)=>setfreight_slip_date(e.target.value)} />
                </div>
                    </div>
                    <table className=" w-full " >
                        <thead className="bg-[#151B54] w-full text-white">
                           <tr>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-2  sm:text-base  border border-slate-300">Sr. No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3  sm:text-base  border border-slate-300">Booking No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3  sm:text-base  border border-slate-300">Booking Date</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3  sm:text-base  border border-slate-300">Pod No  </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3  sm:text-base  border border-slate-300">Pod Date  </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3  sm:text-base  border border-slate-300"> Loading No </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3  sm:text-base  border border-slate-300">Loading date </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3  sm:text-base  border border-slate-300">Freight Slip Date</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3  sm:text-base  border border-slate-300">Freight Slip No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3  sm:text-base  border border-slate-300">Action</th>
                            
                            </tr>  
                        </thead>
                        <tbody>
                            {
                                  data?.slice(pageclick, pageclick + perpage).map( (uData, index)=>(
                                 <tr key={index}>
                                <td className=" sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{index+1}</td>
                                <td className=" sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_no}</td>
                                <td className=" sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                                <td className=" sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                                <td className=" sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                                <td className=" sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                                <td className=" sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                                <td className=" sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                                <td className=" sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                         
                                <td className="sm:px-3 px-2 sm:text-base text-base border lg:text-[11px] border-slate-300"> 
                                
                                <div className="  m-auto">

                                <button className=" center bg-[#151B54] sm:py-2 sm:px-2 w-16 m-auto sm:w-32 sm:text-base text-[6px] lg:text-[11px] rounded-md text-white ">Edit</button> 
                                
                                </div>
                                </td>
                              
                                
                            </tr>
                            )) }
                        </tbody>                        
                    </table>         
                   
                    <div     className="flex gap-4 m-auto text-center items-center  justify-center my-4  "  >
                    <ReactPaginate
                
                previousLable={"Previous"}
                nextLable={"Next"}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount= { countpage}
                onPageChange={ changePage}
                containerClassName={"pagination"}
              //   previousLinkClassName={"previousBttn"}
              //   nextLinkClassName={"nextBttn"}
                activeClassName={"active"}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
              //   disabledClassName={"paginationDisabled"}

              /> 
</div>
</div>
</div> 

                    </div>
                </div>
            </div>           
        </React.Fragment>
    </div>
  )
}

export default FRMBooking_Status
