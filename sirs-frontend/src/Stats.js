import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './index.css';

function Stats() {
    return (
        <div><h1 className='display-6'><b>Dashboard</b></h1>
            <hr className='w-75' />

            {/* Stats */}
            <div className='container   ' style={{display:'flex','flex-wrap': 'wrap'}}>
                {/* custom cards */}
                
                <div className=' stats_card ' >
                    <p className='m-0 text-center mb-1 '>Enrolled faces</p>
                    <div className='border enable_shadows ' >
                        <center><h1 className='mt-4'>545</h1></center>
                    </div>
                </div>

                <div className=' stats_card' >
                    <p className='m-0 text-center mb-1 '>Identified faces</p>
                    <div className='border  enable_shadows' >
                        <center><h1 className='mt-4'>545</h1></center>
                    </div>
                </div>

                <div className=' stats_card' >
                    <p className='m-0 text-center mb-1'>Unidentified faces</p>
                    <div className='border enable_shadows ' >
                        <center><h1 className='mt-4'>545</h1></center>
                    </div>
                </div>

                <div className=' stats_card' >
                    <p className='m-0 text-center mb-1 '>History Entries</p>
                    <div className='border enable_shadows ' >
                        <center><h1 className='mt-4'>545</h1></center>
                    </div>
                </div>

                <div className=' stats_card' >
                    <p className='m-0 text-center mb-1 '>Conversations</p>
                    <div className='border enable_shadows ' >
                        <center><h1 className='mt-4'>545</h1></center>
                    </div>
                </div>
                
                {/* Custom Cards Ends Here */}
            </div>
            {/* Stats */}
            </div>
    )
}

export default Stats