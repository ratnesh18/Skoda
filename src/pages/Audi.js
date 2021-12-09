import React,{useEffect} from 'react'
import Rotate from '../assets/img/rotate.png'
import Chatimg from '../assets/img/chat.png'
import Langu from '../assets/img/languagech.png'
import  '../assets/css/style.css'
import VideoPlayer from './VideoPlayer'
import Chat from './Chat'

function Audi() {
//file updated ...
  useEffect(()=>{
console.log("Get code",localStorage.getItem("setupTime"))

var setupTime = localStorage.getItem('setupTime');
var now = Date.now();
console.log("Time difference",now - setupTime)
if (now - setupTime >15*1000*60*60) {
  console.log("Login time expires");
  window.location.href='/'
}else{
  console.log("Login time alive");  
}

  },[])

    return (
        <div >

<div className="portrait">
  <div className="text-center text-white">
<img src={Rotate} className="img-fluid h100" alt=""/>
</div>
  </div>
  <div className="landscape">
  {/* <div className="chatbox"><a href="javascript:void(0)" data-toggle="modal" data-target="#chat"><img src={Chatimg} /></a></div> */}
  

  <div className="videodiv">
<VideoPlayer/>

  </div>
  <div className="modal fade right rightmodal" id="chat" data-backdrop="static" tabindex="-1" role="dialog"
    aria-labelledby="qnaModalLabel" aria-hidden="true">

    
    <div className="modal-dialog modal-full-height modal-right m-0" role="document">


        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title w-100" id="qnaModalLabel">Q&A</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i className="fa fa-times-circle-o text-dark" aria-hidden="true"></i></span>
                </button>
            </div>
             <Chat/> 
          
        </div>
    </div>

</div> 


  </div>

          
        </div>
    )
}

export default Audi
