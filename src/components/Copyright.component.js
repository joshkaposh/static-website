import React, { Component } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons';


class Copyright extends Component {
    state = {  }
    render() { 
        return (
            <div id="copyright">
                <div className="content">
                    <p>Design: <a href="http://templated.co">TEMPLATED</a> Images: <a href="http://unsplash.com">Unsplash</a> (<a href="http://unsplash.com/cc0">CC0</a>)</p>
                    <div className="icons">
                        <span id="facebook"><a href="https://facebook.com"><FontAwesomeIcon size={'2x'} icon={faFacebook} /></a></span>
                        <span id="twitter"><a href="https://facebook.com"><FontAwesomeIcon size={'2x'} icon={faTwitter} /></a></span>
                        <span id="googleplus"><a href="https://facebook.com"><FontAwesomeIcon size={'2x'} icon={faGooglePlus} /></a></span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Copyright;