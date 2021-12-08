import React, {useEffect,useState, useRef} from 'react';
//import qa from '../assests/img/qa.png'
import Closeimg from '../assets/img/cross.png'
import Preloadimg from '../assets/img/preloadvid.jpg'
import Chat from './Chat';
import Langu from '../assets/img/languagech.png'
//import ChatSocket from './ChatSocket';
import ChatImg from '../assets/img/chat.png'
import $ from 'jquery'
import Vimeo from '@u-wave/react-vimeo';
import Player from '@vimeo/player';
  
function VideoPlayer(options) { 
    const divEl = useRef(null);
    const videoEl = useRef(null);
   // const [stremUrl,setStreamUrl] = useState("https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8")
    const [stremUrl,setStreamUrl] = useState("654414232")
    
    

    

    const handleClick = e => {
        $("[data-dismiss=modal]").trigger({ type: "click" });
        console.log("ID ",e.target.id)
        document.getElementById(e.target.id).checked = true;
       // console.log("Duration ",document.getElementById("vimeo-player"))
       
       // document.getElementById(e.target.id).checked = true;
      // console.log("Changing select")
        const selected = e.target.value;
      //  player.load(selected)
        setStreamUrl(selected);
       
      };

    return (
        <div ref={divEl} >
             <div className="language"><a href="javascript:void(0)" data-toggle="modal" data-target="#languagechange"><img src={Langu} /></a></div>
             {/* <div className="iconBox"><a href="javascript:void(0)" data-toggle="modal" data-target="#qamodal"><img src={ChatImg} alt="QA"/></a>
            
             </div>  */}
             {/* <select onChange={handleClick} class="form-control">
             <option>Select</option>
               <option value="https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8">LANG1</option>
               <option value="https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.xhP3ExfcX8ON.m3u8">LANG2</option>
             </select> */}
           {/* <canvas id="ambiance"></canvas> */}
            {/* <video
                id="video-player"
                ref={videoEl}
                playsInline
                autoPlay
               // poster={Preloadimg}
                controls
                style={{height:"100Vh",width:"100vw"}}
            /> */}
            <div id="pplayer" style={{ position:'absolute', top:'0', width:'83vw', height:'100vh', left:'9%', bottom:'0'}}>
             <Vimeo id="vimeo-player" video={stremUrl} responsive autoplay/>
             </div>
             {/* <div style={{"padding":"56.25% 0 0 0","position":"relative"}}><iframe src={stremUrl} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullscreen style={{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}} title="ITC Fabelle Press Meet"></iframe></div> */}
             <div className="modal fade" id="languagechange" tabindex="-1" data-backdrop="static"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-sm">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Select Language</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          
        <div className="row">
            <div className="col-sm-6 text-center selectlang">
            <input type="radio" id="English" onChange={handleClick} name="language"    value="654414232" />
<label for="English">English</label>
            </div>
            <div className="col-sm-6  text-center selectlang">
                
<input type="radio" id="Marathi" onChange={handleClick} name="language"    value="654416453" />
<label for="Marathi">Marathi</label>
            </div>
        </div>

        
      </div>
    </div>
  </div>
</div>
            
              {/* <div className="modal fade right" id="qamodal" data-backdrop="static" tabIndex="-1" role="dialog"
    aria-labelledby="qnaModalLabel" aria-hidden="true">

    
    <div className="modal-dialog modal-full-height modal-right m-0" role="document">


        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title w-100" id="qnaModalLabel">Q&A</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <img src={Closeimg} alt="QA" className="w-50"/>
                </button>
            </div>
             <Chat/> 
           
            
        </div>
    </div>

</div>   */}
        </div>
    );
}

export default VideoPlayer;
