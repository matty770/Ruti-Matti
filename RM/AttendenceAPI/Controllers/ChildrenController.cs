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
        public void functioPost(actionType nameFunction, [FromBody]CChildParent child)
        {
            switch (nameFunction)
            {
                case actionType.add:
                    try
                    {
                        BChildrenManager.addChildren(child); break;
                    }
                    catch (Exception e)
                    {
                        if (e.InnerException.InnerException.Message.Equals("Violation of PRIMARY KEY constraint 'PK__Users__B7C9263840CFC3C0'. Cannot insert duplicate key in object 'dbo.Users'. The duplicate key value is (319100160).\r\nThe statement has been terminated."))
                        {
                            allreadyExist ex = new allreadyExist();
                            throw ex;
                        }

                        throw e;
                    }
                case actionType.update:
                    {
                        CChildren c = new CChildren(child.ChildId, child.ChildFirstName, child.ChildLastName, child.Address, child.Phone, child.ParentCode, child.KinderGardenCode, child.Active);
                        BChildrenManager.updateChildren(c); break;
                    }
                    
                case actionType.remove:
                    {
                        //CChildren c = new CChildren(child.ChildId, child.ChildFirstName, child.ChildLastName, child.Address, child.Phone, child.ParentCode, child.KinderGardenCode, child.Active);
                        BChildrenManager.removeChildren((child.ChildId)); break;
                    }
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
