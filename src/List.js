

import React from "react"





const List = ({children}) => { 



    return(
        <ul>
            {children.map( ({id, recordName, artistName, description}) => {
                return(
                    <li key={id}>
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