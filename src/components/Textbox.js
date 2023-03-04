import React, { useState } from "react";

export default function Textbox(props) {

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearclick = () => {
        let newText = "";
        setText(newText);
    }

    const handelOnchange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Clear Textarea And Enter Your Text');

    return (
        <>
            <div className="container my-3">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelOnchange} id="textbox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpclick}>{props.btn}</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLoclick}>{props.btn2}</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClearclick}>{props.btn3}</button>
            </div>
            <div className="container">
                <h3>Text Summary</h3>
                <p>{text.split(" ").length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes To Read</p>
                <h3 className="my-2">Text Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
