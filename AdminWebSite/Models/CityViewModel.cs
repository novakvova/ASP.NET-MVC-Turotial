using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AdminWebSite.Models
{
    public class CityViewModel
    {
        [Display(Name = "Код міста")]
        public int Id { get; set; }
        [Display(Name = "Назва")]
        public string Name { get; set; }
        [Display(Name = "Дата створення")]
        public DateTime DateCreate { get; set; }
        [Display(Name = "Пріорітет")]
        public int Priority { get; set; }
        [Display(Name = "Країна")]
        public string Country { get; set; }
    }
    public class CityCreateViewModel
    {
        [Display(Name = "Назва")]
        public string Name { get; set; }
        [Display(Name = "Пріорітет")]
        public int Priority { get; set; }
        [Display(Name = "Країна")]
        public int  CountryId { get; set; }
        public List<SelectItemViewModel> Countries { get; set; }
    }
}