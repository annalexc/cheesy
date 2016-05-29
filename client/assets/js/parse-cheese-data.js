var cheeseHierarchy = [];
var cheeseData;
var cheeseMilkSources;
var cheeseTypes;
var cheeseCountries;

function getData(route, callback){
  callback = callback || function(){};
  $.ajax({
    url: route,
    type: 'get',
    success: function(response){
      callback(response);
    }
  });
};


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getCount(key1, val1, key2, val2, key3, val3){
  var count = 0;
  for(var i = 0; i < cheeseData.length; i++ ){
    if (cheeseData[i][key1] == val1 && cheeseData[i][key2] == val2 && cheeseData[i][key3] == val3){
      count++
    }
  };
  return count;
};

function getCheeseSubset(key1, val1, key2, val2, key3, val3){
  var cheeseSubset = [];
  for(var i = 0; i < cheeseData.length; i++ ){
    if (cheeseData[i][key1] == val1 && cheeseData[i][key2] == val2 && cheeseData[i][key3] == val3){
      cheeseSubset.push(cheeseData[i]);
    };
  };
  return cheeseSubset;
};


function parseCheeseData(cheeses, milkSources, types, countries, callback){
  callback = callback || function(){};
  var count;
  // console.log(milkSources);
  cheeseHierarchy.push("All Cheeses");
  cheeseHierarchy.push([cheeses.length]);
  cheeseHierarchy.push({});
   
   // Loop through the cheese milk sources
   for(var i=0; i<milkSources.length; i++){
 
      cheeseHierarchy[2][milkSources[i]]= new Array;
      cheeseHierarchy[2][milkSources[i]].push("<span class='source'>"+ capitalize(milkSources[i]) +"</span>'s milk");
      cheeseHierarchy[2][milkSources[i]].push([getCount("milk_source",milkSources[i])]);
      cheeseHierarchy[2][milkSources[i]].push({});
      
      // Loop through the cheese types for a given milk source
      for(var j=0; j<types.length; j++){
        // First check to see if cheeses for that milk source and type combination exist
        countWType = getCount("milk_source",milkSources[i],"type",types[j]);
        // console.log("count for", milkSources[i], "and type", types[j], "is",count);
        if (countWType > 0){
          cheeseHierarchy[2][milkSources[i]][2][types[j]] = new Array;
          cheeseHierarchy[2][milkSources[i]][2][types[j]].push("<span class='source'>"+ capitalize(milkSources[i]) +"</span>'s milk <span class='carat'>></span> <span class='type'>" + capitalize(types[j])+"</span>");
          cheeseHierarchy[2][milkSources[i]][2][types[j]].push([countWType]);
          cheeseHierarchy[2][milkSources[i]][2][types[j]].push({});


          for(var k=0; k<countries.length; k++){
            countWCountry = getCount("milk_source",milkSources[i],"type",types[j],"country",countries[k]);
            if (countWCountry > 0){
              cheeseHierarchy[2][milkSources[i]][2][types[j]][2][countries[k]] = new Array;
              cheeseHierarchy[2][milkSources[i]][2][types[j]][2][countries[k]].push("<span class='source'>"+ capitalize(milkSources[i]) +"</span>'s milk <span class='carat'>></span> <span class='type'>" + capitalize(types[j]) +"</span> <span class='carat'>></span> <span class='country'>" + countries[k] + "</span>");
              cheeseHierarchy[2][milkSources[i]][2][types[j]][2][countries[k]].push([countWCountry]);
              cheeseHierarchy[2][milkSources[i]][2][types[j]][2][countries[k]].push({});


              cheeseSubset = getCheeseSubset("milk_source",milkSources[i],"type",types[j],"country",countries[k]);
              for(var l=0; l<cheeseSubset.length; l++){
                cheeseHierarchy[2][milkSources[i]][2][types[j]][2][countries[k]][2][cheeseSubset[l].name] = new Array;
                cheeseHierarchy[2][milkSources[i]][2][types[j]][2][countries[k]][2][cheeseSubset[l].name].push("<span class='source'>"+ capitalize(milkSources[i]) +"</span>'s milk <span class='carat'>></span> <span class='type'>" + capitalize(types[j]) +"</span> <span class='carat'>></span> <span class='country'>" + countries[k] +"</span> <span class='carat'>></span> <span class='name'>" + cheeseSubset[l].name + "</span>");
                cheeseHierarchy[2][milkSources[i]][2][types[j]][2][countries[k]][2][cheeseSubset[l].name].push("1");
                cheeseHierarchy[2][milkSources[i]][2][types[j]][2][countries[k]][2][cheeseSubset[l].name].push({});
              };
            };
          };
        };
      };
   };

  // console.log(JSON.stringify(cheeseHierarchy));
   // console.log(cheeseHierarchy);
   callback();
};


function setCheeseHierarchy(callback){
  callback = callback || function(){};
  getData('/api/cheeses/', function(cheeses){
    cheeseData = cheeses;
    getData('/api/cheeses/getdistinct/milk_source', function(sources){
      cheeseMilkSources = sources;
      
      getData('/api/cheeses/getdistinct/type', function(types){
        cheeseTypes = types;
            
        getData('/api/cheeses/getdistinct/country', function(countries){
          cheeseCountries = countries;
          // Parse Cheese Data!
          parseCheeseData(cheeseData, cheeseMilkSources, cheeseTypes, cheeseCountries, initCheeseWheel);
        });         
      
      });
    
    });

  });
  callback();
};

