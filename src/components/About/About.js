import Image from 'react-bootstrap/Image'
import './About.css'
import profile from '../../assets/square-profile.jpg'
import uconn from '../../assets/UCONN.png'

const About = () => {
    return (
        <div className="about-wrapper"><div className="page-cover"></div>
            <div className="intro-start">
                <div className="description">
                <Image className="profile" src={profile} roundedCircle />  
                <h2>Background:</h2>
                <p className="about">Hello, my name is Jhin McGlynn. I am currently a student at University of 
                    Connecticut (Anticipated graduation date-May 2022). My interest in solving problems in math 
                    and sciences eventually led me to my current major - Computer Science with Software Engineering track.
                    What I love most about coding is that there is no set ways to solve a problem, so I can be 
                    as creative as I want!  
                </p>
                <h2>Beginning:</h2>
                <p className="about">I didn't start off as a CS student in college though. My journey in college started 
                    off with me being a Pre-Med student. I spent first two years of my college career 
                    studying life-sciences such as Biology and Chemistry. During this time, I learned how to be patient 
                    and disciplined. This is also when I met some of my closest friends. I switched to CS when my friend 
                    showed me how to implement some search algorithmns in Python. I quickly fell in love with coding and I have 
                    been exploring new technologies and languages on my own ever since! 
                 </p>
                 <h2>Now:</h2>
                 <p className="about">I am currently interning at Travelers this summer. I work on Full-stack and Backend projects.
                 I am also doing some projects outside of my internship, this webpage is one of them. </p>
                 <h2>After:</h2>
                 <p className="about">After I graudate, I want to use my knowlede to solve real-world problems! I know I am 
                 still new to this field, but I will learn and improve as I go!
                 </p>
                 <img className="uconn" src={uconn} alt="UCONN"/>
                </div>

            </div>
            <div className="pad"></div>
            </div>


    )
}

export default About;