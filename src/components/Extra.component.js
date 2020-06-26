import React, { Component } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWrench} from '@fortawesome/free-solid-svg-icons';
import {faLeaf} from '@fortawesome/free-solid-svg-icons';
import {faCogs} from '@fortawesome/free-solid-svg-icons';
import {faRoad} from '@fortawesome/free-solid-svg-icons';

class Extra extends Component {
    state = {  }
    render() { 
        return (
            <div id="main">
                <div className="row">
                    <div className="half-col">
                        <section>
                            <ul className="extra-ul">
                                <span><FontAwesomeIcon icon={faWrench} size={'1x'}/></span>
                                <li>
                                    <h3>Integer ultrices</h3>
                                    <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.</p>
                                </li>
                                <hr className="hr-1"/>
                                <span><FontAwesomeIcon icon={faLeaf} size={'1x'}/></span>
                                <li>
                                    <h3>Aliquam luctus</h3>
                                    <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.</p>
                                </li>
                                <hr className="hr-2" />
                            </ul>
                        </section>
                    </div>
                    <div className="half-col">
                        <section>
                            <ul className="extra-ul">
                            <span><FontAwesomeIcon icon={faCogs} size={'1x'}/></span>

                                <li>
                                    <h3>Integer ultrices</h3>
                                    <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.</p>
                                </li>
                                <hr className="hr-1" />

                                <span><FontAwesomeIcon icon={faRoad} size={'1x'}/></span>
                                <li>
                                    <h3>Aliquam luctus</h3>
                                    <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.</p>
                                </li>
                                <hr className="hr-2" />

                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Extra;