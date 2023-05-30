import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";

import jsPDF from "jspdf";
import 'jspdf-autotable';

const Apidata= [
    {
      "id": 1,
      "booking_no": "1",
      "booking_date": "2023-05-07",
      "pod_no":"232322",
      "pod_date": "2023-05-13",
      "loading_no": "34234",
      "loading_date": "2023-05-13",
      "freight_slip_no": "12302",
      "freight_slip_date": "2023-05-13"
    },
    {
      "id": 2,
      "booking_no": "2",
      "booking_date": "2023-05-07",
      "pod_no":"232322",
      "pod_date": "2023-05-13",
      "loading_no": "34234",
      "loading_date": "2023-05-13",
      "freight_slip_no": "12302",
      "freight_slip_date": "2023-05-13"
    },
    {
      "id": 3,
      "booking_no": "3",
      "booking_date": "2023-05-07",
      "pod_no":"232322",
      "pod_date": "2023-05-13",
      "loading_no": "34234",
      "loading_date": "2023-05-13",
      "freight_slip_no": "12302",
      "freight_slip_date": "2023-05-13"
    },
    {
      "id": 4,
      "booking_no": "4",
      "booking_date": "2023-05-07",
      "pod_no":"232322",
      "pod_date": "2023-05-13",
      "loading_no": "34234",
      "loading_date": "2023-05-13",
      "freight_slip_no": "12302",
      "freight_slip_date": "2023-05-13"
    },
    {
      "id": 5,
      "booking_no": "5",
      "booking_date": "2023-05-07",
      "pod_no":"232322",
      "pod_date": "2023-05-13",
      "loading_no": "34234",
      "loading_date": "2023-05-13",
      "freight_slip_no": "12302",
      "freight_slip_date": "2023-05-13"
    },
    {
      "id": 6,
      "booking_no": "6",
      "booking_date": "2023-05-07",
      "pod_no":"232322",
      "pod_date": "2023-05-13",
      "loading_no": "34234",
      "loading_date": "2023-05-13",
      "freight_slip_no": "12302",
      "freight_slip_date": "2023-05-13"
    },
    {
        "id": 7,
        "booking_no": "7",
        "booking_date": "2023-05-07",
        "pod_no":"232322",
        "pod_date": "2023-05-13",
        "loading_no": "34234",
        "loading_date": "2023-05-13",
        "freight_slip_no": "12302",
        "freight_slip_date": "2023-05-13"
      },
      {
        "id": 8,
        "booking_no": "8",
        "booking_date": "2023-05-07",
        "pod_no":"232322",
        "pod_date": "2023-05-13",
        "loading_no": "34234",
        "loading_date": "2023-05-13",
        "freight_slip_no": "12302",
        "freight_slip_date": "2023-05-13"
      },
      {
        "id": 9,
        "booking_no": "9",
        "booking_date": "2023-05-07",
        "pod_no":"232322",
        "pod_date": "2023-05-13",
        "loading_no": "34234",
        "loading_date": "2023-05-13",
        "freight_slip_no": "12302",
        "freight_slip_date": "2023-05-13"
      },
      {
        "id": 10,
        "booking_no": "10",
        "booking_date": "2023-05-07",
        "pod_no":"232322",
        "pod_date": "2023-05-13",
        "loading_no": "34234",
        "loading_date": "2023-05-13",
        "freight_slip_no": "12302",
        "freight_slip_date": "2023-05-13"
      },
      {
        "id": 11,
        "booking_no": "11",
        "booking_date": "2023-05-07",
        "pod_no":"232322",
        "pod_date": "2023-05-13",
        "loading_no": "34234",
        "loading_date": "2023-05-13",
        "freight_slip_no": "12302",
        "freight_slip_date": "2023-05-13"
      },
      {
        "id": 12,
        "booking_no": "12",
        "booking_date": "2023-05-07",
        "pod_no":"232322",
        "pod_date": "2023-05-13",
        "loading_no": "34234",
        "loading_date": "2023-05-13",
        "freight_slip_no": "12302",
        "freight_slip_date": "2023-05-13"
      },
      {
        "id": 13,
        "booking_no": "13",
        "booking_date": "2023-05-07",
        "pod_no":"232322",
        "pod_date": "2023-05-13",
        "loading_no": "34234",
        "loading_date": "2023-05-13",
        "freight_slip_no": "12302",
        "freight_slip_date": "2023-05-13"
      },
      {
          "id": 14,
          "booking_no": "14",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 15,
          "booking_no": "145",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 16,
          "booking_no": "16",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 17,
          "booking_no": "17",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 18,
          "booking_no": "18",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 19,
          "booking_no": "19",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 1,
          "booking_no": "20",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 2,
          "booking_no": "21",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 3,
          "booking_no": "22",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 4,
          "booking_no": "23",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 5,
          "booking_no": "24",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
          "id": 6,
          "booking_no": "12302",
          "booking_date": "2023-05-07",
          "pod_no":"232322",
          "pod_date": "2023-05-13",
          "loading_no": "34234",
          "loading_date": "2023-05-13",
          "freight_slip_no": "12302",
          "freight_slip_date": "2023-05-13"
        },
        {
            "id": 7,
            "booking_no": "26",
            "booking_date": "2023-05-07",
            "pod_no":"232322",
            "pod_date": "2023-05-13",
            "loading_no": "34234",
            "loading_date": "2023-05-13",
            "freight_slip_no": "12302",
            "freight_slip_date": "2023-05-13"
          },
          {
            "id": 8,
            "booking_no": "12302",
            "booking_date": "2023-05-07",
            "pod_no":"232322",
            "pod_date": "2023-05-13",
            "loading_no": "34234",
            "loading_date": "2023-05-13",
            "freight_slip_no": "12302",
            "freight_slip_date": "2023-05-13"
          },
          {
            "id": 9,
            "booking_no": "12302",
            "booking_date": "2023-05-07",
            "pod_no":"232322",
            "pod_date": "2023-05-13",
            "loading_no": "34234",
            "loading_date": "2023-05-13",
            "freight_slip_no": "12302",
            "freight_slip_date": "2023-05-13"
          },
          {
            "id": 10,
            "booking_no": "12302",
            "booking_date": "2023-05-07",
            "pod_no":"232322",
            "pod_date": "2023-05-13",
            "loading_no": "34234",
            "loading_date": "2023-05-13",
            "freight_slip_no": "12302",
            "freight_slip_date": "2023-05-13"
          },
          {
            "id": 11,
            "booking_no": "12302",
            "booking_date": "2023-05-07",
            "pod_no":"232322",
            "pod_date": "2023-05-13",
            "loading_no": "34234",
            "loading_date": "2023-05-13",
            "freight_slip_no": "12302",
            "freight_slip_date": "2023-05-13"
          },
          {
            "id": 12,
            "booking_no": "12302",
            "booking_date": "2023-05-07",
            "pod_no":"232322",
            "pod_date": "2023-05-13",
            "loading_no": "34234",
            "loading_date": "2023-05-13",
            "freight_slip_no": "12302",
            "freight_slip_date": "2023-05-13"
          },
          {
            "id": 13,
            "booking_no": "28",
            "booking_date": "2023-05-07",
            "pod_no":"232322",
            "pod_date": "2023-05-13",
            "loading_no": "34234",
            "loading_date": "2023-05-13",
            "freight_slip_no": "12302",
            "freight_slip_date": "2023-05-13"
          },
          {
              "id": 14,
              "booking_no": "12302",
              "booking_date": "2023-05-07",
              "pod_no":"232322",
              "pod_date": "2023-05-13",
              "loading_no": "34234",
              "loading_date": "2023-05-13",
              "freight_slip_no": "12302",
              "freight_slip_date": "2023-05-13"
            },
            {
              "id": 15,
              "booking_no": "12302",
              "booking_date": "2023-05-07",
              "pod_no":"232322",
              "pod_date": "2023-05-13",
              "loading_no": "34234",
              "loading_date": "2023-05-13",
              "freight_slip_no": "12302",
              "freight_slip_date": "2023-05-13"
            },
            {
              "id": 16,
              "booking_no": "12302",
              "booking_date": "2023-05-07",
              "pod_no":"232322",
              "pod_date": "2023-05-13",
              "loading_no": "34234",
              "loading_date": "2023-05-13",
              "freight_slip_no": "12302",
              "freight_slip_date": "2023-05-13"
            },
            {
              "id": 17,
              "booking_no": "30",
              "booking_date": "2023-05-07",
              "pod_no":"232322",
              "pod_date": "2023-05-13",
              "loading_no": "34234",
              "loading_date": "2023-05-13",
              "freight_slip_no": "12302",
              "freight_slip_date": "2023-05-13"
            },
            {
              "id": 18,
              "booking_no": "12302",
              "booking_date": "2023-05-07",
              "pod_no":"232322",
              "pod_date": "2023-05-13",
              "loading_no": "34234",
              "loading_date": "2023-05-13",
              "freight_slip_no": "12302",
              "freight_slip_date": "2023-05-13"
            },
            {
              "id": 19,
              "booking_no": "38",
              "booking_date": "2023-05-07",
              "pod_no":"232322",
              "pod_date": "2023-05-13",
              "loading_no": "34234",
              "loading_date": "2023-05-13",
              "freight_slip_no": "12302",
              "freight_slip_date": "2023-05-13"
            }
  ]
const RPTVehicleHireHistory = () => {
  const pageStyle = `@page { 
    size: auto;  margin: 0mm ; } @media print { body { -webkit-print-color-adjust: exact; } }
  @media print {
    div.page-footer {
    position: fixed;
    bottom:0mm;
    width: 100%;
    height: 50px;
    font-size: 15px;
    color: #fff;
    
    background: red; 
    opacity: 1;
    
    page-break-after: always;
    }
    .page-number:before {
     
      content: "Pagina "counter(page);
    }


  }
  body {
    marginBottom:50px
  }
  `;

    const [postdata,setPostdata]= useState(Apidata.slice(0,100));
  
 

 
    const [data,setDate]=useState({
        name:"ram transport",
        email:"email@gmail.com",
        mobilenumber:7222082282,
        address:"106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP",
        reportname:"Vehicle Hire History",
        date:"4/20/2023",
        date_From : "4/20/2023" ,
        to : "4/20/2023"

    })
        const conponentPDF= useRef();
        const [userData, setUserdata]= useState([]);
      
        useEffect( ()=>{
            const registerUserdata= async()=>{
              axios.get("http://localhost:3004/reports")  
             .then(res=>setUserdata(res.data) )
             .catch(error=>console.log(error)); 
    
            }
            registerUserdata();
        },[]);
    
        // const generatePDF= useReactToPrint({
        //     content: ()=>conponentPDF.current,
        //     removeAfterPrint: true,
        //     copyStyles: true,
        //     documentTitle:"Userdata",
        //     onAfterPrint:()=>alert("Data saved in PDF")
        // });
        const generatePDF = useReactToPrint({
          content: () => conponentPDF.current,
           
          removeAfterPrint: true,
          copyStyles: true,
         
        
          // background:"transduniyalogo.png"
        });
           console.log(userData)

         

           const exportPDF = () => {

            const doc = new jsPDF();
            doc.setFontSize(10);
            doc.text('name:ram transport \nemail:email@gmail.com \nmobilenumber:7222082282 \naddress:106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP \nreportname:Vehicle Scheduled Summary \ndate:4/20/2023 \ndate_From : 4/20/2023 to : 4/20/2023 ', 10, 10);
            doc.addImage('../../../img/transduniyalogo.png', 'JPEG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

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
                    <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">  Vehicle Hire History </div> 

                    
                    <div className="  ">

                    
                 
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
                    <table id="my-table"  className=" w-full  " >
                        <thead className="bg-[#151B54] w-full text-white text-[10px]">
                           <tr>
                            <th className=" lg:text-[10px]  p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">Sr. No</th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Vehicle No</th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300"> Hire Id</th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Hire Date</th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Hire By</th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Com Contact No</th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Com Location  </th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">POD no </th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Pod Date</th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">From</th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">To</th>
                            <th className=" lg:text-[10px]  p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Com Name</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                postdata
                                // .slice(pageclick, pageclick + perpage)
                                .map((datapost,index)=>(
                                 <tr key={index}>
                                <td className="sm:px-2 px-2 sm:text-base text-base border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.booking_no}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.user_id}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.username}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.registered_number}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.vehicle_no_scheduled}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.current_status}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.freight}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.from}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.to}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.com_name}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{datapost.freight}</td>
                                <td>
                                    {/* <Link to="/userEdit" className="btn btn-success mx-2">Edit</Link>
                                    <Link to="/userDelete" className="btn btn-danger">Delete</Link> */}
                                </td>
                            </tr>
                            )) }
                        </tbody>                        
                    </table>  
                    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.5',
        fontSize: '48px',
        color: 'red',
        transform: 'rotate(0deg)',
        pointerEvents: 'none',
      }}
    >
    
<img className="w-40" src="transduniyalogo.png" alt="" />
    </div>
                    {/* <div className="header"></div>
        <div className="footer"></div>        */}
                    <div className="absolute w-40 top-60 left-32 sm:top-80 sm:w-96 sm:left-96 opacity-10">


</div>
</div>
<h1 className="text-end text-xs">Powered by : www.transduniya.com-97553-22022 </h1>
</div>

<div className="m-auto w-full text-center" >
                    <button className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " onClick={exportPDF}>Download</button>  <button className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " onClick={ generatePDF}>Print</button>                       
                    </div> 
                    </div>

                    
                   
                </div>
            </div>           
        </React.Fragment>
    </div>
  )
}

export default RPTVehicleHireHistory
