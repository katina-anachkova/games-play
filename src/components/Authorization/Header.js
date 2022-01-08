import { Link } from 'react-router-dom';
import { useContext } from "react";
import AuthCtx from "../context/AuthCtx";

const Header = () => {

    const userInfo = useContext(AuthCtx);

    let userNav = <div id="user">
        <Link to="/create">Create Game</Link>
        <Link to="/logout">Logout</Link>
    </div>

    let guestNav = <div id="guest">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </div>

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>
                {sessionStorage.length > 0 
                        ? userNav
                        : guestNav
                    }
            </nav>
        </header>
    );
};

export default Header