

import { Route, Routes } from "react-router-dom";

import Loadingslip from "./page/Loadingslip";

import Notification from "./page/Notification";
import Promotion from "./page/Promotion";
import Vehicle_owner_documents from "./page/Vehicle_owner_documents";

import ProfileUpdateForm from "./page/ProfileUpdateForm";
// import Vehicle_View from "./page/Vehicle_View";
import FRMVehicle_View_Owner from "./page/FRMVehicle_View_Owner";
import Singlepod from "./page/Singlepod";
import PodRegister from "./page/PodRegister";
import PodRegisterForm from "./page/PodRegisterForm";
import Freight from "./page/Freight";
import Overallcurrentbalances from "./page/Overallcurrentbalances";
import Userdetails from "./page/Userdetails";
import Vehiclebookingsummary from "./page/Vehiclebookingsummary";
import Vehiclescheduledsummary from "./page/Vehiclescheduledsummary";
import VehicleHireHistory from "./page/reports/VehicleHireHistory";
import VehicleMasterInformation from "./page/reports/VehicleMasterInformation";
import Vehicleschedulehistotry from "./page/reports/Vehicleschedulehistotry";
import Overallwallet from "./page/Overallwallet";
import { useEffect, useState } from "react";
import Home from "./page/Home";
import NotificationView from "./page/NotificationView";
import PromotionView from "./page/PromotionView";
import NotificationReport from "./page/reports/NotificationReport";
import PromotionReport from "./page/reports/PromotionReport";

import All_Booking from "./page/reports/All_Booking";
import View_Pod from "./page/reports/View_Pod";
import Booking_Status from "./page/reports/Booking_Status";
import Contract_Entry from "./page/Form/Contract_Entry";

import Privacypolicy from "./page/privacy/Privacypolicy";
import GPSrequierement from "./page/Form/GPSrequierement";
import Master_Vehicle_View from "./page/reports/Master_Vehicle_View";
// import Example from "./components/Example";


import "./styles.css";
import ScheduleView from "./page/reports/ScheduleView";
import Hiringview from "./page/reports/Hiringview";
import FRMVehicleDemandOwner from "./components/FRMVehicleDemandOwner";
import FRMVehicleDemandAgent from "./page/Form/FRMVehicleDemandAgent";
import FRMVehicleViewAgent from "./page/Form/FRMVehicleViewAgent";
import RPTDemandDetail from "./page/reports/RPTDemandDetail";
import DownloadableContent from "./components/DownloadableContent";
// import MyComponent from "./components/MyComponent";
// create a new preview


function App() {
 
  // useEffect(()=>{

    // const [count, setCount] = useState(0);
  
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function(event) {
      window.history.go(1);
    };
    // },[])
 
  return (
    <div>
      {/* <Example /> */}
      {/* <Vehicleform/> */}
      {/* <SongApp/> */}

      {/* <span> {count} </span> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/FRMVehicleDemandOwner" element={<FRMVehicleDemandOwner />}></Route>

        <Route path="/loadingslip" element={<Loadingslip />}></Route>
        <Route path="/Overallwallet" element={<Overallwallet />}></Route>
        <Route
          path="/vehiclescheduledsummary"
          element={<Vehiclescheduledsummary />}
        ></Route>
        <Route
          path="/Vehiclebookingsummary"
          element={<Vehiclebookingsummary />}
        ></Route>
        <Route path="/Userdetails" element={<Userdetails />}></Route>
        <Route
          path="/overallcurrentbalances"
          element={<Overallcurrentbalances />}
        ></Route>
        <Route path="/promotion" element={<Promotion />}></Route>
        <Route path="/notification" element={<Notification />}></Route>

        <Route
          path="/vehicleownerdocuments"
          element={<Vehicle_owner_documents />}
        ></Route>
        <Route
          path="/profileUpdateForm"
          element={<ProfileUpdateForm />}
        ></Route>
        <Route path="/RPTDemandDetail" element={<RPTDemandDetail />}></Route>
        <Route path="/FRMVehicle_View_Owner" element={<FRMVehicle_View_Owner />}></Route>
        <Route path="/singlepod" element={<Singlepod />}></Route>
        <Route path="/podRegister" element={<PodRegister />}></Route>
        <Route path="/podRegisterForm" element={<PodRegisterForm />}></Route>
        <Route path="/freight" element={<Freight />}></Route>
        <Route
          path="/VehicleHireHistory"
          element={<VehicleHireHistory />}
        ></Route>
        <Route
          path="/VehicleMasterInformation"
          element={<VehicleMasterInformation />}
        ></Route>
        <Route
          path="/Vehicleschedulehistotry"
          element={<Vehicleschedulehistotry />}
        ></Route>
        <Route path="/NotificationView" element={<NotificationView />}></Route>
        <Route path="/PromotionView" element={<PromotionView />}></Route>
        <Route path="/NotificationReport" element={<NotificationReport/>}></Route>
        <Route path="/PromotionReport" element={<PromotionReport/>}></Route>
        <Route path="/Master_Vehicle_View" element={<Master_Vehicle_View/>}></Route>
        <Route path="/All_Booking" element={<All_Booking/>}></Route>
        <Route path="/View_Pod" element={<View_Pod/>}></Route>
        <Route path="/Booking_Status" element={<Booking_Status/>}></Route>
        <Route path="/Contract_Entry" element={<Contract_Entry/>}></Route>
        <Route path="/Privacypolicy" element={<Privacypolicy />}></Route>
        <Route path="/GPSrequierement" element={<GPSrequierement />}></Route>
        <Route path="/ScheduleView" element={<ScheduleView />}></Route>
        <Route path="/Hiringview" element={<Hiringview />}></Route>
        <Route path="/FRMVehicleDemandAgent" element={<FRMVehicleDemandAgent />}></Route>
        <Route path="/FRMVehicleViewAgent" element={<FRMVehicleViewAgent />}></Route>
        <Route path="/DownloadableContent" element={<DownloadableContent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
