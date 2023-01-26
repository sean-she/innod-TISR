import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className = 'FooterWrap'>
            <div className = 'FooterContainer'>
                <div className = 'footer-item'>Berkeley, CA</div>
            </div>
            <div className = 'FooterContainer'>
                {/* Change to a tag and add email later */}
                <div className = 'footer-item'>Email</div>
            </div>
            <div className = 'FooterContainer'>
                <div className = 'footer-item'>SURG</div>
            </div>
        </div>
    )
}

export default Footer;