using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using COMMON;
namespace BLL
{
    public class BKinderGardenManager
    {
        public static void addKinderGarden(CKinderGarden ck)
        {
            DKinderGardenManager.addKinderGarden(ck);
        }
        public static void removeKinderGarden(int code)
        {
             DKinderGardenManager.removeKinderGarden(code);
        }
        public static List<CKinderGarden> selectAllKinderGarden()
        {
            return DKinderGardenManager.selectAllKinderGarden();
        }
        public static CKinderGarden selectKinderGardenByCode(int code)
        {
            return DKinderGardenManager.selectKinderByCode(code);
        }
        public static void updateKinderGarden(CKinderGarden ck)
        {
          DKinderGardenManager.updateKinderGarden(ck);
        }
    }
}
