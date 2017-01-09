var apiKey = require('./../.env').apiKey;
	
	function getKey(user) {
		
		$.get("https://api.github.com/users/" + user + "/repos?access_token=" + apiKey).then(function(response){
			// console.log(JSON.stringify(response));
			var name;

			console.log(JSON.stringify(response));
			for (name in response){

				var date = moment(response[name].created_at).format("MM-DD-YYYY HH:mm:ss");
				var hlong = moment(date).fromNow();

				$("#box-repos").show();

				$('#box-repos').append("<div class='repo_list group'>");
					$(".repo_list").append("<div class='repo_name'><span class='mylbl'>Name : </span>" + response[name].name + "</div>"
						+ "<div class='repo_desc'><span class='mylbl'>Description : </span>" + response[name].description + "</div>"
					  	+ "<div id='repo_date group'><span class='repo_time'><span class='pull-left'>" + moment(response[name].created_at).format('MM-DD-YYYY HH:mm:ss')
					  	+ "</span><span class='pull-right'>" + " " + hlong + "</span></div>");

				$('#box-repos').append("</div>");

			// 	// console.log(moment(response[name].created_at).format("MM-DD-YYYY HH:mm:ss"));
				
			// 	// console.log(response[name].name);
			}

		}).fail(function(error){

			if (error.responseJSON.message === "Not Found") {
				$("#box-repos").hide();
				$("#myalert").show();
			}else {
				$("#myalert").hide();
			}
		    // console.log(error.responseJSON.message);

		});

	}