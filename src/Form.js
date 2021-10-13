

import React, {useState} from "react"

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
            <label htmlFor="recordName"></label>
            <input type="text" id="recordName" name="recordName" required onChange={onChangeHandler} value={entry.recordName} />
            <label htmlFor="artistName"></label>
            <input type="text" id="artistName" name="artistName" required onChange={onChangeHandler} value={entry.artistName}/>
            <label htmlFor="description"></label>
            <textarea id="description" name="description" required onChange={onChangeHandler} value={entry.description}/>
            <button type="submit">+Add</button>
        </form>
    )
}










export default Form