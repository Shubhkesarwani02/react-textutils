/* eslint-disable no-empty-character-class */
import React, {useState} from 'react'

export default function Textform(props) {
const [text, setText] = useState('');
//const [text, setText] = useState('Enter text here');
//text = "new text"     //wrong way to update text
//setText ("new text")  //correct way to update text

const handleUpClick = ()=>{
    //console.log('Uppercase was clicked' + text);
    let newText= text.toUpperCase();
    setText(newText) //whenever we click upButton this function will get fired and it will update the text as setText("")
    props.showAlert("Converted to uppercase!","success")
  }
const handleLoClick = ()=>{
  let newText= text.toLowerCase();
  setText(newText); 
  props.showAlert("Converted to lowercase!","success")
}
const handleclearClick = ()=>{
  let newText= "";
  setText(newText); 
  props.showAlert("Text cleared!","success")
}

const handleOnChange = (event)=>{
    //console.log('On change');
    setText(event.target.value);
}

const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to  clipboard!","success")

}

const handleExtraSpaces =()=>{
  let newText= text.split(/[ ]+/);  //reject functions: ek se jyada space h toh split krdia and array ban gya voo
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed !","success")
}



  return (
    <>
    <div className='container' style={{color : props.mode==='light'?'#042743':'white'}}>
       <h1>{props.heading}</h1>
     <div className="mb-3">
       <textarea className="form-control" value = {text}  onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode==='light'?'white':'grey',color : props.mode==='light'?'#042743':'white'}}></textarea>
     
     </div>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color : props.mode==='light'?'#042743':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
    

  )
} 
