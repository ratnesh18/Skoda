import React,{Component} from "react";
import ReactScrollToBottom from "react-scroll-to-bottom";
import axios from 'axios'
import $ from "jquery";
import _ from 'lodash' 
const Element = (props) => {
    return (
        
        <div className="messages mb-4">
            
        <div className="msgtext text-left">
            {props.msg}
       </div>
        
        </div>
     
    );
  };
  

class Chat extends Component{


    state = {
        elements: [],
        lastChatId:0

      };

      componentDidMount(){
        axios
          .post('https://rry3le9ny4.execute-api.ap-south-1.amazonaws.com/api/getChat')
          .then(res => {
            const chats = res.data.chats;
           // console.log("Res",res.data.chats)
            const chatSize = res.data.chats.length;
            this.setState({ elements:chats },()=>{
              this.last_id=this.state.elements.length>0?this.state.elements[this.state.elements.length-1].id:0;
            });
           
  //console.log("In setIntervalLastchatid start",this.state.lastChatId,chats)
         //    localStorage.setItem("lastChatId",chatSize)
      //  console.log("before inter",this.state.lastChatId)
            setInterval(() => {
              
             console.log("flag",localStorage.getItem("feedBackflag in inetrval")) 
               let id =this.state.lastChatId;
               
               console.log('Set interval last_id',this.last_id)
                axios
                .post('https://rry3le9ny4.execute-api.ap-south-1.amazonaws.com/api/getChat',{lastChatId:this.last_id})
                .then(res => {

                //   if(res.data.feedbackStatus===1){
                //   if(!localStorage.getItem("feedBackflag")){
                //        document.getElementById("feedback").style.display="block" 
                //         localStorage.setItem("feedBackflag",true)
                //   }
                // }else{
                //   document.getElementById("feedback").style.display="none" 
                // }
                 // console.log("Lastchatid",this.state.lastChatId)
                    const extraChat = res.data.chats
                    //console.log('last_id extraChat',extraChat)
                    const echatSize = extraChat.length;
                 //  console.log("ResWithId",id,res.data.chats)
                    if(extraChat.length>0){
                   
                    
                   // console.log("Changing state")
                    this.setState({
                         elements:_.unionBy([ ...this.state.elements,...extraChat],'id'),
                       // elements:[ ...this.state.elements,...extraChat],
                       // lastChatId:echatSize>0?res.data.chats[echatSize-1].id:0
                    } ,()=>{
                      this.last_id=this.state.elements.length>0?this.state.elements[this.state.elements.length-1].id:0;
                    });

                }
                })
                .catch(function (error) {
                    console.log(error);
                   
                    });
                    
               // console.log("Timeeee")
            }, 5000);
            
          })
          .catch(function (error) {
           console.log(error);
          
           });
      }

      

      componentWillUnmount(){
         
      }

     sendChat(){

        let chatMessage=document.getElementById("qna-text-message").value
       
        console.log("ask ",{user_id:localStorage.getItem("userId"),message: chatMessage})
        
          document.getElementById("qna-text-message").value=""

           axios
          .post('https://rry3le9ny4.execute-api.ap-south-1.amazonaws.com/api/sendChat', {user_id:localStorage.getItem("userId"),message: chatMessage})
            .then(response=> {
             console.log(response);
           const chatObj=[{
             id:response.data.chat_id,
             message:chatMessage,
             created_at:new Date(),
             updated_at:new Date(),
             from_id:localStorage.getItem("userId"),
             user:{
                name:localStorage.getItem("name")
             }
           }]
           console.log("chatObj",chatObj,this.state.lastChatId);
           this.setState({
            elements:_.unionBy([ ...this.state.elements,...chatObj],'id')
           });
             

       })
          .catch(function (error) {
           console.log(error);
           
           });

       // console.log("Clicked..")
       }

    render(){
        //console.log("Render..",this.state.elements)
        return(
<>
{/* <div className="modal-header">
                <h4 className="modal-title w-100" id="qnaModalLabel">Q&A</h4>
                <a  data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i className="fa fa-times-circle-o" aria-hidden="true"></i></span>
                </a>
            </div> */}
            <div className="modal-body">
            
             <ReactScrollToBottom  className="qna">
                 
                <div className="qna__wrapper">
                <div className="chat__message chat__message-own"> 
                {/* {this.state.elements} */}
                 {this.state.elements && this.state.elements.map(ele=>{
                     return (
                        <div key={ele.id} className="messages mb-4">
                          <div className="d-flex align-items-center mb-2  justify-content-end cursorPointer">
                        <p className="mr-2 mt-1 mb-0">{localStorage.getItem("name")==ele.user.name?'You':ele.user.name}</p> </div>
                        <div className="msgtext text-left">
                         {ele.message}
                        </div>
              
                      </div>
                     )

                 }) }

                
                
                </div>
                 
                </div>
                
            </ReactScrollToBottom >
            
               
               
                
                <form id="qna__form" className="w-100">
                    <div className="input-group input-group-lg qabtn">
                        <input type="text" className="form-control bg-white" id="qna-text-message"
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                this.sendChat()
                            }
                            
                          }}
                          
                          onFocus={(e)=>{
                            if($(window).width() < 1024)
                            {
                              var _originalSize = $(window).width() + $(window).height()
                              $(window).resize(function(){
                                if($(window).width() + $(window).height() != _originalSize){
                                  console.log("keyboard show up");
                            
                                  $('.input-group').addClass('forcetop');
                                }else{
                                  console.log("keyboard closed");
                                  $('.input-group').removeClass('forcetop');
                                }
                              });
                            }
                          }
                              
                          }
                          autoComplete="off" required/>
                        <div className="input-group-append">
                            <button className="btn btn-primary p-2 m-0 sendbutton" type="button" id="button-qna" onClick={()=>this.sendChat()}>
                              <i className="fa fa-paper-plane" aria-hidden="true" ></i> <br />Send</button>
                        </div>
                    </div>
                </form>
            </div>
</>
        )
    }

}

export default Chat