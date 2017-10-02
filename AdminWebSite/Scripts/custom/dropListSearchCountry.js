(function () {
window.addEventListener('load', addItem);
var str = "Poland, Denmark, USA, England, Germany, Hennesy, Albycerke";
var arrItem = str.split(", ");
var i;
function addItem() {
		var txt = "";
        for (i = 0; i < arrItem.length; i++) {
            txt += "<a>" + arrItem[i] + "</a>";
        }
        document.getElementById("droplistContentC").innerHTML = txt;
  // 		for (i = 0; i < arrItem.length; i++) {
		// 	var link = document.createElement('a');
		// 	//var node = document.createTextNode(arrItem[i]);
		// 	link.appendChild(document.createTextNode(arrItem[i]));
		// 	link.setAttribute('href', '#' + arrItem[i]);
		// 	var parent = document.getElementById('droplistContent');
		// 	parent.appendChild(link);
		// }
}

window.addEventListener('load', function()
{
	div = document.getElementById("droplistContentC");
    a = div.getElementsByTagName("a");
    for(i = 0; i < a.length; i++)
    {
    	a[i].addEventListener('click', function() {
    		pickItem(this.innerHTML);
    	})
    }
});

function pickItem(val) {
	var input = document.getElementById("userInputCountry");
	input.value = val;
}

$(window).on('click', function (event) {
    if (!event.target.matches('#userInputCountry')) {
        
    var dropdowns = document.getElementsByClassName("dropdown-contentC");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showHide')) {
        openDropdown.classList.remove('showHide');
      }
    }
  }
});


$('#userInputCountry').on('click', function () {
    document.getElementById("droplistContentC").classList.toggle("showHide");
});
$('#userInputCountry').on('keyup', function () {
	var input, filter, div, a, i;
    input = document.getElementById("userInputCountry");
    filter = input.value.toUpperCase();
    div = document.getElementById("droplistContentC");
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