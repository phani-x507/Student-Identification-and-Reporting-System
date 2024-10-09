import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './index.css';

function Stats() {
    const [stats,setStats] = useState([])
    const [loading, setLoading] = useState(true);


 

    useEffect(()=>{
        const  fetch_data = async() =>{
            try{
               const res = await axios.post('http://localhost:5000/getstats',{
                    
                });
                console.log(res.data)
                setStats(res.data)
            }catch(e){
                console.error("Error fetching faces:", e);
            }finally{
                setLoading(false)
            }
        };
        fetch_data();
        // The Emplty list below is called dependency array, used to stop repitative function calling
    },[]);
    return (
        <div><h1 className='display-6'><b>Dashboard</b></h1>
            <hr className='w-75' />

            {/* Stats */}
            <div className='container   ' style={{display:'flex','flex-wrap': 'wrap'}}>
                {/* custom cards */}
                
                <div className=' stats_card ' >
                    <p className='m-0 text-center mb-1 '>Enrolled faces</p>
                    <div className='border enable_shadows ' >
                        <center><h1 className='mt-4'>{stats['enrolled_faces']}</h1></center>
                    </div>
                </div>

                <div className=' stats_card' >
                    <p className='m-0 text-center mb-1 '>Identified faces</p>
                    <div className='border  enable_shadows' >
                        <center><h1 className='mt-4'>{stats['identified_faces']}</h1></center>
                    </div>
                </div>

                <div className=' stats_card' >
                    <p className='m-0 text-center mb-1'>Unidentified faces</p>
                    <div className='border enable_shadows ' >
                        <center><h1 className='mt-4'>{stats['unidentified_faces']}</h1></center>
                    </div>
                </div>

                <div className=' stats_card' >
                    <p className='m-0 text-center mb-1 '>History Entries</p>
                    <div className='border enable_shadows ' >
                        <center><h1 className='mt-4'>{stats['identified_faces']+stats['unidentified_faces']}</h1></center>
                    </div>
                </div>

                <div className=' stats_card' >
                    <p className='m-0 text-center mb-1 '>Conversations</p>
                    <div className='border enable_shadows ' >
                        <center><h1 className='mt-4'>{stats['conv_count']}</h1></center>
                    </div>
                </div>
                
                {/* Custom Cards Ends Here */}
            </div>
            {/* Stats */}
            </div>
    )
}

export default Stats