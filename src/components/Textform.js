import React,{useState} from "react";

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }

    const handleloClick=()=>{
     
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase","success");
  }

  const handlecleartext=()=>{
    console.log("lowercase was clicked");
    let newText='';
    setText(newText);
    props.showAlert("text is cleared","success");
}
   
    const handleOnChange=(event)=>{
        //to write text  to textarea we have to listen onchange() event 
        // console.log("onchanage");
        setText(event.target.value);
    }

    const [text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn-btn-success mx-3" onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn-btn-success mx-3" onClick={handleloClick}>convert to lowercase</button>
      <button className="btn-btn-success" onClick={handlecleartext}>clear text</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>your text summary</h1>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read </p>
     <h2>preview</h2>
     <p>{text.length>0?text:'enter someting in above text box '}</p>
   </div>

    </>
  );
}
