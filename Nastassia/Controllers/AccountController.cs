using Nastassia.Model;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Nastassia.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {

        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<bool> Login(LoginViewModel model)
        {
            var result = model.Email == "asd@asd.asd" && model.Password == "asd";
            switch (result)
            {
                case true:
                    return true;
                default:
                    ModelState.AddModelError("", "Invalid login attempt.");
                    return false;
            }
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<bool> Register(RegisterViewModel model)
        {

            return true;
        }
    }
}