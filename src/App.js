import { Link, Route, Routes } from "react-router-dom";
import Loadingslip from "./page/Loadingslip";
import Vehicle_owner_documents from "./page/Vehicle_owner_documents";
import ProfileUpdateForm from "./page/ProfileUpdateForm";
import FRMVehicle_View_Owner from "./page/FRMVehicle_View_Owner";
import Home from "./page/Home";
import NotificationView from "./page/NotificationView";
import PromotionView from "./page/PromotionView";
import Privacypolicy from "./page/privacy/Privacypolicy";
import "./styles.css";
import FRMVehicleDemandOwner from "./components/FRMVehicleDemandOwner";
import FRMVehicleDemandAgent from "./page/Form/FRMVehicleDemandAgent";
import FRMVehicleViewAgent from "./page/Form/FRMVehicleViewAgent";
import RPTDemandDetail from "./page/reports/RPTDemandDetail";
import FRMGPSView from "./page/Form/FRMGPSView";
import FRMPromotion from "./page/Form/FRMPromotion";
import FRMNotification from "./page/FRMNotification";
import FRMContract_Entry from "./page/Form/FRMContract_Entry";
import FRMGPSrequierement from "./page/Form/FRMGPSrequierement";
import FRMHiringview from "./page/reports/FRMHiringview";
import FRMAll_Booking from "./page/reports/FRMAll_Booking";
import FRMBooking_Status from "./page/reports/FRMBooking_Status";
import FRMScheduleView from "./page/reports/FRMScheduleView";
import FRMView_Pod from "./page/reports/FRMView_Pod";
import FRMMaster_Vehicle_View from "./page/reports/FRMMaster_Vehicle_View";
import RPTOverallwallet from "./page/RPTOverallwallet";
import RPTVehiclebookingsummary from "./page/RPTVehiclebookingsummary";
import RPTOverallcurrentbalances from "./page/RPTOverallcurrentbalances";
import RPTSinglepod from "./page/RPTSinglepod";
import RPTPodRegister from "./page/RPTPodRegister";
import RPTFreight from "./page/RPTFreight";
import RPTUserdetails from "./page/RPTUserdetails";
import RPTVehicleMasterInformation from "./page/reports/RPTVehicleMasterInformation";
import RPTVehicleschedulehistotry from "./page/reports/RPTVehicleschedulehistotry";
import RPTVehicleHireHistory from "./page/reports/RPTVehicleHireHistory";
import RPTVehiclescheduledsummary from "./page/RPTVehiclescheduledsummary";
import RPTNotificationReport from "./page/reports/RPTNotificationReport";
import RPTPromotionReport from "./page/reports/RPTPromotionReport";
import Dropdownd from "./components/Dropdownd";
import RPTreport from "./page/reports/RPTreport";
import DataCard from "./components/DataCard";
import FRMPod from "./page/FRMPod";
import FRMfastTag from "./page/Form/FRMfastTag";
import FRMFastTagRequest from "./page/Form/FRMFastTagRequest";
import FRMContractView from "./page/Form/FRMContractView";
import FRMwebsite from "./page/Form/FRMwebsite";
import FRMPurchesTyer from "./page/Form/FRMPurchesTyer";

import FRMPurchesSparePart from "./page/Form/FRMPurchesSparePart";

import SingleProduct from "./components/SingleProduct";
import Demo from "./components/Demo";
import RPTVehicle_View from "./page/RPTVehicle_View";
import FRMresaler from "./page/Form/FRMresaler";
import FRMresalerView from "./page/Form/FRMresalerView";
import FRMNew from "./page/Form/FRMNews";
import FRMNews from "./page/Form/FRMNews";
import FRMNewsView from "./page/Form/FRMNewsView";


// create a new preview

function App() {

  
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function (event) {
    window.history.go(1);
  };



  return (
    <div>


      <Routes>
        {/* report */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/loadingslip" element={<Loadingslip />}></Route>
        <Route path="/RPTDemandDetail" element={<RPTDemandDetail />}></Route>
        <Route path="/RPTOverallwallet" element={<RPTOverallwallet />}></Route>
        <Route path="/RPTvehiclescheduledsummary" element={<RPTVehiclescheduledsummary />} ></Route>
        <Route path="/RPTVehiclebookingsummary" element={<RPTVehiclebookingsummary />} ></Route>
        <Route path="/RPTUserdetails" element={<RPTUserdetails />}></Route>
        <Route path="/RPToverallcurrentbalances" element={<RPTOverallcurrentbalances />} ></Route>
        <Route path="/RPTvehicleownerdocuments" element={<Vehicle_owner_documents />}></Route>
        <Route path="/RPTprofileUpdateForm" element={<ProfileUpdateForm />} ></Route>
        <Route path="/RPTsinglepod" element={<RPTSinglepod/>}></Route>
        <Route path="/RPTpodRegister" element={<RPTPodRegister />}></Route>
        <Route path="/RPTfreight" element={<RPTFreight />}></Route>
        <Route path="/RPTVehicleHireHistory" element={<RPTVehicleHireHistory />} ></Route>
        <Route path="/RPTVehicleMasterInformation" element={<RPTVehicleMasterInformation />}></Route>
        <Route path="/RPTVehicleschedulehistotry" element={<RPTVehicleschedulehistotry />}></Route>
        <Route path="/RPTNotificationView" element={<NotificationView />}></Route>
        <Route path="/RPTPromotionView" element={<PromotionView />}></Route>
        <Route path="/RPTNotificationReport" element={<RPTNotificationReport />}></Route>
        <Route path="/RPTPromotionReport" element={<RPTPromotionReport/>}></Route>
        <Route path="/RPTPrivacypolicy" element={<Privacypolicy />}></Route>
        <Route path="/RPTreport" element={<RPTreport />}></Route>
        <Route path="/DataCard" element={<DataCard />}></Route>
{/* from */}
        
        <Route path="/FRMPodRegisterForm" element={<FRMPod />}></Route>
        <Route path="/FRMView_Pod" element={<FRMView_Pod />}></Route>
        <Route path="/FRMScheduleView" element={<FRMScheduleView />}></Route>
        <Route path="/FRMBooking_Status" element={<FRMBooking_Status />}></Route>
        <Route path="/FRMAll_Booking" element={<FRMAll_Booking />}></Route>
        <Route path="/FRMHiringview" element={<FRMHiringview />}></Route>
        <Route path="/FRMGPSrequierement" element={<FRMGPSrequierement />}></Route>
        <Route path="/FRMVehicle_View_Owner" element={<FRMVehicle_View_Owner />} ></Route>
        <Route path="/FRMContract_Entry" element={<FRMContract_Entry />}></Route>
        <Route path="/FRMMaster_Vehicle_View" element={<FRMMaster_Vehicle_View />}></Route>
        <Route path="/FRMNotification" element={<FRMNotification />}></Route>
        <Route path="/FRMPromotion" element={<FRMPromotion />}></Route>
        <Route path="/FRMVehicleDemandOwner" element={<FRMVehicleDemandOwner />} ></Route>
        <Route path="/FRMVehicleDemandAgent" element={<FRMVehicleDemandAgent />}></Route>
        <Route path="/FRMVehicleViewAgent" element={<FRMVehicleViewAgent />}></Route>
        <Route path="/FRMGPSView" element={<FRMGPSView />}></Route>
        <Route path="/Dropdownd" element={<Dropdownd />}></Route>
        <Route path="/FRMfastTag" element={<FRMfastTag />}></Route>
        <Route path="/FRMFastTagRequest" element={<FRMFastTagRequest />}></Route>
        <Route path="/FRMContractView" element={<FRMContractView />}></Route>
        <Route path="/FRMwebsite" element={<FRMwebsite />}></Route>
        <Route path="/FRMPurchesTyer" element={<FRMPurchesTyer />}></Route>
        <Route path="/FRMPurchesSparePart" element={<FRMPurchesSparePart />}></Route>
        <Route path="/SingleProduct/:id" element={<SingleProduct />}></Route>
        <Route path="/FRMresaler" element={<FRMresaler />}></Route>
        <Route path="/FRMresalerView" element={<FRMresalerView />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/FRMNew" element={<FRMNews />}></Route>
        <Route path="/FRMNewsView" element={<FRMNewsView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
