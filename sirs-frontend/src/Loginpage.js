import React,{useState,useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom';

function Loginpage() {

  const [uname,setUname] = useState("");
  const [pass,setPass] =  useState("");
  const history = useNavigate();

  const  login_handler = async (e) =>{
    e.preventDefault()
    try{
      await axios.post('http://localhost:5000/login',{
        uname,pass
      }).then(res => {
        const user = res.data
        localStorage.setItem('userid',user)
        history('/adminpanel', {state:user})
      })

    }catch(e){
      console.log(e)
    }
  }


  return (
    <div >
      <div className='container-fluid  '>
        <h1 className='mx-auto text-center pt-4 pb-0 mb-0'><b>Student Identification And Reporting System</b></h1>
        <hr className='w-50 mx-auto' />
      <div className=' container-fluid d-flex align-items-center flex-column min-vh-90 min-vw-90 '   >
      <div className='p-2 mx-auto my-5 w-75 login_main d-flex justify-content-center enable_shadows   ' style={{"background-color":'white'}}>
            <div className='w-50 d-flex align-items-center'   style={{"background-color":'black '}} >
            <img  src='https://static.vecteezy.com/system/resources/thumbnails/028/713/714/small_2x/alone-male-in-in-the-room-cartoon-illustration-art-free-photo.jpg' style={{'max-height':'400px'}} className='img-fluid'  width="100%" height="100%"  alt='SideImg' />
            </div>


            {/* Login Details */}
            <div className='w-50  px-3 b-2 d-inline-block' >
                <h1 className='pt-3 px-3 h2'><strong>Login</strong></h1>
                <p className='lead p-2 px-3 text-secondary' style={{"font-size":'12px'}} >Welcome to Student Identification and Reporting System </p>
                {/* <p className='lead fs-6 text-secondary px-4' >Username : </p> */}


                <form onSubmit={login_handler}>
                <div className=' p-2 d-flex align-items-center  justify-content-center  '>
                <img src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png' className='mx-2' alt=''style={{'max-height':'30px'}} />
                <input type='text' className='textbox1 w-50' value={uname} onChange={e=>setUname(e.target.value)}  placeholder='Enter Username' />
            </div>

            <div className=' p-2 d-flex align-items-center justify-content-center ' >
                <img src='https://icons.veryicon.com/png/o/miscellaneous/remitting-country-linear-icon/password-148.png' alt='' className='mx-2' style={{'max-height':'30px'}} />
                <input type='password' className='textbox1 w-50' value={pass}  onChange={e=>setPass(e.target.value)}  placeholder='Enter Password' />
            </div>

            <p className='p-4 h6 '><small>Enter Captcha</small></p>

            <div className='d-flex w-75 mx-auto  align-items-center justify-content-center'>
              <div className='w-25'>
              <img src='https://blog.c22.cc/wp-content/uploads/2010/10/input-black.gif' className='img-fluid' alt='' /></div>
              <div  className='w-75'>
              <input type='text' className='textbox1' placeholder='Enter Captcha' style={{'border-bottom':'2px solid blue','width':'50%'}} />
              </div>
            </div>
            <div className='d-flex  my-3 justify-content-end' >
              <input type='submit' className='btn btn-danger mx-4  my-2 ' style={{'border-radius' : '2px' ,'font-size':'13px'}}  value="Sign In" /></div>
            </form>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage
