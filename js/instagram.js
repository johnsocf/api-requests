

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
  parseData(newData);
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

function parseData (newData) {
  console.log(newData);
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
    },
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
    },
    { yHeight: newData.average_cadence,
      name: 'average cadence'
     },
    {
      yHeight: newData.average_watts,
      name: 'average watts'
    },
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
    },
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
    },
    { yHeight: newData.average_cadence,
      name: 'average cadence'
     },
    {
      yHeight: newData.average_watts,
      name: 'average watts'
    },
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
    },
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
    },
    { yHeight: newData.average_cadence,
      name: 'average cadence'
     },
    {
      yHeight: newData.average_watts,
      name: 'average watts'
    },
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
    },
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
    },
    { yHeight: newData.average_cadence,
      name: 'average cadence'
     },
    {
      yHeight: newData.average_watts,
      name: 'average watts'
    },
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
    },
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
    },
    { yHeight: newData.average_cadence,
      name: 'average cadence'
     },
    {
      yHeight: newData.average_watts,
      name: 'average watts'
    },
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
    },
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
    },
    { yHeight: newData.average_cadence,
      name: 'average cadence'
     },
    {
      yHeight: newData.average_watts,
      name: 'average watts'
    },
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
    },
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
    },
    { yHeight: newData.average_cadence,
      name: 'average cadence'
     },
    {
      yHeight: newData.average_watts,
      name: 'average watts'
    },
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
    },
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
    },
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
  ];
  //graphDataInBarChart(newData);
  graphDataInPieChart(bardata);
}

function setWidths (newData) {
  var width = newData.images.standard_resolution.width - 20;
  var height = newData.images.standard_resolution.height - 20;

  $('.strava-template').css("height", height + "px");
  $('.strava-template').css("width", width + "px");
}

function graphDataInBarChart (bardata) {
  var margin = { top: 30, bottom: 40, left: 50, right: 30 }
  var height = 400 - margin.top - margin.bottom,
  width = 600 - margin.left - margin.right, 
  barWidth = 50,
  barOffset = 5

  heightArray = [];
  for (var i=0; i < bardata.length; i++) {
    heightArray.push(bardata[i].yHeight);
  }

  for (var i=0; i < bardata.length; i++) {
   console.log(bardata[i].yHeight);
  }
  bardata.sort(function compareNumbers(a, b) {
    return a.yHeight - b.yHeight;
  });
  
  maxHeight = d3.max(heightArray);
  console.log(bardata.length)
  var tempColor;

  var colors = d3.scale.linear()
          // .domain([0, maxHeight])
          .domain([0, bardata.length])
          .range(["red", "yellow"]);

  var yScale = d3.scale.linear()
          .domain([0, d3.max(heightArray)])
          .range([0, height])


  var xScale = d3.scale.ordinal()
          .domain(bardata.map(function(bardata) { return bardata.name; }))
          .domain(d3.range(bardata.length))
          .rangeBands([0, width], .5, 1)

  var tooltip = d3.select('body').append('div')
          .style('position', 'absolute')
          .style('top', '0')
          .style('left', '0')
          .style('padding', '0 10px')
          .style('background', 'white')
          .style('opacity', 0)

  var myChart = d3.select('#chart').append('svg')
    .style('background', '#E7E0CB')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.left + margin.right)
    .append('g')
    .attr('transform', 'translate('+ margin.left + ', ' + margin.top +')')
    .style('background', 'transparent')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
      .style('fill', function(d, i){
        // return colors(d.yHeight);
        return colors(i);
      })
      .attr('width', xScale.rangeBand())
      .attr('height', 0)
      .attr('x', function(d, i){
        return xScale(i);
        //return i * (xScale.rangeBand() + barOffset);
      })
      .attr('y', height)
      .text(function(d, i) {
        return d.name;
      })
    .on('mouseover', function(d) {
        tooltip.transition()
          .style('opacity', .9)

        tooltip.html(d.name)
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY) - 30 + 'px')

        tempColor = this.style.fill;
        d3.select(this)
          // .transition()
          .style('opacity', .5)
          .style('fill', 'yellow')
    })
    .on('mouseout', function(d) {
        d3.select(this)
        // .transition().delay(500).duration(800)
          .style('opacity', .9)
          .style('fill', tempColor);
    });

  myChart.transition()
    .attr('height', function(d) {
      return yScale(d.yHeight);
    })
    .attr('y', function(d) {
      return height - yScale(d.yHeight);
    })
    .delay(function(d, i){
      return i * 10;
    })
    .duration(1000)
    .ease('elastic')

  var vGuideScale = d3.scale.linear()
    .domain([0, d3.max(heightArray)])
    .range([height, 0])

  var vAxis = d3.svg.axis()
    .scale(vGuideScale)
    .orient('left')
    .ticks(20)

  var vGuide = d3.select('svg').append('g')
      vAxis(vGuide)

      vGuide.attr('transform', 'translate('+ margin.left + ', ' + margin.top + ')')
      vGuide.selectAll('path')
            .style({fill: 'none', stroke: "#000"})
      vGuide.selectAll('line')
            .style({stroke: "#000"})

  var hAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .tickValues(xScale.domain().filter(function(d, i) {
        return !(i % (bardata.length/5));
      }))

  var hGuide = d3.select('svg').append('g')
      hAxis(hGuide)

      hGuide.attr('transform', 'translate('+ (margin.left - 0) + ', ' + (height + margin.top) + ')')
      hGuide.selectAll('path')
            .style({fill: 'none', stroke: "#000"})
      hGuide.selectAll('line')
            .style({stroke: "#000"})

}

function graphDataInPieChart(bardata) {
  var width = 400,
      height = 400,
      radius = 200,
      colors = d3.scale.ordinal()
          .range(['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05']);

  heightArray = [];
  for (var i=0; i < bardata.length; i++) {
    heightArray.push(bardata[i].yHeight);
  }

  var pie = d3.layout.pie()
      .value(function(d){
        return d.yHeight;
      })

  var arc = d3.svg.arc()
      .outerRadius(radius)
      console.log(bardata);

 var myChart = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
    .selectAll('path').data(pie(bardata))
    .enter().append('g')
        .attr('class', 'slice')
        

  var slices = d3.selectAll('g.slice')
        .append('path')
        .attr('fill', function(d, i) {
            return colors(i);
        })
        .style('opacity', '.5')
        .attr('d', arc)

  var text = d3.selectAll('g.slice')
      .append('text')
      .text(function(d, i) {
        console.log(d);
        return d.data.name;
      })
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .attr('transform', function(d) {
        d.innerRadius = 0;
        d.outerRadius = radius;
        return 'translate(' + arc.centroid(d) +')'
      })

}
