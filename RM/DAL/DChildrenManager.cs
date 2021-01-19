﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using COMMON;

namespace DAL
{
    public class DChildrenManager
    {
        public static void addChildren(CChildren cc)
        {
            Children c = Mapper.convertToChildren(cc);
            using (NDBEntities db = new NDBEntities())
            {
                try
                {
                    db.Children.Add(c);
                    db.SaveChanges();
                }
                catch (Exception e)
                {

                    throw;
                }
            }
        }
        public static void removeChildren(string idChild)
        {
            using (NDBEntities db = new NDBEntities())
            {
                Children c = (from x in db.Children
                              where x.IdChild.Equals(idChild)
                              select x).FirstOrDefault();
                try
                {
                    db.Children.Remove(c);
                    db.SaveChanges();
                }
                catch (Exception)
                {
                    throw new allreadyExist();
                }
            }
        }
        public static List<CChildren> selectAllChildren()
        {
            List<Children> listChildren = new List<Children>();
            using (NDBEntities db = new NDBEntities())
            {
                listChildren = (from x in db.Children
                                select x).ToList();
            }
            List<CChildren> listCChildren = new List<CChildren>();
            foreach (var item in listChildren)
            {
                listCChildren.Add(Mapper.convertToCChildren(item));
            }
            return listCChildren;
        }
        public static CChildren selectchildrenById(string id)
        {
            using (NDBEntities db = new NDBEntities())
            {
                Children c = (from x in db.Children
                              where x.IdChild.Equals(id)
                              select x).FirstOrDefault();
                if (c != null)
                {
                    return Mapper.convertToCChildren(c);
                }
                return null;
            }
        }
        public static List<CChildren> selectchildrenByParentId(string idParent)
        {
            List<Children> lc = new List<Children>();
            using (NDBEntities db = new NDBEntities())
            {
                lc = (from x in db.Children
                      where x.ParentCode.Equals(idParent)
                      select x).ToList();
                List<CChildren> listCChildren = new List<CChildren>();
                foreach (var item in lc)
                {
                    listCChildren.Add(Mapper.convertToCChildren(item));
                }
                return listCChildren;
            }
        }
        //public static void updateChildren(CChildren cc)
        //{
        //    if (selectchildrenById(cc.Id) != null)
        //    {
        //        removeChildren(cc.Id);
        //    }
        //    addChildren(cc);
        //}
        public static void updateChildren(CChildren cc)
        {
            Children c = Mapper.convertToChildren(selectchildrenById(cc.Id));
            using (NDBEntities db = new NDBEntities())
            {
                db.Children.Find(cc.Id).Address = cc.Address;
                db.Children.Find(cc.Id).Phone = cc.Phone;
                db.SaveChanges();
             
            }
        }
        public static List<CChildren> selectchildrenByKinderGardenCode(int code)
        {
            List<Children> listChildren = new List<Children>();
            using (NDBEntities db = new NDBEntities())
            {
                listChildren = (from x in db.Children
                      where x.KinderGardenCode==code
                      select x).ToList();
                List<CChildren> listCChildren = new List<CChildren>();
                foreach (var item in listChildren)
                {
                    listCChildren.Add(Mapper.convertToCChildren(item));
                }
                return listCChildren;
            }
        }

    }
}
