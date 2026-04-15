import React,{useState} from 'react'
import ProFun2 from './ProFun2'


export default function ProFun() {

        let [text,stetext] = useState("Here  i work on Props with functinla compntes");

        let changeText = ()=>{
          stetext("Value update using Usestate hook ")
        };
  return (
    
    <>
    <ProFun2  text={text}  changeText={changeText}   chnagetitle="Click to chnage value"/>
    </>
  )
}
