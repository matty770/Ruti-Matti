using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using COMMON;

namespace DAL
{
    public class DUsersManager
    {
        public static void addUser(CUsers cu)
        {
            Users u = Mapper.convertToUsers(cu);
            using (NDBEntities db = new NDBEntities())
            {
                try
                {
                    db.Users.Add(u);
                    db.SaveChanges();
                }
                catch (Exception e)
                {

                    throw;
                }
            }
        }
        public static void removeUser(string id)
        {
            using (NDBEntities db = new NDBEntities())
            {
                Users u = (from x in db.Users
                           where x.IdUser.Equals(id)
                           select x).FirstOrDefault();
                try
                {
                    db.Users.Remove(u);
                    db.SaveChanges();
                }
                catch (Exception)
                {
                    throw new allreadyExist();
                }
            }
        }
        public static List<CUsers> selectAllUsers()
        {
            List<Users> listUsers = new List<Users>();
            using (NDBEntities db = new NDBEntities())
            {
                listUsers = (from x in db.Users
                             select x).ToList();
            }
            List<CUsers> listCUsers = new List<CUsers>();
            foreach (var item in listUsers)
            {
                listCUsers.Add(Mapper.convertToCUsers(item));
            }
            return listCUsers;
        }
        public static CUsers selectUserById(string id)
        {
            using (NDBEntities db = new NDBEntities())
            {
                Users u = (from x in db.Users
                           where x.IdUser.Equals(id)
                           select x).FirstOrDefault();
                if (u != null)
                {
                    return Mapper.convertToCUsers(u);
                }
                return null;
            }
        }

        //////////////////////////////////////////////////////////////
        public static CUsers selectUserByIdChild(string idChild)
        {
            using (NDBEntities db = new NDBEntities())
            {
                Children c = (from x in db.Children
                              where x.IdChild.Equals(idChild)
                              select x).FirstOrDefault();
                Users u = (from x in db.Users
                           where x.IdUser.Equals(c.ParentCode)
                           select x).FirstOrDefault();
                if (u != null)
                {
                    return Mapper.convertToCUsers(u);
                }
                return null;
            }
        }
        public static void updateUser(CUsers cu)
        {
            if (selectUserById(cu.Id) != null)
            {
                removeUser(cu.Id);
            }
            addUser(cu);
        }
        public static int GetPermissionOfUser(string idUser)
        {
            using (NDBEntities db = new NDBEntities())
            {
                Users u = (from x in db.Users
                           where x.IdUser.Equals(idUser)
                           select x).FirstOrDefault();

                return u.Permission;
            }

        }

        //public static List<CUsers> SelectAllParents()
        //{
        //    List<Users> listUsers = new List<Users>();
        //    using (NDBEntities db = new NDBEntities())
        //    {
        //        listUsers = (from x in db.Users
        //                     where x.Permission==1
        //                     select x).ToList();
        //    }
        //    List<CUsers> listCUsers = new List<CUsers>();
        //    foreach (var item in listUsers)
        //    {
        //        listCUsers.Add(Mapper.convertToCUsers(item));
        //    }
        //    return listCUsers;
        //}

        //public static List<CUsers> SelectAllTeachers()
        //{
        //    List<Users> listUsers = new List<Users>();
        //    using (NDBEntities db = new NDBEntities())
        //    {
        //        listUsers = (from x in db.Users
        //                     where x.Permission == 2
        //                     select x).ToList();
        //    }
        //    List<CUsers> listCUsers = new List<CUsers>();
        //    foreach (var item in listUsers)
        //    {
        //        listCUsers.Add(Mapper.convertToCUsers(item));
        //    }
        //    return listCUsers;
        //}
        public static List<CUsers> SelectParentOrTechers(int p)
        {
            List<Users> listUsers = new List<Users>();
            using (NDBEntities db = new NDBEntities())
            {
                listUsers = (from x in db.Users
                             where x.Permission == p
                             select x).ToList();
            }
            List<CUsers> listCUsers = new List<CUsers>();
            foreach (var item in listUsers)
            {
                listCUsers.Add(Mapper.convertToCUsers(item));
            }
            return listCUsers;
        }
    }
}
