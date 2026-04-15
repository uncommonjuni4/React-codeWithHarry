import React   from 'react'

export default function ProFun2(props) {
  


  return (
    <>
    
    <div className='container'>
        <h1>{props.text}</h1>
        <button  className='btn btn-danger'  onClick={props.changeText}>{props.chnagetitle}</button>
    </div>
    </>
  )
}
