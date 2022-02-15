import React, {useEffect} from "react";
import './index.css';

import Draggable from "../components/draggable/Draggable";

const Home = () => {

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])


    return (
        <div className="home-back" style={{backgroundImage: `url(/images/layer1.png)`}}>
          
          <div className="draggable-container" style={{top: 20, left: 50}}>
            <Draggable image={'/images/layer2.png'} />
          </div>
           
          <div className="draggable-container" style={{top: 400, left: 200}}>
            <Draggable image={'/images/layer3.png'} />
          </div>

          <div className="draggable-container" style={{top: 200, left: 500}}>
            <Draggable image={'/images/layer4.png'} />
          </div>

          <div className="draggable-container" style={{top: 600, left: 400}}>
            <Draggable image={'/images/layer5.png'} />
          </div>

          <div className="draggable-container" style={{top: 300, left: 250}}>
            <Draggable image={'/images/layer6.png'} />
          </div>

          <div className="draggable-container" style={{top: 250, left: 100}}>
            <Draggable image={'/images/layer7.png'} />
          </div>

          <div className="draggable-container" style={{top: 600, left: 700}}>
            <Draggable image={'/images/layer8.png'} />
          </div>

          <div className="draggable-container" style={{top: 150, left: 800}}>
            <Draggable image={'/images/layer9.png'} />
          </div>

          <div className="draggable-container" style={{top: 400, left: 450}}>
            <Draggable image={'/images/layer10.png'} />
          </div>

          <div className="draggable-container" style={{top: 550, left: 100}}>
            <Draggable image={'/images/layer11.png'} />
          </div>
     
        </div>
      );
}


export default Home;
