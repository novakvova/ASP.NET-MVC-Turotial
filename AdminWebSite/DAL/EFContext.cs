using AdminWebSite.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AdminWebSite.DAL
{
    public class EFContext : DbContext
    {
        public EFContext() : base("ConnectionHotel")
        {
            
        }
        public DbSet<Country> Countries { get; set; }
        public DbSet<City> Cities { get; set; }
    }
}