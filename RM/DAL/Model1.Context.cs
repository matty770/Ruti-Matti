﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class NDBEntities : DbContext
    {
        public NDBEntities()
            : base("name=NDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Children> Children { get; set; }
        public virtual DbSet<FutureData> FutureData { get; set; }
        public virtual DbSet<KinderGarden> KinderGarden { get; set; }
        public virtual DbSet<KinderGardenOfTeacher> KinderGardenOfTeacher { get; set; }
        public virtual DbSet<LiveData> LiveData { get; set; }
        public virtual DbSet<Permissions> Permissions { get; set; }
        public virtual DbSet<PreviousData> PreviousData { get; set; }
        public virtual DbSet<SavedData> SavedData { get; set; }
        public virtual DbSet<Users> Users { get; set; }
    }
}
