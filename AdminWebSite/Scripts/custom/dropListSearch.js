window.addEventListener('load', addItem);
var str = "Poland, Denmark, USA, England, Germany, Hennesy, Albycerke";
var arrItem = str.split(", ");
var i;
function addItem() {
		var txt = "";
        for (i = 0; i < arrItem.length; i++) {
            txt += "<a>" + arrItem[i] + "</a>";
        }
        document.getElementById("droplistContent").innerHTML = txt;
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
	div = document.getElementById("droplistContent");
    a = div.getElementsByTagName("a");
    for(i = 0; i < a.length; i++)
    {
    	a[i].addEventListener('click', function() {
    		pickItem(this.innerHTML);
    	})
    }
});

function pickItem(val) {
	var input = document.getElementById("userInput");
	input.value = val;
}

window.onclick = function(event) {
  if (!event.target.matches('#userInput')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showHide')) {
        openDropdown.classList.remove('showHide');
      }
    }
  }
}

function openHideContent() {
    document.getElementById("droplistContent").classList.toggle("showHide");
}
function filterFunction() {
	var input, filter, div, a, i;
    input = document.getElementById("userInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("droplistContent");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}