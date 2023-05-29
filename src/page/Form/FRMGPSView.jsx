import React, { useState, useEffect, useRef } from "react";


import { Link } from "react-router-dom";

import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { Input ,Row,Col, Radio } from "antd";
import schedule from "../reports/scheduleview.module.css"
import ReactPaginate from "react-paginate";
const FRMGPSView = () => {
    const [data,setDate]=useState([])
    const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);
    const [req_date_time,setreq_date_time]=useState()
    const [contact_no,setcontact_no]=useState("")
    const [req_by,setreq_by]=useState()
   
    useEffect(() => {
        
    }, [])
   




   
    // console.log(vehicle)
    useEffect( ()=>{
        const registerUserdata= async()=>{
            axios.get("http://localhost:3004/gps")  
            .then(res=>{setUserdata(res.data)
                setDate(res.data.slice(0,100))} )
            .catch(error=>console.log(error)); 
            
        }
        registerUserdata();
        
        
    },[]);
    
useEffect(()=>{
    setDate(userData.filter((res)=>res.req_date_time.includes(req_date_time)))
    
},[req_date_time])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.contact_no.includes(contact_no)))
        
    },[contact_no])
    useEffect(()=>{
      setDate(userData.filter((res)=>res.req_by.includes(req_by)))
      
  },[req_by])
 
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

           
            <div className={schedule.scheduleview}>
   <Row >
   <Col className={schedule.select_option_col} >
     <label   style={{paddingLeft:"10px"}}>REQ TIME/DATE </label><br/>
     <input max="2099-12-25T23:59" value={req_date_time} onChange={(e)=>setreq_date_time(e.target.value)} class="placeholder:italic placeholder:text-slate-400 block bg-white w-[90%] border border-slate-300 rounded-md py-1 pl-1 sm:pl-9 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


      
      </Col>
       <Col  className={schedule.select_option_col}>
       <label  style={{paddingLeft:"10px"}}>REQ BY :</label><br/>
      <Input
   
     placeholder="Search VEHICLE NO" value={req_by} onChange={(e) => setreq_by(e.target.value)} 
        style={{width:"90%"}}
      />
      </Col>
      <Col  className={schedule.select_option_col}>
     <label   style={{paddingLeft:"10px"}}>CONTACT NO </label><br/>
      <Input
        placeholder="Search by OWNER NAME" value={contact_no} onChange={(e) => setcontact_no(e.target.value)}
        style={{width:"90%"}}
      />
      </Col>
       {/* <Col  className={schedule.select_option_col}>
       <label  style={{paddingLeft:""}}>TRIP STATUS </label><br/>
       <Radio.Group onChange={onChange} value={trip_status}>
      <Radio value={1}>Yes</Radio>
      <Radio value={0}>No</Radio>
     
    </Radio.Group>
      </Col> */}
     
       
    
    </Row>
    <table  className="w-full" style={{marginTop:"20px"}}>
  <tr className="bg-[#151B54] text-white">
    <th id={schedule.transaction_boder}>Sr No.</th>
    <th id={schedule.transaction_boder}>REQ ID</th>
    <th id={schedule.transaction_boder}>REQ TIME/DATE</th>
    <th id={schedule.transaction_boder}>REQ BY</th>
    <th id={schedule.transaction_boder}>CONTACT NO </th>
    {/* <th id={schedule.transaction_boder}>TRIP STATUS</th> */}
    {/* <th id={schedule.transaction_boder}>HIRE BY </th> */}
    <th id={schedule.transaction_boder}>ACTION</th>
  </tr> 
  {data.map((items ,index)=>(
  <tr> 
    <td id={schedule.transaction_boder}>{index+1}</td>
    <td id={schedule.transaction_boder}>{items.req_id}</td>
    <td id={schedule.transaction_boder}>{items.req_date_time}</td>
    <td id={schedule.transaction_boder}>{items.contact_no}</td>
    <td id={schedule.transaction_boder}>{items.req_by}</td>
    {/* <td id={schedule.transaction_boder}>{items.trip_status}</td> */}
    {/* <td id={schedule.transaction_boder}>{items.hire_owner_name}</td> */}
    <td id={schedule.transaction_boder}> <Link >  EDIT</Link>
</td>
  </tr>
  ))}
 
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
    )
}

export default FRMGPSView
