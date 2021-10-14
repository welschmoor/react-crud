

import React, {useRef} from "react"
import uniqid from "uniqid"



const Input = ({type, labelText, ...props}) => {
    const id = useRef(uniqid())
    return(
        <React.Fragment>
            <label htmlFor={id.current}>{labelText}</label>
            {type === "textarea" ? <textarea id={id.current} {...props} ></textarea> : <input type="text" id={id.current} {...props} />}
            
        </React.Fragment>
    )
}

export default Input