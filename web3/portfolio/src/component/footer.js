import react from "react";
import { BsGithub, BsTwitter, BsMedium, BsLinkedin } from 'react-icons/bs';

function Footer() {


    return(
        <div className="footer">
            <div className="footer__container">
                <div className="socials">
                    <a href="twitter.com/nwokochaemeka5"><BsTwitter className="Bs"/></a>
                    <a href="medium.com"><BsMedium className="Bs"/></a>
                    <a href="github.com/nwokocha4"><BsGithub className="Bs"/></a>
                    <a href="linkedin.com"><BsLinkedin className="Bs"/></a>
                    
                </div>
                <div className="copyright">
                    <div className="copy">© 2023 Copyright: nwokochaemeka4@gmail.com</div>
                    </div>
            </div>
        </div>
    )
}

export default Footer;