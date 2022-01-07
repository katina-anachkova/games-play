import { useHistory } from "react-router";
import * as gameService from '../sevices/GameService.js'

const CreateGame = () => {

    let history = useHistory();

    const onBookCreate = (e) => {

        let formData = new FormData(e.target);

        let title = formData.get('title').trim();
        let category = formData.get('category').trim();
        let maxLevel = formData.get('maxLevel');
        let imageUrl = formData.get('imageUrl').trim();
        let summary = formData.get('summary').trim();

        gameService.CreateGame({
                title,
                category,
                maxLevel,
                imageUrl,
                summary            
        });
        history.push('/');
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onBookCreate}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" />
                </div>
            </form>
        </section>
    );
};

export default CreateGame