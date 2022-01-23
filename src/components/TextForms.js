import React,{useState} from 'react'


export default function TextForms(props) {
    const uppercaseclick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase!', 'success');
    }
    const lowercaseclick = ()=>{
        console.log("Lowercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowercase!', 'success');

    }
    const cleartext = ()=>{
        setText("")
        props.showAlert('Text is cleared!','success');
    }
    const handleonchange = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const extraspaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed!', 'success');
    }
    const clipboard = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text is copied!', 'success');

    }
    const [text, setText] = useState('');

    return (
     <>
       <div className='container' style={{color: props.mode==='dark'?'white':'dark'}}>
          <h1>{props.heading}</h1> 
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonchange} id="floatingTextarea2" rows="10"></textarea>
         </div>
        <button className='btn btn-primary mx-1 my-3' onClick={uppercaseclick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1 my-3' onClick={lowercaseclick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={cleartext}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={extraspaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-1' onClick={clipboard}>Copy Text</button>
       </div> 
        
        <div className='container my-3'>
            <ul>
            <li><h2>Your text summary</h2></li>
            <h5>In your text {text.split(" ").length} words and {text.length} charcters.</h5>
            <li><h3>Average time needed to read the text is {0.008*text.split(" ").length} min</h3></li>
            <li><h2>Preview</h2></li>
            <h6>{text}</h6>
            </ul>
        </div>
     </>
    )
}


