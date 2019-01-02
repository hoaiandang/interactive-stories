import React from 'react';
import Layout from '../components/MyLayout.js'
import { Controller, Scene } from 'react-scrollmagic';
//import Background from '../images/irene450.jpg';

var backgroundStyle = {
  width: '100vw',
  height: '100vh',
  //backgroundImage: 'url(https://reedart.files.wordpress.com/2015/11/tumblr_np1rsmwqah1uwpbczo1_500.gif)',
  backgroundImage: 'url(https://reedart.files.wordpress.com/2015/11/tumblr_np1rsmwqah1uwpbczo1_500.gif)',
  color: 'white', 
  opacity: 0.5, 
  position: 'fixed',
  backgroundColor: 'blue',
  backgroundSize: 'cover'
};

var myRef = React.createRef();

function pause() {
  myRef.current.play();
}

const Index = () => (
  <div style={{marginTop: '-20px', marginLeft: '-8px', backgroundColor: 'black', width: '100vw', height: '100%'}}>
    <div style={backgroundStyle}>
          sdfklfda;l
    </div> 
    <Layout>  
      <Controller>
        <Scene duration={6000} pin>
          <div style={{width: 100, height: 100, backgroundColor: 'blue', color: 'white'}}>
            1
            <audio ref={myRef} controls loop autoPlay>
              <source src="https://rainymood.com/audio1110/0.m4a" type="video/mp4" />
            </audio>
            <button onClick={pause} type="button">hi</button>
          </div>
        </Scene>
      </Controller> 
      <Controller>
        <Scene duration={6000} pin>
          <div style={{width: 100, height: 100, backgroundColor: 'blue', color: 'white'}}>
            2
          </div>
        </Scene>
      </Controller> 
      <Controller>
        <Scene duration={6000} pin>
          <div style={{width: 100, height: 100, backgroundColor: 'blue', color: 'white'}}>
            3
          </div>
        </Scene>
      </Controller>       
    </Layout>
  </div>
)

export default Index