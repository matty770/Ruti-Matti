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

                Users u2 = (from x in db.Users
                            where x.IdUser.Equals(u.IdUser)&&x.Permission!=u.Permission&&x.Permission!=4
                            select x).FirstOrDefault();
                if(u2!=null)
                {
                    db.Users.Find(u2.IdUser).Permission = 4;
                    db.SaveChanges();
                }
                else
                {
                    try
                    {
                        db.Users.Add(u);
                        db.SaveChanges();
                    }
                    catch (Exception e)
                    {

                        throw e;
                    }
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
        public static CUsers selectUserByParameters(string id,string FirstName, string LastName)
        {
            using (NDBEntities db = new NDBEntities())
            {
                Users u = (from x in db.Users
                           where x.IdUser.Equals(id)&&x.FirstName.Equals(FirstName)&&x.LastName.Equals(LastName)
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
        //public static void updateUser(CUsers cu)
        //{
        //    if (selectUserById(cu.Id) != null)
        //    {
        //        removeUser(cu.Id);
        //    }
        //    addUser(cu);
        //}
        public static void updateUser(CUsers cu)
        {
            Users u = Mapper.convertToUsers(selectUserById(cu.Id));
            using (NDBEntities db = new NDBEntities())
            {
                db.Users.Find(cu.Id).Address = cu.Address;
                db.Users.Find(cu.Id).PhoneNum = cu.PhoneNum;
                db.Users.Find(cu.Id).MailAddress = cu.mailAddress;
                db.SaveChanges();

            }
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
                             where x.Permission == p||x.Permission==4
                             select x).ToList();
            }
            List<CUsers> listCUsers = new List<CUsers>();
            foreach (var item in listUsers)
            {
                listCUsers.Add(Mapper.convertToCUsers(item));
            }
            return listCUsers;
        }
        public static int UserIs(string idUser)
        {
            Users user = new Users();
            using (NDBEntities db = new NDBEntities())
            {
                user = (from x in db.Users
                             where x.IdUser.Equals(idUser)
                             select x).FirstOrDefault();
            }
            if (user == null)
                return 0;
            return 1;
        }

       public static int addKinderGardenToTeacher(List<CKinderGarden> listKG, string id)
        {
           List< KinderGardenOfTeacher> k = new List<KinderGardenOfTeacher>();
            foreach (var item in listKG)
            {
                KinderGardenOfTeacher k1 = new KinderGardenOfTeacher();                
                k1.IdKinderGarden = item.IdKinderGarden;
                k1.IdTeacher = id;
                k.Add(k1);
            }
            
            using (NDBEntities db = new NDBEntities())
            {
                try
                {
                    foreach (var item in k)
                    {
                        db.KinderGardenOfTeacher.Add(item);
                        db.SaveChanges();
                    }
                    return 1;
                }
                catch (Exception)
                {

                    throw;
                }
               
            }

        }
      public static CUsers Login(string userId, string firstName, string lastName)
      {
          using (NDBEntities db = new NDBEntities())
          {
                Users u = (from x in db.Users
                           where x.IdUser.Equals(userId) && x.FirstName.Equals(firstName) && x.LastName.Equals(lastName)
                           select x).FirstOrDefault();
                if (u != null)
                    return Mapper.convertToCUsers(u);
                return null;
          }
      }
    }
}
