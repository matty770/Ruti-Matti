﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using COMMON;

namespace DAL
{
    public class DLiveDataManager
    {
        public static CLiveData addLiveData(CLiveData cl)
        {
            LiveData l = Mapper.convertToLiveData(cl);
            using (NDBEntities2 db = new NDBEntities2())
            {
                db.LiveData.Add(l);
                db.SaveChanges();
            }
            return Mapper.convertToCLiveData(l);
        }
        public static void removeLiveData(CLiveData cl)
        {
            using (NDBEntities2 db = new NDBEntities2())
            {
                LiveData l = (from x in db.LiveData
                              where x.IdChild.Equals(cl.IdChild)
                              select x).FirstOrDefault();
                try
                {
                    db.LiveData.Remove(l);
                    db.SaveChanges();
                }
                catch (Exception)
                {
                    throw new allreadyExist();
                }

            }

        }
        public static List<CLiveData> selectAllLiveData()
        {
            List<LiveData> listLiveData = new List<LiveData>();
            using (NDBEntities2 db = new NDBEntities2())
            {
                listLiveData = db.LiveData.ToList<LiveData>();
            }
            List<CLiveData> listCLiveData = new List<CLiveData>();
            foreach (var item in listLiveData)
            {
                listCLiveData.Add(Mapper.convertToCLiveData(item));
            }
            return listCLiveData;
        }
        public static CLiveData selectLiveDataByIdChild(string id)
        {
            using (NDBEntities2 db = new NDBEntities2())
            {
                foreach (var l in db.LiveData)
                {
                    if (l.IdChild.Equals(id))
                    {
                        return Mapper.convertToCLiveData(l);
                    }
                }
                return null;
            }
        }
        public static CLiveData updateLiveData(CLiveData cl)
        {
            if (selectLiveDataByIdChild(cl.IdChild) != null)
            {
                removeLiveData(cl);
            }
            return addLiveData(cl);
        }
        public static void CopyChildrenToLiveData()
        {
            List<CChildren> listCChildren = DChildrenManager.selectAllChildren();
            using (NDBEntities2 db = new NDBEntities2())
            {
                foreach (var item in listCChildren)
                {
                    TimeSpan tt = (DKinderGardenManager.selectKinderByCode(item.KinderGardenCode).BeginingHour);
                    CLiveData d = new CLiveData(item.Id, item.KinderGardenCode, DateTime.Now, /*Mapper.Status.nonPresent.ToString()*/1, DateTime.Today, "fffff", tt, null);
                    db.LiveData.Add(Mapper.convertToLiveData(d));
                    db.SaveChanges();
                }
            }
        }
        public static void CopyFutureToLiveData()
        {
            List<CFutureData> listCFuture = DFutureDataManager.selectByToday();
            List<CLiveData> listCLivaData = selectAllLiveData();
            using (NDBEntities2 db = new NDBEntities2())
            {
                foreach (var item in listCFuture)
                {

                    foreach (var item2 in listCLivaData)
                    {
                        if (item.IdChild.Equals(item2.IdChild))
                        {
                            CLiveData cl = new CLiveData(item.IdChild, item.KinderGardenCode, item.Date, item.Status, item.UpdateDate, item.UpdateBy, item.Alarm, item.Comments);
                            updateLiveData(cl);
                            DFutureDataManager.removeFutureData(item.IdChild);
                        }

                    }
                }
            }
        }
        public static List<CLiveData> selectLiveIsNonPresent()
        {
            List<LiveData> ld = new List<LiveData>();
            List<CLiveData> cld = new List<CLiveData>();
            using (NDBEntities2 db = new NDBEntities2())
            {
                ld = (from x in db.LiveData
                      where x.Alarm.Hours <= DateTime.Now.Hour && x.Alarm.Minutes <= DateTime.Now.Minute &&/* x.Status.Equals(Statuses.PRESENT)*/EnumMapper.ToIntValue( x.Status)== 2
                      select x).ToList();
            }
            foreach (var item in ld)
            {
                cld.Add(Mapper.convertToCLiveData(item));
            }
            return cld;

        }
    }
}

