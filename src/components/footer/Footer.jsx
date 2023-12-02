import React from 'react'
import './footer.css';
import socialMediaData from '../socialMediaData.json';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
        {
                socialMediaData.socialMedia.map((social,index)=>(
                    // eslint-disable-next-line jsx-a11y/anchor-has-content
                    <a key={index} href={social.url} className="home__social-icon" target='_blank' rel='noopener noreferrer'>
                    <i className={social.iconClass}></i>
                </a>
                ))
            }
        </div>

        <span className="footer__copy">&#169; Koushik. All Right reserved</span>
      </div>
    </footer>
  )
}

export default Footer