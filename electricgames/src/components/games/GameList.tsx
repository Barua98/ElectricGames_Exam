import GameItem from "./GameItem";
import { useContext } from "react";
import IGameContext from "../../interfaces/IGameContext";
import { GameContext } from "../../context/GameContext";


const GameList = () => {

    const {games} = useContext(GameContext) as IGameContext;


    const getGameItem = () => {


        return games.map( (game, i) => (
            <GameItem
                key={`game-${i}`}
                id={game.id}
                title={game.title}
                image={game.image}
                description={game.description}
                platform={game.platform}
                releaseYear={game.releaseYear}
            />
        ));
    }

    return(
        <section>
            <h3>See all games</h3>
            <article>
                {getGameItem()}
            </article>
        </section>
    )

}

export default GameList;