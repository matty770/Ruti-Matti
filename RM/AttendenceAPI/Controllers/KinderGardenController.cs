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


    }
}
