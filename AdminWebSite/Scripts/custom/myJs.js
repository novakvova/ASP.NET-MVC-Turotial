(function () {
	$(document).ready(function () {
		$(window).on('click', function (event) {
		  	if (!event.target.matches('#clickIcon') ) {

			    var elem1 = $("#adminNav").css('display');
			    var elem2 = $("#menuIcon").css('display');
			    if (elem1 == 'flex' && elem2 == 'block') {
			        $("#adminNav").css('display' , 'none');
			     }
		    }
	  	});
		

		$('#clickIcon').on('click', function () {
			var elem1 = $("#adminNav").css('display');
			
			if (elem1 == 'flex')
				$("#adminNav").css('display' , 'none');
			else
		    $("#adminNav").css('display' , 'flex');
		});

	});
})();