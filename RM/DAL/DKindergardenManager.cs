using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using COMMON;

namespace DAL
{
    public class DKinderGardenManager
    {
        public static void addKinderGarden(CKinderGarden ck)
        {
            KinderGarden k = Mapper.convertToKinderGarden(ck);
            using (NDBEntities db = new NDBEntities())
            {
                try
                {
                    db.KinderGarden.Add(k);
                    db.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }

            }
        }
        public static int removeKinderGarden(int code)
        {
            using (NDBEntities db = new NDBEntities())
            {
                KinderGarden k = (from x in db.KinderGarden
                                  where x.IdKinderGarden == code
                                  select x).FirstOrDefault();
                try
                {
                    db.KinderGarden.Remove(k);
                    db.SaveChanges();
                    return 1;
                }
                catch (Exception e)
                {
                    throw new allreadyExist();
                }
            }
            return 0;
        }
        public static List<CKinderGarden> selectAllKinderGarden()
        {
            List<KinderGarden> listKinderGarden = new List<KinderGarden>();
            using (NDBEntities db = new NDBEntities())
            {
                listKinderGarden = (from x in db.KinderGarden
                                    select x).ToList();

            }
            List<CKinderGarden> lCKinderGarden = new List<CKinderGarden>();
            foreach (var item in listKinderGarden)
            {
                lCKinderGarden.Add(Mapper.convertToCKinderGarden(item));
            }
            return lCKinderGarden;
        }
        public static CKinderGarden selectKinderByCode(int code)
        {
            using (NDBEntities db = new NDBEntities())
            {
                KinderGarden k = (from x in db.KinderGarden
                                  where x.IdKinderGarden == code
                                  select x).FirstOrDefault();
                if (k != null)
                {
                    return Mapper.convertToCKinderGarden(k);
                }
                return null;
            }
        }

        //public static void updateKinderGarden(CKinderGarden ck)
        //{
        //    CKinderGarden ck1 = selectKinderByCode(ck.IdKinderGarden);
        //    if (ck1 != null)
        //    {
        //        ck1.Name = ck.Name;
        //        ck1.Address = ck.Address;
        //        ck1.Phone = ck.Phone;
        //        ck1.Year = ck.Year;
        //        ck1.BeginingHour = ck.BeginingHour;
        //        ck1.Space = ck.Space;
        //    }
        //    else
        //    {
        //        addKinderGarden(ck);
        //    }
        //}
        //public static List<CKinderGarden> selectKinderGardenByHour()
        //{
        //    List<CKinderGarden> listCKinderGarden = new List<CKinderGarden>();
        //    using (NDBEntities db = new NDBEntities())
        //    {
        //        listCKinderGarden=(from x in db.KinderGarden
        //                           where x.BeginingHour.Hours>=DateTime.Now.Hour)
        //    }
        //}
        public static List<CKinderGarden> selectKinderGardenByIdTeacher(string id)
        {
            List<KinderGardenOfTeacher> KGL = new List<KinderGardenOfTeacher>();
            List<KinderGarden> KG = new List<KinderGarden>();
            List<CKinderGarden> CKG = new List<CKinderGarden>();
            using (NDBEntities db = new NDBEntities())
            {
                KGL = (from x in db.KinderGardenOfTeacher
                       where x.IdTeacher == id
                       select x).ToList();

                foreach (var item in KGL)
                {
                    KinderGarden k = (from x in db.KinderGarden
                                      where item.IdKinderGarden == x.IdKinderGarden
                                      select x).FirstOrDefault();
                    KG.Add(k);
                }
            }
            if (KG != null)
                foreach (var item in KG)
                {
                    CKG.Add(Mapper.convertToCKinderGarden(item));
                }
            return CKG;
        }
        public static CKinderGarden updateKinderGarden(CKinderGarden cc)
        {
            KinderGarden k = new KinderGarden();
            CKinderGarden ck = new CKinderGarden();
            using (NDBEntities db = new NDBEntities())
            {
                db.KinderGarden.Find(cc.IdKinderGarden).Address = cc.Address;
                db.KinderGarden.Find(cc.IdKinderGarden).PhoneNumber = cc.Phone;
                db.KinderGarden.Find(cc.IdKinderGarden).BeginingHour = cc.BeginingHour;
                db.SaveChanges();
                k=db.KinderGarden.Find(cc.IdKinderGarden);
            }
            ck = Mapper.convertToCKinderGarden(k);
            return ck;
        }
    }
}
