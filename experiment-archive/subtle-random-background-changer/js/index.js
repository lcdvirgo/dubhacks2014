function myNumber(maxNumber) {

	var random_number = Math.random();
	var random_integer = random_number * maxNumber;
	var my_integer = Math.floor(random_integer);

	return my_integer;
}

// randomize background
$('#bg_changer').on('click',function(event) {
	event.preventDefault();
	$('body').css({
		background: 'rgb(' + myNumber(255) +',' + myNumber(255) +',' + myNumber(255) +')'
	});
	$('#bg_changer').css({
		background: 'rgb(' + myNumber(255) +',' + myNumber(255) +',' + myNumber(255) +')'
	});
});