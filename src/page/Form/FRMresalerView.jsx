import React, { useState, useEffect, useRef } from "react";


import { Link } from "react-router-dom";

import axios from "axios";

import { Input ,Row,Col, Radio } from "antd";
import schedule from "../reports/scheduleview.module.css"
import ReactPaginate from "react-paginate";
const FRMresalerView = () => {
    const [data,setDate]=useState([])
    const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);
    const [number,setnumber]=useState()
    const [name,setname]=useState("")
    const [city,setcity]=useState()
 
    useEffect(() => {
        
    }, [])
   




   
    // console.log(number)
    useEffect( ()=>{
        const registerUserdata= async()=>{
            axios.get("http://localhost:3004/hire")  
            .then(res=>{setUserdata(res.data.slice(0,100))
                setDate(res.data.slice(0,100))} )
            .catch(error=>console.log(error)); 
            
        }
        registerUserdata();
        
        
    },[]);
    
useEffect(()=>{
    setDate(userData.filter((res)=>res.vehicle_no.toLowerCase().includes(number.toLowerCase())))
    
},[number])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.hire_date_time.includes(name)))
        
    },[name])
    useEffect(()=>{
      setDate(userData.filter((res)=>res.hire_owner_name.toLowerCase().includes(city.toLowerCase())))
      
  },[city])
 
   

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
     <label   style={{paddingLeft:"10px"}}>Company Name </label><br/>
     <Input
   
   placeholder="Company Name" value={name} onChange={(e) => setname(e.target.value)} 
      style={{width:"90%"}}
    />
      
      </Col>
       <Col  className={schedule.select_option_col}>
       <label  style={{paddingLeft:"10px"}}>Mobile Number:</label><br/>
      <Input
   
     placeholder="Mobile Number" value={number} onChange={(e) => setnumber(e.target.value)} 
        style={{width:"90%"}}
      />
      </Col>
      <Col  className={schedule.select_option_col}>
     <label   style={{paddingLeft:"10px"}}>City </label><br/>
      <Input
        placeholder="City" value={city} onChange={(e) => setcity(e.target.value)}
        style={{width:"90%"}}
      />
      </Col>
     
    </Row>
    <table  className="w-full" style={{marginTop:"20px"}}>
  <tr className="bg-[#151B54] text-white">
    <th id={schedule.transaction_boder}>Sr No.</th>
    <th id={schedule.transaction_boder}>company name</th>
    <th id={schedule.transaction_boder}>Address</th>
    <th id={schedule.transaction_boder}>Moblie number</th>
    <th id={schedule.transaction_boder}>City</th>
    <th id={schedule.transaction_boder}>State</th>
    <th id={schedule.transaction_boder}>Email id </th>
    <th id={schedule.transaction_boder}>Interest_service </th>
    <th id={schedule.transaction_boder}>Interest for city </th>
    <th id={schedule.transaction_boder}>Contact_name </th>
    <th id={schedule.transaction_boder}>ACTION</th>
  </tr> 
  {  data.slice().map((items ,index)=>(
  <tr  key={index}> 
    <td id={schedule.transaction_boder}>{index+1}</td>
    <td id={schedule.transaction_boder}>{items.hire_id}</td>
    <td id={schedule.transaction_boder}>{items.hire_date_time}</td>
    <td id={schedule.transaction_boder}>{items.number_no}</td>
    <td id={schedule.transaction_boder}>{items.hire_owner_name}</td>
    <td id={schedule.transaction_boder}>{items.trip_status}</td>
    <td id={schedule.transaction_boder}>{items.hire_owner_name}</td>
    <td id={schedule.transaction_boder}>{items.hire_owner_name}</td>
    <td id={schedule.transaction_boder}>{items.hire_owner_name}</td>
    <td id={schedule.transaction_boder}>{items.hire_owner_name}</td>
    <td id={schedule.transaction_boder}> <Link >  view</Link>
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
           
                activeClassName={"active"}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
         
              /> 
</div>
    </div>


        
        </div>
    )
}

export default FRMresalerView
