using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using COMMON;

namespace BLL
{
    public class BFutureDataManager
    {
        public static void addFutureData(CFutureData cf)
        {
            DFutureDataManager.addFutureData(cf);
        }
        public static void removeFutureData(CFutureData cf)
        {
            DFutureDataManager.removeFutureData(cf.IdChild);
        }
        public static List<CFutureData> readAllFutureData()
        {
            return DFutureDataManager.readAllFutureData();
        }
        public static List<CFutureData> selectByIdChild(string id)
        {
            return DFutureDataManager.selectByIdChild(id);
        }
        public static void updateFutureData(CFutureData cf)
        {
            DFutureDataManager.updateFutureData(cf);
        }
    }
}

