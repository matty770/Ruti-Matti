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
        public CUsers GetUser(string userId)
        {
            var u = BUserManager.selectUserById(userId);
            return u;

        }

        [HttpPost]
        public void addUser([FromBody]CUsers user)
        {
            BUserManager.addUser(user);
        }

        //[HttpGet]
        //public List<CUsers> getAllParents()
        //{
        //    return BUserManager.selectAllParents();
        //}


        //[HttpGet]
        //public List<CUsers> GetAllTeachers()
        //{
        //    return BUserManager.selectAllTeachers();
        //}
        [HttpGet]
        public List<CUsers> SelectParentOrTechers(int p)
        {
            return BUserManager.SelectParentOrTechers(p);
        }
        [HttpGet]
        public CUsers selectUserByIdChild(string idChild)
        {
            return BUserManager.selectUserByIdChild(idChild);
        }
        [HttpPost]
        public void updateUser(int x,[FromBody]CUsers user)
        {
             BUserManager.updateUser(user);
        }
        [HttpGet]
        public bool UserIs(string idUser)
        {
            return BUserManager.UserIs(idUser);
        }


    }
}
