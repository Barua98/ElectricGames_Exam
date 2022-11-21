namespace ElectricGamesApi.Interfaces;
using ElectricGamesApi.Interfaces;
interface IGameCharacter : IGame{

    int Id {get; set;}
    string Name {get; set;}
    string Game {get; set;}

}
