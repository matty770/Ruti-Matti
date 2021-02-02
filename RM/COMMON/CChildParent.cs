using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMMON
{
    public class CChildParent
    {
        public CChildParent()
        {

        }
        public CChildParent(string ChildId, string ChildFirstName, string ChildLastName, string address, string phone,
           string parentCode, int kinderGardenCode, int active,string ParentId, string ParentFirstName, string ParentLastName, string mailAddress)
        {
            this.ChildId = ChildId;
            this.ChildFirstName = ChildFirstName;
            this.ChildLastName = ChildLastName;
            this.Address = address;
            this.Phone = phone;
            this.ParentCode = parentCode;
            this.KinderGardenCode = kinderGardenCode;
            this.Active = active;
            this.ParentId = ParentId;
            this.ParentFirstName = ParentFirstName;
            this.ParentLastName = ParentLastName;
            this.mailAddress = mailAddress;
        }
        public string ChildId { get; set; }
        public string ChildFirstName { get; set; }
        public string ChildLastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string ParentCode { get; set; }
        public int KinderGardenCode { get; set; }
        public int Active { get; set; }
        public string ParentId { get; set; }
        public string ParentFirstName { get; set; }
        public string ParentLastName { get; set; }
        public string mailAddress { get; set; }
    }
}
