import React, { Component } from 'react'
import Chats from './Chats'
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import BotChatContainer from './BotChatContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default class About extends Component {



state={
    messages: [],
    displayedMessages: [],
    deleted: false,
    deletedMessages: []
}

    componentDidMount(){
        fetch(`http://localhost:3000/messages`)
        .then( res => res.json())
        .then( data => this.setState({ messages: data,
            displayedMessages: data}))
    }


    deleteMsg=(event)=>{
        var answer = window.confirm('are you sure?')
        if (answer) {
            this.deleteMsgConfirmed(event.target.value)
            event.target.parentElement.innerText = 'DELETED'
        }
    }

    deleteMsgConfirmed=(messageID)=>{
        fetch(`http://localhost:3000/messages/${messageID}`, {
            method: 'DELETE', 
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json)
            .then(this.setState({deletedMessages: [...this.state.deletedMessages, messageID]}))
    }


    deleteAll=()=>{
        var answer = window.confirm('are you sure?')
        if (answer) {
            this.state.messages.map((msg) => {
                fetch(`http://localhost:3000/messages/${msg.id}`, {
                    method: 'DELETE', 
                    headers: {
                    'Content-Type': 'application/json',
                    },
                })
                    .then(resp => resp.json)
                    .then(this.setState({deleted: true}))
                }
            )}}


    allMessages=()=>{

        if (this.state.displayedMessages.length < 1) {
            return ('There are no messages here!')
        }
        if (window.localStorage.id === undefined) {
            return ('You must log in to view chat logs!'  )
            }
        if (window.localStorage.id !== undefined  && this.state.displayedMessages.length > 1)  {
                return this.state.displayedMessages.map((message) => {     
                return <Chats key={message.id} deleteMsg={this.deleteMsg} message={message} deletedMessages={this.state.deletedMessages} userID={window.localStorage.id}/>}
            )}}



            sortThings = (event) => {
     

         
                if (event.target.innerText ==  "Sort By: Oldest") {
                    
               return event.target.innerText = "Sort By: Newest"
                }
                if (event.target.innerText ==  "Sort By: Newest") {
                 return   event.target.innerText = "Sort By: Oldest"
                }

            }
        
                

    render() {





        
        return (
        

<div >
<HeaderBar />
    <br/>


  
        
            
         <div className ='myMainBoxx' >
         <div className ='fade-in' >
         <h1> About </h1>
         <br/>
                <br/>
                <br/>
                <br/>
            <div> Here is the about section. Let me know what kind of substance you would like adding here, such as quotes, images, etc.</div>
       
   

            <br/>
            <br/>
            <br/>
<Link exact to="/home" > 
<button onClick={this.deleteDivs} className="myOtherHomeButton"> Home </button>
</Link>
</div>
</div>
</div>
        )
    }

}