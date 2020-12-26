import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Pricing from './Pricing'


function PricingSide() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen= {isOpen} toggle = {toggle} />
            <Navbar toggle = {toggle}/>
            <Pricing/>
        </>
    )
}

export default PricingSide;