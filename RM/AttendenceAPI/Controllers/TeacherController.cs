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
        [Route("api/Teacher/addTeacher")]
        public int addTeacher([FromBody]CTeacher user)
        {
            BUserManager.addTeacher(user);
            return 1;
        }
        [HttpPost]
        [Route("api/Teacher/addKinderGardenToTeacher")]
         public int addKinderGardenToTeacher(string Id,[FromBody] List<int> listKinderGarden)
        {
               return BUserManager.addKinderGardenToTeacher(listKinderGarden,Id);
        }
    }
}
