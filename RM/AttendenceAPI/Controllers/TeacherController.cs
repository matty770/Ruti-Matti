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
    public class TeacherController : ApiController
    {

        [HttpPost]
        // [Route("/GetKin")]
        public int functioPostWithParameter([FromBody]CTeacher user)
        {
            BUserManager.addTeacher(user);
            return 1;
            // BUserManager.addKinderGardenToTeacher(listKG, user.Id);

        }
    }
}
