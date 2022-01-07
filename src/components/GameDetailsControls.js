import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getUserData } from '../util';
import * as gameService from '../services/GameService';

const GameDetailsControls = ({ match }) => {
    const [game, setGame] = useState({});

    let history = useHistory();

    const userData = getUserData();
    const isOwner = userData && userData.id == game._ownerId;

    useEffect(() => {
        gameService.getOne(match.params.gameId)
            .then(game => {
                setGame(game);
            });
    }, [])

    const onDelete = () => {
        setGame(gameService.getOne(match.params.gameId));
        gameService.deleteGame(match.params.gameId)
            .then(history.replace('/'));
    }

    return (
        isOwner
            ? <><Link to={`/edit/${game._id}`} className="button">Edit</Link>
                <Link to="#" onClick={onDelete} className="button">Delete</Link>
            </>
            : null
    );
}

export default GameDetailsControls;

