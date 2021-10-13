

import React from "react"


const records = [
    {
        recordName: "Staying Alive",
        artistName: "Bee Gees",
        description: "Listen to this when you are in trenches of WWI"
    },
    {
        recordName: "Staying Dead",
        artistName: "G-Bees",
        description: "When you don't want to come back to this world"
    },
] 


const List = () => { 

    return(
        <ul>
            {records.map( ({recordName, artistName, description}) => {
                return(
                    <li key={recordName}>
                        <h3>{recordName}</h3>
                        <span>{artistName}</span>
                        <p>{description}</p>
                    </li>
                )
            })}
        </ul>
    )

}

export default List;