using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BLL;
using COMMON;
using DAL;

namespace AttendenceAPI.Controllers
{
    public class LiveDataController : ApiController
    {
        [HttpGet]
        public CLiveData GetLiveData(string ChildId)
        {
            var ld = BLiveDataManager.selectLiveDataByIdChild(ChildId);
            return ld;
        }

        [HttpGet]
        public List<CLiveData> GetLiveDataByKinderGardenCode(int KinderGardenCode)
        {
            return BLiveDataManager.selectLiveDataByKinderGardenCode(KinderGardenCode);
            
        }
        [HttpPost]
        public  void ChangeStatus(string idChild, [FromBody] General.Statuses status)
        {
            BLiveDataManager.ChangeStatus(idChild,status);
        }
    }
}
