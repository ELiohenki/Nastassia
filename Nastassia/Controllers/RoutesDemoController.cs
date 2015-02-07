using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Nastassia.Controllers
{
    public class RoutesDemoController : Controller
    {
        [OutputCache(Duration = 0, NoStore = true)]
        public ActionResult One()
        {
            return View();
        }
        [OutputCache(Duration = 0, NoStore = true)]
        public ActionResult Two(int SomeNum = 1)
        {
            ViewBag.SomeNum = SomeNum;
            return View();
        }

        [OutputCache(Duration = 0, NoStore = true)]
        [Authorize]
        public ActionResult Three()
        {
            return View();
        }
    }
}