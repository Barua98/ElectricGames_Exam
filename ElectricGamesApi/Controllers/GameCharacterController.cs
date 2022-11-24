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

    //HTTP get all game character
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

    //HTTP get by id

    [HttpGet("{id}")]
    public async Task<ActionResult<GameCharacter>> Get(int id)
    {
        GameCharacter? gameCharacter =  await context.GameCharacter.FindAsync(id); 

        if( gameCharacter!= null)
        {
            return Ok(gameCharacter);
        }
        else
        {
            return NotFound();
        }
    }
    //HTTP get by name
    [HttpGet]
    [Route("[action]/{name}")]
    public async Task<ActionResult<List<GameCharacter>>> GetByName(string name)
    { 
        try
        {
            List<GameCharacter>? gameCharacters = await context.GameCharacter.Where(character => character.Name.ToLower() == name.ToLower()).ToListAsync();

            return Ok(gameCharacters);
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
            GameCharacter? gameCharacterToDelete = await context.GameCharacter.FindAsync(id); 

            if(gameCharacterToDelete != null)
            { 
                context.GameCharacter.Remove(gameCharacterToDelete); 
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
