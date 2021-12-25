import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogGame from "./components/CatalogGame";
import CreateGame from "./components/CreateGame";
import {useState, createElement} from 'react';
// import DetailsGame from "./components/DetailsGame";
// import EditGame from "./components/EditGame";

function App() {
    const [page, setPage] = useState('/home')

    const routes = {
        '/home': <WelcomeWorld/>,
        '/games': <CatalogGame/>,
        '/create-game': <CreateGame/>,
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
               { routes[page] ||<h2>No page found</h2>}
            </main>
        </div>
    );
}

export default App;
