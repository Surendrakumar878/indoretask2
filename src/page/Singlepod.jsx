import React from 'react'

const Singlepod = () => {
  return (
    <div className='w-[98%] m-auto mt-10'>
     <div class="grid grid-cols-4 gap-0">
  <div class=" border-collapse border border-black border-2 ">POD ID:</div>
  <div class=" border-collapse border border-black border-t-2 border-r-2 border-b-2 border-l-0">POD NO:</div>
  <div class=" border-collapse border border-black  border-t-2 border-r-2 border-b-2 border-l-0 ">POD DATE/TIME</div>
  <div class=" border-collapse border border-black  border-t-2 border-r-2 border-b-2 border-l-0 ">Vehicle no:</div>
  <div class=" border-collapse border border-black  border-t-0 border-r-2 border-b-2 border-l-2 ">Booking id:</div>
  <div class=" border-collapse border border-black  border-t-0 border-r-2 border-b-2 border-l-0">Booking date/time:</div>
  <div class=" border-collapse border border-black  border-t-0 border-r-2 border-b-2 border-l-0 "> <p>Station fro :</p>
  <p>Station to :</p> </div>
  <div class=" border-collapse border border-black  border-t-0 border-r-2 border-b-2 border-l-0 ">
    <p>Reporting date/time</p>
    <p>Unloading date/time</p>
  

    </div>
  <div class=" border-collapse border border-black  border-t-0 border-r-2 border-b-0 border-l-2  col-span-2 ...">Driver name:</div>
  <div class="border-collapse border border-black  border-t-0 border-r-2 border-b-0 border-l-0 ...">Goods name</div>
  <div class="  border-collapse border border-black  border-t-0 border-r-2 border-b-0 border-l-0 ...">
    
    <p>Loading weight:</p>
    <p>Unloading weight:</p>
    <p>Weight difference:</p>
    

</div>
  <div class="  border-collapse border border-black  border-t-2 border-r-2 border-b-2 border-l-2 col-start-1 col-end-5 ...">Submitted by :Transporter name</div>
</div>
    </div>
  )
}

export default Singlepod
