import React from "react";
import web3 from "./web3.jpg";
import { NavLink } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di"


export const Product = () => {
    return(
        <div className="about"> 
            <div className="about__container">
               
                    <div className="about__content">
                  <h1 className="h1">I create value by coding. </h1>
                  <p className="p1">I'm Nwokocha Emeka, but you can call me Hopewell.</p>
                  <p className="p2">Originally hailing from Nigeria #flag and so i've been
                     horning my craft in development and production roles building products for both web2 and web3. </p>
                  <p className="p3">I strive to create elegant solutions that surprise and delight users,
                     while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.</p>
                     <p className="p4">I've attended hackathon, worked with small team and agile team on projects.</p>
                     <p className="p5">Depending on the team and available resourses i've worn many hat over the years, holding titles like NFT Full Stack Developer, Frontend (Dapp) 
                        Developer, Web2 Frontend developer, Solidity and Blockchain Developer.</p>
                        <p className="p6">I also occasionally write blog and post about my learning journey on social media.</p>
                        <p className="p8">Here are technologies I've been working with recently:</p>
                        <div className="tech-stack">
                            <p><BsFillCaretRightFill className="stack" /> Javascript</p>
                            <p><BsFillCaretRightFill className="stack"/> React.Js</p>
                            <p><BsFillCaretRightFill className="stack"/> Solidity</p>
                            <p><BsFillCaretRightFill className="stack"/> Node.Js</p>
                            <p><BsFillCaretRightFill className="stack"/> Web3.Js</p>
                            <p><BsFillCaretRightFill className="stack"/> Ether.Js</p>
                            <p><BsFillCaretRightFill className="stack"/> Hardhat</p>
                            <p><BsFillCaretRightFill className="stack"/> IPFS</p>
                        </div>
                        
                        <p className="p7">Have an interesting project? <NavLink exact to="/contact" id="contact__link">Let's talk</NavLink></p>
                  </div>
                
                <div className="img__container">
                    <img src={web3} alt="web3" id="user__img"/>
                </div>
</div>
            </div>
        
    )
}