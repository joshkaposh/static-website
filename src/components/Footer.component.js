import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() {
        return (
            <div id="footer">
                <section>
                    <header className="footer-header">
                        <h2>Mauris vulputate dolor</h2>
                        <p>Integer sit amet pede vel arcu aliquet pretium</p>
                    </header>
                    <form >
                        <div className="row">
                            <div className="full-col">
                                <input className="text" type="text" name="name" id="name" placeholder="Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="full-col">
                                <input className="text" type="text" name="email" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="full-col">
                                <textarea rows="6" name="message" id="message" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="full-col">
                                <ul className="actions">
                                    <li>
                                        <input type="submit" value="Send Message" className="submit-button" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}
 
export default Footer;