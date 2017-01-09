$(document).ready(function(){
	// hide div
	$("#myalert").hide();
	$("#box-repos").hide();

	// js display. Form validation

	$.validator.setDefaults({

        errorClass: 'help-block',

        highlight: function(element) {
            $(element)
                .closest('.form-group')
                .addClass('has-error');
        },
        unhighlight: function(element) {
            $(element)
                .closest('.form-group')
                .removeClass('has-error')
                .addClass('has-success');
        },
        errorPlacement: function(error, element) {

            if (element.prop('type') === 'checkbox') {

                error.insertAfter(element.parent());
            }else
                error.insertAfter(element);
        }

    });

	$('#form-user').submit(function (a) {

		a.preventDefault();

		var user;
		user = $('#u_name').val();

		if (user === "") {
			
			$("#form-user").validate({

		        rules: {
		            u_name: "required"
		        },

		        messages: {
		            search: "You must Indicate a User name here!"
		        }
		    });
		    return true;
		}

		$('#u_name').val("");

		getKey(user);

	});

});