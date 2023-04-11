import React, {useState} from "react"

export default function TextForm(props) {
    
    const handleUpClick=()=>{
       // console.log("Uppercase was clicked!"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
       // console.log("On Change");
        setText(event.target.value)
    }
    const handleLoClick=()=>{
         let newText=text.toLowerCase();
         setText(newText)
     }
     const handleClearClick=()=>{
        let newText="";
        setText(newText)
    }
    const [text, setText] = useState('Enter Text here2');
	return (
		<div>
            <h2>{props.heading}</h2>
			<div className="mb-3">
			
				<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                
			</div>
		</div>
	)
}
