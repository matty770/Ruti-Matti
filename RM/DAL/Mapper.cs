using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using COMMON;
namespace DAL
{
    public class Mapper
    {

        public static KinderGarden convertToKinderGarden(CKinderGarden ck)
        {
            KinderGarden k = new KinderGarden();
            k.IdKinderGarden = ck.IdKinderGarden;
            k.Name = ck.Name;
            k.Address = ck.Address;
            k.PhoneNumber = ck.Phone;
            k.Year = ck.Year;
            k.BeginingHour = ck.BeginingHour;
            k.Space = ck.Space;
            return k;
        }
        public static CKinderGarden convertToCKinderGarden(KinderGarden k)
        {
            CKinderGarden ck = new CKinderGarden();
            ck.IdKinderGarden = k.IdKinderGarden;
            ck.Name = k.Name;
            ck.Address = k.Address;
            ck.Phone = k.PhoneNumber;
            ck.Year = k.Year;
            ck.BeginingHour = k.BeginingHour;
            ck.Space = k.Space;
            return ck;

        }
        public static Users convertToUsers(CUsers cu)
        {
            Users u = new Users();
            u.IdUser = cu.Id;
            u.Name = cu.Name;
            u.Address = cu.Address;
            u.PhoneNum = cu.PhoneNum;
           // u.KinderGardenCode = cu.KinderGardenCode;
            u.Permission = cu.Permission;
            return u;
        }
        public static CUsers convertToCUsers(Users u)
        {
            CUsers cu = new CUsers();
            cu.Id = u.IdUser;
            cu.Name = u.Name;
            cu.Address = u.Address;
            cu.PhoneNum = u.PhoneNum;
            //  cu.KinderGardenCode = u.KinderGardenCode;
            cu.Permission = u.Permission;
            cu.mailAddress = u.MailAddress;
            return cu;
        }
        public static Children convertToChildren(CChildren cc)
        {
            Children c = new Children();
            c.IdChild = cc.Id;
            c.ChildName = cc.ChildName;
            c.Address = cc.Address;
            c.Phone = cc.Phone;
            c.ParentCode = cc.ParentCode;
            c.KinderGardenCode = cc.KinderGardenCode;
            return c;
        }
        public static CChildren convertToCChildren(Children c)
        {
            CChildren cc = new CChildren();
            cc.Id = c.IdChild;
            cc.ChildName = c.ChildName;
            cc.Address = c.Address;
            cc.Phone = c.Phone;
            cc.ParentCode = c.ParentCode;
            cc.KinderGardenCode = c.KinderGardenCode;
            return cc;
        }
        public static FutureData convertToFutureData(CFutureData cf)
        {
            FutureData f = new FutureData();
            f.IdChild = cf.IdChild;
            f.KindergardenCode = cf.KinderGardenCode;
            f.Date = cf.Date;
            f.Status = StatusEnumToInt(cf.Status);
            f.UpdateDate = cf.UpdateDate;
            f.UpdateBy = cf.UpdateBy;
            f.Alarm = cf.Alarm;
            f.Comments = cf.Comments;
            return f;
        }
        public static CFutureData convertToCFuteureData(FutureData f)
        {
            CFutureData cf = new CFutureData();
            cf.IdChild = f.IdChild;
            cf.KinderGardenCode = f.KindergardenCode;
            cf.Date = f.Date;
            cf.Status = StatusIntToEnum(f.Status);
            cf.UpdateDate = f.UpdateDate;
            cf.UpdateBy = f.UpdateBy;
            cf.Alarm = f.Alarm;
            cf.Comments = f.Comments;
            return cf;
        }
        public static LiveData convertToLiveData(CLiveData cl)
        {
            LiveData l = new LiveData();
            l.IdChild = cl.IdChild;
            l.KindergardenCode = cl.KinderGardenCode;
            l.Date = cl.Date;
            l.Status = StatusEnumToInt(cl.Status);
            l.UpdateDate = cl.UpdateDate;
            l.UpdateBy = cl.UpdateBy;
            l.Alarm = cl.Alarm;
            l.Comments = cl.Comments;
            return l;
        }
        public static CLiveData convertToCLiveData(LiveData l)
        {
            CLiveData cl = new CLiveData();
            cl.IdChild = l.IdChild;
            cl.KinderGardenCode = l.KindergardenCode;
            cl.Date = l.Date;
            cl.Status = StatusIntToEnum(l.Status);
            cl.UpdateDate = l.UpdateDate;
            cl.UpdateBy = l.UpdateBy;
            cl.Alarm = l.Alarm;
            cl.Comments = l.Comments;
            return cl;


        }
        public static CPreviousData converToCPreviousData(PreviousData p)
        {
            CPreviousData cp = new CPreviousData();
            cp.IdChild = p.IdChild;
            cp.KinderGardenCode = p.KindergardenCode;
            cp.Date = p.Date;
            cp.Status = StatusIntToEnum(p.Status);
            cp.UpdateDate = p.UpdateDate;
            cp.UpdateBy = p.UpdateBy;
            cp.Alarm = p.Alarm;
            cp.Comments = p.Comments;
            return cp;

        }
        public static int StatusEnumToInt(General.Statuses s)
        {
            switch (s)
            {
                case General.Statuses.Late: return 1;
                case General.Statuses.Absent: return 2;
                case General.Statuses.Present: return 3;
                case General.Statuses.NonPresent: return 4;
                case General.Statuses.Sent: return 5;
                default:
                    return 0;
            }
        }

        public static General.Statuses StatusIntToEnum(int s)
        {
            switch (s)
            {
                case 1: return General.Statuses.Late;
                case 2: return General.Statuses.Absent;
                case 3: return General.Statuses.Present;
                case 4: return General.Statuses.NonPresent;
                case 5: return General.Statuses.Sent;
                default: return 0;
            }
        }
        public static PreviousData converCLiveToPreviousData(CLiveData cl)
        {
            PreviousData p = new PreviousData();
            p.IdChild = cl.IdChild;
            p.KindergardenCode = cl.KinderGardenCode;
            p.Date = cl.Date;
            p.Status = StatusEnumToInt(cl.Status);
            p.UpdateDate = cl.UpdateDate;
            p.UpdateBy = cl.UpdateBy;
            p.Alarm = cl.Alarm;
            p.Comments = cl.Comments;
            return p;

        }








    }
}
