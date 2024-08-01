import React from 'react'

export default function Alert(props) {

  const capitalise = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
//to capitalise the first text of successss.
  }

  return (
    //if props.alert is true then aage ki chije execute hongi otherwise not.
    <div style={{height : "50px"}}>
        {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
                    {/* <button type="button" className="btn-close"data-bs-dismiss="alert"aria-label="Close"></button>       */}
                </div>}
    </div>

   

  )
}
