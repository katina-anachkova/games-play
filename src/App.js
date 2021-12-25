import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogGame from "./components/GameCatalog/CatalogGame";
import CreateGame from "./components/CreateGame";
import {useState} from 'react';
// import DetailsGame from "./components/DetailsGame";
// import EditGame from "./components/EditGame";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFoundPage from './components/NotFoundPage'

function App() {
    const [page, setPage] = useState('/home')

    const routes = {
        '/home': <WelcomeWorld/>,
        '/games': <CatalogGame/>,
        '/create-game': <CreateGame/>,
        '/login': <Login/>,
        '/register': <Register/>,
    };

    const navigationChangeHandler = (path) => {
        setPage(path)
    }


    return (
        <div id="box">
            <Header
                navigationChangeHandler={navigationChangeHandler}
            />
            <main id="main-content">
               { routes[page] || <NotFoundPage/>}
            </main>
        </div>
    );
}

export default App;
