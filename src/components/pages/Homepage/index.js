import React, {useState} from 'react'
import Sidebar from '../../Sidebar'
import Navbar from '../../Navbar'
import Pricing from '../Pricing'
import Footer from '../Footer/Footer'
import Herosection from '../Herosection'
import {homeObjOne} from './Data'
import {homeObjFour, homeObjThree, homeObjTwo} from '../FirstFeature/Data'
import FirstFeature from '../FirstFeature/FirstFeature'
import Callouts from '../Callouts'

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen= {isOpen} toggle = {toggle} />
            <Navbar toggle = {toggle}/>
            <Herosection {...homeObjOne} />
            <FirstFeature {...homeObjTwo} />
            <FirstFeature {...homeObjThree}/>
            <FirstFeature {...homeObjFour}/>
            <Callouts/>
            <Pricing/>
        </>
    )
}

export default Home;
