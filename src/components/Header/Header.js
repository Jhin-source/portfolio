import { MenuItems } from'./MenuItems'
import Logo from '../../assets/logo.png'
import './Header.css';

const Header = () => {
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-name">Jhin McGlynn</h1>
            <div className="menu-icon">
                <img className="logo" src={Logo} alt="Logo"/>
            </div>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
                
            </ul>
        </nav>
    )
    
}

export default Header;