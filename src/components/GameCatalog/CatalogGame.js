import { useEffect, useState } from "react";
import CardGame from "./CardGame";

const CatalogGame = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
                .then(res => res.json())
                .then(result => {
                    setGames(result)
                });
        }, 1000)
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map(x => <CardGame game={x} />)}
            <h3 className="no-articles">No games yet</h3>
        </section>
    );
};

export default CatalogGame