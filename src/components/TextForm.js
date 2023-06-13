import React, {useState} from 'react'

export default function TextForm(props) {
   
    const handleupclick = ()=>{
        console.log( "upper case was clicked" + text);
        let newtext = text. toUpperCase  ();
        settext(newtext)
    }
    const handlelowclick = ()=>{
        console.log( "lower case was clicked" + text);
        let newtext = text. toLowerCase  ();
        settext(newtext)
    }
    
    const handleonchange = (event)=>{
        console.log( "on change");
        settext( event.target.value );
    }
    const [text, settext] = useState("Enter text here ")
  return (
    <>
 <div className="container" style={{color:props.mode==='dark'?'white':'#020d1c'}}>
 <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className=" form-control" onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#020d1c'}} value={text}  id="mybox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-3"  onClick={handleupclick}>Convert to upper case </button>
<button className="btn btn-primary mx-3"  onClick={handlelowclick}>Convert to lower case </button>
</div>  

<div className="container my-3" style={{color:props.mode==='dark'?'white':'#020d1c'}}>
    <h1>your text here</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>preview</h2>
    <p>{text.length>0?text: "Enter something here to show in the box" }  </p>
</div> 
</>


    
  )
}

