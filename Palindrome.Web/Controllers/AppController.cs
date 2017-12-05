using Microsoft.AspNetCore.Mvc;
using Palindrome.DataAccess;

namespace Palindrome.Web.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
