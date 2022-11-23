import {useState, useContext, ChangeEvent} from "react";
import { GameCharacterContext } from "../../context/GameCharacterContext";
import IGameCharacterContext from "../../interfaces/IGameChararacterContext";

const DeleteCharacter = () => {
    const [id, setId] = useState<number>(0); 
    const {gameCharacters, deleteCharacterById} = useContext(GameCharacterContext) as IGameCharacterContext;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId( parseInt(e.currentTarget.value) )
    }

    const deleteGame = () => {
        deleteCharacterById( id ); 
    }

    return(
        <section>
            <h3>Delete a game character</h3>
            <p>Amount of game characters in database: {gameCharacters.length}</p>

            <div>
                <label>Write in the ID for det game character you want to delete: </label>
                <input value={id} onChange={handleChange} type="number" />
            </div>
            <button onClick={deleteGame} className="btn btn-warning">Delete game character</button>
        </section>
    )
}

export default DeleteCharacter
