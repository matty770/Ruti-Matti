using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BLL;
using COMMON;


namespace TaskManager
{
    class Program
    {
        public static void Tasks()
        {
            //if(DateTime.Now.Hour>=7&&DateTime.Now.Hour<=12)
            //{
                List<CLiveData> listLiveData = new List<CLiveData>();
                foreach (var item in listLiveData)
                {
                    Function.CheckAttendance(item);
                }
                
            //}
            
            //if(DateTime.Now.Hour==5)
            //{
            //    BPreviousDataManager.copyLiveToPreviousData();
            //    BLiveDataManager.copyChildrenToLiveData();
            //    BLiveDataManager.copyFutureToLivaData();
            //}
            //if(DateTime.Now.Hour==17)
            //{
            //    BPreviousDataManager.removePreviousByDate();
            //}

        }
      
        static void Main(string[] args)
        {
            
            

             Tasks();
        }
    }
}
