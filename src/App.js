import { Route, Switch, Redirect } from 'react-router-dom'
import { useState } from 'react';
import Header from "./components/Authorization/Header";
import WelcomeWorld from "./components/Home/WelcomeWorld";
import CatalogGame from "./components/GameCatalog/CatalogGame";
import CreateGame from "./components/CreateGame";
import DetailsGame from "./components/DetailsGame";
import EditGame from "./components/EditGame";
import Login from "./components/Authorization/Login";
import Register from "./components/Authorization/Register";
import AuthCtx from "./context/AuthCtx";
import * as util from './util.js'
import { logout } from "./services/Api";

function App() {
    const [userInfo, setUserInfo] = useState({});

    const onRegister = (user) => {
        setUserInfo(user);
    }

    const onLogin = (user) => {
        setUserInfo(user);
    }

    const onLogout = () => {
        setUserInfo({});
        util.clearUserData();
    }

    return (
        <AuthCtx.Provider value={userInfo}>
            <div id="box">
                <Header email={userInfo.email} />
                <main id="main-content">
                    <Switch>
                        <Route path="/" exact component={WelcomeWorld} />
                        <Route path="/games" exact component={CatalogGame} />
                        <Route path="/create" component={CreateGame} />
                        <Route path="/edit/:gameId" component={EditGame} />
                        <Route path="/details/:gameId" component={DetailsGame} />
                        <Route path="/login">
                            <Login onLogin={onLogin} />
                        </Route>
                        <Route path="/register" component={Register} />
                        <Route path="/register">
                            <Register onRegister={onRegister} />
                        </Route>
                        <Route path="/logout" render={(props) => {
                            logout()
                            onLogout()
                            return <Redirect to="/" />
                        }} />

                    </Switch>
                </main>
            </div>
        </AuthCtx.Provider>
    );
}

export default App;
