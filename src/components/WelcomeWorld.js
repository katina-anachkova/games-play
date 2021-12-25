import * as gameService from "../sevices/GameService";
import { useState, useEffect } from "react";
import  LatestGamesCard  from './LatestGamesCard'

const WelcomeWorld = ({navigationChangeHandler}) => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getLatest()
            .then(res =>
                setGames(res))
    })
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="/images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {
                    games.length > 0
                        ? games.map(x => 
                        <LatestGamesCard
                            navigationChangeHandler={navigationChangeHandler}
                            game={x}
                            key={x._id}
                        />)
                        : <p className="no-articles">No games yet</p>
                }

            </div>
        </section>
    )
}

export default WelcomeWorld