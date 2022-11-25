import { url } from "inspector";
import {useState, useContext, ChangeEvent} from "react";
import {GameContext} from "../../context/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import IGames from "../../interfaces/IGames";

const postGameItem = () => {

    const {games, postGame} = useContext(GameContext) as IGameContext;

    const [game, setGame] = useState<IGames>({title:"", description:"", platform:"", releaseYear: 0});

    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [description, setDescription] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value, files} = e.currentTarget;

        switch(name) {
            case "title":
                setTitle( value );
                break;
            case "image":
                if(files != null ){
                    const file = files[0]
                    setImage( file );
                }
                break;
            case "description":
                setDescription( value );
                break;
            case "platform":
                setPlatform( value );
                break;
            case "releaseYear":
                setReleaseYear( parseInt(value) );
                break;
        }


        setGame({
            title: title,
            description: description,
            platform: platform,
            releaseYear: releaseYear
        })

    }

    const postNewGame = () => {
        postGame ( game )
    }

    return(
        <section>
            <h3>Add a new game</h3>
            <p>Amount of game in database: {games.length}</p>

            <div>
                <label>Type inn values for your game:  </label>
                <input name="title" value={title} onChange={handleChange} type="text" />
                <input name="image" onChange={handleChange} type="file" />

                <input name="description" value={description} onChange={handleChange} type="text" />
                <input name="platform" value={platform} onChange={handleChange} type="text" />
                <input name="releaseYear" value={releaseYear} onChange={handleChange} type="number" />
            </div>
            <button></button>
        </section>
    )
}

export default postGameItem;