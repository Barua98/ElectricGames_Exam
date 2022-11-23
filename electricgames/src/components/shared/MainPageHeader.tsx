import {Link} from "react-router-dom"

const MainPageHeader = () => {

    return(
        <header>
            <h1>Her kan vi ha en logo</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/delete-games">Delete games & characters</Link></li>
                <li><Link to="/update-games">Update games & characters</Link></li>
                <li><Link to="/search">Search page</Link></li>
            </ul>

        </header>
    )
}

export default MainPageHeader;