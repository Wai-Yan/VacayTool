$(document).ready(function() {

///
// $("#card").flip({
//   axis: 'y',
//   trigger: 'click'
// });

/// this sets the current date for the date selector
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

today = yyyy+'-'+mm+'-'+dd;
$(".calendar").attr("min", today);


//function to autofill city name and retreive google data 
var input = document.getElementById('cityInput');
var autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});
google.maps.event.addListener(autocomplete, 'place_changed', function(){
 var place = autocomplete.getPlace();
return(place);
})

//on click function when user clicks the add button 
$(".destinationSubmit").on("click", function(event){
	event.preventDefault();
})



/// end



