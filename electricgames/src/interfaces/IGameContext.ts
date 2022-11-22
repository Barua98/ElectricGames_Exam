import IGames from "./IGames"


interface IGameContext {
    games: IGames[];
    deleteGameById: (id: number) => void;
}

export default IGameContext;