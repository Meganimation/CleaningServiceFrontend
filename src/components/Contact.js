import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';

export default class Projects extends Component {






popUp=(event)=>{
    debugger

    if ( event.target.innerText == 'InGame CC - Cryptocurrency Conversion' ) {

    
  window.open('https://morning-crag-16734.herokuapp.com/')  }

  if ( event.target.innerText == 'JustStory - Create Your Own Spoken Story!' ) {

    
    window.open('https://javascript.info')
  }
}

  
    render() {
        return (
            <div>

                      <HeaderBar/>
                      <br/>
                
        <br/>
        <br/>
      
  
                <div className ="fade-in">
                <div className="myMainBoxx">
    

                <h2> Contact </h2>

                

 If you want me to add an email form, telephone hotlink, etc, just let me know
            

<br/>
<br/>
<br/>

<div className="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Paramaribo%2C%20Suriname&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="100%" marginwidth="40%"></iframe></div></div>


<br/>


<br/>
<br/>
<br/>

                <Link exact to="/home"> 
    <button  className="myOtherHomeButton">go home </button>
    </Link>


</div>
            </div>
            </div>
        
            
        )
    }
}
