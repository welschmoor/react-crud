

import React from 'react'
import Helmet from 'react-helmet'

const Section = ({children, headingText, headingLevel = 1}) => {
    const H = `h${headingLevel}` 
    return(
        <section>
            <Helmet>
                <title>{`${headingText} - WeatherApp`}</title>
            </Helmet>
            <H>{headingText}</H>
            {children}
        </section>
    )
}

export default Section 