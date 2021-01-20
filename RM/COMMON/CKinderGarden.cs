using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMMON
{
    public class CKinderGarden
    {
        public CKinderGarden() { }
        public CKinderGarden(/*int idKinderGarden, */
            string name, string address,string phone,
            int year, TimeSpan BeginingHour, TimeSpan Space,int active)
        {
          //  this.IdKinderGarden = idKinderGarden;
            this.Name = name;
            this.Address = address;
            this.Phone = phone;
            this.Year = year;
            this.BeginingHour = BeginingHour;
            this.Space = Space;
            this.Active = active;
        }

        public int IdKinderGarden { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public int Year { get; set; }
        public TimeSpan BeginingHour { get; set; }
        public TimeSpan Space { get; set; }
        public int Active { get; set; }

    }
}
