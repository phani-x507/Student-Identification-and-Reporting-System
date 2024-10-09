import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Top_bar from './Top_bar';
import './index.css';
import axios from 'axios'
import { useNavigate,Link,useLocation } from 'react-router-dom';

function Sidebar(props) {
    const his = useNavigate()
    console.log(props.data.state)
    const fullname = props.data.state.fullname
    const id = props.data.state.userid
    return (
        <div className='border' style={{ color: 'black' }}>
            <div  >
                <center><img className='mt-4 ' src='images/pimg.png' height='100px' /></center>
                <p className='m-3 mb-0 mx-4' style={{ 'font-size': '20px' }}>Welcome</p>
                <p className=' text-center'>Mr.<b> {fullname}</b></p>
                <button className='w-100 sidebar_buttons' onClick={()=>{his('/adminpanel',{state:props.data.state})}}>Dashboard</button>
                <button className='w-100 sidebar_buttons' onClick={()=>{his('/identifiedfaces',{state:props.data.state})}} >Identified Faces</button>
                <button className='w-100 sidebar_buttons' onClick={()=>{his('/unidentifiedfaces',{state:props.data.state})}}>Unidentified Faces</button>
                <button className='w-100 sidebar_buttons' onClick={()=>{his('/history')}}>History</button>
                <button className='w-100 sidebar_buttons'>Echo</button>

            </div>
        </div>
    )
}

export default Sidebar