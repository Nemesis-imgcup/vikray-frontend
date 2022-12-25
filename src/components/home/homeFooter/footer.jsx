import React from "react";
import "./footer.css";
import { Foot1, Foot2,Foot3 } from './footassets';


const footer =() =>{
    return(
        <div className="footer"> 
            <div className="box">
            <div id = "leftbox">
               <div className="boxtext"><Foot1/>Shopping more easy with AR-VR</div>
            </div> 
              
            <div id = "middlebox">
            <div className="boxtext"><Foot2/>Connnect your different social medias with your avatars and assets</div>
            </div>
              
              
            <div id = "rightbox">
            <div className="boxtext">  <Foot3/>Get NFTs for the brand products you buy</div>
            </div>
            </div>
           <footer>
                <div className="footer1">
                    <div className="footer1text">© 2021, All Rights Reserved</div>
                </div>

           </footer>
            
    
         </div>
    )
}
export default footer