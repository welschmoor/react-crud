
import React from "react"
import { Link } from "react-router-dom"
import Section from './Section.js'


const Home = () => {
    return (
        <Section headingText="Weather Report">      
            <p>Select temperature scale </p>
            <nav aria-label="Main">
                <ul>
                    <li><Link to="/reports/kelvin">kelvin</Link></li>
                    <li><Link to="/reports/fahrenheit">fahrenheit</Link></li>
                    <li><Link to="/reports/celsius">celsius</Link></li>
                </ul>
            </nav>
        </Section>
    )
}

export default Home