using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Script.Serialization;
using BLL;
using COMMON;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

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
            var children = BChildrenManager.selectChildrenByKinderGardenCode(kinderGardenCode);
            foreach (var child in children)
            {
                if (child.picture != null)
                {
                    child.pictureBase64 = Convert.ToBase64String(child.picture);
                }
            }
            return children;
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
                            allreadyExist ex1 = new allreadyExist();
                            throw ex1;
                        }
                        allreadyExist ex = new allreadyExist();
                        throw ex;
                        throw e;
                    }
                case actionType.update:
                    {
                        CChildren c = new CChildren(child.ChildId, child.ChildFirstName, child.ChildLastName, child.Address, child.Phone, child.ParentCode, child.KinderGardenCode, child.Active,child.picture);
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

        [HttpPost]
        public void add()
        {
            var childJson= HttpContext.Current.Request.Params["child"];
           var child = JsonConvert.DeserializeObject(childJson);
            CChildParent c= JsonConvert.DeserializeObject<CChildParent>(childJson);
            // CChildParent child = (CChildParent)ser.DeserializeObject(childJson);
            if (HttpContext.Current.Request.Files.AllKeys.Any())
            {
                var file = HttpContext.Current.Request.Files["file"];
                ;
                byte[] data;
                using (Stream inputStream = file.InputStream)
                {
                    MemoryStream memoryStream = inputStream as MemoryStream;
                    if (memoryStream == null)
                    {
                        memoryStream = new MemoryStream();
                        inputStream.CopyTo(memoryStream);
                    }
                    data = memoryStream.ToArray();
                    c.picture = data;
                }

            }

            BChildrenManager.addChildren(c);
        }
        [HttpGet]
        public Boolean changeToNotActive(string idChild)
        {
            return BChildrenManager.changeToNotActive(idChild);
        }


    }
}
