using Microsoft.AspNetCore.Mvc; 
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

    [HttpGet("{id}")]
    public async Task<ActionResult<Game>> Get(int id)
    {
        Game? game = await context.Game.FindAsync(id);

        if(game != null)
        {
            return Ok(game);
        }
        else 
        {
            return NotFound(500); 
        }
    }

    [HttpGet("{title}")]
    public async Task<ActionResult<Game>> Get(string title)
    {
        Game? game = await context.Game.FindAsync(title);

        if(game != null)
        {
            return Ok(game);
        }
        else 
        {
            return NotFound(500); 
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try 
        {
            Game? gameToDelete = await context.Game.FindAsync(id); 

            if(gameToDelete != null)
            {
                context.Remove(gameToDelete);
                await context.SaveChangesAsync();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }
}
