import React, { Component } from 'react';

class Banner extends Component {
    state = {  }
    render() { 
        return (
            <div id="banner">
                <section>
                    <p>This is <strong>enCourage Church</strong>, a place where young, old, single, married, student, and mission minded lovers of Jesus come together and collaborate to build God's Kingdom here on earth as it is in Heaven.</p>
                    <a href="#">Read More</a>
                </section>
            </div>
        );
    }
}
 
export default Banner;