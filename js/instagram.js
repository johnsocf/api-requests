

$(document).ready(function() {
    
        var $access_token = '{access-token}';
        stravaRequest('https://www.strava.com/api/v3/athlete/activities?per_page=1&access_token=279b1f1f6d51063f18cf6f1d24e0181167e5bd83&callback=?"');
        instaRequest('https://api.instagram.com/v1/users/self/feed?access_token=1622143161.1fb234f.d77f97d7500b49ed8af9545b05c726ac');
    
    
});
function stravaRequest (next_url, count) {
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
           setupStravaTemplate(newData);
        },
        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function instaRequest (next_url, count) {
  $.ajax({
    method: "GET",
    url: next_url,
    dataType: 'jsonp',
    data: {},
    success: function(data) {
      var instaData = data.data[0];
      //console.log(instaData);

      setupInstaTemplate(instaData);
    }
  });
}

function setupStravaTemplate (newData) {
  
  var source = $('#strava-template').html();
  var template = Handlebars.compile(source);
  var context = {
    title: newData.id,
    avgCadence: newData.average_cadence,
    avgWatts: newData.average_watts,
    avgSpeed: newData.average_speed
  }
  template(context);
  $('.strava-template').append(template(context));
  graphData(newData);
}

function setupInstaTemplate (newData) {
  //console.log(newData.data[0]);
  
  var source = $('#insta-template').html();
  var template = Handlebars.compile(source);
  var context = {
    imageUrl: newData.images.standard_resolution.url,
    imageUrlLink: newData.link
  }
  template(context);
  $('.insta-template').append(template(context));
  setWidths(newData);
}

function setWidths (newData) {
  var width = newData.images.standard_resolution.width - 20;
  var height = newData.images.standard_resolution.height - 20;

  $('.strava-template').css("height", height + "px");
  $('.strava-template').css("width", width + "px");
}

function graphData (newData) {
  var bardata = [
    { yHeight: newData.average_cadence,
      name: 'average cadence'
     },
    {
      yHeight: newData.average_watts,
      name: 'average watts'
    },
    {
      yHeight: newData.average_speed,
      name: 'average speed'
    }
  ],
  height = 400,
  width = 600, 
  barWidth = 50,
  barOffset = 5

  heightArray = [];
  for (var i=0; i < bardata.length; i++) {
    heightArray.push(bardata[i].yHeight);
    //console.log(bardata[i].yHeight);
  }
  
  maxHeight = d3.max(heightArray);

  var yScale = d3.scale.linear()
          .domain([0, d3.max(heightArray)])
          .range([0, height])

  //.domain(bardata.map(function (d){ return d.name;}))

  var xScale = d3.scale.ordinal()

          .domain(bardata.map(function(bardata) { return bardata.name; }))
          .domain(d3.range(bardata.length))
          .rangeBands([0, width], .1)


  d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', 'transparent')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
      .style('fill', '#C61C6F')
      .attr('width', xScale.rangeBand())
      .attr('height', function(d) {
        return yScale(d.yHeight);
      })
      .attr('x', function(d, i){
        console.log(i);
        console.log(xScale(i));
        return xScale(i);
        //return i * (xScale.rangeBand() + barOffset);
      })
      .attr('y', function(d) {
        return height - yScale(d.yHeight);
      })
      .text(function(d, i) {
        return d.name;
      })

    // .enter().append('text')
    //   .attr('fill', "red")
    //   .attr('font-family', "sans-serif")
    //   .attr('x', function(d, i){
    //     return i * (barWidth + barOffset);
    //   })
    //   .attr('y', function(d) {
    //     return height - yScale(d.yHeight);
    //   })
    //   .text(function(d, i) {
    //     return d.name;
    //   })
}
