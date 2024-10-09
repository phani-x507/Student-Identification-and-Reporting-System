import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Top_bar from './Top_bar';
import Sidebar from './Sidebar';
import Stats from './Stats';
import Alerts from './Alerts';
import axios from 'axios'
import { useLocation,useNavigate } from 'react-router-dom';

function Identifiedfaces() {
    const loc = useLocation()
    const data = loc
    const userid = loc.state.userid
    const [ids, setIds] = useState([]); // State to store the IDs
    const [loading, setLoading] = useState(true);
    const his = useNavigate();

    const GetDetails_handler =(data) =>{
        his('/getdetails' , {state:{user:loc.state,person:data}})
    }

    useEffect(() => {
        const fetchFaces = async () => {
            try {
                const res = await axios.post('http://localhost:5000/get_faces', {
                    userid,
                });
                console.log(res.data); // Debugging: log the response
                setIds(res.data); // Update state with the fetched IDs
            } catch (error) {
                console.error("Error fetching faces:", error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchFaces();
    }, [userid]);
    console.log(ids)

    const listItems = ids.map(person =>
        <div className='container border p-2 id_cards' style={{ 'min-height': '350px', 'max-height': '350px', width: '200px' }}  >
            <center><img style={{ width: '150px', 'border-radius': '30px' }} src={person.image} /></center>
            <p className='m-2' style={{ 'font-size': '13px' }} >ID : <b>{person.student_id}</b></p>
            <p className='m-2' style={{ 'font-size': '13px' }}>Name : <b>{person.student_name}</b></p>
            <center><button className='btn btn-primary m-2' onClick={() =>GetDetails_handler(person)}>Get Details</button></center>

        </div>
    );
    return (
        <div className='container-fluid m-0 p-0' >
            <div className='container-fluid w-100 ' style={{ 'background-color': '#060041', 'min-height': '8vh' }} >
                <Top_bar page="Identified Faces" />
            </div>
            <div style={{ 'display': 'flex', 'height': '91vh', 'background-color': '#fff' }}>
                <div className='container w-25 p-3 ' style={{ 'min-height': "500px", 'background-color': '#060060' }}>
                    <Sidebar data={loc} />
                </div>
                <div className='container w-50 p-3 ' style={{ 'min-height': "500px" }}>
                    <h1 className='display-6'><b>Identified Faces</b></h1>
                    <hr className='w-75' />

                    {/* Image Displays and Details */}
                    <div className='container p-0 ' style={{ display: 'flex', 'flex-wrap': 'wrap' }}>

                        {/* Identification Cards */}
                        {/* <div className='container border p-0 id_cards' style={{'min-height':'350px',width:'200px'}}  >
                        <img style={{width:'200px'}} src='data:image/jpeg;base64,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' />
                        <p className='m-2'>ID : <b>2111CS010576</b></p>
                        <p className='m-2'>Name : <b>Ramasahayam Sri Koushika Reddy </b></p>
                        <center><button className='btn btn-primary m-2'>Get Details</button></center>
                        
                    </div> */}
                        {listItems}

                    </div>

                </div>
                <div className='container w-25 p3  '>
                    <Alerts />
                </div>
            </div>
        </div>
    )
}

export default Identifiedfaces