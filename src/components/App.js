import React from 'react';

import Navbar from './Navbar.component';
import Banner from './Banner.component';
import Rooms from './Rooms.component';
import Extra from './Extra.component';
import Footer from './Footer.component';


import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/skel.css';
import '../css/index.css';
import '../css/navbar.style.css';
import '../css/banner.style.css';
import '../css/rooms.style.css';
import '../css/extra.style.css';
import '../css/footer.style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rooms />
      <Extra />
      <Footer />
    </div>
  );
}

export default App;

// Components: 

// Header

// Banner

// Extra

// Main

// Footer