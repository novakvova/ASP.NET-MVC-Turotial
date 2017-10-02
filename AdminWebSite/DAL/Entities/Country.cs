using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AdminWebSite.DAL.Entities
{
    public class Country
    {
        [Key]
        public int Id { get; set; }

        [Required, StringLength(maximumLength:256)]
        public string Name { get; set; }
        public DateTime DateCreate { get; set; }
        public int Priority { get; set; }
    }
}