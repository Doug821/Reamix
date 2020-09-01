import React from 'react';
import './Footer.css';
import Face from '../../assets/icons/facebook.png';
import Git from '../../assets/icons/github.png';
import Twitter from '../../assets/icons/twitter.png';
import Insta from '../../assets/icons/instagram.png';

const Footer = () => {
    return (
        <div className="Footer">
            <div class="copyright">
                <ul class="icons">
                    <li>
                        <a href="https://twitter.com/dougsilva821" target="_blank" class="icon-twitter">
                            <img src={Twitter} alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/herson.douglas" target="_blank" class="icon-facebook">
                            <img src={Face} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/herson_douglas/" target="_blank" class="icon-instagram">
                            <img src={Insta} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Doug821" target="_blank" class="icon-github">
                            <img src={Git} alt="Github" />
                        </a>
                    </li>
                </ul>
            &copy; <strong>Reamix.</strong>
            </div>
        </div>
    )
}

export default Footer;