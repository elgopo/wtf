using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login()
        {
            ViewBag.Message = "Страница входа";

            return View();
        }

        public ActionResult News()
        {
            ViewBag.Message = "Страница для отображения новостей";

            return View();
        }

        public ActionResult Profile()
        {
            ViewBag.Message = "Страница для отображения профиля";

            return View();
        }
    }
}