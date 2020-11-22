using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace COMMON
{
    public class CFutureData
    {
        public CFutureData() { }
        public CFutureData(string idChild, int kinderGardenCode, DateTime date,
            General.Statuses status, DateTime updateDate, string updateBy, TimeSpan alarm, string comments)
        {
            this.IdChild = idChild;
            this.KinderGardenCode = kinderGardenCode;
            this.Date = date;
            this.Status = status;
            this.UpdateDate = updateDate;
            this.UpdateBy = updateBy;
            this.Alarm = alarm;
            this.Comments = comments;
        }
        public string IdChild { get; set; }
        public int KinderGardenCode { get; set; }
        public DateTime Date { get; set; }
        public General.Statuses Status { get; set; }
        public DateTime UpdateDate { get; set; }
        public string UpdateBy { get; set; }
        public TimeSpan Alarm { get; set; }
        public string Comments { get; set; }
    }
}

