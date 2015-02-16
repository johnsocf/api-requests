

	// console.log('here');
	// var userID = 'catnipp1',
	// 	access_token = '{access-token}',
	// 	url = 'https://api.instagram.com/v1/users/' + userID + '/followed-by?access_token={access-token}';


	// $.ajax({
	// 	method: "GET",
	// 	url: url,
	// 	dataType: "jsonp",
	// 	jsonp: "callback",
	// 	jsonpCallback: "jsonpcallback",
	// 	success: function(data) {
	// 		console.log('data');
	// 	}
	// });

$(document).ready(function() {
    
        var $access_token = '{access-token}';
        whatever();
        //whatever('https://www.strava.com/api/v3/athlete/activities?per_page=1&access_token=279b1f1f6d51063f18cf6f1d24e0181167e5bd83&callback=?"');
        whatever('https://api.instagram.com/v1/users/self?access_token=1622143161.1fb234f.d77f97d7500b49ed8af9545b05c726ac');
    
    
});
function whatever (next_url, count) {
	console.log('here');
	$.ajax({
        method: "GET",
        url: next_url,
        dataType: 'jsonp',
        data: {},
        // jsonp: "callback",
        // jsonpCallback: "jsonpcallback",
        success: function(data) {
           console.log('data');
           console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //alert("Check you internet Connection");
           console.log('error');
        }
    });
}
