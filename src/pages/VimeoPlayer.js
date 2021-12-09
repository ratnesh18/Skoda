import React, { Component } from 'react'
import Vimeo from '@u-wave/react-vimeo';
import Rotate from '../assets/img/rotate.png'

export default class VimeoPlayer extends Component {



    render() {
        return (
            <div>
                    <div className="portrait">
                       <div className="text-center text-white">
                         <img src={Rotate} className="img-fluid h100" alt=""/>
                      </div>
                    </div>
                        <div className="landscape" id="pplayer" style={{ position:'absolute', top:'0', width:'83vw', height:'100vh', left:'9%', bottom:'0'}}>
                        <Vimeo id="vimeo-player" video="654414232" responsive autoplay/>
                     </div>
             </div>
        )
    }
}
