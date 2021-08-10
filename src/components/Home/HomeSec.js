import about from '../../assets/aboutFit.jpg'
import resume from '../../assets/resumeFit.jpg'
import experience from '../../assets/experienceFit.jpg'
import contact from '../../assets/contactFit.jpg'

export const homeObjOne = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'ABOUT ME',
    headline: 'Hi! My name is Jhin McGlynn...',
    description:
      'I am currently studying at University of Connecticut! Click the button to read more!',
    link: '/about',
    buttonLabel: 'Learn More',
    imgStart: '',
    img: about,
    alt: 'About me'
  };
  
  export const homeObjTwo = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'PROJECTS',
    headline: 'School/presonal projects that I have worked on...',
    description:
      'I try to working on 2 new projects every year...',
    link: '/projects',
    buttonLabel: 'Learn More',
    imgStart: '',
    img: experience,
    alt: 'Projects'
  };
  
  export const homeObjThree = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'RESUME',
    headline: 'Work Experience, Club activities, and more...',
    description:
      "I've worked at many places, which includes a cafe, a research lab, a hospital, and a big insurance company.",
    link: '/resume',
    buttonLabel: 'Learn More',
    imgStart: 'start',
    img: resume,
    alt: 'Resume'
  };
  
  export const homeObjFour = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'CONTACT',
    headline: 'Please feel free to contact me...',
    description:
      'My anticipated graduation date is May 2022, so I am actively looking for a full-time position right now!',
    link: '/contact',
    buttonLabel: 'Contact Now',
    imgStart: 'start',
    img: contact,
    alt: 'Contact'
  };