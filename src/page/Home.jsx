import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import ReactToPdf from "react-to-pdf"
const Home = () => {
  
  const ref = useRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4,2]
};
  return (
    <div className="">
    <div className='flex gap-3 flex-wrap '>
       <Link to="/loadingslip"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >loadingslip</button> </Link>
      <Link to="/Overallwallet"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >Overallwallet</button> </Link>
      <Link to="/vehiclescheduledsummary"><button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >vehiclescheduledsummary</button> </Link>
      <Link to="/Vehiclebookingsummary"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >Vehiclebookingsummary</button> </Link>
      <Link to="/Userdetails"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >Userdetails</button> </Link>
      <Link to="/overallcurrentbalances"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >overallcurrentbalances</button> </Link>
      <Link to="/vehicleownerdocuments"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >vehicleownerdocuments</button> </Link>
      <Link to="/FRMVehicle_View_Owner"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >FRMVehicle_View_Owner</button> </Link>
      <Link to="/singlepod"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >singlepod</button> </Link>
      <Link to="/podRegister"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >podRegister</button> </Link>
       <Link to="/freight"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >freight</button> </Link>
      <Link to="/VehicleHireHistory"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >VehicleHireHistory</button> </Link>
      <Link to="/VehicleMasterInformation"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >VehicleMasterInformation</button> </Link>
      <Link to="/Vehicleschedulehistotry"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >Vehicleschedulehistotry</button> </Link>
      <Link to="/RPTDemandDetail"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >RPTDemandDetail</button> </Link>
      <Link to="/NotificationView"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >NotificationView</button> </Link>
      <Link to="/PromotionView"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >PromotionView</button> </Link>
      <Link to="/NotificationReport"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >NotificationReport</button> </Link>
      <Link to="/PromotionReport"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >PromotionReport</button> </Link>
      <Link to="/Master_Vehicle_View"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >Master_Vehicle_View</button> </Link>
      <Link to="/All_Booking"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >All_Booking</button> </Link>
      <Link to="/View_Pod"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >View_Pod</button> </Link>
      <Link to="/Booking_Status"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >Booking_Status</button> </Link>
      <Link to="/ScheduleView"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >ScheduleView</button> </Link>
      <Link to="/Hiringview"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >Hiringview</button> </Link>
   
    </div>
<h1 className='center'>  form</h1>
    <div className="flex gap-5 flex-wrap">
    <Link to="/FRMVehicleDemandOwner"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >FRMVehicleDemandOwner</button> </Link>
    <Link to="/promotion"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >promotion</button> </Link>
    <Link to="/podRegisterForm"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >podRegisterForm</button> </Link>
     <Link to="/profileUpdateForm"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >profileUpdateForm</button> </Link>
     <Link to="/notification"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >notification</button> </Link>
     <Link to="/Contract_Entry"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >Contract_Entry</button> </Link>
      
     <Link to="/GPSrequierement"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >GPSrequierement</button> </Link>
     <Link to="/FRMVehicleDemandAgent"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >FRMVehicleDemandAgent</button> </Link>
     <Link to="/FRMVehicleViewAgent"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " >FRMVehicleViewAgent</button> </Link>
     
    </div>

   
   
    </div>
  )
}

export default Home
