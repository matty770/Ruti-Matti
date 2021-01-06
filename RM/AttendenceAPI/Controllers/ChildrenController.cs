using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BLL;
using COMMON;

namespace AttendenceAPI.Controllers
{
    public class ChildrenController : ApiController
    {
        [HttpGet]
        public List<CChildren> selectChildrenByParentId(string ParentId)
        {
            List<CChildren> lc = new List<CChildren>();
            lc = BChildrenManager.selectChildrenByParentId(ParentId);
            return lc;

        }
        [HttpPost]
        public void addChildren([FromBody]CChildren children)
        {
            BChildrenManager.addChildren(children);
        }
        [HttpGet]
        public List<CChildren> getAllChildrens()
        {
           return BChildrenManager.selectAllChildren();
        }


    }
}
