import React from "react";
import "./footer.css";
import { FT1, FT2, FT3 } from './footassets';


const footer = () => {
    return (
        <div className="footer">
            <div className="box">
                <div id="leftbox">
                    <div className="boxtext items-center">
                        <img src={FT1} alt="" />
                        Shopping more easy with AR-VR
                    </div>
                </div>

                <div id="middlebox">
                    <div className="boxtext items-center">
                        <img src={FT2} alt="" />
                        Connnect your different social medias with your avatars and assets
                    </div>
                </div>


                <div id="rightbox">
                    <div className="boxtext items-center">
                        <img src={FT3} alt="" />
                        Get NFTs for the brand products you buy
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer1">
                    <div className="footer1 text-black">.</div>
                </div>

            </footer>


        </div>
    )
}
export default footer