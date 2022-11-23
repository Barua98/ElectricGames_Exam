import GameCharacterItem from "./GameCharacterItem";
import {useContext} from "react"; 
import IGameCharacterContext from "../../interfaces/IGameChararacterContext";
import { GameCharacterContext } from "../../context/GameCharacterContext";

const GameCharacterList = () => {

    const {gameCharacters} = useContext(GameCharacterContext) as IGameCharacterContext; 

    const getGameCharacterItem =() => {
        return gameCharacters.map( (gameCharacters, i)=>(
            <GameCharacterItem
                key={`game-${i}`}
                id={gameCharacters.id}
                name={gameCharacters.name}
                game={gameCharacters.game}
            />
        ));
    }

    return (
        <section>
            <h3>See all game characters</h3>
                <section>
                    {getGameCharacterItem()}
                </section>
        </section>
    )

}
export default GameCharacterList