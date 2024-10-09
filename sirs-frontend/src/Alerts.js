import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './index.css';


function Alerts() {
  return (
    <div><h3 className='h4 mt-4'>Alerts</h3>
    <div className='container  p-0' style={{'min-height':'500px'}}>

    <div className='custom_alert'>
        <p className='lead p-0'>This is classic</p>
    </div>
        
    </div>
    
    </div>
  )
}

export default Alerts