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
        [Route("api/KinderGarden/GetKinderGarden")]
        public CKinderGarden GetKinderGarden(int KGCode)
        {
            var kg = BKinderGardenManager.selectKinderGardenByCode(KGCode);
            return kg;
        }

        [HttpGet]
        [Route("api/KinderGarden/GetAllKinderGarden")]
        public List<CKinderGarden> GetAllKinderGarden()
        {
            return BKinderGardenManager.selectAllKinderGarden();
        }

        [HttpGet]
        [Route("api/KinderGarden/selectKinderGardensByTeacherId")]
        public List<CKinderGarden> selectKinderGardensByTeacherId(string TeacherId)
        {
            return BKinderGardenManager.selectKinderGardenByIdTeacher(TeacherId);
        }
        [HttpPost]
        [Route("api/KinderGarden/addKinderGarden")]
        public void addKinderGarden([FromBody]CKinderGarden kinderGarden)
        {
            BKinderGardenManager.addKinderGarden(kinderGarden);
        }
        [HttpPost]
        [Route("api/KinderGarden/updateKinderGarden")]
        public CKinderGarden updateKinderGarden([FromBody] CKinderGarden ck)
        {
            return BKinderGardenManager.updateKinderGarden(ck);
        }

    }
}
