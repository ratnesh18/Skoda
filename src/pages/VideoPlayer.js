import React, {useEffect,useState, useRef} from 'react';
//import qa from '../assests/img/qa.png'
import Closeimg from '../assets/img/cross.png'
import Preloadimg from '../assets/img/preloadvid.jpg'
import Chat from './Chat';
import Langu from '../assets/img/languagech.png'
//import ChatSocket from './ChatSocket';
import ChatImg from '../assets/img/chat.png'
import $ from 'jquery'
  
function VideoPlayer(options) { 
    const divEl = useRef(null);
    const videoEl = useRef(null);
    const [stremUrl,setStreamUrl] = useState("https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8")
    const [vPlayer,setVPlayer]=useState();
    let player=undefined
    useEffect(() => {
            
        document.getElementById('English').checked = true;

            console.log("Mount or update")
            const script = document.createElement('script');

            script.src = 'https://player.live-video.net/1.0.0/amazon-ivs-player.min.js';
            script.async = true;

            document.body.appendChild(script);

            script.onload = () => {
                // eslint-disable-next-line no-undef
                if (IVSPlayer.isPlayerSupported) {
                    // eslint-disable-next-line no-undef
                 player = IVSPlayer.create();
                    player.attachHTMLVideoElement(document.getElementById('video-player'));
                    console.log(stremUrl);
                    player.load(stremUrl);
                    player.play();
                   
                }
            }

            return () => {
                document.body.removeChild(script);
            }

        },
        []
    )

    

    

    const handleClick = e => {
        $("[data-dismiss=modal]").trigger({ type: "click" });
        console.log("ID ",e.target.id)
        document.getElementById(e.target.id).checked = true;
       

       // document.getElementById(e.target.id).checked = true;
      // console.log("Changing select")
        const selected = e.target.value;
        player.load(selected)
       
      };

    return (
        <div style={{height:'100vh'}} ref={divEl} >
             <div className="language"><a href="javascript:void(0)" data-toggle="modal" data-target="#languagechange"><img src={Langu} /></a></div>
             {/* <div className="iconBox"><a href="javascript:void(0)" data-toggle="modal" data-target="#qamodal"><img src={ChatImg} alt="QA"/></a>
            
             </div>  */}
             {/* <select onChange={handleClick} class="form-control">
             <option>Select</option>
               <option value="https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8">LANG1</option>
               <option value="https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.xhP3ExfcX8ON.m3u8">LANG2</option>
             </select> */}
           {/* <canvas id="ambiance"></canvas> */}
            <video
                id="video-player"
                ref={videoEl}
                playsInline
                autoPlay
               // poster={Preloadimg}
                controls
                style={{height:"100Vh",width:"100vw"}}
            />
             
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
            <input type="radio" id="English" onChange={handleClick} name="language"    value="https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8" />
<label for="English">English</label>
            </div>
            <div className="col-sm-6  text-center selectlang">
                
<input type="radio" id="Marathi" onChange={handleClick} name="language"    value="https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.xhP3ExfcX8ON.m3u8" />
<label for="Marathi">Gujrati</label>
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
