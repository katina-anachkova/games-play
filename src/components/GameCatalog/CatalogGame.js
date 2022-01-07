import { useEffect, useState } from "react";
import CardGame from "./CardGame";
import * as gameService from "../../services/GameService";
const CatalogGame = ({navigationChangeHandler}) => {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            gameService.getAll()
                .then(result => {
                    setGames(result)
                    setLoading(false)
                });
        }, 1000)
    }, []);



    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {loading
                ? <p>Loading...</p>
                : games.length > 0
                    ? games.map(x => <CardGame key={x._id} game={x} navigationChangeHandler={navigationChangeHandler}/>)
                    : <h3 className="no-articles">No games yet</h3>
            }

        </section>
    );
};

export default CatalogGame