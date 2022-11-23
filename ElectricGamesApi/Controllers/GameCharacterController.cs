using Microsoft.AspNetCore.Mvc; 
using Microsoft.EntityFrameworkCore; 
using ElectricGamesApi.Contexts; 
using ElectricGamesApi.Models; 

namespace ElectricGamesApi.Controllers; 

[ApiController]
[Route("[controller]")]

public class GameCharacterController : ControllerBase
{
    private readonly GameContext context;

    public GameCharacterController(GameContext _context)
    {
        context = _context; 
    }

    [HttpGet]
    public async Task<ActionResult<List<GameCharacter>>> Get()
    {
        try
        {
            List<GameCharacter> gameCharacters = await context.GameCharacter.ToListAsync(); 
            return Ok(gameCharacters); 
        }
        catch
        {
            return StatusCode(500); 
        }
    }

    
}
