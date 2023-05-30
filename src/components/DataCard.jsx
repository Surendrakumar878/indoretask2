import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const DataCard = ({vehicleid="eqre", vehicleNumber="32", vehicleSize="23", vehicleType="car", currentLocation="bhopal", availableRoutes="df", postingTime="424" }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const registerUserdata = async () => {
          axios
            .get("http://localhost:3004/vehicle")
            .then((res) => {
            //   setUserdata(res.data);
              setData(res.data.slice(0, 100));
            })
            .catch((error) => console.log(error));
        };
        registerUserdata();
      }, []);
    return (
    <div>
          
      
       
          <div className="lg:grid lg:grid-cols-3 lg:gap-4 grid grid-cols-1 p-4 gap-2 text-[11px] lg:text-xs sm:grid sm:grid-cols-2 sm:gap-4 md:grid md:grid-cols-3 md:gap-2">
        {data?.map((e) => (
          <div className="w-[100%] mx-auto bg-white rounded-xl  shadow-2xl border-collapse border overflow-hidden ">
           
             
                {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div> */}
                <p className="bg-blue-900  p-1 text-white text-center sm:font-semibold font-extrabold">
                  Sch id: {"e.enq_id"} bhopal to Indore
                </p>
                <div className="p-2">
                  
                  <div className="flex gap-2 justify-between">
                    {" "}
                    <span>
                      {" "}
                      <span className="font-bold">Vehicle id </span>
                      {"e.enq_id"}
                    </span>
                    <span>
                      <span className="font-bold">Vehicle No:</span>{" "}
                      {"e.demand_by"}
                    </span>{" "}
                  </div>
                  <div className="flex gap-2 justify-between">
                    {" "}
                    <span>
                      {" "}
                      <span className="font-bold">Type:</span>
                      {"e.vehicle_type"}
                    </span>
                    <span>

                    <span className="font-bold">Size</span>{"e.vehicle_height"}
                    </span>
                  </div>
                  <div className="flex gap-2 justify-between">
                    {" "}
                    <span>
                      {" "}
                      <span className="font-bold"> Capacity</span>
                      {"e.vehicle_size"}
                    </span>
                    <span>
                      <span className="font-bold">  No Of Tire:</span>
                      {"e.vehicle_capacity"}
                    </span>{" "}
                  </div>
                  <div className="flex gap-2 justify-between">
                    {" "}
                    <span>
                      {" "}
                      <span className="font-bold">Freight </span>{" "}
                      {"e.vehicle_body_type"}
                    </span>
                    <span>
                      {" "}
                      <span className="font-bold">Posting Time</span>
                      {"e.goods_name"}
                    </span>{" "}
                  </div>
                  <div className="flex gap-2 justify-between">
                  <span>
                      {" "}
                      <span className="font-bold">Current Location:</span>{" "}
                      {"e.total_weight"}
                    </span>{" "}
                    <span>
                      {" "}
                      <span className="font-bold">Available Routes:</span>{" "}
                      {"e.total_weight"}
                    </span>{" "}
                  </div>

                  {/* <button className="text-center  btn btn-success bg-orange-500  px-1 w-full text-[8px]  p-1  rounded-lg text-white " >Apply</button> */}
                  <div className=' text-center  m-auto'>
            <input className='text-center m-auto' type="checkbox" /> <label className='center' htmlFor="">Interested </label>  <button className='bg-blue-900 px-4 rounded-sm text-white'>hire</button>
        </div>
                </div>
          
           
          </div>
         ))} 
      </div>
     
   
    </div>
  )
}

export default DataCard
