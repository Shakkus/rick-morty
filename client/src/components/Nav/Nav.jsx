import { Link} from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar'
import './Nav.css'


const Nav = ({ onSearch, setAccess }) => {

    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <div className="nav">
           
            <div className="btns">
                <Link to='/about'> About </Link>
                <Link to='/home'> Home </Link>
                <Link to='/favorites'> Favorites </Link>
            </div>
            <SearchBar onSearch={onSearch} className='searchbar'/>
            <button onClick={handleLogOut} className="logout">Log Out</button>
            
        </div>
    )
}

export default Nav;
    
