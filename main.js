$('#show-hide-button').on('click', function(){
	$('#entire-form').slideToggle();
});
$('#entire-form').on('submit', function(e){
	e.preventDefault();
	var nmeEdit= $('#form-nme').children('input').val();
	var bioEdit= $('#form-bio').children('input').val();
	var booksEdit= $('#form-books').children('input').val();
	var librariesEdit= $('#form-libraries').children('input').val();
	$('#profile-nme').children('p').text(nmeEdit);
	$('#profile-bio').children('p').text(bioEdit);
	$('#profile-books').children('p').text(booksEdit);
	$('#profile-libraries').children('p').text(librariesEdit); 
});



// $('#show-hide-button').mouseover(function(){
// 	$('#form-user').toggle("slow");
// });
// $('#submit-button').on('click', function(e){

// Requirements
// -attach handler to submit button
// 	-when user submits profile
// 	-insert e.preventDefault() below submit
// 		-text below will update
// -form will be hidden when the page loads on.ready
// -button "show form" above main-profile div
// 	-attach handler to button to show/hide form
// 		-.css or .addid
// 		-when form is hidden button should say show form
// 		-when form is showing button should say hide form	