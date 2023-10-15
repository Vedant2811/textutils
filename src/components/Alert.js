// We have created this component to display the alert message right below the Navbar 
import React from 'react'

function Alert(props) {
    // This function is used to capitalize first letter of alert type
    // Firstly it converts the word to lowercase and then uppercase the 1st letter after that concatinate 
    // it with the substring other than 1st letter 

    const upperCase = (word) => {
        // Check if 'word' is defined and is a string
        if (typeof word === 'string') {
          const lower = word.toLowerCase();
          return lower.charAt(0).toUpperCase() + lower.slice(1);
        } else {
          // Handle the case where 'word' is not a string or any other default value or error 
          // handling or error handling you prefer but for now we returning empty string
          return ''; 
        }
    }
    return (
        // (props.alert &&) is used to check the condition whether props.alert is null or not
        // If it is props.alert returns null then nothing will be printed on the screen but if it returns 
        // true statements follwed will be printed accordingly 
        
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
            <strong>{upperCase(props.alert.type)}</strong> : {props.alert.msg}        
        </div>
    )
}

export default Alert
