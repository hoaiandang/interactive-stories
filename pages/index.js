import React from 'react';
import Layout from '../components/MyLayout.js'
import { Controller, Scene } from 'react-scrollmagic';
//import Background from '../images/irene450.jpg';
import Waypoint from 'react-waypoint';

var backgroundStyle = {
  width: '100vw',
  height: '100vh',
  //backgroundImage: 'url(https://reedart.files.wordpress.com/2015/11/tumblr_np1rsmwqah1uwpbczo1_500.gif)',
  backgroundImage: 'url(https://reedart.files.wordpress.com/2015/11/tumblr_np1rsmwqah1uwpbczo1_500.gif)',
  color: 'white', 
  opacity: 0.5, 
  position: 'fixed',
  backgroundColor: 'blue',
  backgroundSize: 'cover',
  transition: "all 0.5s ease-in-out"
};

var myRef = React.createRef();
var way = React.createRef();
var background = React.createRef();
var rain = React.createRef();



class Index extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log("component DID mount")
	}

	play() {
		rain.current.play();
		console.log("waypoint entered");
		background.current.style.transform = 'rotate(20deg)';
		console.log(way)
		console.log(background.current)
	}

	closeEyes() {
		rain.current.play();
		rain.current.pause();
	}

	onLeave() {
		background.current.style.transform = '';
		rain.current.pause();
	}

	render() {
		

		return (
			<div style={{marginTop: '-20px', marginLeft: '-8px', backgroundColor: 'black', width: '100vw', height: '100%'}}>
			    <div style={backgroundStyle} ref={background}>
			          sdfklfda;l
			    </div> 
			    <Layout>
			    	<audio ref={rain} loop>
			            <source src="https://rainymood.com/audio1110/0.m4a" type="video/mp4" />
					</audio> 
			    	
			      <Controller>
			        <Scene duration={2000} pin>
			          <div style={{width: 100, height: 100, backgroundColor: 'blue', color: 'white'}}>
			            1
			            <button onClick={this.closeEyes} type="button">close</button>
			          </div>
			        </Scene>
			      </Controller> 
			      <Waypoint onEnter={this.play} onLeave={this.onLeave}>
			      	<div>Waypoint Here</div>
				  </Waypoint>
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
	}
}

/*
const Index = () => (
	this is a function!  wow
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
            <button onClick={play} type="button">hi</button>
          </div>
        </Scene>
      </Controller> 
      <Waypoint onEnter={play}>
      	<div style={{color: 'white'}}>Waypoint Here</div>
	  </Waypoint>
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
*/

export default Index
