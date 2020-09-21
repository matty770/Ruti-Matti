using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace COMMON
{
    public class CChildren
    {
        public CChildren()
        { }
        public CChildren(string id, string childName, string address, string phone,
           string parentCode, int kinderGardenCode)
        {
            this.Id = id;
            this.ChildName = childName;
            this.Address = address;
            this.Phone = phone;
            this.ParentCode = parentCode;
            this.KinderGardenCode = kinderGardenCode;
        }
        public string Id { get; set; }
        public string ChildName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string ParentCode { get; set; }
        public int KinderGardenCode { get; set; }
    }
}

