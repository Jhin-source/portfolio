import './Home.css'
import Typed from "react-typed";
import Particles from 'react-particles-js';
import Section from '../Section/Section';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './HomeSec';
  
const Home = () => {

        return (
        <div> 
        <div className="home-wrapper">
            <Particles
                params={{
                    particles: {
                        number: {                                
                            value: 30,
                            density: {
                                enable: true, 
                                value_area: 1000
                            }
                        },
                        shape: {
                            type: ["polygon", "circle", "edge"],
                            stroke: {
                                width: 7,
                                color: "000000"
                            }
                        }                        
                    }
                }}
            /> 
           
           <div className="welcome-wrapper">
            <h1>Hi, my name is</h1>
            <h1> __Jhin McGlynn__.</h1>
            <Typed 
            className="typed-text" 
            strings={["Welcome to my webpage!", "Scroll down to view more!"]} 
            typeSpeed={85}
            backSpeed={45} 
            loop
            />
            </div>
        </div>
        <Section {...homeObjOne} />
        <Section {...homeObjThree} />
        <Section {...homeObjTwo} />
        <Section {...homeObjFour} />
        </div>

    )
    
}

export default Home;