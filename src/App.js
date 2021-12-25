import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogGame from "./components/GameCatalog/CatalogGame";
import CreateGame from "./components/CreateGame";
import { useState } from 'react';
import DetailsGame from "./components/DetailsGame";
// import EditGame from "./components/EditGame";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFoundPage from './components/NotFoundPage'

function App() {
    const [page, setPage] = useState('/home')


    const navigationChangeHandler = (path) => {

        setPage(path)
    }

    const router = (path) => {
        let pathNames = path.split('/');

        let rootPath = pathNames[1];
        let argument = pathNames[2];

        const routes = {
            'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler} />,
            'games': <CatalogGame navigationChangeHandler={navigationChangeHandler} />,
            'create-game': <CreateGame />,
            'login': <Login />,
            'register': <Register />,
            'details': <DetailsGame id={argument}/>
        };

        return routes[rootPath]

    }

    return (
        <div id="box">
            <Header
                navigationChangeHandler={navigationChangeHandler}
            />
            <main id="main-content">
                {router(page) || <NotFoundPage />}
            </main>
        </div>
    );
}

export default App;
