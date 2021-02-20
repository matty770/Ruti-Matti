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
        [Route("api/FutureData/GetFutureData")]
        public List<CFutureData> GetFutureData(string ChildId)
        {
            var fd = BFutureDataManager.selectByIdChild(ChildId);
            return fd;
        }

        [HttpPost]
        [Route("api/FutureData/addFutureData")]
        public void addFutureData([FromBody]CFutureData futureData)
        {
            BFutureDataManager.addFutureData(futureData);
        }
        [HttpPost]
        [Route("api/FutureData/updateFutureData")]
        public void updateFutureData([FromBody]CFutureData futureData)
        {
            BFutureDataManager.updateFutureData(futureData);
        }
        [HttpPost]
        [Route("api/FutureData/removeFutureData")]
        public void removeFutureData([FromBody] CFutureData futureData)
        {
            BFutureDataManager.removeFutureData(futureData);
        }
    }
}
