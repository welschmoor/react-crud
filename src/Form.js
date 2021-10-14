

import React, {useState} from "react"
import Input from "./Input.js"

const initalEntryState = {
    recordName: '',
    artistName: '',
    description: '',
}

const Form = ({onSubmit}) => {
    const [entry, setEntry] = useState(initalEntryState)

    const onChangeHandler = e => {
        setEntry({...entry, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault()
        onSubmit({...entry})    // we spread it inside {} simply to copy and make it immutable
        setEntry(initalEntryState)
    }

    return(
        <form onSubmit={submitHandler}>
            <Input labelText="Record Name" type="text" name="recordName" required onChange={onChangeHandler} value={entry.recordName} />

            <Input labelText="Artist Name" type="text" name="artistName" required onChange={onChangeHandler} value={entry.artistName}/>

            <Input type="textarea" name="description" required onChange={onChangeHandler} value={entry.description}/>
           
            <button type="submit">+Add</button>
        </form>
    )
}










export default Form