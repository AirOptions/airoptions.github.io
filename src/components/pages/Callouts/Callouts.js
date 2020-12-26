import React, {useState} from 'react'
import Sidebar from '../../Sidebar'
import Navbar from '../../Navbar'
import Callouts from '../Callouts/index'


function Callouts1() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen= {isOpen} toggle = {toggle} />
            <Navbar toggle = {toggle}/>
            <Callouts/>
        </>
    )
}

export default Callouts1;