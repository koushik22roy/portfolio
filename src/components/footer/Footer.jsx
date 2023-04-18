import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* <h1 className="footer__title">Koushik</h1> */}
{/* 
        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">About</a>
          </li>

          <li>
            <a href="#" className="footer__link">Skills</a>
          </li>

          <li>
            <a href="#" className="footer__link">Portfolio</a>
          </li>
        </ul> */}

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/koushik22roy/" className="footer__social-link" target='_blank'><i class="bx bxl-linkedin"></i></a>
          <a href="https://github.com/koushik22ro" className="footer__social-link" target='_blank'><i class="bx bxl-github"></i></a>
          <a href="https://www.instagram.com/gama16r/" className="footer__social-link" target='_blank'><i class="bx bxl-instagram"></i></a>
          <a href="https://twitter.com/gama16r" className="footer__social-link" target='_blank'><i class="bx bxl-twitter"></i></a>
          <a href="https://www.youtube.com/channel/UC5RZjjCN-meceDFWAaeefrw" className="footer__social-link" target='_blank'><i class="bx bxl-youtube"></i></a>
        </div>

        <span className="footer__copy">&#169; Koushik. All Right reserved</span>
      </div>
    </footer>
  )
}

export default Footer