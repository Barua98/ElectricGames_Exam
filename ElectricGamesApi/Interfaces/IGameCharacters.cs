namespace ElectricGamesApi.Interfaces;
using ElectricGamesApi.Interfaces;
interface IGameCharacters : IGames{

    int Id {get; set;}
    string Name {get; set;}
    string Game {get; set;}

}
