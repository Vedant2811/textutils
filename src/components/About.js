// This is a Component used to display the data of About section 
import React, { Component, useState } from 'react'

export default function About() {

    // This useState is created to change the style state of application
    // By default it is in light mode as background color is white and text color is black
    const[myStyle, setMyStyle] = useState({
        color : "black",
        backgroundColor : "white"
    })

    // This useState is created which will be used to change the state of mode
    const[btnText, setBtnText] = useState("Enable dark mode")

    // This function is used to change the current style of the page to another style where
    // text color is white and bg is black i.e. "Dark Mode"
    const toggleStyle = () => {
        if(myStyle.color === 'black'){
            setMyStyle({
                color : "white",
                backgroundColor : "black"
            })
            setBtnText("Enable light mode")
        } else{
            setMyStyle({
                color : "black",
                backgroundColor : "white"
            })
            setBtnText("Enable dark mode")
        }
    }
    
  return (
    // This below code is copied ffrom bootstrap's accordian section and edit it to be used further
    // We have provided each accordian with myStyle object by inserting it into div tag 
    <div className = "container" style = {myStyle}>
        <h1 className='my-3'>About Us</h1>
        {/* In this div tag we've included 3 accordian and updated all accordian w.r.t. style */}
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <button onClick = {toggleStyle}  type='button' className="btn btn-primary my-2">{btnText}</button>
        </div>
    </div>
  )
}
