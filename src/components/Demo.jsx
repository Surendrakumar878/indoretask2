import React, { useEffect, useState } from 'react'
import { useGetPokemonByNameQuery } from '../Api/services/Pokman'
import { Link } from 'react-router-dom'

const Demo = () => {
    const [data1,setData1]=useState([])
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    useEffect(()=>{
        try {
          setData1(data.todos) 
        } catch (error) {
          
        }
      
      },[data])
  return (
    <div>
      <table>

<thead>
  <tr>
      <th >The table header</th>
  </tr>
</thead>



{   data1?.map((e,index)=><tr>
<td>
<Link to={`/SingleProduct/${e.id}`}>

{index+1}
</Link>
</td>
<td>
{e.todo}
</td>
</tr>)  }




</table>
    </div>
  )
}

export default Demo
