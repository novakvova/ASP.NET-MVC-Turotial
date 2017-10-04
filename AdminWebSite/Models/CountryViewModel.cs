using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AdminWebSite.Models
{
    public class CountryViewModel
    {
        [Display(Name="Код країни")]
        public int Id { get; set; }
        [Display(Name = "Назва")]
        public string Name { get; set; }
        [Display(Name = "Дата створення")]
        public DateTime DateCreate { get; set; }
        [Display(Name = "Пріорітет")]
        public int Priority { get; set; }
    }
    public class CountryCreateViewModel
    {
        [Required(ErrorMessage ="Поле є обовзяковим")]
        [Display(Name = "Назва")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Поле є обовзяковим")]
        [Range(1,short.MaxValue,ErrorMessage ="12345555")]
        [Display(Name = "Пріорітет")]
        public int Priority { get; set; }
    }
}