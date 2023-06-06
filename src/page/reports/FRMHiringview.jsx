import React, { useState, useEffect, useRef } from "react";


import { Link } from "react-router-dom";

import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { Input ,Row,Col, Radio } from "antd";
import schedule from "./scheduleview.module.css"
import ReactPaginate from "react-paginate";
const FRMHiringview = () => {
    const [data,setDate]=useState([])
    const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);
    const [vehicle,setVehicle]=useState()
    const [hire_date_time,sethire_date_time]=useState("")
    const [hire_owner_name,sethire_owner_name]=useState()
    const [trip_status,settrip_status]=useState(1)
    useEffect(() => {
        
    }, [])
   




   
    // console.log(vehicle)
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
    setDate(userData.filter((res)=>res.vehicle_no.toLowerCase().includes(vehicle.toLowerCase())))
    
},[vehicle])
    useEffect(()=>{
        setDate(userData.filter((res)=>res.hire_date_time.includes(hire_date_time)))
        
    },[hire_date_time])
    useEffect(()=>{
      setDate(userData.filter((res)=>res.hire_owner_name.toLowerCase().includes(hire_owner_name.toLowerCase())))
      
  },[hire_owner_name])
  useEffect(()=>{
    setDate(userData.filter((res)=>res.trip_status===trip_status))
    
},[trip_status])
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      settrip_status(e.target.value);
    };
  console.log(hire_date_time)

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
     <label   style={{paddingLeft:"10px"}}>HIRE TIME/DATE </label><br/>
     <input max="2099-12-25T23:59" value={hire_date_time} onChange={(e)=>sethire_date_time(e.target.value)} class="placeholder:italic placeholder:text-slate-400 block bg-white w-[90%] border border-slate-300 rounded-md py-1 pl-1 sm:pl-9 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


      
      </Col>
       <Col  className={schedule.select_option_col}>
       <label  style={{paddingLeft:"10px"}}>VEHICLE NO :</label><br/>
      <Input
   
     placeholder="Search VEHICLE NO" value={vehicle} onChange={(e) => setVehicle(e.target.value)} 
        style={{width:"90%"}}
      />
      </Col>
      <Col  className={schedule.select_option_col}>
     <label   style={{paddingLeft:"10px"}}>OWNER NAME </label><br/>
      <Input
        placeholder="Search by OWNER NAME" value={hire_owner_name} onChange={(e) => sethire_owner_name(e.target.value)}
        style={{width:"90%"}}
      />
      </Col>
       <Col  className={schedule.select_option_col}>
       <label  style={{paddingLeft:""}}>TRIP STATUS </label><br/>
       <Radio.Group onChange={onChange} value={trip_status}>
      <Radio value={1}>Yes</Radio>
      <Radio value={0}>No</Radio>
     
    </Radio.Group>
      </Col>
     
       
    
    </Row>
    <table  className="w-full" style={{marginTop:"20px"}}>
  <tr className="bg-[#151B54] text-white">
    <th id={schedule.transaction_boder}>Sr No.</th>
    <th id={schedule.transaction_boder}>HIRE ID</th>
    <th id={schedule.transaction_boder}>HIRE TIME/DATE</th>
    <th id={schedule.transaction_boder}>VEHICLE NO</th>
    <th id={schedule.transaction_boder}>OWNER NAME</th>
    <th id={schedule.transaction_boder}>TRIP STATUS</th>
    {/* <th id={schedule.transaction_boder}>HIRE BY </th> */}
    <th id={schedule.transaction_boder}>ACTION</th>
  </tr> 
  {  data.slice().map((items ,index)=>(
  <tr  key={index}> 
    <td id={schedule.transaction_boder}>{index+1}</td>
    <td id={schedule.transaction_boder}>{items.hire_id}</td>
    <td id={schedule.transaction_boder}>{items.hire_date_time}</td>
    <td id={schedule.transaction_boder}>{items.vehicle_no}</td>
    <td id={schedule.transaction_boder}>{items.hire_owner_name}</td>
    <td id={schedule.transaction_boder}>{items.trip_status}</td>
    {/* <td id={schedule.transaction_boder}>{items.hire_owner_name}</td> */}
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

export default FRMHiringview
