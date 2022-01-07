import { useState, useEffect } from 'react';
import * as gameService from '../services/GameService.js';
import GameDetailsControls from "./GameDetailsControls.js";
import Comment from './CommentTemplate.js'
import { getUserData } from '../util.js';

const DetailsGame = ({ match }) => {

    const userData = getUserData();
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);
    const isOwner = userData && userData.id == game._ownerId;
    const gameId = match.params.gameId;

    useEffect(async () => {
        let result = await gameService.getOne(gameId)
        setGame(result)
    }, []);

    useEffect(async () => {
        let result = await gameService.getComments(gameId);
        setComments(result)
    }, [game]);

    const onCommentHandler = (e) => {

        e.preventDefault();

        let formData = new FormData(e.target);

        let comment = formData.get('comment').trim();

        if (!comment) {
            return alert('Cannot send an empty comment!')
        }

        const body = {
            gameId: gameId,
            comment: comment
        }

        try {
            gameService.postComment(body)
        }
        catch (err) {
            alert(err.message);
        }
        console.log(comments.length)
    }

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

            {userData && !isOwner ?
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onCommentHandler}>
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" />
                    </form>
                </article>
                : null
            }
        </section>
    );
}

export default DetailsGame