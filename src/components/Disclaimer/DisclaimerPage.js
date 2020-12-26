import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Disclaimer from '../Disclaimer/Disclaimer'


function DisclaimerPage() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen= {isOpen} toggle = {toggle} />
            <Navbar toggle = {toggle}/>
            <Disclaimer/>
        </>
    )
}

export default DisclaimerPage;