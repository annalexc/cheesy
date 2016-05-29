// Hi Cheese Lovers! The D3 code below was adapted from the awesomeness at http://bl.ocks.org/adewes/4710330


// Inspect dataSlices to determine why few are missing per set of children.
var dataSlices; 

function createCheeseWheel(elementId, data, countFunction, colorFunction, title, legendFunction){
  var plot = document.getElementById(elementId);

  while (plot.hasChildNodes()){
    plot.removeChild(plot.firstChild);
  }

  var width = plot.offsetWidth;
  var height = width+20;
  var x_margin = 40;
  var y_margin = 50;  
  var max_depth= 3;    
  var data_slices = [];
  var max_level = 4;

  var svg = d3.select("#"+elementId).append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height * .52 + ")");
          
  function process_data(data,level,start_deg,stop_deg){
    var name = data[0];
    // console.log(name);
    var total = countFunction(data);
    var children = data[2];
    var current_deg = start_deg;
    if (level > max_level) {
      return;
    };
    if (start_deg == stop_deg){
      return;
    };
    data_slices.push([start_deg,stop_deg,name,level,data[1]]);
    for (var key in children){
      
  
      // if(key == "Coalho"){
      //   debugger
      // }

      // console.log(key);
      child = children[key];
      var inc_deg = (stop_deg-start_deg)/total*countFunction(child);
      var child_start_deg = current_deg;
      current_deg+=inc_deg;
      var child_stop_deg = current_deg;
      var span_deg = child_stop_deg-child_start_deg;
      process_data(child,level+1,child_start_deg,child_stop_deg);
    };
  };
    
  // process_data(data,0,0,360.0/180.0*Math.PI);

  // Tactical(?) fix to show missing slices with stop degrees that are past the parent stop degrees:
  process_data(data,0,0,360.0/180.05*Math.PI);

  var ref = data_slices[0];
  var next_ref = ref;
  var last_refs = [];
  var thickness = width/2.0/(max_level+2)*1.1;
        
  var arc = d3.svg.arc()
    .startAngle(function(d) { if(d[3]==0){return d[0];}return d[0]+0.01; })
    .endAngle(function(d) { if(d[3]==0){return d[1];}return d[1]-0.01; })
    .innerRadius(function(d) { return 1.1*d[3]*thickness; })
    .outerRadius(function(d) { return (1.1*d[3]+1)*thickness; });    

  dataSlices = data_slices;

  var slices = svg.selectAll(".form")
    .data(function(d) { return data_slices; })
    .enter()
    .append("g");
  slices.append("a")
  var link = svg.selectAll("a")
    .attr("xlink:href", function(d){return '#/'+ parseLink(d[2]);})
    // .attr("xlink:href", "http://www.vxnofficial.com")
    .append("path")
    .attr("d", arc)
    .attr("id",function(d,i){return elementId+i;})
      // .attr("data",function(d){return d[2];})
    .style("fill", function(d) { return colorFunction(d);})
    // .style("cursor", function(d){ return "pointer";})
    .attr("class","form");
  slices.on("click",function(d) {
    animate(d);
    console.log(d3.select(this));
  });
  // slices.on("click",showCheese);  


  if (title != undefined){
    slices.append("svg:title")
      .html(title);        
  };

  if (legendFunction != undefined){
    slices.on("mouseover",update_legend)
          .on("mouseout",remove_legend);
    var legend = d3.select("#"+elementId+"_legend");
            
    function update_legend(d){
      legend.html(legendFunction(d));
      legend.transition().duration(200).style("opacity","1");
    };
        
    function remove_legend(d){
      legend.transition().duration(1000).style("opacity","0");
    };
  };
  
  function get_start_angle(d,ref){
    if (ref){
      var ref_span = ref[1]-ref[0];
      return (d[0]-ref[0])/ref_span*Math.PI*2.0
    } else {
      return d[0];
    };
  };
    
  function get_stop_angle(d,ref){
    if (ref){
      var ref_span = ref[1]-ref[0];
      return (d[1]-ref[0])/ref_span*Math.PI*2.0
    } else {
      return d[0];
    };
  };
    
  function get_level(d,ref){
    if (ref){
      return d[3]-ref[3];
    } else {
      return d[3];
    };
  };
    
  function rebaseTween(new_ref){
    return function(d){
      var level = d3.interpolate(get_level(d,ref),get_level(d,new_ref));
      var start_deg = d3.interpolate(get_start_angle(d,ref),get_start_angle(d,new_ref));
      var stop_deg = d3.interpolate(get_stop_angle(d,ref),get_stop_angle(d,new_ref));
      var opacity = d3.interpolate(100,0);
      return function(t){
        return arc([start_deg(t),stop_deg(t),d[2],level(t)]);
      };
    };
  };
    
  var animating = false;
    
  function animate(d) {

    // debugger
    if (animating){
      return;
    };
    animating = true;
    var revert = false;
    var new_ref;
    
    if (d == ref && last_refs.length > 0) {
      revert = true;
      last_ref = last_refs.pop();
    }
    
    if (revert) {
      d = last_ref;
      new_ref = ref;
      svg.selectAll(".form")
        .filter(
          function(b){
            if (b[0] >= last_ref[0] && b[1] <= last_ref[1]  && b[3] >= last_ref[3]){
              return true;          
            }
            return false;
          })
        .transition().duration(1000).style("opacity","1").attr("pointer-events","all");
    } else {
      new_ref = d;
      svg.selectAll(".form")
       .filter(
          function(b){
            if (b[0] < d[0] || b[1] > d[1] || b[3] < d[3]){
              return true;
            }
            return false;
          })
      .transition().duration(1000).style("opacity","0").attr("pointer-events","none");
    }
    
    svg.selectAll(".form")
      .filter(
        function (b){
          if (b[0] >= new_ref[0] && b[1] <= new_ref[1] && b[3] >= new_ref[3]){
            return true;
          }
          return false;
        })
      .transition().duration(1000).attrTween("d",rebaseTween(d));
    
    setTimeout(function(){
      animating = false;
        if (! revert){
          last_refs.push(ref);
          ref = d;
        } else {
          ref = d;
        }
    }, 1000);


    // var textArray = d3.select(this.parentNode).select("text");
    // console.log(d[2]);

  };

  function parseLink(string){
    var str = $.parseHTML(string);
    if(str[0]){
      var source = $(str[0]).text();
      source = source.toLowerCase();
      link = source;
      return link;
    }      
  }

};


function initCheeseWheel(){
  // debugger
  function countFunction(d){
    return d[1][0];
  };
    
  function label_function(d){
    return d[2]+": "+d[4][0]+" cheeses";
  };
    
  function legendFunction(d){
    return "<h1>"+d[2]+ "</h1><p>"+d[4][0]+" cheese(s)</p>";
  };
    
  var color = d3.scale.category20b();

  function colorFunction(d){
    return color(d[0]);
  }
  
  d3.select(self.frameElement).style("height", "800px");
  createCheeseWheel("cheese_wheel",cheese_hierarchy,countFunction,colorFunction,label_function,legendFunction);
};
