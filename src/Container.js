
import React from 'react'
import './records.scss'

import Header from "./Header.js"
import Section from "./Section.js"


const Container = () => {
    return(
        <div>
            <Header />
            <main>
                <Section headingText="Add a new one" />
                <Section headingText="Records" />
            </main>
            
        </div>
    )
}

export default Container