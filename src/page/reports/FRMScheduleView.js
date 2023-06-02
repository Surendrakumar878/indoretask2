import React, { useState, useEffect, useRef } from "react";


import { Link } from "react-router-dom";

import axios from "axios";

import { Input ,Row,Col, Radio, Button } from "antd";
import schedule from "./scheduleview.module.css"
import ReactPaginate from "react-paginate";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const FRMScheduleView = () => {
    const [data,setDate]=useState([])
    const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);
    const [vehicle,setVehicle]=useState()
    const [schd_date_time,setschd_date_time]=useState("")
    const [hire_status,sethire_status]=useState()
    const [hire_date_time,sethire_date_time]=useState("")
    const [hire_by,sethire_by]=useState()
   
    
    // console.log(vehicle)
    useEffect( ()=>{
        const registerUserdata= async()=>{
            axios.get("http://localhost:3004/schd")  
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
        setDate(userData.filter((res)=>res.hire_by.includes(hire_by)))
        
    },[hire_by])
    useEffect(() => {
    setDate(userData.filter((res) => res.schd_date_time.includes(schd_date_time)))
    }, [schd_date_time]);


    useEffect(() => {
        setDate(userData.filter((res) => res.hire_date_time.includes(hire_date_time)))

    }, [hire_date_time])
    useEffect(() => {
      setDate(userData.filter((res) => res.hire_status===hire_status))
      
      const dd=userData.filter((res) => res.hire_status===hire_status)
    
  }, [hire_status])
// console.log("dayat",data[0].vehicle_no)
    const [value, setValue] = useState(0);
    const onChange = (e) => {
      // e.prevntDefualt()
      e.preventDefault() 
      console.log('radio checked', e.target.value);
      sethire_status(e.target.value);
    };
  // console.log("hire_status",data[0].vehicle_no)


 

 const [pagenumber, setPagenumber]= useState(0);
 const perpage=10;
 const pageclick= pagenumber*perpage;
 const countpage= Math.ceil(data.length/perpage);
console.log(countpage)
 const changePage=({selected})=>{
   setPagenumber(selected);
 }

 console.log(schd_date_time)
 
    return (
        <div>
     

            <div className={schedule.scheduleview}>
              
   <Row >
   <Col className={schedule.select_option_col} >
     <label   style={{paddingLeft:"10px"}}>VEHICLE NO </label><br/>
      <Input
        placeholder="Search by Vehicle No" value={vehicle} onChange={(e) => setVehicle(e.target.value)}
        style={{width:"90%"}}
      />
      </Col>
       <Col  className={schedule.select_option_col}>
       <label  style={{paddingLeft:"10px"}}>SCHD TIME/DATE:</label><br/>
       <input max="2099-12-25T23:59"  value={schd_date_time} onChange={(e)=>setschd_date_time(e.target.value)} class="placeholder:italic placeholder:text-slate-400 block bg-white w-[90%] border border-slate-300 rounded-md py-1 pl-9 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


      </Col>
      <Col  className={schedule.select_option_col}>
     <label   style={{paddingLeft:"10px"}}>HIRE DATE/DATE </label><br/>
     <input max="2099-12-25T23:59" value={hire_date_time} onChange={(e)=>sethire_date_time(e.target.value)} class="placeholder:italic placeholder:text-slate-400 block bg-white w-[90%] border border-slate-300 rounded-md py-1 pl-9 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="datetime-local" name="search"/>


      </Col>
       <Col  className={schedule.select_option_col}>
       <label  style={{paddingLeft:""}}>HIRE BY :</label><br/>
      <Input
   
     placeholder="Search HIRE BY" value={hire_by} onChange={(e) => sethire_by(e.target.value)} 
        style={{width:"90%"}}
      />
      </Col>
      <Col  className={schedule.select_option_col}>
     <label   style={{paddingLeft:"10px"}}>HIRING STATUS </label><br/>
     <Radio.Group onChange={onChange} value={hire_status}>
      <Radio value={1}>Yes</Radio>
      <Radio value={0}>No</Radio>
     
    </Radio.Group>
      </Col>
       
    
    </Row>

    
    <table  className="w-full" style={{marginTop:"20px"}}>
  <tr className="bg-[#151B54] text-white">
    <th id={schedule.transaction_boder}>Sr No.</th>
    <th id={schedule.transaction_boder}>SCHD ID</th>
    <th id={schedule.transaction_boder}>SCHD TIME/DATE</th>
    <th id={schedule.transaction_boder}>VEHICLE NO</th>
    <th id={schedule.transaction_boder}>HIRING STATUS</th>
    <th id={schedule.transaction_boder}>HIRE DATE/DATE</th>
    <th id={schedule.transaction_boder}>HIRE BY </th>
    <th id={schedule.transaction_boder}>ACTION</th>
  </tr> 
  {  data.slice(pageclick, pageclick + perpage).map((items ,index)=>(
  <tr> 
    <td id={schedule.transaction_boder}>{index+1}</td>
    <td id={schedule.transaction_boder}>{items.schd_id}</td>
    <td id={schedule.transaction_boder}>{items.schd_date_time}</td>
    <td id={schedule.transaction_boder}>{items.vehicle_no}</td>
    <td id={schedule.transaction_boder}>{items.hire_status}</td>
    <td id={schedule.transaction_boder}>{items.hire_date_time}</td>
    <td id={schedule.transaction_boder}>{items.hire_by}</td>
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

export default FRMScheduleView
