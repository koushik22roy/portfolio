import React from 'react';
import socialMediaData from '../socialMediaData.json';
function Socials() {
    return (
        <div className="home__socials center">
            {
                socialMediaData.socialMedia.map((social,index)=>(
                    // eslint-disable-next-line jsx-a11y/anchor-has-content
                    <a key={index} href={social.url} className="home__social-icon" target='_blank' rel='noopener noreferrer'>
                    <i className={social.iconClass}></i>
                </a>
                ))
            }
        </div>
    )
}

export default Socials