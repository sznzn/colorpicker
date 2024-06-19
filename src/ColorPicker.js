import React, {useState} from "react";

export default function ColorPicker(){
    const [color, setColor] = useState("lightgreen");
    const divStyle = {backgroundColor: color};

    const handleButtonClick = (event) =>{
        const newColor = event.target.innerText;
        setColor(newColor);
    }
    return (
        <div style={divStyle} className="container">
            <h1>The color is {color}</h1>
            
            <button onClick = {handleButtonClick}>Aquamarine</button>
            <button onClick = {handleButtonClick}>BlueViolet</button>
            <button onClick = {handleButtonClick}>Chartreuse</button>
            <button onClick = {handleButtonClick}>CornflowerBlue</button>
            
        </div>
    )
}

/* 
<button onClick = {()=>setColor("Aquamarine")}>Aquamarine</button>
<button onClick = {()=>setColor("BlueViolet")}>BlueViolet</button>
<button onClick = {()=>setColor("Chartreuse")}>Chartreuse</button>
<button onClick = {()=>setColor("CornflowerBlue")}>CornflowerBlue</button> 
*/