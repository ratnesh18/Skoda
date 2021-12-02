import React from "react";
import { useForm } from "react-hook-form";
import Rotate from '../assets/img/rotate.png'
import  '../assets/css/style.css'
import axios from 'axios'

export default function Test() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = (data,e )=>{
    console.log(data);
    e.preventDefault();
    axios
        .post('https://rry3le9ny4.execute-api.ap-south-1.amazonaws.com/api/login', data)
        .then(function (response) {
           
            console.log(response);
            
                localStorage.setItem("userId",response.data.user.id);
                localStorage.setItem("name",response.data.user.name);
               // history.push('/audi');
               window.location.href='/audi'
             

        })
        .catch(function (error) {
            console.log(error);
        });
  } 
   
  return (

    <div>
        <div className="portrait">
  <div className="text-center text-white">
<img src={Rotate} className="img-fluid h100" alt=""/>
</div>
  </div>
  <div className="landscape">

          <div className="col-md-12">

<div className="row d-flex justify-content-center">

<div className="col-md-3 col-sm-5 mt-5">
<form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
<label for="username">User Name</label>
      <input className="form-control" {...register("name", { required: true, maxLength: 20 })} />
      {errors.name && <span style={{color:'red'}}>*Name  is required</span>}
      </div>
      <div className="form-group">
<label for="userphone">Phone</label>
      <input className="form-control" type="number"  {...register("mobile",  {valueAsNumber: true,required: true, maxLength : 10})} />
      {errors.mobile && <span style={{color:'red'}}>*Mobile  is required</span>}
      </div>
      <div className="form-group text-center mt-4">
      <input type="submit" className="btn btn-primary col-12"/>
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    
  );
}