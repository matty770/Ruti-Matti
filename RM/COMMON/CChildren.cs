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
        public CChildren(string id, string FirstName, string LastName, string address, string phone,
           string parentCode, int kinderGardenCode,int active)
        {
            this.Id = id;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Address = address;
            this.Phone = phone;
            this.ParentCode = parentCode;
            this.KinderGardenCode = kinderGardenCode;
            this.Active = active;
        }
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string ParentCode { get; set; }
        public int KinderGardenCode { get; set; }
        public int Active { get; set; }

    }
}

