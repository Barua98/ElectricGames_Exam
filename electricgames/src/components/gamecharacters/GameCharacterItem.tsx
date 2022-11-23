import IGameCharacter from "../../interfaces/IGameCharacter";

const GameCharacterItem = ({id, name, game} : IGameCharacter) => {
    
    return(
        <article>
            <h3>{name} ({id})</h3>
            <p>{game}</p>
        </article>
    )
}

export default GameCharacterItem; 
