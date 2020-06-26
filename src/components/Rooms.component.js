import React, { Component } from 'react';
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'



class Rooms extends Component {
    state = {  }
    render() { 
        return (
            <div id="rooms">
                <div className="half-row">
                    <section className="room-item"> <a href="#" className="room-image"><img src={pic01} alt="" ></img></a>
                        <div className="room-desc">
                            <p>Men's accountability, eldership training, men's youth training, men of Issachar, present day Joshua & Calebs.</p>
                            <a href="https://encouragefamily.com/men" className="room-button">Men's Ministry</a>
                        </div>
                    </section>
                    <section className="room-item"> <a href="#" className="room-image"><img src={pic02} alt="" /></a>
                        <div className="room-desc">
                            <p> Come gather where the present day "Esther's", "Deborah's", "Hannah's", join together and mentor our young ladies.</p>
                            <a href="https://encouragefamily.com/ladies"className="room-button">Women's Ministry</a>
                        </div>
                    </section>
                    <section className="room-item"> <a href="#" className="room-image"><img src={pic03} alt="" /></a>
                        <div className="room-desc">
                            <p>Jesus said: "Let the little children come to me, and do not hinder them". Experience a fun and faith-filled environment.</p>
                            <a href="https://encouragefamily.com/children" className="room-button">Children's Ministry</a>
                        </div>
                    </section>
                </div>
                <div className="half-row">
                    <section className="room-item"> <a href="#" className="room-image"><img src={pic01} alt="" /></a>
                        <div className="room-desc">
                            <p>The Spirit of the Lord God is upon Me, because the Lord God has anointed Me to preach good tidings..."  Isaiah 61:1-3</p>
                            <a href="https://encouragefamily.com/missions" className="room-button">Missions</a>
                        </div>
                    </section>
                    <section className="room-item"> <a href="#" className="room-image"><img src={pic04} alt="" /></a>
                        <div className="room-desc">
                            <p>Be encouraged by sharing testimonies of how God has helped you become free of life's hurt, habits, and hang-ups.<br /> Matthew 5:3-12.</p>
                            <a href="https://encouragefamily.com/celebrateRecovery" className="room-button">Recovery</a>
                        </div>
                    </section>
                    <section className="room-item"> <a href="#" className="room-image"><img src={pic03} alt="" /></a>
                        <div className="room-desc">
                            <p>Come with trumpet, harp and lyre: "Let everything that has breath praise the Lord - Praise the Lord!". Psalm 105</p>
                            <a href="https://encouragefamily.com/music" className="room-button">Music Ministry</a>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
 
export default Rooms;