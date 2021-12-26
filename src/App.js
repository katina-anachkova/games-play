import { Route, Switch, Redirect } from 'react-router-dom'
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogGame from "./components/GameCatalog/CatalogGame";
import CreateGame from "./components/CreateGame";
import DetailsGame from "./components/DetailsGame";
// import EditGame from "./components/EditGame";
import Login from "./components/Login";
import Register from "./components/Register";
// import NotFoundPage from './components/NotFoundPage'

function App() {
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Switch>
                    <Route path="/" exact component={WelcomeWorld} />
                    <Route path="/games" exact component={CatalogGame} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/create-game" component={CreateGame} />
                    <Route path="/games/:gameId" component={DetailsGame} />
                    <Route path="/logout" render={(props) => {
                        console.log('logged out');
                        return <Redirect to="/" />
                    }} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
