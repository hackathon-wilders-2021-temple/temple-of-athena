import React from 'react';
// import { Link } from 'react-router-dom';


const Footer = () => {
    
    return(
        <div className="footerWrapper">
            Created by <b><a href="http://wildcodeschool.com" target="new">Wild Code School</a></b> students:
            <div class="studentContainer">
                <div className="studentName">
                    <img className="pillar" src="../img/venus.png" alt="venus de milo" /><br />
                    <a href="https://www.linkedin.com/in/das-pallavi/" target="new">Pallavi</a>
                </div>
                <div className="studentName">
                    <img className="pillar" src="../img/horse.png" alt="trojan horse" /><br />
                    <a href="http://linkedin.com/in/salvatore-patti-9b5198141" target="new">Salvatore</a>
                </div>
                <div className="studentName">
                    <img className="pillar" src="../img/helm.png" alt="greek helm" /><br />
                    <a href="https://www.linkedin.com/in/guilherme-rodrigues-029344162/" target="new">Guilherme</a>
                </div>
                <div className="studentName">
                    <img className="pillar" src="../img/bust.png" alt="greek bust" /><br />
                    <a href="https://www.linkedin.com/in/lorianne-aguilar/" target="new">Lorianne</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;