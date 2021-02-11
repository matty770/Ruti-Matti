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
        public enum actionType
        {
            add, update, remove, addTeacher,addKGToTeachet
        }
        //[HttpGet]
        //public CUsers GetUser(string userId)
        //{
        //    var u = BUserManager.selectUserByParameters(userId,firstName,lastName);
        //    return u;

        //}
       [HttpGet]
       public CUsers Login(string userId, string firstName, string lastName)
       {
           return BUserManager.Login(userId, firstName, lastName);
       }

 // [HttpPost]
 // public int addUser([FromBody]CUsers user)
 // {
 //     try
 //     {
 //         BUserManager.addUser(user);
 //         return 1;
 //
 //     }
 //     catch (Exception e)
 //     {
 //
 //      //  if(e.InnerException.InnerException.HResult.Equals(-214623200))
 //         throw e;
 //     }
 // }

        //[HttpGet]
        //public List<CUsers> getAllParents()
        //{
        //    return BUserManager.selectAllParents();
        //}


        [HttpGet]
        public List<CUsers> GetAllUsers()
        {
            return BUserManager.selectAllUsers();
        }
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
     //   [HttpPost]
     //   public void updateUser(int x,[FromBody]CUsers user)
     //   {
     //        BUserManager.updateUser(user);
     //   }
        [HttpGet]
        public int UserIs(string idUser)
        {
            return BUserManager.UserIs(idUser);
        }

  //   [HttpPost]
  //  
  //   public int addKinderGardenToTeacher(int KGCode,[FromBody] string Id)
  //   {
  //       return BUserManager.addKinderGardenToTeacher(KGCode,Id);
  //   }
// [HttpPost]
// public int addTeacher(int KGCode,[FromBody]CUsers teacher)
// {
//     try
//     {
//         BUserManager.addUser(teacher);
//         return BUserManager.addKinderGardenToTeacher(KGCode, teacher.Id);
//         return 1;
//     }
//     catch (Exception)
//     {
//         throw;
//     }
//
// }
 [HttpPost]
 public int functioPost(actionType nameFunction, [FromBody]CUsers user)
 {
     switch (nameFunction)
     {
         case actionType.add:
             try
             {
                 BUserManager.addUser(user);
                 return 1;
             }
             catch (Exception e)
             {
                  if(e.InnerException.InnerException.Message.Equals("Violation of PRIMARY KEY constraint 'PK__Users__B7C9263840CFC3C0'. Cannot insert duplicate key in object 'dbo.Users'. The duplicate key value is (319100160).\r\nThe statement has been terminated."))
                 {
                     allreadyExist ex = new allreadyExist();
                     throw ex;
                 }
 
                 throw e;
             }
         case actionType.update:
             try
             {
                 BUserManager.updateUser(user);
                 return 1;
             }
             catch (Exception)
             {
 
                 throw;
             }
         case actionType.remove:
             try
             {
                 BUserManager.removeUser((user.Id));
                 return 1;
 
             }
             catch (Exception)
             {
 
                 throw;
             }
     }
     return 0;
 }
 
        public class Test
        {
           public List<int> KGCodeList;
           public CUsers user;
        }
        [HttpPost]
        public int functioPostWithParameter(actionType nameFunction,List<CKinderGarden> listKG, [FromBody]CUsers user)
        {
            switch (nameFunction)
            {
                case actionType.addTeacher:
                    try
                    {
                        BUserManager.addTeacher(listKG,user);
                        return 1;
                    }
                    catch (Exception)
                    {

                        throw;
                    }
                case actionType.addKGToTeachet:
                    try
                    {
                        BUserManager.addKinderGardenToTeacher(listKG,user.Id);
                        return 1;
                    }
                    catch (Exception)
                    {

                        throw;
                    }
                
            }
            return 0;
        }
    }
}

