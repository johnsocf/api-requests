

$(document).ready(function() {
    
        var $access_token = '{access-token}';
        whatever();
        whatever('https://www.strava.com/api/v3/athlete/activities?per_page=1&access_token=279b1f1f6d51063f18cf6f1d24e0181167e5bd83&callback=?"');
        //whatever('https://api.instagram.com/v1/users/self?access_token=1622143161.1fb234f.d77f97d7500b49ed8af9545b05c726ac');
    
    
});
function whatever (next_url, count) {
	$.ajax({
        method: "GET",
        url: next_url,
        dataType: 'jsonp',
        data: {},
        //jsonp: "callback",
        //jsonpCallback: "jsonpcallback",
        success: function(data) {
           var newData = data[0];
           for (key in newData) {
           		//console.log(key + " : " + newData[key]);
           }
           setupTemplate(newData);
        },
        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function setupTemplate (newData) {
  
  var source = $('#title-template').html();
  var template = Handlebars.compile(source);
  console.log('new data id' + newData.id);
  console.log(template);

  var context = {title: newData.id }
  template(context);
  $('.template').append(template(context));
  
  // console.log("average cadence: " + data.average_cadence);
  // console.log("average speed: " + data.average_speed);
  // console.log("average watts: " + data.average_watts);
}
