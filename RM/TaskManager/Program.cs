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
            Console.Read();
            if (DateTime.Now.Hour >= 8 && DateTime.Now.Hour <= 23)
            {
                Console.WriteLine("start scheduler, the time is currect");
                Console.Read();
                List<CLiveData> listLiveData = new List<CLiveData>();

                listLiveData = BLiveDataManager.LDIsNonPrestnt();
                if (listLiveData == null || listLiveData.Count == 0)
                {
                    Console.WriteLine("there is no sata");
                    Console.Read();
                    //return;
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

            //if (DateTime.Now.Hour == 9 && DateTime.Now.Minute<=15)
            //{
            //   // Console.WriteLine("once a day");
            //   // Console.Read();
            //   // BPreviousDataManager.copyLiveToPreviousData();
            //   // Console.WriteLine("end copy to previous");
            //   // Console.Read();
            //    BLiveDataManager.copyChildrenToLiveData();
            //    Console.WriteLine("end copy children to live");
            //    Console.Read();
            //    BLiveDataManager.copyFutureToLivaData();
            //    Console.WriteLine("end copy future to live");
            //    Console.Read();
            //}
            //else
            //{
            //    Console.WriteLine("no");
            //    Console.Read();
            //}
         
            if (DateTime.Now.Hour == 17)
            {
                BPreviousDataManager.removePreviousByDate();
            }

        }

        static void Main(string[] args)
        {



            Console.WriteLine("eeee");
            Console.ReadLine();
            //BLL.BLiveDataManager.copyChildrenToLiveData();
            Tasks();
        }

    }
}
