(function () {
	$(document).ready(function () {
		
		$('.menulinks').on('click', function () {
			console.log(this.classList.contains('active'));
			if (this.classList.contains('active'))
			{
				return;
			}
			else {
				$('.active').removeClass('active');
				switch(this.id) {
				    case 'TourLink':
				    	this.classList.add('active');
				    	$('.menucontent').css({'display' : 'none'});
				    	$('#addNewTourTab').css({'display' : 'block'});
				        break;
				    case 'CountryLink':
				        this.classList.add('active');
				        $('.menucontent').css({'display' : 'none'});
				    	$('#CountryTab').css({'display' : 'block'});
				        break;
				    case 'TownLink':
				        this.classList.add('active');
				        $('.menucontent').css({'display' : 'none'});
				    	$('#TownTab').css({'display' : 'block'});
				        break;
				    case 'HotelLink':
				        this.classList.add('active');
				        $('.menucontent').css({'display' : 'none'});
				    	$('#HotelTab').css({'display' : 'block'});
				        break;
				    default:   
				}
			}
		});
	});
})();