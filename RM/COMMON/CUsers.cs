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
        public CUsers(string id, string FirstName, string LastName, string address, string phoneNum
            , int permission,string mailAddress)
        {
            this.Id = id;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Address = address;
            this.PhoneNum = phoneNum;
            this.Permission = permission;
            this.mailAddress = mailAddress;
           

        }
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string PhoneNum { get; set; }
        public int Permission { get; set; }
        public string mailAddress { get; set; }
    }
}

