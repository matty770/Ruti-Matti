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
    public class FutureDataController : ApiController
    {
        [HttpGet]
        public List<CFutureData> GetFutureData(string ChildId)
        {
            var fd = BFutureDataManager.selectByIdChild(ChildId);
            return fd;
        }

        [HttpPost]
        public void addFutureData([FromBody]CFutureData futureData)
        {
            BFutureDataManager.addFutureData(futureData);
        }
        
        [HttpPost]
        public void updateFutureData(int x, [FromBody]CFutureData futureData)
        {
            BFutureDataManager.updateFutureData(futureData);
        }
    }
}
