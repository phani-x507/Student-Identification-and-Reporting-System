import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './index.css';


function Top_bar(props) {
    return (
        <div className='container-fluid topbar' style={{'min-height': "50px", 'display': 'flex', 'justify-content': 'space-around','color':'white' }}>
            <div><p className='mt-3'><b>{props.page}</b></p></div>
            <div><h3 className='h5 mt-3'><b>STUDENT IDENTIFICATION AND REPORTING SYSTEM</b></h3></div>
            <div className='' style={{ 'display': 'flex' }}>
                <button style={{ 'background-color': 'transparent', 'border': '1px solid transparent' }}><img src='images/alert.webp' height="30px"></img></button>
                <button style={{ 'background-color': 'transparent', 'border': '1px solid transparent' }}><img src='images/pimg.png' height="30px"></img></button>
                <button style={{ 'background-color': 'transparent', 'border': '1px solid transparent' }}><img src='images/lout.webp' height="30px"></img></button>
            </div>
        </div>
    )
}

export default Top_bar