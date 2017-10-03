using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AdminWebSite.DAL.Entities
{
    public class City
    {
        [Key]
        public int Id { get; set; }
        [Required, StringLength(maximumLength:256)]
        public string Name { get; set; }
        public DateTime DateCreate { get; set; }
        public int Priority { get; set; }
        [ForeignKey("Country")]
        public int CountryId { get; set; }
        virtual public Country Country { get; set; }
    }
}