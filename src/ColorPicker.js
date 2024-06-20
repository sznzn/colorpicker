import React, {useState} from "react";

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker(){
    const [color, setColor] = useState("Tomato");
    const divStyle = {backgroundColor: color};

    const handleButtonClick = (event) =>{
        const newColor = event.target.innerText;
        setColor(newColor);
    }
    return (
        <div style={divStyle} className="container">
            <h1>The color is {color}</h1>
            
            {colorNames.map((colorName)=>(
                <button onClick={handleButtonClick}>
                    {colorName}
                </button>
            ))}
            
        </div>
    )
}

/* 
<button onClick = {()=>setColor("Aquamarine")}>Aquamarine</button>
<button onClick = {()=>setColor("BlueViolet")}>BlueViolet</button>
<button onClick = {()=>setColor("Chartreuse")}>Chartreuse</button>
<button onClick = {()=>setColor("CornflowerBlue")}>CornflowerBlue</button> 
*/