using Microsoft.AspNetCore.Mvc;
using Palindrome.Web.Extension;
using System;

namespace Palindrome.Web.Controllers
{
    [Route("api/[Controller]")]
    public class PalindromeController: Controller
    {
        [HttpGet]
        public IActionResult Check(string entry)
        {
            try
            {
                if(string.IsNullOrEmpty(entry))
                    return BadRequest("The Entry can not be empty");

                return Ok(entry.IsPalindrome());
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get persisted list");
            }
        }
    }
}
