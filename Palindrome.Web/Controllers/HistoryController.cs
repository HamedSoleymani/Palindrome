using Microsoft.AspNetCore.Mvc;
using Palindrome.DataAccess;
using Palindrome.DataAccess.Entities;
using System;

namespace Palindrome.Web.Controllers
{
    [Route("api/[Controller]")]
    public class HistoryController : Controller
    {
        private readonly IPalindromeRepository _repository;

        public HistoryController(IPalindromeRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var results = _repository.GetPersistedList();

                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get persisted list");
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            try
            {
                var results = _repository.GetPersistedList();

                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get persisted list");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]string entry)
        {
            try
            {
                if (string.IsNullOrEmpty(entry))
                {
                    var persistedEntry = new PersistedEntry()
                    {
                        Entry = entry,
                        CreatedDate = DateTime.Now
                    };

                    _repository.AddEntryToPersistedItems(persistedEntry);

                    if (_repository.SaveAll())
                    {
                        return Created($"/api/history/{persistedEntry.Id}", persistedEntry);
                    }
                }
                else
                {
                    return BadRequest("Input string can not be null or empty");
                }
            }
            catch (Exception ex)
            {
            }

            return BadRequest("Failed to add new entry to persisted list");
        }
    }
}
