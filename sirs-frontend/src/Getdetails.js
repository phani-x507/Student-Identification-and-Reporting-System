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
    const person = loc.state.person
    const [seen_res,setSeen] = useState("")
    const id  = loc.state.person['h_id']
    console.log(loc.state.person)

   
        const mark_seen = async ()=>{
             try{
            const res = await axios.post('http://localhost:5000/mark_seen',{
                id
            }).then(res => setSeen(res.data['msg']))
        }catch(e){

        }
                
        }
        console.log(seen_res)

  return (
    <div className='container-fluid m-0 p-0' >
        <div className='container-fluid w-100 ' style={{'background-color':'#060041','min-height':'8vh'}} >
            <Top_bar page="Dashboard" />
        </div>
        <div style={{'display':'flex','height':'91vh','background-color':'#fff'}}>
            <div className='sidebar container w-25 p-3 ' style={{'min-height':"500px"}}>
            <Sidebar data={data} />
            </div>
            <div className=' container w-50 p-3 ' style={{'min-height':"500px"}}>
            <h1 className='h3'><b>Complete Details of : {person['student_id']} </b></h1>
            <hr className='w-75' />
                <div className='' style={{'max-height':'80vh','overflow-x':'hidden'}}> 
                <table class="table table-bordered">
        <thead>
            <tr>
                <th>Parameters</th>
                <th>Response</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ID</td>
                <td>{person['id']}</td> 
            </tr>
            <tr>
                <td>Student ID</td>
                <td>{person['student_id']}</td> 
            </tr>
            <tr>
                <td>Student Name</td>
                <td>{person['student_name']}</td> 
            </tr>
            <tr>
                <td>Course</td>
                <td>{person['course']}</td>
            </tr>
            <tr>
                <td>Year</td>
                <td>{person['year']}</td> 
            </tr>
            <tr>
                <td>Semester</td>
                <td>{person['semester']}</td>
            </tr>
            <tr>
                <td>Father Name</td>
                <td>{person['father_name']}</td> 
            </tr>
            <tr>
                <td>Mother Name</td>
                <td>{person['mother_name']}</td>
            </tr>
            <tr>
                <td>DOB</td>
                <td>{person['dob']}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{person['Gender']}</td> 
            </tr>
            <tr>
                <td>Email</td>
                <td>{person['email']}</td>
            </tr>
            <tr>
                <td>Batch</td>
                <td>{person['batch']}</td>
            </tr>
            <tr>
                <td>Nationality</td>
                <td>{person['nationality']}</td> 
            </tr>
            <tr>
                <td>Blood Group</td>
                <td>{person['blood_group']}</td> 
            </tr>
            <tr>
                <td>Father Mobile</td>
                <td>{person['father_mobile']}</td>
            </tr>
            <tr>
                <td>Guardian Mobile</td>
                <td>{person['guardian_mobile']}</td>
            </tr>
        </tbody>
    </table>
                </div>
            </div>
            <div className='container w-25 p3  '>
            <center className='mt-4'><img style={{height:'250px','border-radius':'30px','boxShadow':'0px 10px 15px 1px #bebfc2  '}} src={person['image']}></img></center>
            <center><button className='btn btn-success m-4' onClick={() => mark_seen() } >Mark as Seen</button></center>
            <center><p className='lead'>{seen_res}</p></center>
            </div>
        </div>
    </div>
  )
}

export default Getdetails