using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using COMMON;

namespace DAL
{
    public class DPreviousDataManager
    {
        public static void copyLiveToPreviousData()
        {
            CPreviousData cp = new CPreviousData();
            List<CLiveData> listCLiveData = DLiveDataManager.selectAllLiveData();
            using (NDBEntities2 db = new NDBEntities2())
            {
                foreach (var item in listCLiveData)
                {
                    db.PreviousData.Add(Mapper.converCLiveToPreviousData(item));
                    db.LiveData.Remove(Mapper.convertToLiveData(item));
                    db.SaveChanges();
                }
            }
        }
        public static CPreviousData selectPreviousByIdChild(string id)
        {
            PreviousData p = new PreviousData();
            using (NDBEntities2 db =new NDBEntities2())
            {
                p = (from x in db.PreviousData
                     where x.IdChild.Equals(id)
                     select x).FirstOrDefault();
            }
            return Mapper.converToCPreviousData(p);
        }
  
        public static void removePreviousByDate()
        {
            List<PreviousData> listP = new List<PreviousData>();
            using (NDBEntities2 db = new NDBEntities2())
            {
                listP = (from x in db.PreviousData
                      where x.Date.Day.Equals(DateTime.Now.Day)&&x.Date.Month.Equals(DateTime.Now.Day)&&x.Date.Year.Equals(DateTime.Now.Year)
                      select x).ToList();
                foreach (var item in listP)
                {
                    db.PreviousData.Remove(item);
                    db.SaveChanges();
                }
            }
        }
    }
}
