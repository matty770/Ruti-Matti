using BLL;
using COMMON;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AttendenceAPI.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]
        public CUsers GetUser(string userName)
        {
            var u = BUserManager.selectUserById(userName);
            return u;

        }
    }
}
