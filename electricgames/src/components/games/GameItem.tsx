import IGames from "../../interfaces/IGames";


const GameItem = ({id, title, image, description, platform, releaseYear} : IGames) => {

    return(
        <article>
            <h3>{title} ({id})</h3>
            <img src={`https://localhost:7016/images/${image}`}/>
            <p>{description}</p>
            <p>{platform}</p>
            <p>{releaseYear}</p>
        </article>

    )
}
export default GameItem;