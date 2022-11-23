import DeleteCharacter from "../components/gamecharacters/DeleteGameCharacter";
import GameCharacterList from "../components/gamecharacters/GameCharacterList";
import DeleteGame from "../components/games/DeleteGame";
import GameList from "../components/games/GameList";


const DeleteGamePage = () => {

    return(
        <main className="container">
            <div className="row">
                <div className="col-md-6 warning">
                    <DeleteGame/>
                    <GameList/>
                </div>
                
                <div className="col-md-6 primary">
                    <DeleteCharacter/>
                    <GameCharacterList/>
                </div>
            </div>
        </main>
    )
}

export default DeleteGamePage;