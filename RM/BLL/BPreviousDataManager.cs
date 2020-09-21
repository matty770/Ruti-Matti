using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using COMMON;
using DAL;

namespace BLL
{
    public class BPreviousDataManager
    {
        public static void copyLiveToPreviousData()
        {
            DPreviousDataManager.copyLiveToPreviousData();
        }
        public static void removePreviousByDate()
        {
            DPreviousDataManager.removePreviousByDate();
        }
    }
}
