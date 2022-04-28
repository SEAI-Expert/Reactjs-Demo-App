import { Link } from "react-router-dom";
import obj from "./MainNavigation.module.css"

function MainNavigation(){
    console.log()

    return (<>
    
    <header className={obj.header}>
        <div className={obj.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'> All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'> Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'> My Favorites </Link>
                </li>
                <li>
                    <Link to='/crud'> Crud App </Link>
                </li>
            </ul>
        </nav>
    </header>
    
    </>);
}

export default MainNavigation;