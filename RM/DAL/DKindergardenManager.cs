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
            using (NDBEntities2 db = new NDBEntities2())
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
            public static void removeKinderGarden(int code)
        {
            using (NDBEntities2 db = new NDBEntities2())
            {
                KinderGarden k = (from x in db.KinderGarden
                                   where x.IdKinderGarden == code
                                   select x).FirstOrDefault();
                try
                {
                    db.KinderGarden.Remove(k);
                    db.SaveChanges();
                }
                catch(Exception)
                {
                    throw new allreadyExist();
                }
            }
        }
        public static List<CKinderGarden> selectAllKinderGarden()
        {
            List<KinderGarden> listKinderGarden = new List<KinderGarden>();
            using (NDBEntities2 db = new NDBEntities2())
            {
                 listKinderGarden= (from x in db.KinderGarden
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
            using (NDBEntities2 db = new NDBEntities2())
            {
                KinderGarden k = (from x in db.KinderGarden
                                  where x.IdKinderGarden == code
                                  select x).FirstOrDefault();
                if(k!=null)
                {
                    return Mapper.convertToCKinderGarden(k);
                }
               return null;
            }
        }
        public static void updateKinderGarden(CKinderGarden ck)
        {
            CKinderGarden ck1= selectKinderByCode(ck.IdKinderGarden);
            if(ck1!=null)
            {
                ck1.Name = ck.Name;
                ck1.Address = ck.Address;
                ck1.Phone = ck.Phone;
                ck1.Year = ck.Year;
                ck1.BeginingHour = ck.BeginingHour;
                ck1.Space = ck.Space;
            }
            else
            { 
             addKinderGarden(ck);
            }
        }
        //public static List<CKinderGarden> selectKinderGardenByHour()
        //{
        //    List<CKinderGarden> listCKinderGarden = new List<CKinderGarden>();
        //    using (NDBEntities2 db = new NDBEntities2())
        //    {
        //        listCKinderGarden=(from x in db.KinderGarden
        //                           where x.BeginingHour.Hours>=DateTime.Now.Hour)
        //    }
        //}

    }
}
