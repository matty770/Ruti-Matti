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
        public enum actionType
        {
            add, update, remove
        }
        [HttpGet]
        public List<CChildren> selectChildrenByParentId(string ParentId)
        {
            try
            {
                List<CChildren> lc = new List<CChildren>();
                lc = BChildrenManager.selectChildrenByParentId(ParentId);
                return lc;
            }
            catch (Exception)
            {
                throw;
            }
    

        }
        //[HttpPost]
        //public void addChildren([FromBody]CChildren children)
        //{
        //    BChildrenManager.addChildren(children);
        //}
        [HttpGet]
        public List<CChildren> getAllChildrens()
        {
           return BChildrenManager.selectAllChildren();
        }
        [HttpGet]
        public List<CChildren> getChildsByKinderGarden(int kinderGardenCode)
        {
            return BChildrenManager.selectChildrenByKinderGardenCode(kinderGardenCode);
        }
        //[HttpPost]
        //public void UpdateChildren(int x,[FromBody]CChildren children)
        //{
        //    BChildrenManager.updateChildren(children);
        //}
        [HttpPost]
        public void functioPost(actionType nameFunction, [FromBody]CChildren child)
        {
            switch (nameFunction)
            {
                case actionType.add:
                    BChildrenManager.addChildren(child); break;

                case actionType.update:
                    BChildrenManager.updateChildren(child); break;
                case actionType.remove:
                    BChildrenManager.removeChildren((child.Id)); break;
            }
            //BKinderGardenManager.addKinderGarden(kinderGarden);
        }
        
        //public int addChildren([FromBody]CChildren child)
        //{
        //    return BChildrenManager.addChildren(child);
        //}
        [HttpGet]
        public Boolean changeToNotActive(string idChild)
        {
            return BChildrenManager.changeToNotActive(idChild);
        }


    }
}
