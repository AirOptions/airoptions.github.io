import React, {useState} from 'react'
import Sidebar from '../../Sidebar'
import Navbar from '../../Navbar'
import Pricing from '../Pricing'
import Herosection from '../Herosection'
import {homeObjOne} from './Data'
import {homeObjTwo} from '../FirstFeature/Data'
import {homeObjThree} from '../FirstFeature/Data2'
import {homeObjFour} from '../FirstFeature/Data3'
import FirstFeature from '../FirstFeature/FirstFeature'
import SecondFeature from '../FirstFeature/SecondFeature'
import ThirdFeature from '../FirstFeature/ThirdFeature'
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
            <SecondFeature {...homeObjThree}/>
            <ThirdFeature {...homeObjFour}/>
            <Callouts/>
            <Pricing/>
        </>
    )
}

export default Home;
