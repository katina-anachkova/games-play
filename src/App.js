import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogGame from "./components/CatalogGame";
import CreateGame from "./components/CreateGame";
// import DetailsGame from "./components/DetailsGame";
// import EditGame from "./components/EditGame";

function App() {
    const routes = {
        '/home': WelcomeWorld,
        '/games': CatalogGame,
        '/create': CreateGame,

    };
    
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <WelcomeWorld />
            </main>
        </div>
    );
}

export default App;
