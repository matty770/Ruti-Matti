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
            Console.WriteLine("d");
            Console.Read();
            if (DateTime.Now.Hour >= 8 && DateTime.Now.Hour <= 20)
            {
                Console.WriteLine("rtrtrtrtrtrt");
                Console.Read();
                List<CLiveData> listLiveData = new List<CLiveData>();
                listLiveData = BLiveDataManager.LDIsNonPrestnt();
                foreach (var item in listLiveData)
                {

                    Function.CheckAttendance(item);
                }
            }

            if (DateTime.Now.Hour == 18)
            {
                BPreviousDataManager.copyLiveToPreviousData();
                BLiveDataManager.copyChildrenToLiveData();
                BLiveDataManager.copyFutureToLivaData();
            }
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
