import IGames from "./IGames"

interface IGameContext {
    games: IGames[];
    deleteOrderById: (id: number) => void;
}

export default IGameContext;