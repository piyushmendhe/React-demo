import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

export default function ToAdd({addto}) {

  const [name,setname] = useState('')
  const [height,setheight] = useState('')
  const [weight,setweight] = useState('')
  
  const submit = (e) =>{
    e.preventDefault();
    if(!name||!height||!weight)
    {alert("Field cannot  be blank")}
    else{
      addto(name,height,weight);
      setname("")
      setheight("")
      setweight("")
    }
    

  }
  return (


    <Container className='shadow border mb-5 text-center '>
    <form onSubmit={submit} >
  <div className="form-group py-3">
    <label htmlFor="formGroupExampleInput" className='my-3 '>Name</label>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} 
    className="form-control text-center" id="Input" placeholder="Enter Name"/>
  </div>
  <div className="form-group py-3 ">
    <label htmlFor="formGroupExampleInput2 py-3" className='my-3 '>Height</label>
    <input type="text" value={height} onChange={(e)=>setheight(e.target.value)} 
    className="form-control text-center" id="Input2" placeholder="Height in CM"/>
  </div>
  <div className="form-group py-3 ">
    <label htmlFor="formGroupExampleInput2 py-3" className='my-3 '>Weight</label>
    <input type="text" value={weight} onChange={(e)=>setweight(e.target.value)} 
    className="form-control text-center" id="Input3" placeholder="Weight in KG"/>
  </div>
  <button className=' btn btn-warning py-2 mt-4 mb-4'>Add</button>
</form>
</Container>
  )
}
