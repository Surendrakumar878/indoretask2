import React, { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import r from "./rpt.module.css"
const RPTUserdetails = ({data1}) => {
console.log(data1)
    let [searchParams, setSearchParams] = useSearchParams();
  let [query, setQuery] = React.useState(
    searchParams.getAll("query")
  );
  console.log(query)
    const [data,setDate]=useState({
        name:"ram transport",
        email:"email@gmail.com",
        mobilenumber:7222082282,
        address:"106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP",
        reportname:"User Details",
        date:"4/20/2023",
        date_From : "4/20/2023" ,
        to : "4/20/2023"

    })
        const conponentPDF= useRef();
        const [userData, setUserdata]= useState([1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1]);
      
        useEffect( ()=>{
            const registerUserdata= async()=>{
             axios.get("http://localhost:4000/Vehicle")  
             .then(res=>setUserdata(res.data.data) )
             .catch(error=>console.log(error)); 
    
            }
            registerUserdata();
        },[]);
    
        const generatePDF= useReactToPrint({
            content: ()=>conponentPDF.current,
            documentTitle:"Userdata",
           
        });
           console.log(userData)

           const exportPDF = () => {

            const doc = new jsPDF();
            doc.setFontSize(10);
            doc.text('name:ram transport \nemail:email@gmail.com \nmobilenumber:7222082282 \naddress:106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP \nreportname:Vehicle Scheduled Summary \ndate:4/20/2023 \ndate_From : 4/20/2023 to : 4/20/2023 ', 10, 10);
       
         doc.autoTable({ html:"#my-table",
     
         theme:'grid',
         headStyles:{fillColor: "#151B54"},
         margin: { top: 50 },
     
     })
         // Save the PDF document
         doc.save('data-report.pdf');
       }
  return (
    <div>
     <React.Fragment>
            <div className=" sm:w-[80%]  sm:m-auto ">
                <div className="">
                    <div className="">
                      
                    
                   <div ref={conponentPDF}  className=" relative sm:w-full sm:m-auto w-full   ">
                    <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">  User details </div> 
                    <div className=" pb-2">

                    
                    <div className=" border border-t-1  border-slate-700 border-b-1 border-r-1 border-l-1 w-[99.5%] ">
                <h1 className=" pl-1 font-bold  text-[10px]"> {data.name}</h1>
                <h1 className=" pl-1 font-bold  text-[10px]"> {data.email} </h1>
                <p className="pl-1 text-[10px] ">{data.mobilenumber} </p>
                <p className="pl-1 text-[10px]">{data.address}</p>
                <p className="pl-1 text-[10px]">{data.reportname}</p>
               
              
                <h1 className="pl-1 font-bold  text-[10px] border border-t-1  border-slate-700 border-b-0 border-r-0 border-l-0 ">
                  Date From : {data.date_From} To :{data.to}
                </h1>
                </div>
                    <table id="my-table" className=" w-full " >
                        <thead className="bg-[#151B54] w-full text-white">
                           <tr>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  ">     Sr. No               </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     user id               </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     username               </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     registered number               </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     city               </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     contact                </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     person                </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     Status               </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     Registration date               </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     activation date               </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     total weight               </th>
                            <th className="lg:text-[10px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">     goods name               </th>
                            </tr> 
                        </thead>
                        <tbody >
                            {
                                data1?.map( (uData, index)=>(
                                 <tr key={index} >
                                <td className="sm:px-2 px-2 sm:text-base text-base ">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.booking_id}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.user_name}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.registered_number}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.city}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.contact}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.person}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.status}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.Registration_date}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.activation_date}</td>
                                {/* <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.total_weight}</td> */}
                                <td className="sm:px-3 px-2 sm:text-base text-base ">{uData.goods_name}</td>
                                <td>
                               
                                </td>
                            </tr>
                            )) }
                        </tbody>    
                        <tfoot>
        <tr>
            <th colspan="10" scope="row">Totals</th>
            <td>21,000</td>
        </tr>
    </tfoot>                           
                    </table>         
                    <div   style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.2',
        fontSize: '48px',
        color: 'red',
        transform: 'rotate(0deg)',
        pointerEvents: 'none',
      }}>

<img className="w-60" src="transduniyalogo.png" alt="" />

</div>
<h1 className="text-end text-xs">Powered by : www.transduniya.com-97553-22022 </h1>
</div>
</div>
<div className="m-auto w-full flex justify-center gap-2 text-center">
        <button
          className=" bg-[#151B54] py-1 px-2 w-24 text-sm mt-10 rounded-md text-white "
          onClick={exportPDF}
        >
          Download
        </button>{" "}
        <button
          className=" bg-[#151B54] py-1 px-2 w-16 text-sm mt-10 rounded-md text-white "
          onClick={generatePDF}
        >
          Print
        </button>
       
      
      </div>
                    </div>
                </div>
            </div>           
        </React.Fragment>
    </div>
  )
}

export default RPTUserdetails
