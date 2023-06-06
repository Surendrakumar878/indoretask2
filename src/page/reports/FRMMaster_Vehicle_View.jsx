import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import ReactPaginate from "react-paginate";

const FRMMaster_Vehicle_View = () => {
    

    const [data,setDate]=useState([])
    const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);
    const [vehicle,setVehicle]=useState()
    const [owner,setOwner]=useState("")
    
    useEffect( ()=>{
        const registerUserdata= async()=>{
            axios.get("http://localhost:3004/reports")  
            .then(res=>{setUserdata(res.data)
                setDate(res.data.slice(0,100))} )
            .catch(error=>console.log(error)); 
            
        }
        registerUserdata();
        
        
    },[]);
    
useEffect(()=>{
setDate(userData.filter((res)=>res.vehicle_no.includes(vehicle)))
    
},[vehicle])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.owner_name.toLowerCase().includes(owner.toLowerCase())))
   },[owner])
    const generatePDF= useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle:"Userdata",
        onAfterPrint:()=>alert("Data saved in PDF")
    });
    console.log(userData)
  
    console.log(data)
    const [pagenumber, setPagenumber]= useState(0);
    const perpage=10;
    const pageclick= pagenumber*perpage;
    console.log(pageclick)
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
                    <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full"> FRMMaster Vehicle View  </div> 
                    <div className="  pb-2">
                    <div className="flex gap-2 px-10 py-3">
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
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle No</th>
                            <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle No</th>
                           <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Action</th>
                            
                            </tr>  
                        </thead>
                        <tbody>
                            {
                                data?.slice(pageclick, pageclick + perpage).map( (uData, index)=>(
                                 <tr key={index}>
                                <td className="sm:px-2 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{uData.vehicle_id}</td>
                                <td className="sm:px-3 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{uData.vehicle_no}</td>
                                <td className="sm:px-3 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{uData.vehicle_type}</td>
                                <td className="sm:px-3 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{uData.owner_name}</td>
                               <td className="sm:px-3 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{uData.vehicle_no}</td>
                                <td className="sm:px-3 lg:text-[11px] px-2 sm:text-base text-[10px] border border-slate-300">{uData.vehicle_no}</td>
                               <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300"> 
                                
                                <div className="  m-auto">

                                <button className=" center    bg-[#151B54] sm:py-2 sm:px-2 w-16 m-auto sm:w-32 lg:text-[11px] sm:text-base text-[6px] rounded-md text-white ">Edit</button> 
                                
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
                pageCount= {countpage}
                onPageChange={ changePage}
                containerClassName={"pagination"}
              //   previousLinkClassName={"previousBttn"}
              //   nextLinkClassName={"nextBttn"}
                activeClassName={"active"}
                marginPagesDisplayed={1}
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

export default FRMMaster_Vehicle_View
