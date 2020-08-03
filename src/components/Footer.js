import React from 'react';
import './Footer.css';



export default function Footer(){

    return(
        <div className="footer">
        <div className="main-contentf">
            <div className="left boxf">
                <h2 id="footerAnchor"> About me</h2>
                <div className="contentf">
                    <p> This is Divakar Raut, recent three months Javascript student looking for an opportunity to sharpen my skill and implement my learning into real world.I would like to invest my time and effort to learn and get better in web development </p>
                    <div className="social">
                        <a href="#"><span className="fab fa-facebook-f"></span></a>
                        <a href="#"><span className="fab fa-twitter"></span></a>
                        <a href="https://github.com/DivakarRaut23"><span className="fab fa-github"></span></a>
                        <a href="https://www.youtube.com/channel/UChQ6u0yQhJIcbCNuTsRcmbA"><span className="fab fa-youtube"></span></a>

                    </div>
                </div>
            </div>

            <div className="center boxf">
                <h2> Address </h2>
                <div className="contentf">
                    <div className="place">
                        <span className="fas fa-map-marker-alt"></span>
                        <span className="text"> Gregory Hills, NSW</span>
                    </div>
                    <div className="phone">
                        <span className="fas fa-phone-alt"></span>
                        <span className="text"> 0422489877</span>
                    </div>
                    <div className="email">
                        <span className="fas fa-envelope"></span>
                        <span className="text"> twinscreation@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="right boxf">
                <h2> Contact Us</h2>
                <div className="contentf">
                    <form action="mailto:twinscreation@gmail.com">
                        <div className="email">
                            <div className="text" > Email *</div>
                            <input type="email"  required/>
                        </div>
                        <div className="msg">
                            <div className="textarea"> Message *</div>
                            <textarea cols="25" rows="2" required></textarea>
                        </div>
                        <div className="btnf">
                            <button type="submit"> Send</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
        <div className="credit">
            <center>
                <span className="credit">Created By <a href="https://www.youtube.com/channel/UChQ6u0yQhJIcbCNuTsRcmbA">Twins Creation</a> | </span>
                <span className="far fa-copyright" ></span> Divakar Raut.2020 All rights reserved.
            </center>
        </div>
        </div>

    
    )
}