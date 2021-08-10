import './Cards.css';
import CardItem from './CardItem';
import JavaProject from '../../assets/JavaProject.png'
import PythonGames from '../../assets/PythonGames.png'
import WebpageProject from '../../assets/WebpageProject.png'
import contact from '../../assets/contactFit.jpg'

const Cards = () => {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={JavaProject}
              text="School Project: Built an interactive application that hospital staffs could use to pull and view patient profile. Github Link available soon..."
              label='Java'
              path='https://github.com/Jhin-source'
            />
            <CardItem
              src={PythonGames}
              text='Personal Project: Built simple python games using python turtle and algorithmnic logics. Github Link available soon...'
              label='Python'
              path='https://github.com/Jhin-source'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={WebpageProject}
              text='Personal Project: Built a personal webpage, which includes my background, resume, and my projects. Github Link available soon...'
              label='JSX, CSS, Reactjs'
              path='https://github.com/Jhin-source'
            />
            <CardItem
              src={contact}
              text='Coming soon...'
              label='Coming soon'
              path='https://github.com/Jhin-source'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;