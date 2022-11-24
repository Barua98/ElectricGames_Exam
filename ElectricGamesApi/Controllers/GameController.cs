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

    //HTTP get all games 
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

    //HTTP get by id

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

    //HTTP get by title

    [HttpGet]
    [Route("[action]/{title}")]
    public async Task<ActionResult<List<Game>>> GetByTitle(string title)
    {
        try
        {
            List<Game>? game = await context.Game.Where(game => game.Title.ToLower() == title.ToLower()).ToListAsync();

            return Ok(game);
        }
        catch
        {
            return StatusCode(500); 
        }

    }

    //HTTP delete by id

    [HttpDelete]
    [Route("[action]/{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try 
        {
            Game? gameToDelete = await context.Game.FindAsync(id); 

            if(gameToDelete != null)
            {
                context.Game.Remove(gameToDelete);
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
