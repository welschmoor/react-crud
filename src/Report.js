
import React from "react"
import Section from "./Section.js"
import { weatherData } from './weatherData.js'


const Report = ({match}) => {
    const {scale} =  match.params;
    const data = weatherData(scale)
    const headingText = `Weather in ${scale.charAt(0).toUpperCase() + scale.slice(1)}`

    return(
<Section headingText={headingText}>

    <dl>
       {data.map(each => {
           return(
           <React.Fragment>
               <dt>{each.city}</dt>
               <dd>{each.temp.toString()}</dd>
           </React.Fragment>
           )
       })} 
    </dl>
</Section>
    )
}

export default Report;