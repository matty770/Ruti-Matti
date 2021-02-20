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
           
            Console.WriteLine("start task");
            if (DateTime.Now.Hour >= 8 && DateTime.Now.Hour <= 23)
            {
                Console.WriteLine("start scheduler, the time is currect");
                List<CLiveData> listLiveData = new List<CLiveData>();
                listLiveData = BLiveDataManager.LDIsNonPrestnt();
                if (listLiveData == null || listLiveData.Count == 0)
                {
                    Console.WriteLine("there is no sata");
                }
                else
                {
                    Console.WriteLine(listLiveData.FirstOrDefault().KinderGardenCode);
                    foreach (var item in listLiveData)
                    {
                        Function.CheckAttendance(item);
                        Console.WriteLine("end of item :" + item.IdChild);
                    }
                }
            

            }

          if (DateTime.Now.Hour == 22 && DateTime.Now.Minute<=15)
          {
              BLiveDataManager.removeAllLiveData();
              BLiveDataManager.copyChildrenToLiveData();
              Console.WriteLine("end copy children to live");
              BLiveDataManager.copyFutureToLivaData();
              Console.WriteLine("end copy future to live");
          }
          else
          {
              Console.WriteLine("no");
          }
        }

        static void Main(string[] args)
        {
            Tasks();
        }

    }
}
