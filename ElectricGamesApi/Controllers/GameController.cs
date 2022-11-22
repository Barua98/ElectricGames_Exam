/* using Microsoft.AspNetCore.Mvc; 
using Microsoft.EntityFrameworkCore; 
using ElectricGamesApi.Contexts; 
using ElectricGamesApi.Models; 

namespace ElectricGamesApi.Controllers; 

[ApiController]
[Route("[controller]")]

public class GameController : ControllerBase
{
    private readonly GameContext context;

    public GameController(GameContext _context)
    {
        context = _context; 
    }

    [HttpGet]
    public async Task<ActionResult<List<Game>>> Get()
    {
        try
        {
            List<Game> games = await context.Game.ToListAsync(); 
            return Ok(games); 
        }
        catch
        {
            return StatusCode(500); 
        }
    }

}
*/