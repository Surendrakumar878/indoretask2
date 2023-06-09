import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetEditQuery } from '../Api/services/Pokman'

const SingleProduct = () => {
const {id}=useParams()
const [data1,setData1]=useState({})
const {data}=useGetEditQuery(id)

 console.log(id,data1)

 useEffect(()=>{

    try {
        setData1(data)
        
    } catch (error) {
        
    }
 },[data])
  return (
    <div className='' > 
     <h1>
        
         SingleProduct
        </h1>

<h1>

      {data1?.todo}
</h1>
    </div>
  )
}

export default SingleProduct
