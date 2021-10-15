
import React, {useState, useEffect, useRef} from 'react'
import './records.scss'
import axios from 'axios'


import Header from "./Header.js"
import Section from "./Section.js"
import List from "./List.js"
import Form from "./Form.js"

// const records = [
//     {
//         recordName: "Staying Alive",
//         artistName: "Bee Gees",
//         description: "Listen to this when you are in trenches of WWI"
//     },
//     {
//         recordName: "Staying Dead",
//         artistName: "G-Bees",
//         description: "When you don't want to come back to this world"
//     },
// ] 

const Container = (props) => {
    const [data, setData] = useState([])
    const [liveText, setLiveText] = useState('')
    const isMounted = useRef(true)

    useEffect(()=>{
        const fetchData = async () => {
            const {data} = await axios.get('/ali/records')
            if (isMounted.current) {
                setData(data)
            }
        }
        fetchData();


        // axios.get('/api/records')
        // .then(res=>{
        //     if (isMounted.current === true) {
        //         setData(res.data)
        //     }
        // })


        return ()=> { return isMounted.current = false}
    }, [])

    const submitHandler = entry => {
        // setData([...data, entry])
        axios.post('/api/records', entry).then(res => {
            if (isMounted.current) {
                console.log(res)
                setData([...data, res.data])
                setLiveText(`${entry.recordName} added.`)   // we want to set it only once it was successfully POSTed to server
            }
        })  

        props.setShowApp(false)
    }

    return(
        <div>
            <Header />
            <main>
                <Section headingText="Add a new one" >  <Form onSubmit={submitHandler} />   </Section>
                <Section headingText="Records" children={<List children={data}/>}/>
            </main>
            <div aria-live="polite" aria-atomic="true" className="visually-hidden">{liveText}</div>
        </div>
    )
}

const Wrapper = () => {
    const [showApp, setShowApp] = useState(true)
    return showApp && <Container setShowApp={setShowApp} />
}

export default Wrapper