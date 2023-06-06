import React, { useState, useEffect, useRef } from "react";

import axios from "axios";


import ReactPaginate from "react-paginate";

const FRMContractView = () => {
    
      

    const [data,setDate]=useState([])
    
    const [userData, setUserdata]= useState([]);
   
    const [tocity,settocity]=useState()
    const [fromcity,setfromcity]=useState("")
    const [conto,setconto]=useState()
    const [confrom,setconfrom]=useState()
    const [vehicletype,setvehicletype]=useState("")
   
  
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
        setDate(userData?.filter((res)=>res.vehicle_no.includes(tocity.toLowerCase())))
        
    },[tocity]);
  
    useEffect(()=>{
        setDate(userData?.filter((res)=>res.booking_date.includes(fromcity.toLowerCase())))
   
    },[fromcity])
    useEffect(()=>{
        setDate(userData?.filter((res)=>res.unloading_date.includes(conto.toLowerCase())))
   
    },[conto])
    useEffect(()=>{
        setDate(userData?.filter((res)=>res.pod_date.includes(confrom.toLowerCase())))
   
    },[confrom])
    useEffect(()=>{
        setDate(userData?.filter((res)=>res.report_date.includes(vehicletype.toLowerCase())))
   
    },[vehicletype])


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
                      <div   className=" relative sm:w-full sm:m-auto w-full    border-black ">
                    <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">FRMContractView   </div> 
                    <div className="  pb-2">
                    <div className="  m-auto  w-full pb-3 md:w-full md:grid md:grid-cols-5 md:gap-2 sm:w-[90%] sm:m-auto grid grid-cols-2 gap-1 px-1 sm:grid sm:grid-cols-6 sm:gap-2 sm:py-3">
                        <div  className="w-full ">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >To City  </label> <br />
             <input className="border border-collapse p-1 text-[12px]  w-44 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="number" placeholder="To City " value={tocity} onChange={(e)=>settocity(e.target.value)} />
                </div>
                <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >From City </label><br />
             <input className="border border-collapse p-1 text-[12px] w-44 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="number" placeholder="From City" value={fromcity} onChange={(e)=>setfromcity(e.target.value)} />
                </div>
                <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " >  Contract From </label> <br />
             <input className="border border-collapse p-1 text-[12px] w-44 lg:w-full sm:w-32 sm:text-xs rounded-sm" type="text" placeholder="Contract From " value={confrom} onChange={(e)=>setconfrom(e.target.value)} />
                </div>

                
                <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Contract To </label> <br />
             <input className="border border-collapse p-1 text-[12px] w-44 lg:w-full sm:w-32 sm:text-xs rounded-sm" max="2999-12-25T23:59" type="text" placeholder=" Contract To" value={conto} onChange={(e)=>setconto(e.target.value)} />
           
                </div>
                <div  className="w-full">
                        <label className=" text-[10px] lg:text-[11px] sm:text-base " > Vehicle Type  </label> <br />
             <input className="border border-collapse p-1 text-[12px] w-44 lg:w-full sm:w-32 sm:text-xs rounded-sm" max="2999-12-25T23:59" type="text" placeholder="Vehicle Type" value={vehicletype} onChange={(e)=>setvehicletype(e.target.value)} />
                </div>
                
               
                    </div>
                    <table className=" w-full " >
                        <thead className="bg-[#151B54] w-full text-white">
                           <tr>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">Sr. No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Req id</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300"> Req date</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">From City  </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">To City  </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Contract From </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Contract To</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle Type </th>
                            {/* <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Unloading Date</th> */}
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Action</th>
                            
                            </tr>  
                        </thead>
                        <tbody>
                            {
                                  data.slice(pageclick, pageclick + perpage).map( (uData, index)=>(
                                 <tr key={index}>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.pod_id}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.pod_no}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.pod_date}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_no}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.booking_date}</td>
                                <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.vehicle_no}</td>
                                {/* <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] border border-slate-300">{uData.report_date}</td> */}
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

export default FRMContractView
