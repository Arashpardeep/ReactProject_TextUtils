import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    // text = "You have clicked on handleUpClick"; // Wrong way to change the state
    setText(newText); // Correct way to change the state
    props.showAlert("Converted to uppercase!", "success");
  } 

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText); 
    props.showAlert("Converted to lowercase!", "success");
  } 

  const handleCamelClick = () => {
    let camelText = "";
    for(let i = 0; i < text.length; i++) {
      if((text[i-1] === " ") || (i === 0)) {
        camelText += text.charAt(i).toUpperCase();
      }
      else {
        camelText += text.charAt(i).toLowerCase();
      }
    }
    setText(camelText);
    props.showAlert("Converted to camelcase!", "success");
  }

  const handleCopy = () => { 
    navigator.clipboard.writeText(text); // This is a modern way to copy text to clipboard
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleHighlight = () => {
    if(myStyle.fontWeight === 400) {
      setMyStyle({
        color: props.mode === 'dark' ? 'pink' : 'red',
        fontWeight: 800
      });
      setHighlightText("Unhighlight text");
      props.showAlert("Text is highlighted!", "success");
    }
    else {
      setMyStyle({
        color: props.mode === 'dark' ? 'white' : 'black',
        fontWeight: 400
      });
      setHighlightText("Highlight text");
      props.showAlert("Text is unhighlighted!", "success");
    }
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed!", "success");
  }

  const handleClearText = () => {
    setText("");
    props.showAlert("All the text is cleared!", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  } 

  const [text, setText] = useState("");

  const [highlightText, setHighlightText] = useState("Highlight Text");

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    fontWeight: 400
  });

  return (
    <>
      <div className="container">
        <h1 style={{color: props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? props.darkColor : props.lightColor, color: myStyle.fontWeight === 800 ? (props.mode === 'dark' ? 'pink' : 'red') : props.textColor, fontWeight: myStyle.fontWeight, borderWidth: 2}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${props.theme} m-1`} onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.theme} m-1`} onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.theme} m-1`} onClick={handleCamelClick}>Convert to camelcase</button>
        <button disabled={text.length===0} className={`btn btn-${props.theme} m-1`} onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className={`btn btn-${props.theme} m-1`} onClick={handleHighlight}>{highlightText}</button>
        <button disabled={text.length===0} className={`btn btn-${props.theme} m-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className={`btn btn-${props.theme} m-1`} onClick={handleClearText}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1 className='mb-4'>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        {/* Here \s+ is a regular expression, as we have to write regular expressions in //, so we are writing it as /\s+/, \s is a regular expression to denote white space, and when we add + to it, then it means one or more than one white spaces, and white spaces also includes new line, so it also resolve the new line issue */}
        <p>Takes {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  )
}
