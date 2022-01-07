import { useState, useEffect } from 'react';
import * as gameService from '../services/GameService.js';
import GameDetailsControls from "./GameDetailsControls.js";
import Comment from './CommentTemplate.js'

const DetailsGame = ({ match }) => {

    const [game, setGame] = useState({});
    const [comments, setComments] = useState({});

    useEffect(async () => {
        let result = await gameService.getOne(match.params.gameId)
        setGame(result)
    }, []);

    useEffect(async () => {
        let result = await gameService.getComments(match.params.gameId);
        setComments(result)
    }, []);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">{game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    {comments.length > 0
                        ? <ul>
                            {comments.map(x => <Comment key={x._id} comment={x} />)}
                        </ul>
                        : <p className="no-comment">No comments.</p>}
                </div>

                <div className="buttons">
                    <GameDetailsControls match={match} />
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" />
                </form>
            </article>

        </section>
    );
}

export default DetailsGame