import React, {useEffect,useState, useRef} from 'react';
import { useForm } from "react-hook-form";
import Rotate from '../assets/img/rotate.png'
import  '../assets/css/style.css'
import axios from 'axios'
import Wework from '../assets/img/we-work.png'
import Loginbtn from '../assets/img/login-btn.png'
import Wenot from '../assets/img/we-not.png'
import Skodalogo from '../assets/img/skoda-logo.png'
import Loginimg from '../assets/img/login-img.png'
import datetime from '../assets/img/date-time.png'
import covidline from '../assets/img/covid-line.png'

export default function Test() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const [loginFlag,setLoginFlag] = useState(false)
  const [clickButton,setClickButton] = useState(0)
  const[openLogin,setOpenLogin]=useState(true)

  useEffect(()=>{
  const  intervalID = setInterval(()=>{

   // window.location.reload()

    // axios
    //     .post('https://rry3le9ny4.execute-api.ap-south-1.amazonaws.com/api/refresh')
    //     .then(function (response) {
    //       console.log("Login response ",response.data.loginStatus);
    //       if(response.data.loginStatus==1){
    //         setClickButton(1);
    //       }else{
    //         setClickButton(0);
    //       }

    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
      },30000)
      return () => {
        clearInterval(intervalID);
      };

  },[])


  

  const onSubmit = (data,e )=>{
    console.log("FormData",data);
    e.preventDefault();
    axios
        .post('https://19qgdzdmqe.execute-api.ap-south-1.amazonaws.com/api/skoda-login', data)
        .then(function (response) {
          console.log(response.data);
          if(response.data.status){
            localStorage.setItem("userId",response.data.user.id);
            localStorage.setItem("name",response.data.user.name);
            localStorage.setItem('setupTime', Date.now());
           
           window.location.href='/audi'
        
          }else{
              document.getElementById("msgHelp").style.display="block"
          }

        })
        .catch(function (error) {
            console.log(error);
        });
  } 
   
  return (
  
    <div >
        <div className="portrait">
  <div className="text-center text-white">
<img src={Rotate} className="img-fluid h100" alt=""/>
</div>
  </div>
  <div className="landscape">
  <div class="container-fluid bgimg pl-5">
  <div className="col-sm-12 pt-md-5 pt-sm-3"><img src={Skodalogo} className="img-fluid skodalogo"/></div>
  {!loginFlag?( 
  <div className="col-sm-12 pt-5 pt-sm-3 pt-md-3">
    
    
    <div class="row mt-5">
   <div className='col-sm-6 align-self-center'>
   <div className="col-sm-12 mt-5">
    <img src={Wework} className="img-fluid wework"/>
    {/* {clickButton==1?( */}
    </div>
    <div className="col-sm-12 text-left mt-5">
      {openLogin?(<img src={Loginbtn} 
     onClick={()=>setLoginFlag(!loginFlag)} 
    className="img-fluid loginbtn pl-5 pr-5"/> ):""}
       
     </div>
    </div>  
    {/* ):""}   */}
     
    <div className="col-sm-6 text-center align-self-center"><img src={Wenot} className="img-fluid wenot"/></div></div>
    </div> ):""}
  
{loginFlag?( <div className="row">
<div className="col-sm-8 col-md-8 col-lg-6 mt-lg-5 mt-sm-3 text-center d-flex justify-content-center align-self-center">


 <div className="form col-sm-8 col-md-8 col-lg-6 mt-lg-5 mt-sm-3">
 <small id="msgHelp" style={{display:"none"}} class="form-text  text-danger">*Employee code isn't correct, Kindly recheck and login again.</small>
<form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group text-white">
{/* <label for="employeename">Name</label> */}
      <input className="form-control" placeholder="Name" {...register("name", { required: true, maxLength: 20 })}  />
      {errors.name && <span style={{color:'red'}}>*Name  is required</span>}
      </div>
      <div className="form-group text-white">
      {/* <label for="userphone">Employee Code</label> */}
      <input className="form-control" type="number" placeholder="Employee Code"  {...register("emp_code",  {valueAsNumber: true,required: true, maxLength : 10})} />
      {errors.mobile && <span style={{color:'red'}}>*Employee code  is required</span>}
      </div>
      <div className="form-group text-white">
      {/* <label for="userphone">Employee Code</label> */}
      <select className="form-control" {...register("location",{required: true})}>
      <option value="">Select City</option>
        <option value="Pune">Pune</option>
        <option value="Aurangabad">Aurangabad</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Gurugram">Gurugram</option>
      </select>
      {errors.city && <span style={{color:'red'}}>*City  is required</span>}
      </div>
      <div className="form-group  text-center"><input type="image" src={Loginimg} className="img-fluid loginbtn1"/> </div>
      {/* <div className="form-group text-center mt-4">
      <input type="submit" className="btn btn-primary col-12"/>
      </div> */}
    </form>
    </div>
    </div>
    <div className="col-sm-4  col-md-4 col-lg-6  text-center align-self-center"><img src={Wenot} className="img-fluid"/> </div>
    </div>):""}
    {/* <div className="covid mt-sm-1 mt-lg-5 mt-md-3"><img src={covidline} className="img-fluid" alt="" /></div> */}
    </div>
    </div>
    </div>
    
  );
}