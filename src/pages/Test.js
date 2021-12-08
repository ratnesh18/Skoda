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

export default function Test() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const [loginFlag,setLoginFlag] = useState(false)

  const onSubmit = (data,e )=>{
    console.log(data);
    e.preventDefault();
    axios
        .post('https://rry3le9ny4.execute-api.ap-south-1.amazonaws.com/api/login', data)
        .then(function (response) {
          console.log(response.data.status);
          if(response.data.status){
            localStorage.setItem("userId",response.data.user.id);
            localStorage.setItem("name",response.data.user.name);
           // history.push('/audi');
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
  <div class="container-fluid bgimg">
  <div className="col-sm-12 pt-md-5 pt-sm-3"><img src={Skodalogo} className="img-fluid skodalogo"/></div>
  {!loginFlag?( <div className="row">
    
    <div className="col-sm-6 text-center">
    <img src={Wework} className="img-fluid wework"/>
    <div className="ml-5 text-left"><img src={Loginbtn} onClick={()=>setLoginFlag(!loginFlag)} className="img-fluid loginbtn pl-5"/> </div>
     </div>
    <div className="col-sm-6 text-center"><img src={Wenot} className="img-fluid wenot"  /></div>
    </div> ):""}
  
{loginFlag?( <div className="row">
<div className="col-sm-6 mt-lg-5 mt-sm-2 text-center d-flex justify-content-center">


 <div className="form col-sm-12 col-md-6 mt-lg-5 mt-sm-0">
 <small id="msgHelp" style={{display:"none"}} class="form-text  text-danger">*Employee Code is not found</small>
<form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group text-white">
<label for="employeename">Employee Name</label>
      <input className="form-control" {...register("name", { required: true, maxLength: 20 })} />
      {errors.name && <span style={{color:'red'}}>*Name  is required</span>}
      </div>
      <div className="form-group text-white">
<label for="userphone">Employee Code</label>
      <input className="form-control" type="number"  {...register("mobile",  {valueAsNumber: true,required: true, maxLength : 10})} />
      {errors.mobile && <span style={{color:'red'}}>*Mobile  is required</span>}
      </div>
      <div className="form-group  text-center"><input type="image" src={Loginimg} className="img-fluid loginbtn1"/> </div>
      {/* <div className="form-group text-center mt-4">
      <input type="submit" className="btn btn-primary col-12"/>
      </div> */}
    </form>
    </div>
    </div>
    <div className="col-sm-6 text-center"><img src={Wenot} className="img-fluid wenot"/></div>
    </div>):""}
 
    </div>
    </div>
    </div>
    
  );
}