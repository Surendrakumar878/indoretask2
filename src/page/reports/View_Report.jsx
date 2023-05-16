import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";

const View_Report = () => {
    

    const [data,setDate]=useState([])
    const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);
    const [vehicle,setVehicle]=useState()
    const [owner,setOwner]=useState("")
    console.log(vehicle)
    useEffect( ()=>{
        const registerUserdata= async()=>{
            axios.get("http://localhost:3004/reports")  
            .then(res=>setUserdata(res.data) )
            .catch(error=>console.log(error)); 
            
        }
        registerUserdata();
        
        setDate(userData.filter((res)=>res.vehicle_no.slice(0,1)==vehicle||res.vehicle_no.slice(0,2)==vehicle||res.vehicle_no.slice(0,3)==vehicle||res.vehicle_no.slice(0,4)==vehicle||res.vehicle_no==vehicle||res.vehicle_no.includes(vehicle)))
    },[vehicle]);
    

    useEffect(()=>{
        setDate(userData.filter((res)=>res.owner_name.slice(0,1)==owner||res.owner_name.slice(0,2)==owner||res.owner_name.slice(0,3)==owner||res.owner_name.slice(0,4)==owner||res.owner_name==owner||res.owner_name.includes(owner)))
   
    },[owner])
    const generatePDF= useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle:"Userdata",
        onAfterPrint:()=>alert("Data saved in PDF")
    });
    console.log(userData)
    
    
    
    
    //  const data2=userData.filter((res)=>res.vehicle_no.slice(0,1)==owner||res.vehicle_no.slice(0,2)==owner||res.vehicle_no.slice(0,3)==owner||res.vehicle_no.slice(0,4)==owner||res.vehicle_no==owner)
    
    console.log(data)
    return (
        <div>
     <React.Fragment>
            <div className=" sm:w-[99%]  sm:m-auto ">
                <div className="">
                    <div className="">
                      
                    
                   <div ref={conponentPDF}  className=" relative sm:w-full sm:m-auto w-full    border-black ">
                    <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full"> View Report </div> 
                    <div className="  pb-2">

                    <div className="flex gap-2 py-3">

                    <div>
                        <label className=" text-[10px] sm:text-base " >Vehicle No :  </label>
             <input className="border border-collapse px-1 text-[10px] sm:text-base" type="number" placeholder="Search by Vehicle" value={vehicle} onChange={(e)=>setVehicle(e.target.value)} />
                </div>
                <div>
                        <label className=" text-[10px] sm:text-base " > Owner Name :  </label>
             <input className="border border-collapse px-1 text-[10px] sm:text-base" type="text" placeholder="Search by Name" value={owner} onChange={(e)=>setOwner(e.target.value)} />
                </div>
                    </div>
                    <table className=" w-full " >
                        <thead className="bg-[#151B54] w-full text-white">
                           <tr>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">Sr. No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300"> Vehicle Id</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle Type </th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Owner Name</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Action</th>
                            
                            </tr>  
                        </thead>
                        <tbody>
                            {
                                data.map( (uData, index)=>(
                                 <tr key={index}>
                                <td className="sm:px-2 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{uData.vehicle_id}</td>
                                <td className="sm:px-3 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{uData.vehicle_no}</td>
                                <td className="sm:px-3 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{uData.vehicle_type}</td>
                                <td className="sm:px-3 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{uData.owner_name}</td>
                                
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300"> 
                                
                                <div className="  m-auto">

                                <button className=" center    bg-[#151B54] sm:py-2 sm:px-2 w-16 m-auto sm:w-32 lg:text-[11px] sm:text-base text-[6px] rounded-md text-white ">Edit</button> 
                                
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

export default View_Report
