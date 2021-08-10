import './Contact.css';
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
    display: inline-block;
    padding: 5em;
    background: #C7D2FE66;
    border-radius: 10px;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(7px);
    border: 2px solid transparent;
    background-clip: border-box;
    cursor: pointer;
`;


const StyledH1 = styled.h1`
    font-family: "Cookie";
    font-size: 3rem;
`;

const StyledH3 = styled.h3`
    font-family: "Cookie";
    font-size: 2rem;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Contact = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <div className="contact-container">
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledH1>Contact Info:</StyledH1>
            <StyledH3>Email: <br/> jhin.mcglynn@uconn.edu <br/>
                <a target='_blank' rel="noreferrer" href='https://github.com/Jhin-source'><i className="fab fa-github"></i></a>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/jhin-mcglynn/'><i className="fab fa-linkedin"></i></a>
                <a target='_blank' rel="noreferrer" href='mailto:jhin.mcglynn@uconn.edu'><i class="far fa-envelope"></i></a>
            </StyledH3>
        </Container>
        </div>
    );
}

export default Contact;