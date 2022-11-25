import {useState, useContext, ChangeEvent} from "react";
import {GameContext} from "../../context/GameContext";
import IGameContext from "../../interfaces/IGameContext";

const SearchGameItem = () => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    
    const { getGameById, getGameByTitle } = useContext(GameContext) as IGameContext;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        switch (e.target.name){
            case "id":
                setId( parseInt( e.target.value ));
            break;
            case "title":
                setTitle( e.target.value );
            break;
        }
        
    }

    const getId = () => {
        getGameById(id);
    }
    const getTitle = () => {
        getGameByTitle(title);
    }

    return(
        <section>
            <h3>Search for a game</h3>

            <div>
                <label>Search in game-directory by title:</label>
                <input name="title" value={title} onChange={handleChange} type="text" />
                <button onClick={getTitle} className="btn btn-warning">Search</button>
            </div>
            
            <div>
                <label>Search in game-directory by ID:  </label>
                <input name="id" value={id} onChange={handleChange} type="number" />
                <button onClick={getId} className="btn btn-warning">Search</button>
            </div>
            

        </section>
    )

}
export default SearchGameItem;