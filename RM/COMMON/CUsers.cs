using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMMON
{
    public class CUsers
    {
        public CUsers()
        { }
        public CUsers(string id, string name, string address, string phoneNum, int kinderGardenCode
            , int permission,string mailAddress)
        {
            this.Id = id;
            this.Name = name;
            this.Address = address;
            this.PhoneNum = phoneNum;
            this.KinderGardenCode = kinderGardenCode;
            this.Permission = permission;
            this.mailAddress = mailAddress;
           

        }
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PhoneNum { get; set; }
        public int KinderGardenCode { get; set; }
        public int Permission { get; set; }
        public string mailAddress { get; set; }
    }
}

