import React, {useState} from 'react'
import Sidebar from '../../Sidebar'
import Navbar from '../../Navbar'
import FirstFeature from '../FirstFeature/FirstFeature'
import SecondFeature from '../FirstFeature/SecondFeature'
import ThirdFeature from '../FirstFeature/ThirdFeature'
import {homeObjTwo} from '../FirstFeature/Data'
import {homeObjThree} from '../FirstFeature/Data2'
import {homeObjFour} from '../FirstFeature/Data3'



function Feature() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen= {isOpen} toggle = {toggle} />
            <Navbar toggle = {toggle}/>
            <FirstFeature {...homeObjTwo} />
            <SecondFeature {...homeObjThree}/>
            <ThirdFeature {...homeObjFour}/>
        </>
    )
}

export default Feature;