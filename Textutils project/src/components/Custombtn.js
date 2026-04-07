import React from 'react'

export default function Custombtn(props) {

    const redmode =()=>{
        document.body.style.backgroundColor ="red";
        document.body.style.color ="white";
        props.showalert("Red mode active","dark")

    }
    const  yellowmode =()=>{
document.body.style.backgroundColor ="yellow";
        document.body.style.color ="black";
        props.showalert("Yellow mode active","danger")
        

    }
  return (
    
    <>
    <div  className='container-fluid'>
        <div  className='container'>
<button className='btn btn-danger mx-3'  onClick={redmode}>Red Button</button>
        <button className='btn btn-warning mx-3'  onClick={yellowmode}>Red Button</button>
        </div>
        
    </div>
    </>

  )
}
