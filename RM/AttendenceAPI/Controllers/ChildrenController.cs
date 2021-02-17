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
        [HttpGet]
        [Route("api/Children/selectChildrenByParentId")]
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
        [HttpGet]
        [Route("api/Children/getAllChildrens")]
        public List<CChildren> getAllChildrens()
        {
            return BChildrenManager.selectAllChildren();
        }
        [HttpGet]
        [Route("api/Children/getChildsByKinderGarden")]
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
        [HttpPost]
        [Route("api/Children/updateChildren")]
        public void UpdateChildren([FromBody]CChildren children)
        {
            BChildrenManager.updateChildren(children);
        }
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
        [Route("api/Children/changeToNotActive")]
        public Boolean changeToNotActive(string idChild)
        {
            return BChildrenManager.changeToNotActive(idChild);
        }


    }
}
