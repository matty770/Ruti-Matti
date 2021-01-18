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
        public enum actionType
        {
            add, update, remove
        }
        [HttpGet]
        public List<CFutureData> GetFutureData(string ChildId)
        {
            var fd = BFutureDataManager.selectByIdChild(ChildId);
            return fd;
        }

        //[HttpPost]
        //public void addFutureData([FromBody]CFutureData futureData)
        //{
        //    BFutureDataManager.addFutureData(futureData);
        //}

        //[HttpPost]
        //public void updateFutureData(int x, [FromBody]CFutureData futureData)
        //{
        //    BFutureDataManager.updateFutureData(futureData);
        //}
        //    [HttpPost]
        //    public void removeFutureData([FromBody] CFutureData futureData)
        //    {
        //        BFutureDataManager.removeFutureData(futureData);
        //    }
        public void functioPost(actionType nameFunction, [FromBody]CFutureData futureData)
        {
            switch (nameFunction)
            {
                case actionType.add:
                    BFutureDataManager.addFutureData(futureData); break;

                case actionType.update:
                    BFutureDataManager.updateFutureData(futureData); break;
                case actionType.remove:
                    BFutureDataManager.removeFutureData(futureData); break;
            }
        }
    }
}
