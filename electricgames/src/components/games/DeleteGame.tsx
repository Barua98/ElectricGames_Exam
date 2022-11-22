import {useState, useContext, ChangeEvent} from "react";
import {GameContext} from "../../context/GameContext";
import IGameContext from "../../interfaces/IGameContext";

const DeleteGame = () => {

    const [id, setId] = useState<number>(0);
    const { games, deleteGameById } = useContext(GameContext) as IGameContext;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId( parseInt(e.currentTarget.value) )
    }

    const deleteGame = () => {
        deleteGameById( id );
    }

    return(
        <section>
            <h3>Delete a game</h3>
            <p>Antall spill i databasen: {games.length}</p>

            <div>
                <label>Skriv inn ID på spillet som skal slettes: </label>
                <input value={id} onChange={handleChange} type="number" />
            </div>
            <button onClick={deleteGame} className="btn btn-warning">Slett ordre</button>
        </section>
    )

}
export default DeleteGame;