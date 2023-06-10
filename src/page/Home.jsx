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
      <h1 className='text-center font-semibold text-3xl text-[#151B54] border-dotted border-[#151B54] border-2 my-5 w-[98%] m-auto' >  REPORTS</h1>
  
    <div className='flex gap-1 flex-wrap '>
      <Link to="/loadingslip"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >loadingslip</button> </Link>
      <Link to="/RPTOverallwallet"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTOverallwallet</button> </Link>
      <Link to="/RPTvehiclescheduledsummary"><button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTvehiclescheduledsummary</button> </Link>
      <Link to="/RPTVehiclebookingsummary"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTVehiclebookingsummary</button> </Link>
      <Link to="/RPTUserdetails"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTUserdetails</button> </Link>
      <Link to="/RPToverallcurrentbalances"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPToverallcurrentbalances</button> </Link>
      <Link to="/RPTvehicleownerdocuments"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTvehicleownerdocuments</button> </Link>
      <Link to="/RPTsinglepod"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTsinglepod</button> </Link>
      <Link to="/RPTpodRegister"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTpodRegister</button> </Link>
      <Link to="/RPTfreight"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTfreight</button> </Link>
      <Link to="/RPTVehicleHireHistory"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTVehicleHireHistory</button> </Link>
      <Link to="/RPTVehicleMasterInformation"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTVehicleMasterInformation</button> </Link>
      <Link to="/RPTVehicleschedulehistotry"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTVehicleschedulehistotry</button> </Link>
      <Link to="/RPTDemandDetail"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTDemandDetail</button> </Link>
      <Link to="/RPTNotificationView"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTNotificationView</button> </Link>
      <Link to="/RPTPromotionView"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTPromotionView</button> </Link>
      <Link to="/RPTNotificationReport"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTNotificationReport</button> </Link>
      <Link to="/RPTPromotionReport"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTPromotionReport</button> </Link>
      <Link to="/RPTreport"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >RPTreport</button> </Link>
      <Link to="/DataCard"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >DataCard</button> </Link>
   
    </div>
<h1 className='text-center font-semibold text-3xl text-[#151B54] border-dotted border-[#151B54] border-2 my-2 w-[98%] m-auto' >  FROMS</h1>
    <div className="flex gap-1  flex-wrap">
      <Link to="/FRMVehicle_View_Owner"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMVehicle_View_Owner</button> </Link>
      <Link to="/FRMMaster_Vehicle_View"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMMaster_Vehicle_View</button> </Link>
      <Link to="/FRMView_Pod"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMView_Pod</button> </Link>
      <Link to="/FRMScheduleView"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMScheduleView</button> </Link>
      <Link to="/FRMBooking_Status"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMBooking_Status</button> </Link>
      <Link to="/FRMHiringview"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMHiringview</button> </Link>
      <Link to="/FRMAll_Booking"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMAll_Booking</button> </Link>
      <Link to="/FRMVehicleDemandOwner"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMVehicleDemandOwner</button> </Link>
      <Link to="/FRMPromotion"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMPromotion</button> </Link>
      <Link to="/FRMPodRegisterForm"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMPodRegisterForm</button> </Link>
      <Link to="/profileUpdateForm"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >profileUpdateForm</button> </Link>
      <Link to="/FRMNotification"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMNotification</button> </Link>
      <Link to="/FRMContract_Entry"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMContract_Entry</button> </Link>
      <Link to="/FRMGPSrequierement"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMGPSrequierement</button> </Link>
      <Link to="/FRMVehicleDemandAgent"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMVehicleDemandAgent</button> </Link>
      <Link to="/FRMVehicleViewAgent"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMVehicleViewAgent</button> </Link>
      <Link to="/FRMGPSView"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMGPSView</button> </Link>
      <Link to="/FRMfastTag"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMfastTag</button> </Link>
      <Link to="/FRMFastTagRequest"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMFastTagRequest</button> </Link>
      <Link to="/FRMContractView"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMContractView</button> </Link>
      <Link to="/FRMwebsite"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMwebsite</button> </Link>
      <Link to="/FRMPurchesTyer"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMPurchesTyer</button> </Link>
      <Link to="/FRMPurchesSparePart"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMPurchesPart</button> </Link>
      <Link to="/FRMresaler"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMresaler</button> </Link>
      <Link to="/FRMresalerView"> <button  className="btn btn-success bg-[#151B54] py-2 px-2 w-auto text-base mt-2 rounded-lg text-white " >FRMresalerView</button> </Link>
   
    </div>

   
   
    </div>
  )
}

export default Home
