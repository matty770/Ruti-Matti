using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMMON
{
    public class General
    {
        public enum Statuses
        {
            Late = 1, Absent, Present, NonPresent, Sent,Confirm
        }
        public class Attendance
        {
            public Attendance() { }
            public Attendance(string Id, string FirstName, string LastName, string pictureBase64, General.Statuses Status)
            {
                this.Id = Id;
                this.FirstName = FirstName;
                this.LastName = LastName;
                this.pictureBase64 = pictureBase64;
                this.Status = Status;
            }
            public string Id { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string pictureBase64 { get; set; }
            public General.Statuses Status { get; set; }
        }


    }
}
