using System;
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
            using (NDBEntities db = new NDBEntities())
            {
                db.LiveData.Add(l);
                db.SaveChanges();
            }
            return Mapper.convertToCLiveData(l);
        }
        public static void removeLiveData(CLiveData cl)
        {
            using (NDBEntities db = new NDBEntities())
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
            using (NDBEntities db = new NDBEntities())
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
            using (NDBEntities db = new NDBEntities())
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

        public static List<CLiveData> selectLiveDataByKinderGardenCode(int KinderGardenCode)
        {
            List<CLiveData> ld = new List<CLiveData>();
            using (NDBEntities db = new NDBEntities())
            {
                foreach (var l in db.LiveData)
                {
                    if (l.KindergardenCode.Equals(KinderGardenCode))
                    {

                        ld.Add(Mapper.convertToCLiveData(l));
                    }
                }
                return ld;
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
            using (NDBEntities db = new NDBEntities())
            {
                foreach (var item in listCChildren)
                {
                    TimeSpan tt =(DKinderGardenManager.selectKinderByCode(item.KinderGardenCode).BeginingHour);
                    TimeSpan tt1;
                    if (tt.Minutes < 30)
                    {
                         tt1 = new TimeSpan(tt.Hours, tt.Minutes + 30, tt.Seconds);
                    }
                    else {  tt1 = new TimeSpan(tt.Hours+1, tt.Minutes - 30, tt.Seconds); }
                    CLiveData d = new CLiveData(item.Id, item.KinderGardenCode, DateTime.Now, General.Statuses.NonPresent, DateTime.Today, "fffff", tt1, null);
                    db.LiveData.Add(Mapper.convertToLiveData(d));
                    db.SaveChanges();
                }
            }
        }
        public static void CopyFutureToLiveData()
        {
            List<CFutureData> listCFuture = DFutureDataManager.selectByToday();
            List<CLiveData> listCLivaData = selectAllLiveData();
            using (NDBEntities db = new NDBEntities())
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
        public static List<General.Attendance> copyToAttendace(int idKinderGarden)
        {
            List<General.Attendance> listAttendances = new List<General.Attendance>();
            List<CLiveData> listLiveData = selectLiveDataByKinderGardenCode(idKinderGarden);
           // List<CFutureData> listCFuture = DFutureDataManager.selectByToday();
         List<CChildren> listCChildren = DChildrenManager.selectchildrenByKinderGardenCode(idKinderGarden);
            foreach (var item in listLiveData)
            {
                foreach(var item2 in listCChildren)
                {
                    if(item.IdChild.Equals(item2.Id))
                        if(item2.picture != null)
                        {
                          General.Attendance attendance = new General.Attendance(item2.Id, item2.FirstName, item2.LastName, Convert.ToBase64String(item2.picture), item.Status);
                          listAttendances.Add(attendance);
                        }
                    else
                        {
                            General.Attendance attendance = new General.Attendance(item2.Id, item2.FirstName, item2.LastName, null, item.Status);
                            listAttendances.Add(attendance);
                        }  
                }
            }
            return listAttendances;
        }
        public static List<CLiveData> selectLiveIsNonPresent()
        {
            List<LiveData> ld = new List<LiveData>();
            List<CLiveData> cld = new List<CLiveData>();
            using (NDBEntities db = new NDBEntities())
            {
                ld = (from x in db.LiveData
                      where (x.Alarm.Hours < DateTime.Now.Hour || x.Alarm.Hours == DateTime.Now.Hour && x.Alarm.Minutes <= DateTime.Now.Minute) && (x.Status == 4 || x.Status == 1)
                      select x).ToList();
            }
            foreach (var item in ld)
            {
                cld.Add(Mapper.convertToCLiveData(item));
            }
            return cld;
        }

        public static void ChangeStatus(string idChild, General.Statuses status)
        {
            LiveData l = new LiveData();
            int newStatus = Mapper.StatusEnumToInt(status);
            using (NDBEntities db = new NDBEntities())
            {
                l = db.LiveData.First(d => d.IdChild .Equals( idChild));
                l.Status = newStatus;
                //  l= db.LiveData.Find(idChild);
                db.SaveChanges();

            }
        }

        public static void removeAllLiveData()
        {
            List<LiveData> listLiveData = new List<LiveData>();
            using (NDBEntities db = new NDBEntities())
            {
                listLiveData = (from x in db.LiveData
                                select x).ToList();
                foreach (var item in listLiveData)
                {
                    db.LiveData.Remove(item);
                    db.SaveChanges();
                }
            }
        }
    }
}

