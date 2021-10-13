
import React, {useState} from 'react'
import './records.scss'

import Header from "./Header.js"
import Section from "./Section.js"
import List from "./List.js"
import Form from "./Form.js"

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

const Container = () => {
    const [data, setData] = useState(records)

    const submitHandler = entry => {
        setData([...data, entry])
    }

    return(
        <div>
            <Header />
            <main>
                <Section headingText="Add a new one" >  <Form onSubmit={submitHandler} />   </Section>
                <Section headingText="Records" children={<List children={data}/>}/>
            </main>
            
        </div>
    )
}

export default Container