import React,{useState,useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Top_bar from './Top_bar';
import Sidebar from './Sidebar';
import Stats from './Stats';
import Alerts from './Alerts';
import axios from 'axios'
import { useLocation } from 'react-router-dom';


function Getdetails() {
    const loc = useLocation()
    const data = {state : loc.state.user}
    console.log(loc.state.person)


  return (
    <div className='container-fluid m-0 p-0' >
        <div className='container-fluid w-100 ' style={{'background-color':'#060041','min-height':'8vh'}} >
            <Top_bar page="Dashboard" />
        </div>
        <div style={{'display':'flex','height':'91vh','background-color':'#fff'}}>
            <div className='container w-25 p-3 ' style={{'min-height':"500px",'background-color':'#060060'}}>
            <Sidebar data={data} />
            </div>
            <div className='container w-50 p-3 ' style={{'min-height':"500px"}}>
                
            </div>
            <div className='container w-25 p3  '>
            <Alerts />
            </div>
        </div>
    </div>
  )
}

export default Getdetails