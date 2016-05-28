var cheese_hierarchy = [];
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


function getCount(key1, val1, key2, val2, key3, val3){
  var count = 0;
  for(var i = 0; i < cheeseData.length; i++ ){
    if (cheeseData[i][key1] == val1 && cheeseData[i][key2] == val2 && cheeseData[i][key3] == val3){
      count++
    }
  };
  return count;
};


function parseCheeseData(cheeses, milkSources, types, countries, callback){
  callback = callback || function(){};
  var count;
  // console.log(milkSources);
  cheese_hierarchy.push("Cheeses");
  cheese_hierarchy.push([cheeses.length]);
  cheese_hierarchy.push({});
   
   // Loop through the cheese milk sources
   for(var i=0; i<milkSources.length; i++){
 
      cheese_hierarchy[2][milkSources[i]]= new Array;
      cheese_hierarchy[2][milkSources[i]].push("Milk Source: " + milkSources[i]);
      cheese_hierarchy[2][milkSources[i]].push([getCount("milk_source",milkSources[i])]);
      cheese_hierarchy[2][milkSources[i]].push({});
      
      // Loop through the cheese types for a given milk source
      for(var j=0; j<types.length; j++){
        // First check to see if cheeses for that milk source and type combination exist
        countWType = getCount("milk_source",milkSources[i],"type",types[j]);
        // console.log("count for", milkSources[i], "and type", types[j], "is",count);
        if (countWType > 0){
          cheese_hierarchy[2][milkSources[i]][2][types[j]] = new Array;
          cheese_hierarchy[2][milkSources[i]][2][types[j]].push("Milk Source: " + milkSources[i] + "\n" + "Type: " + types[j]);
          cheese_hierarchy[2][milkSources[i]][2][types[j]].push([countWType]);
          cheese_hierarchy[2][milkSources[i]][2][types[j]].push({});


          for(var k=0; k<countries.length; k++){
            countWCountry = getCount("milk_source",milkSources[i],"type",types[j],"country",countries[k]);
            if (countWCountry > 0){
              cheese_hierarchy[2][milkSources[i]][2][types[j]][2][countries[k]] = new Array;
              cheese_hierarchy[2][milkSources[i]][2][types[j]][2][countries[k]].push("Milk Source: " + milkSources[i] + " | Type: " + types[j] + " | Country: " + countries[k]);
              cheese_hierarchy[2][milkSources[i]][2][types[j]][2][countries[k]].push([countWCountry]);
              cheese_hierarchy[2][milkSources[i]][2][types[j]][2][countries[k]].push({});

            };
          };
        };
      };
   };

    // console.log(JSON.stringify(cheese_hierarchy));
   // console.log(cheese_hierarchy);
   callback();
};


function setCheeseHierarchy(){

  getData('/api/cheeses/', function(cheeses){
    cheeseData = cheeses;
    getData('/api/cheeses/getdistinct/milk_source', function(sources){
      cheeseMilkSources = sources;
      
      getData('/api/cheeses/getdistinct/type', function(types){
        cheeseTypes = types;
            
        getData('/api/cheeses/getdistinct/country', function(countries){
          cheeseCountries = countries;
          // Parse Cheese Data!
          parseCheeseData(cheeseData, cheeseMilkSources, cheeseTypes, cheeseCountries, init_plots);
          
        });         
      
      });
    
    });

  });
};

