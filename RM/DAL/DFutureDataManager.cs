using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using COMMON;

namespace DAL
{
    public class DFutureDataManager
    {
        public static void addFutureData(CFutureData cf)
        {
            FutureData f = Mapper.convertToFutureData(cf);
            using (NDBEntities db = new NDBEntities())
            {
                try
                {
                    db.FutureData.Add(f);
                    db.SaveChanges();
                }
                catch (Exception)
                {

                    throw;
                }
            }
        }
        public static void removeFutureData(string id)
        {
            using (NDBEntities db = new NDBEntities())
            {
                FutureData f = (from x in db.FutureData
                           where x.IdChild.Equals(id)
                           select x).FirstOrDefault();
                try
                {
                    db.FutureData.Remove(f);
                    db.SaveChanges();
                }
                catch (Exception)
                {
                    throw new allreadyExist();
                }
            }
        }
        public static List<CFutureData> readAllFutureData()
        {

            List<FutureData> listFutureData = new List<FutureData>();
            using (NDBEntities db = new NDBEntities())
            {
                listFutureData = (from x in db.FutureData
                                  select x).ToList();
            }
            List<CFutureData> listCFuture = new List<CFutureData>();
            foreach (var item in listFutureData)
            {
                listCFuture.Add(Mapper.convertToCFuteureData(item));
            }
            return listCFuture;
        }
        public static CFutureData selectByIdChild(string id)
        {
            using (NDBEntities db = new NDBEntities())
            {
                FutureData f = (from x in db.FutureData
                           where x.IdChild.Equals(id)
                           select x).FirstOrDefault();
                if (f != null)
                {
                    return Mapper.convertToCFuteureData(f);
                }
                return null;
            }
        }
        public static void updateFutureData(CFutureData cf)
        {
            if (selectByIdChild(cf.IdChild) != null)
            {
                removeFutureData(cf.IdChild);
            }
             addFutureData(cf);

        }
        public static List<CFutureData> selectByToday()
        {
            DateTime d = new DateTime();
            d = DateTime.Today;
            List<CFutureData> cf = new List<CFutureData>();
            using (NDBEntities db = new NDBEntities())
            {
                List<FutureData> f = (from x in db.FutureData
                                      where x.Date.Day==d.Day
                                      select x).ToList<FutureData>();
                foreach (var item in f)
                {
                    cf.Add(Mapper.convertToCFuteureData(item));
                }
                return cf;
            }
        }

    }
}
