import Vehicleform from "./components/Vehicleform";

import { Route, Routes } from "react-router-dom";

import Loadingslip from "./page/Loadingslip";

import Notification from "./page/Notification";
import Promotion from "./page/Promotion";
import Vehicle_owner_documents from "./page/Vehicle_owner_documents";

import ProfileUpdateForm from "./page/ProfileUpdateForm";
import Vehicle_View from "./page/Vehicle_View";
import View from "./page/View";
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
import View_Report from "./page/reports/View_Report";
import All_Booking from "./page/reports/All_Booking";
import View_Pod from "./page/reports/View_Pod";
import Booking_Status from "./page/reports/Booking_Status";
import Contract_Entry from "./page/Form/Contract_Entry";

import Privacypolicy from "./page/privacy/Privacypolicy";



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
      {/* <Vehicleform/> */}
      {/* <SongApp/> */}

      {/* <span> {count} </span> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Vehicleform" element={<Vehicleform />}></Route>

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
        <Route path="/vehicleview" element={<Vehicle_View />}></Route>
        <Route path="/view" element={<View />}></Route>
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
        <Route path="/View_Report" element={<View_Report/>}></Route>
        <Route path="/All_Booking" element={<All_Booking/>}></Route>
        <Route path="/View_Pod" element={<View_Pod/>}></Route>
        <Route path="/Booking_Status" element={<Booking_Status/>}></Route>
        <Route path="/Contract_Entry" element={<Contract_Entry/>}></Route>
        <Route path="/Privacypolicy" element={<Privacypolicy />}></Route>
      </Routes>
    </div>
  );
}

export default App;
