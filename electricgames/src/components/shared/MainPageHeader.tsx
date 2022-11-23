import {Link} from "react-router-dom"

const MainPageHeader = () => {

    return(
        <header>
            <h1>EG - Adminpage to ElectrivGames</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/delete-games">Delete games</Link></li>
            </ul>

        </header>
    )
}

export default MainPageHeader;