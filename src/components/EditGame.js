import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import * as gameService from '../services/GameService.js'

const EditGame = ({ match }) => {

    const history = useHistory();

    const gameId = match.params.gameId;

    const [game, setGame] = useState([]);

    useEffect(() => {
        gameService.getOne(gameId)
            .then(game => {
                setGame(game)
            });
    }, [game]);

    const onGameEdit = (e) => {
        e.preventDefault();

        let gameData = Object.fromEntries(new FormData(e.currentTarget));

        gameService.editGame(gameId, gameData);
        history.push('/');
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onGameEdit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" />

                </div>
            </form>
        </section>
    );
};

export default EditGame;