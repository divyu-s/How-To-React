import React from "react";
import ReactDOM from "react-dom"
import "styling.css";
// import "variableName" from "fileName/libraryName"
const node  = document.getElementById("root");
function tick(){
    const time = new Date().toLocaleTimeString();
    const style = {
        backgroundColor : "green",
        fontSize : 20,//by default pixels
    };
    const element = (
        <>
        <div className="bg-red">
        <div>{time}</div>
        </div>
        <div style={style}>Static Content</div>
        </>
    );
    ReactDOM.render(element,node);
}
setInterval(tick,1000)