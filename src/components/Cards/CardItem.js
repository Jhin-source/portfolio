/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';

const CardItem = (props) => {
    return (
      <>
        <li className='cards__item'>
          <Link className='cards__item__link' to={{pathname: props.path}} target="_blank">
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Webpage Elements'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }
  
  export default CardItem;