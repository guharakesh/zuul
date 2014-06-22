$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

		$('#signup-form').validate({
			rules: {
				first_name: {
					required: true
				},
				last_name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				password: {
					minlength: 6,
					required: true
				},
				confirmation: {
					minlength: 6
					// equalTo: "#password"
				}
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
			}
		});

});