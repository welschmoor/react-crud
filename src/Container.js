
import React from 'react'
import './records.scss'

import Header from "./Header.js"
import Section from "./Section.js"
import List from "./List.js"
import Form from "./Form.js"


const Container = () => {
    return(
        <div>
            <Header />
            <main>
                <Section headingText="Add a new one" />
                <Section headingText="Records" children={<List/>}/>
            </main>
            
        </div>
    )
}

export default Container