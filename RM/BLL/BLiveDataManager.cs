using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using COMMON;
using DAL;

namespace BLL
{
    public class BLiveDataManager
    {
        public static void addLiveData(CLiveData cl)
        {
             DLiveDataManager.addLiveData(cl);
        }
        public static void removeLiveData(CLiveData cl)
        {
             DLiveDataManager.removeLiveData(cl);
        }
        public static List<CLiveData> selectAllLiveData()
        {
            return DLiveDataManager.selectAllLiveData();
        }
        public static CLiveData selectLiveDataByIdChild(string id)
        {
            return DLiveDataManager.selectLiveDataByIdChild(id);
        }
        public static CLiveData updateLiveData(CLiveData cl)
        {
            return DLiveDataManager.updateLiveData(cl);
        }
        public static void copyChildrenToLiveData()
        {
            DLiveDataManager.CopyChildrenToLiveData();
        }
        public static void copyFutureToLivaData()
        {
            DLiveDataManager.CopyFutureToLiveData();
        }

        public static List<CLiveData> LDIsNonPrestnt()
        {
            return DLiveDataManager.selectLiveIsNonPresent();
        }
    }
}
