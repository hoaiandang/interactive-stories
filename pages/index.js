import React from 'react';
import Layout from '../components/MyLayout.js'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline, SplitLetters } from 'react-gsap';
//import Background from '../images/irene450.jpg';
import Waypoint from 'react-waypoint';
//import Gif from 'react-gif'; (react-gif is broken) (it needs you to download react@15.0.0)
import GifPlayer from 'react-gif-player';

//testing scrollmagic vs react-scrollmagic (i think react-scroll magic is glitchier/less smooth)
//import ScrollMagic from 'scrollmagic'; DOESNT WORK

var backgroundStyle = {
  width: '100vw',
  height: '100vh',
  //backgroundImage: 'url(https://reedart.files.wordpress.com/2015/11/tumblr_np1rsmwqah1uwpbczo1_500.gif)',
  //backgroundImage: 'url(https://reedart.files.wordpress.com/2015/11/tumblr_np1rsmwqah1uwpbczo1_500.gif)',
  backgroundImage: 'url(https://66.media.tumblr.com/834d72ef32d84b400266a4aa6661ff31/tumblr_n26039VliX1r3nnfeo1_500.gif)',
  color: 'white', 
  position: 'fixed',
  backgroundColor: 'blue',
  backgroundSize: 'cover',
  transition: "all 0.5s ease-in-out"
};

var myRef = React.createRef();
var way = React.createRef();
var background = React.createRef();
var rain = React.createRef();
var radio = React.createRef();
var text = React.createRef();
var white = React.createRef();



class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      eyesClosed: false, 
      eyesClosing: false,
      radioOn: false,
      radioTurningOn: false,
      isOff: 'https://i.imgur.com/RgIKa2q.gif',
      turningOn: 'https://i.imgur.com/ninXOrz.gif',
      isOn: 'https://i.imgur.com/GoJz4P2.gif',
      offset: -200
    };

    //YOU NEED TO DO THIS PART FOR EVERY METHOD DEFINED
    this.closeEyes = this.closeEyes.bind(this);
    this.turnOnRadio = this.turnOnRadio.bind(this);
  }

  componentDidMount() {
    white.current.style.opacity = 0;
    setTimeout( () => {this.hideWhite()}, 1000)
  }

  hideWhite() {
    white.current.style.display = 'none';
  }

  play() {
    rain.current.play();
    console.log("waypoint entered");
    console.log(way)
    console.log(background.current)
  }

  closeEyes() {
    rain.current.play();
    rain.current.pause();

    //the difference between this.state.eyesClosed = true and this.setState is that setState reRenders

    this.setState({
      'eyesClosing': true
    });
  
    console.log(radio.current);
    console.log(this.state.eyesClosing);
    setTimeout( () => {this.setState({ 'eyesClosed': true })}, 4000);
  }

  turnOnRadio() {
    this.setState({ radioTurningOn: true });
    radio.current.toggle();
    setTimeout( () => {this.setState({ 'radioOn': true })}, 2100);
    setTimeout( () => {this.closeEyes()}, 1500);
  }

  Main(eyesClosed) {
      if (eyesClosed) {
        return (
            <div>
                <Controller>
                  <Scene duration={1500} pin triggerHook='onLeave'>
                    <div style={{width: '100vw', height: '100vh', backgroundColor: 'black', color: 'white'}}>
                      1
                    </div>
                  </Scene>
                </Controller> 
                <Waypoint onEnter={this.play}/>
                <Controller>
                  <Scene duration={2500} pin triggerHook='onLeave'>
                  <Timeline style={{position: 'relative'}}>
                    <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} duration={1500}>
                      <div style={{width: '100vw', height: '150vh', backgroundColor: 'black', color: 'white', position: 'absolute', zIndex: 0}}>
                        2
                      </div>
                    </Tween>
                    <Tween from={{ filter: 'blur(30px)'}} to={{ filter: 'blur(0px)'}} duration={2500} delay={-1500}>
                      <div style={{width: '100vw', height: '100vh', 
                      backgroundImage:  'url(https://66.media.tumblr.com/834d72ef32d84b400266a4aa6661ff31/tumblr_n26039VliX1r3nnfeo1_500.gif)', 
                      color: 'white', position: 'absolute', backgroundSize: 'cover', zIndex: -1}}>
                        2
                      </div>
                    </Tween>
                    </Timeline>
                  </Scene>
                </Controller> 
                <div ref={text} style={{backgroundColor: 'blue', width: '80vw', height: '100px', padding: '10vw', zIndex: 1}}>
                <Controller>
                  <Scene duration={2000} pin triggerHook='onEnter' offset={-500}>
                    <Timeline
                      target={
                        <SplitLetters ><div style={{ display: 'inline-block', fontSize: '40px', color: 'white' }}>Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                              n voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                              in culpa qui officia deserunt mollit anim id est laborum.pppppppppppp</div></SplitLetters>
                              }>
                      <Tween duration={10} from={{ opacity: 1 }} to={{ opacity: 0 }}></Tween>
                      <Tween duration={10}></Tween>
                      <Tween duration={100} from={{ y: '0' }} to={{ y: '-1100' }}></Tween>
                      
                      <Tween
                        staggerFrom={{ opacity: 0 }}
                        staggerTo={{ opacity: 1 }}
                        stagger={0.2}
                        duration={0.1}
                      ></Tween>
                      <Tween duration={10} from={{ opacity: 1 }} to={{ opacity: 0 }} ></Tween>
                    </Timeline>
                  </Scene>
                </Controller>
                <div style={{ width: '100vw', height: '100vh', backgroundColor: 'blue' }}></div>   
                </div>    
              </div>
        )
      }
    }

  Radio(eyesClosing, eyesClosed) {
    if (!eyesClosed) {
      if (eyesClosing) {
        return (
          <Timeline>
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={6}>
              <div style={{width: '100vw', height: '100vh', backgroundColor: 'black', color: 'white', position: 'absolute', zIndex: 2}}/>
            </Tween>
            <Tween from={{ filter: 'blur(0px)'}} to={{ filter: 'blur(30px)'}} duration={6} delay={-6}>
                <div style={{width: '100vw', height: '100vh', position: 'absolute', backgroundColor: 'black', 
                            backgroundImage: `url(${this.state.isOn})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', 
                            backgroundPosition: 'center', zIndex: 1}}>
                  <button onClick={this.closeEyes} type="button">close</button>
                </div>
            </Tween>
          </Timeline>
        )
      } else if (this.state.radioOn) {
        return (
            <div style={{width: '100vw', height: '100vh', position: 'absolute', backgroundColor: 'black', backgroundImage: `url(${this.state.isOn})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <button onClick={this.turnOnRadio} type="button">close</button>
            </div>
          )
      } 
      else {
        return (
          <div>
            <GifPlayer ref={radio} style={{width: '100vw', height: '100vh', position: 'absolute', objectFit: 'cover'}} gif={this.state.turningOn} still={this.state.isOff} playing={true} />
            
            <button style={{position: 'absolute'}} onClick={this.turnOnRadio} type="button">close</button>
          </div>
          )
      }
    }    
  }

  render() {
    var blackHeight = '100vh';
    if (this.state.eyesClosed) {
      blackHeight = '2500px'
    }

    const eyesClosing = this.state.eyesClosing;
    const eyesClosed = this.state.eyesClosed;

    return (
      <div style={{marginTop: '-8px', marginLeft: '-8px', backgroundColor: 'black', width: '100vw', height: '100%'}}>
          <div style={backgroundStyle} ref={background}>
                sdfklfda;l
            <audio ref={rain} loop>
              <source src="https://rainymood.com/audio1110/0.m4a" type="video/mp4" />
            </audio> 
          </div>
          <div style={{width: '100vw', height: '100vh', position: 'absolute', backgroundColor: 'black', backgroundImage: `url(${this.state.isOn})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
          {this.Radio(eyesClosing, eyesClosed)}
          {this.Main(eyesClosed)}
          <div ref={white} style={{width: '100vw', height: '100vh', position: 'absolute', backgroundColor: 'white', transition: 'opacity 1s ease-out'}}>white</div>
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
