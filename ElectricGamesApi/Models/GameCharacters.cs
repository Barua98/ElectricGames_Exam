using ElectricGamesApi.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace ElectricGamesApi.Models; 


public class GameCharacters : IGameCharacter
{
    [Key]
    public int Id {get; set;}
    public string Name {get; set;}
    public string Game {get; set;}
    
}