import React, {useState} from 'react'
import Sidebar from '../../Sidebar'
import Navbar from '../../Navbar'
import FirstFeature from '../FirstFeature/FirstFeature'
import {homeObjTwo, homeObjThree, homeObjFour} from '../FirstFeature/Data'


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
            <FirstFeature {...homeObjThree}/>
            <FirstFeature {...homeObjFour}/>
        </>
    )
}

export default Feature;