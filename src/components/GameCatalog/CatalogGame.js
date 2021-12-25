import { useEffect, useState } from "react";
import CardGame from "./CardGame";

const CatalogGame = () => {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
                .then(res => res.json())
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
                    ? games.map(x => <CardGame key={x._id} game={x} />)
                    : <h3 className="no-articles">No games yet</h3>
            }

        </section>
    );
};

export default CatalogGame