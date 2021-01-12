using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using COMMON;
using BLL;

namespace AttendenceAPI.Controllers
{
    public class KinderGardenController : ApiController
    {
        [HttpGet]
        public CKinderGarden GetKinderGarden(int KGCode)
        {
            var kg = BKinderGardenManager.selectKinderGardenByCode(KGCode);
            return kg;
        }
        [HttpGet]
        public List<CKinderGarden> GetAllKinderGarden()
        {
            return BKinderGardenManager.selectAllKinderGarden();
        }
        //[HttpGet]
        //public List<CKinderGarden> selectKinderGardensByTeacherId(string TeacherId)
        //{
        //    return BKinderGardenManager.selectKinderGardenByIdTeacher(TeacherId);
        //}
        [HttpPost]
        public void addKinderGarden([FromBody]CKinderGarden kinderGarden)
        {
            BKinderGardenManager.addKinderGarden(kinderGarden);
        }

        [HttpPost]
        public CKinderGarden updateKinderGarden(int x,[FromBody] CKinderGarden ck)
        {
            return BKinderGardenManager.updateKinderGarden(ck);
        }

        [HttpPost]
        public int RemoveKinderGarden([FromBody] int x)
        {
           return BKinderGardenManager.removeKinderGarden(x);
        }

    }
}
