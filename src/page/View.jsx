import React from 'react'
// import Report from "react-data-report"
const View = () => {
  return (

    <div className='w-[98%] m-auto'>
{/* <Report data={"example"}/> */}
<div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">  Vehicle Demands </div> 
    <div className='lg:grid lg:grid-cols-5 lg:gap-5 grid grid-cols-2 gap-2 text-[8px] lg:text-xs sm:grid sm:grid-cols-2 sm:gap-4 md:grid md:grid-cols-3 md:gap-2' >

 
    {[1,2,3,4,5,6,6,8].map((e)=>(<div className="w-full mx-auto bg-white rounded-xl  shadow-2xl border-collapse border overflow-hidden md:max-w-2xl">
      <div className="">
        <div className="">
          {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div> */}
      <p className='bg-blue-900  p-1 text-white text-center font-bold'>Enq id: 3654325 </p>
      <div className="p-2">
      <p>Enq date:</p>
      <p> From: </p>
      <p> To: </p>
      <p> Demand by:hgjkhgjgjgjgjjjj</p>
      <p>Vehicle type:</p>
      <p>Vehicle Height:</p>
      <p>Vehicle size:</p>
      <p>Vehicle capacity:</p>
      <p>Vehicle body type:</p>
      <p>Goods name:</p>
      <p>Total weight:</p>
      {/* <button className="text-center  btn btn-success bg-orange-500  px-1 w-full text-[8px]  p-1  rounded-lg text-white " >Apply</button> */}
      <img src="providevahicle.jpg" className='w-28 lg:w-40 sm:w-40 m-auto rounded-lg border' alt="" />
        </div>
        </div>
      </div>
    </div>))
      
      }
   
   
    
    
   
   
    
   

    
      
    </div>
    </div>
  )
}

export default View
