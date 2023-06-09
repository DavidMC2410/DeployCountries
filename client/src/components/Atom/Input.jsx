import React from "react";

export default function Input(props){
    return(
        <input onBlur={props.blur} className={props.style} type={props.type} name={props.id} onChange={props.onChange}/>
    )
}