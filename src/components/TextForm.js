import React, {useState} from 'react'

export default function TextForm(props) {
  // Handling onclick event as handleUpClick for converting any text in textarea to Uppercase and setting it back to 
  // textarea
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper case.", "success");
  }

  const handleLowClick = () =>{
    // console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower case.", "success");
  }

  const handleClearClick = () =>{
    // console.log("Clear Text was clicked");
    let newText = ""
    setText(newText)
    props.showAlert("Text in the box has been cleared.", "success");
  }

  const handleCopyClick = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard.", "success");
  }

  const removeExtraSpaces = () =>{
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "));
    props.showAlert("All the extra spaces from the below text has been removed.", "success");
  }

  // We can see that we were changing the text value of textarea, so we have to handle the event of onChnage.
  // If we don't write setText(event.target.value) we won't be able to write in textarea. 
  // We are using state in textarea as text so we need to update when someone writes in the box and it can't happen 
  // without handling onChange event.
  // We are also getting event object so we can use it to make it write
  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value)
  }

    // We are using useState to change the state of our text area 
  const [text, setText] = useState("");
//   text = "something something"   ---->>> Wrong way to change the state
//   setText("something something") ---->>> Correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        {/* Copied from bootstrap's form control */}
        <div className="mb-3">
            {/* value of rows is updated from 3 to 8 to increase in size of text box */}
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8" placeholder="Enter text here"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Average reading time is {0.008 * text.split(" ").length} minutes or {0.48 * text.split(" ").length} seconds</p>

      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here..."}</p>
    </div>
    </>
  )
}
