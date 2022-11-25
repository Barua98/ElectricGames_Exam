import GameList from "../components/games/GameList";
import SearchGameItem from "../components/games/SearchGameItem";


const SearchPage = () => {

    return(
        <main className="container">
            <div className="row">
                <div className="col-md-6 warning">
                    <SearchGameItem/>
                </div>
                
                <div className="col-md-6 primary">
                    <GameList/>
                </div>
            </div>
        </main>
    )
}

export default SearchPage;