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
        [Route("api/User/Login")]
        public CUsers Login(string userId, string firstName, string lastName)
        {
            return BUserManager.Login(userId, firstName, lastName);
        }
        [HttpGet]
        [Route("api/User/GetPermissionOfUser")]
        public  int GetPermissionOfUser(string idUser)
        {
           return BUserManager.GetPermissionOfUser(idUser);
        }
        [HttpGet]
        [Route("api/User/SelectParentOrTechers")]
        public List<CUsers> SelectParentOrTechers(int p)
        {
            return BUserManager.SelectParentOrTechers(p);
        }
        [HttpGet]
        [Route("api/User/selectUserByIdChild")]
        public CUsers selectUserByIdChild(string idChild)
        {
            return BUserManager.selectUserByIdChild(idChild);
        }
        [HttpGet]
        [Route("api/User/UserIs")]
        public int UserIs(string idUser)
        {
            return BUserManager.UserIs(idUser);
        }
        [HttpPost]
        [Route("api/User/addUser")]
        public int addUser([FromBody]CUsers user)
        {
            try
            {
                BUserManager.addUser(user);
                return 1;
            }
            catch (Exception e)
            {
                if (e.InnerException.InnerException.Message.Equals("Violation of PRIMARY KEY constraint 'PK__Users__B7C9263840CFC3C0'. Cannot insert duplicate key in object 'dbo.Users'. The duplicate key value is (319100160).\r\nThe statement has been terminated."))
                {
                    allreadyExist ex = new allreadyExist();
                    throw ex;
                }

                throw e;
            }
        }

        [HttpPost]
        [Route("api/User/updateUser")]
        public int updateUser([FromBody]CUsers user)
        {
            try
            {
                BUserManager.updateUser(user);
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
