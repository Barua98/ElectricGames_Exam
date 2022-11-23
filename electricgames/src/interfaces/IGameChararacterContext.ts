import IGameCharacter from "./IGameCharacter"


interface IGameCharacterContext {
    gameCharacters: IGameCharacter[];
    deleteCharacterById: (id: number) => void; 
}

export default IGameCharacterContext; 
