(function () {
window.addEventListener('load', addItem);
var str = "Paris, Eldorado, Kyiv, Manchester, Kartoshka, Amsterdam, ChetoYstal";
var arrItem = str.split(", ");
var i;
function addItem() {
		var txt = "";
        for (i = 0; i < arrItem.length; i++) {
            txt += "<a>" + arrItem[i] + "</a>";
        }
        document.getElementById("droplistContentT").innerHTML = txt;
}

window.addEventListener('load', function()
{
	div = document.getElementById("droplistContentT");
    a = div.getElementsByTagName("a");
    for(i = 0; i < a.length; i++)
    {
    	a[i].addEventListener('click', function() {
    		pickItem(this.innerHTML);
    	})
    }
});

function pickItem(val) {
	var input = document.getElementById("userInputTown");
	input.value = val;
}

$(window).on('click', function (event) {
  if (!event.target.matches('#userInputTown')) {

    var dropdowns = document.getElementsByClassName("dropdown-contentT");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showHide')) {
        openDropdown.classList.remove('showHide');
      }
    }
  }
});

$('#userInputTown').on('click', function () {
    document.getElementById("droplistContentT").classList.toggle("showHide");
});

$('#userInputTown').on('keyup', function () {
	var input, filter, div, a, i;
    input = document.getElementById("userInputTown");
    filter = input.value.toUpperCase();
    div = document.getElementById("droplistContentT");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
});
})();