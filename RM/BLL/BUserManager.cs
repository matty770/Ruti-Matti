using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using COMMON;

namespace BLL
{
    public class BUserManager
    {
        public static void addUser(CUsers cu)
        {
            DUsersManager.addUser(cu);

        }
        public static void removeUser(string id)
        {
            DUsersManager.removeUser(id);
        }
        public static List<CUsers> selectAllUsers()
        {
            return DUsersManager.selectAllUsers();
        }
        public static CUsers selectUserById(string id)
        {
            return DUsersManager.selectUserById(id);
        }
        public static void updateUser(CUsers cu)
        {
            DUsersManager.updateUser(cu);
        }
        public static int GetPermissionOfUser(string idUser)
        {
            return DUsersManager.GetPermissionOfUser(idUser);
        }

        //public static List<CUsers> selectAllParents()
        //{
        //    return DUsersManager.SelectAllParents();
        //}
        //public static List<CUsers> selectAllTeachers()
        //{
        //    return DUsersManager.SelectAllTeachers();
        //}
        public static List<CUsers> SelectParentOrTechers(int p)
        {
            return DUsersManager.SelectParentOrTechers(p);
        }
        public static CUsers selectUserByIdChild(string idChild)
        {
            return DUsersManager.selectUserByIdChild(idChild);
        }
        public static int UserIs(string idUser)
        {
            return DUsersManager.UserIs(idUser);
        }
    }
}
