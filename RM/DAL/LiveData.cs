//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class LiveData
    {
        public string IdChild { get; set; }
        public int KindergardenCode { get; set; }
        public System.DateTime Date { get; set; }
        public int Status { get; set; }
        public System.DateTime UpdateDate { get; set; }
        public string UpdateBy { get; set; }
        public System.TimeSpan Alarm { get; set; }
        public string Comments { get; set; }
    
        public virtual Children Children { get; set; }
        public virtual KinderGarden KinderGarden { get; set; }
    }
}
