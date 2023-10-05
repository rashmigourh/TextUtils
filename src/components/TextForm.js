import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../index.css'

export default function TextForm(props) {
  //NOTE: this is the state syntax where text is current state and we will use setText to change the state of our text 
  //like we did for our button
  const [text, setText] = useState('');
  // setText("text here");

  //it enables any user to make any kind of change in state variable
  const handleOnChange = (event) => {
    // console.log("onchange")
    setText(event.target.value);
  }

  //upper and lower case
  let handleUpperCases = () => {

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");

  }

  //italics
  const [buttonText, setButtonText] = useState('Convert to italics');
  const handleItalics = () => {
    let value = document.getElementById("myBox");
    if (value.style.fontStyle === "italic") {
      value.style.fontStyle = "normal";
      setButtonText("Convert to italics")
      props.showAlert("Converted to normal","success");
    } else {
      value.style.fontStyle = "italic";
      setButtonText("Convert to normal")
      props.showAlert("Converted to Italics","success");

    }
  }

  //bold
  const [buttonBold, setButtonBold] = useState('Convert to Bold');
  const handleBold = () => {
    let value = document.getElementById('myBox');
    if (value.style.fontWeight === 'bold') {
      value.style.fontWeight = "normal";
      setButtonBold('Convert to bold')
      props.showAlert("Converted to Normal","success");

    } else {
      value.style.fontWeight = "bold"
      setButtonBold('Convert to normal');
      props.showAlert("Converted to Bold","success");

    }
  }

  //copy text : we used navigator interface to copy text to clipboard
  const handleCopy=() =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text is Copied","success");

  }

  //remove extra spaces using regix
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed","success");

  }

  //reverse the string
  const handleReverse=()=>{
    let str="";
    for (let index = text.length-1; index>=0; index--) {
      str+=text[index];
    }
    setText(str);
    props.showAlert("Text is reversed","success");
  }

  //speech translation
  const textToSpeech=()=>{
    const speech=new SpeechSynthesisUtterance();
    speech.text=text;
    speech.lang='eng';
    window.speechSynthesis.speak(speech);
    props.showAlert("Speech is enabled","success");
  }

  return (
    <div>
      <div className="mb-3 container">
        <h3 className={`mb-4 text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h3>
        <textarea className={`form-control border border-${props.mode==='light'?'dark':'light'}`} onChange={handleOnChange} value={text} id="myBox" rows="8" placeholder='enter text here...'></textarea>
        <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mt-2 `} onClick={handleUpperCases}>Convert to uppercase</button>
        <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mt-2 mx-1`} onClick={handleLowercase}>Convert to lowercase</button>
        <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mt-2 mx-1`} onClick={handleItalics}>{buttonText}</button>
        <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mt-2 mx-1`} onClick={handleBold}>{buttonBold}</button>
        <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mt-2 mx-1`} onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mt-2 mx-1`} onClick={ handleExtraSpaces}>Remove extra spaces</button>
        <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mt-2 mx-1`} onClick={handleReverse}>Reverse text</button>
        <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mt-2 mx-1`} onClick={textToSpeech}>Speech</button>

        <div className={`contain my-3 px-4 border-${props.mode==='light'?'dark':'light'}`}>
          <h4 className={`pt-2 text-${props.mode==='light'?'dark':'light'}`}>Text Summary</h4>
          <p className={`pt-2 text-${props.mode==='light'?'dark':'light'}`}>Number of Characters : {text.replaceAll(' ', '').length}</p>
          <p className={`pt-2 text-${props.mode==='light'?'dark':'light'}`}>Number of Words : {text.split(/\s+/).filter((e)=>{return e.length!==0}).length}</p>
          <p className={`pt-2 text-${props.mode==='light'?'dark':'light'}`}>Number of White Spaces : {text.split(" ").length - 1}</p>
          <p className={`pt-2 text-${props.mode==='light'?'dark':'light'}`}>Time Required to Read : {0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length}</p>
        </div>

        <div className={`contain my-3 px-4 text-${props.mode==='light'?'dark':'light'} border-${props.mode==='light'?'dark':'light'}`}>
          <h4>Preview</h4>
         <p> {text.length>0?text:"Nothing to preview!"}</p>
        </div>
      </div>
    </div>

  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
  heading: 'enter heading'
}
