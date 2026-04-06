import Reac,{useState} from 'react'

export default function Textform(props) {

    let [text ,setText]  =useState('Enter Text Here .Thank You so Much') ;

    const  changeValue =(e)=>{
        setText("");
        // console.log(e.target.value);
        setText(e.target.value);
    }
    const upperCase =()=>{
        let upperValue = text.toUpperCase();
        setText(upperValue);
        props.showalert("Convert to uperrcase ","success")
    }

    const lowerCase =()=>{
        let lowerValue = text.toLowerCase();
        setText(lowerValue);
        props.showalert("Convert to Lowercase ","success")
    }
    

    const clearCase = ()=>{
        setText("");
        props.showalert("clear text box","success");
    }


     const BackCase  = ()=>{
         setText("Enter Text Here .Thank You so Much");
         props.showalert("Text back ","success")
     }
  return (
<>
<div className="mb-3 my-3">
  <label htmlFor="mybox" className="form-label" >{props.heading}</label>
 {/* <textarea 
  className="form-control" 
  value={text}  
  onChange={changeValue}    
//   style={{ color: props.mode.color === "dark" ? "dark" : "white" , backgroundColor: props.mode.color === "dark" ? "dark":"white"}}
style={{backgroundColor:props.mode.color==="light"?"dark" :"white"}}
  id="mybox" 
  rows="9"
></textarea> */}

<textarea 
  className="form-control" 
  value={text}  
  onChange={changeValue}    
  style={{
    backgroundColor: props.mode.color=== "dark" ? "dark" : "white", //</div>✅ Text color bhi set karo
  }} 
  id="mybox" 
  rows="9"
></textarea>
</div>

<div className="container my-3">
<button  className='btn btn-danger  mx-2'  onClick={upperCase}>To Convert Upper case</button>
<button  className='btn btn-secondary mx-2'  onClick={lowerCase}>To Convert Lower case</button>
<button  className='btn btn-warning mx-2'   onClick={clearCase}>To CLear Text Box</button>
<button  className='btn btn-warning mx-2'   onClick={BackCase}>To Back Value</button>
</div>

  <div className="container my-4" >
     <h1>Your Text Summary</h1>
     <p> {text.split(" ").length} word and  {text.length} Character</p>
     <p> { 0.008 * text.split(" ").length} Mintus To Read Wordsr</p>
     <h2>Periview</h2>
     <h5>{text}</h5>
</div>
</>
  )
}
