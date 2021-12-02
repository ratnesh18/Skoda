import React from 'react'
import Rotate from '../assets/img/rotate.png'
import Chatimg from '../assets/img/chat.png'
import Langu from '../assets/img/languagech.png'
import  '../assets/css/style.css'
import VideoPlayer from './VideoPlayer'
import Chat from './Chat'

function audi() {
    return (
        <div style={{backgroundColor:"black"}}>

<div className="portrait">
  <div className="text-center text-white">
<img src={Rotate} className="img-fluid h100" alt=""/>
</div>
  </div>
  <div className="landscape">
  <div className="chatbox"><a href="javascript:void(0)" data-toggle="modal" data-target="#chat"><img src={Chatimg} /></a></div>
  

  <div className="videodiv">
<VideoPlayer/>

  </div>
  <div className="modal fade right rightmodal" id="chat" data-backdrop="static" tabindex="-1" role="dialog"
    aria-labelledby="qnaModalLabel" aria-hidden="true">

    
    <div className="modal-dialog modal-full-height modal-right m-0" role="document">


        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title w-100" id="qnaModalLabel">Chat</h4>
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

export default audi
