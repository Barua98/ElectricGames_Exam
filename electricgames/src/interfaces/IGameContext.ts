import IGames from "./IGames"


interface IGameContext {
    games: IGames[];
    deleteGameById: (id: number) => void;
    postGame: (game: IGames) => void;
    getGameById: (id: number) => void;
    getGameByTitle: (title: string) => void;
}

export default IGameContext;