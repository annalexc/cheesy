import seeder from "mongoose-seed";

const uri = process.env.MONGODB_URI;

seeder.connect(uri, function () {
    seeder.loadModels(['./server/models/cheese']);
    seeder.clearModels(['Cheese']);
    seeder.populateModels(data, function(err, done) {
      if (err) {
        console.log('Seeding error: ', err);
        return;
      } else if (done) {
        console.log('Seeding complete.');
        seeder.disconnect();
      }
    });
});

const data = [
  {
    'model': 'Cheese',
    'documents': [
      {
        "name": "Abbaye de Belval",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-hard"
      },{
        "name": "Abbaye de Citeaux",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-soft"
      },{
        "name": "Abbaye du Mont des Cats",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-soft"
      },{
        "name": "Abbot's Gold",
        "milk_source": "cow",
        "country": "United Kingdom",
        "type": "semi-hard"
      },{
        "name": "Abertam",
        "milk_source": "sheep",
        "country": "Czech Republic",
        "type": "hard"
      },{
        "name": "Abondance",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-hard"
      },{
        "name": "Acapella",
        "milk_source": "goat",
        "country": "United States",
        "type": "soft"
      },{
        "name": "Acorn",
        "milk_source": "sheep",
        "country": "United Kingdom",
        "type": "hard"
      },{
        "name": "Adelost",
        "milk_source": "cow",
        "country": "Sweden",
        "type": "semi-soft"
      },{
        "name": "ADL Brick Cheese",
        "milk_source": "cow",
        "country": "Canada",
        "type": "semi-soft"
      },{
        "name": "ADL Mild Cheddar",
        "milk_source": "cow",
        "country": "Canada",
        "type": "semi-hard"
      },{
        "name": "Affidelice au Chablis",
        "milk_source": "cow",
        "country": "France",
        "type": "soft"
      },{
        "name": "Affineur Walo Le Gruyere AOC Extra Mature",
        "milk_source": "cow",
        "country": "Switzerland",
        "type": "hard"
      },{
        "name": "Affineur Walo Rotwein Sennechäs",
        "milk_source": "cow",
        "country": "Switzerland",
        "type": "hard"
      },{
        "name": "Afuega'l Pitu",
        "milk_source": "cow",
        "country": "Spain",
        "type": "soft"
      },{
        "name": "Aged British Cheddar",
        "milk_source": "cow",
        "country": "United States",
        "type": "hard"
      },{
        "name": "Aged Chelsea",
        "milk_source": "goat",
        "country": "United States",
        "type": "soft"
      },{
        "name": "Aggiano",
        "milk_source": "cow",
        "country": "United States",
        "type": "hard"
      },{
        "name": "Ailsa Craig",
        "milk_source": "goat",
        "country": "United Kingdom",
        "type": "semi-soft"
      },{
        "name": "Airedale",
        "milk_source": "cow",
        "country": "New Zealand",
        "type": "semi-soft"
      },{
        "name": "Aisy Cendre",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-soft"
      },{
        "name": "Allgauer Emmentaler",
        "milk_source": "cow",
        "country": "Germany",
        "type": "hard"
      },{
        "name": "Allium Piper",
        "milk_source": "goat",
        "country": "Australia",
        "type": "soft"
      },{
        "name": "Alma Vorarlberger Alpkäse (3-5 months)",
        "milk_source": "cow",
        "country": "Austria",
        "type": "hard"
      },{
        "name": "Alma Vorarlberger Alpkäse (6-9 months)",
        "milk_source": "cow",
        "country": "Austria",
        "type": "hard"
      },{
        "name": "Alma Vorarlberger Bergkäse (10 months)",
        "milk_source": "cow",
        "country": "Austria",
        "type": "hard"
      },{
        "name": "Alma Vorarlberger Bergkäse (12 months)",
        "milk_source": "cow",
        "country": "Austria",
        "type": "hard"
      },{
        "name": "Alma Vorarlberger Bergkäse (6 months)",
        "milk_source": "cow",
        "country": "Austria",
        "type": "hard"
      },{
        "name": "Almnäs Tegel",
        "milk_source": "cow",
        "country": "Sweden",
        "type": "hard"
      },{
        "name": "Alpha Tolman",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Alpine Gold",
        "milk_source": "cow",
        "country": "Canada",
        "type": "semi-soft"
      },{
        "name": "Alpine-Style",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Alps Rebel",
        "milk_source": "cow",
        "country": "Austria",
        "type": "semi-hard"
      },{
        "name": "Fourme d'Ambert",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-soft"
      },{
        "name": "Ameribella",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-soft"
      },{
        "name": "American Cheese",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-soft"
      },{
        "name": "Ami du Chambertin",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-soft"
      },{
        "name": "Amish Frolic",
        "milk_source": "cow",
        "country": "United States",
        "type": "hard"
      },{
        "name": "Amul Cheese Spread",
        "milk_source": "cow",
        "country": "India",
        "type": "soft"
      },{
        "name": "Amul Emmental",
        "milk_source": "cow",
        "country": "India",
        "type": "semi-hard"
      },{
        "name": "Amul Gouda",
        "milk_source": "cow",
        "country": "India",
        "type": "semi-hard"
      },{
        "name": "Amul Pizza Mozzarella Cheese",
        "milk_source": "cow",
        "country": "India",
        "type": "semi-soft"
      },{
        "name": "Anneau du Vic-Bilh",
        "milk_source": "goat",
        "country": "France",
        "type": "soft"
      },{
        "name": "Anniversary Ale Cheddar",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Anster",
        "milk_source": "cow",
        "country": "Scotland",
        "type": "semi-hard"
      },{
        "name": "Appalachian",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-soft"
      },{
        "name": "Appenzeller",
        "milk_source": "cow",
        "country": "Switzerland",
        "type": "hard"
      },{
        "name": "Apple Walnut Smoked",
        "milk_source": "cow",
        "country": "United States",
        "type": "hard"
      },{
        "name": "Appleby's Double Gloucester",
        "milk_source": "cow",
        "country": "United Kingdom",
        "type": "hard"
      },{
        "name": "Applewood",
        "milk_source": "cow",
        "country": "United Kingdom",
        "type": "semi-hard"
      },{
        "name": "Applewood Smoked Chevre",
        "milk_source": "goat",
        "country": "United States",
        "type": "semi-soft"
      },{
        "name": "Arådalen",
        "milk_source": "cow",
        "country": "Sweden",
        "type": "soft"
      },{
        "name": "Ardi Gasna",
        "milk_source": "sheep",
        "country": "France",
        "type": "hard"
      },{
        "name": "Ardrahan",
        "milk_source": "cow",
        "country": "Ireland",
        "type": "semi-soft"
      },{
        "name": "Ardsallagh Hard Goat's Cheese",
        "milk_source": "goat",
        "country": "Ireland",
        "type": "semi-hard"
      },{
        "name": "Ardsallagh Smoked Cheese",
        "milk_source": "goat",
        "country": "Ireland",
        "type": "semi-hard"
      },{
        "name": "Ascutney Mountain",
        "milk_source": "cow",
        "country": "United States",
        "type": "hard"
      },{
        "name": "Asher Blue",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-soft"
      },{
        "name": "Ashley",
        "milk_source": "cow",
        "country": "United States",
        "type": "soft"
      },{
        "name": "Asiago",
        "milk_source": "cow",
        "country": "Italy",
        "type": "hard"
      },{
        "name": "Asiago d'Allevo",
        "milk_source": "cow",
        "country": "Italy",
        "type": "hard"
      },{
        "name": "Asiago Pressato",
        "milk_source": "cow",
        "country": "Italy",
        "type": "semi-soft"
      },{
        "name": "Aspen Ash",
        "milk_source": "goat",
        "country": "United States",
        "type": "soft"
      },{
        "name": "Aura",
        "milk_source": "cow",
        "country": "Finland",
        "type": "semi-soft"
      },{
        "name": "Avaxtskyr",
        "milk_source": "cow",
        "country": "Iceland",
        "type": "soft"
      },{
        "name": "Avonlea Clothbound Cheddar",
        "milk_source": "cow",
        "country": "Canada",
        "type": "hard"
      },{
        "name": "Azeitao",
        "milk_source": "sheep",
        "country": "Portugal",
        "type": "semi-soft"
      },{
        "name": "Boivin Marbled Cheddar",
        "milk_source": "cow",
        "country": "Canada",
        "type": "semi-soft"
      },{
        "name": "Boivin Extra Aged Cheddar",
        "milk_source": "cow",
        "country": "Canada",
        "type": "hard"
      },{
        "name": "Boeren-Leidse met sleutels",
        "milk_source": "cow",
        "country": "Netherlands",
        "type": "hard"
      },{
        "name": "Blythedale Camembert",
        "milk_source": "cow",
        "country": "United States",
        "type": "soft"
      },{
        "name": "Bluebell Falls Cygnus",
        "milk_source": "goat",
        "country": "Ireland",
        "type": "soft"
      },{
        "name": "Blue Wensleydale",
        "milk_source": "cow",
        "country": "United Kingdom",
        "type": "hard"
      },{
        "name": "Blue Rathgore",
        "milk_source": "goat",
        "country": "Ireland",
        "type": "semi-soft"
      },{
        "name": "Blue Lupine",
        "milk_source": "goat",
        "country": "United States",
        "type": "semi-soft"
      },{
        "name": "Blue Ledge La Luna",
        "milk_source": "goat",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Blue Earth",
        "milk_source": "cow",
        "country": "United States",
        "type": "soft"
      },{
        "name": "Blue Castello",
        "milk_source": "cow",
        "country": "Denmark",
        "type": "soft"
      },{
        "name": "Blu di Bufala",
        "milk_source": "water buffalo",
        "country": "Italy",
        "type": "semi-hard"
      },{
        "name": "Blu '61",
        "milk_source": "cow",
        "country": "Italy",
        "type": "soft"
      },{
        "name": "Bloomsdale",
        "milk_source": "goat",
        "country": "United States",
        "type": "soft"
      },{
        "name": "Bleubry",
        "milk_source": "cow",
        "country": "Canada",
        "type": "soft"
      },{
        "name": "Bleu Mont Dairy Bandaged Cheddar",
        "milk_source": "cow",
        "country": "United States",
        "type": "hard"
      },{
        "name": "Bleu L'Ermite",
        "milk_source": "cow",
        "country": "Canada",
        "type": "semi-soft"
      },{
        "name": "Bleu Des Causses",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-soft"
      },{
        "name": "Bleu de Laqueuille",
        "milk_source": "cow",
        "country": "France",
        "type": "soft"
      },{
        "name": "Bleu d'Auvergne",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-soft"
      },{
        "name": "Bleu Bénédictin",
        "milk_source": "cow",
        "country": "Canada",
        "type": "semi-soft"
      },{
        "name": "Blarney Castle",
        "milk_source": "cow",
        "country": "Ireland",
        "type": "semi-soft"
      },{
        "name": "Blacksticks Blue",
        "milk_source": "cow",
        "country": "United Kingdom",
        "type": "soft"
      },{
        "name": "Black Pearl",
        "milk_source": "goat",
        "country": "Australia",
        "type": "semi-hard"
      },{
        "name": "Bismark",
        "milk_source": "sheep",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Bishop Kennedy",
        "milk_source": "cow",
        "country": "Scotland",
        "type": "soft"
      },{
        "name": "Binnorie Marinated Fetta",
        "milk_source": "cow",
        "country": "Australia",
        "type": "soft"
      },{
        "name": "Bijou",
        "milk_source": "goat",
        "country": "United States",
        "type": "semi-soft"
      },{
        "name": "Big Woods Blue",
        "milk_source": "sheep",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Big John's Cajun",
        "milk_source": "cow",
        "country": "United States",
        "type": "hard"
      },{
        "name": "Bianco",
        "milk_source": "cow",
        "country": "Germany",
        "type": "semi-hard"
      },{
        "name": "Beyaz Peynir",
        "milk_source": "sheep",
        "country": "Turkey",
        "type": "semi-soft"
      },{
        "name": "Bethmale des Pyrenees",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-hard"
      },{
        "name": "Bermuda Triangle",
        "milk_source": "goat",
        "country": "United States",
        "type": "semi-soft"
      },{
        "name": "Bermondsey Hard Pressed",
        "milk_source": "cow",
        "country": "United Kingdom",
        "type": "hard"
      },{
        "name": "Berkswell",
        "milk_source": "sheep",
        "country": "United Kingdom",
        "type": "hard"
      },{
        "name": "Bergere Bleue",
        "milk_source": "sheep",
        "country": "United States",
        "type": "semi-soft"
      },{
        "name": "Bent River",
        "milk_source": "cow",
        "country": "United States",
        "type": "soft"
      },{
        "name": "Bellwether Farms Crescenza",
        "milk_source": "cow",
        "country": "United States",
        "type": "soft"
      },{
        "name": "Belle Creme",
        "milk_source": "cow",
        "country": "Canada",
        "type": "soft"
      },{
        "name": "Bella Lodi",
        "milk_source": "cow",
        "country": "Italy",
        "type": "hard"
      },{
        "name": "Bel Paese",
        "milk_source": "cow",
        "country": "Italy",
        "type": "semi-soft"
      },{
        "name": "Bel Ceillo",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Bega Processed Cheddar",
        "milk_source": "cow",
        "country": "Australia",
        "type": "soft"
      },{
        "name": "Beenleigh Blue",
        "milk_source": "sheep",
        "country": "United Kingdom",
        "type": "soft"
      },{
        "name": "Beemster Graskaas",
        "milk_source": "cow",
        "country": "Netherlands",
        "type": "semi-hard"
      },{
        "name": "Beemster Extra Aged",
        "milk_source": "cow",
        "country": "Netherlands",
        "type": "hard"
      },{
        "name": "Beemster Classic",
        "milk_source": "cow",
        "country": "Netherlands",
        "type": "semi-hard"
      },{
        "name": "Beemster Aged",
        "milk_source": "cow",
        "country": "Netherlands",
        "type": "hard"
      },{
        "name": "Beehive Fresh",
        "milk_source": "cow",
        "country": "United States",
        "type": "soft"
      },{
        "name": "Beecher's Flagship",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Beauvoorde",
        "milk_source": "cow",
        "country": "Belgium",
        "type": "semi-hard"
      },{
        "name": "Bear Hill",
        "milk_source": "sheep",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Baylough",
        "milk_source": "cow",
        "country": "Ireland",
        "type": "hard"
      },{
        "name": "Bayley Hazen Blue",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Bavarian Bergkase",
        "milk_source": "cow",
        "country": "Germany",
        "type": "hard"
      },{
        "name": "Bavaria blu",
        "milk_source": "cow",
        "country": "Germany",
        "type": "soft"
      },{
        "name": "Bath Cheese",
        "milk_source": "cow",
        "country": "United Kingdom",
        "type": "soft"
      },{
        "name": "Bath Blue",
        "milk_source": "cow",
        "country": "United Kingdom",
        "type": "soft"
      },{
        "name": "Basket Cheese",
        "milk_source": "cow",
        "country": "Middle East",
        "type": "semi-soft"
      },{
        "name": "Basing",
        "milk_source": "goat",
        "country": "United Kingdom",
        "type": "hard"
      },{
        "name": "Basils Original Rauchkäse",
        "milk_source": "cow",
        "country": "Germany",
        "type": "semi-soft"
      },{
        "name": "Baserri",
        "milk_source": "sheep",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Basajo",
        "milk_source": "sheep",
        "country": "Italy",
        "type": "semi-soft"
      },{
        "name": "Bartlett",
        "milk_source": "sheep",
        "country": "United Kingdom",
        "type": "soft"
      },{
        "name": "Barry's Bay Cheddar",
        "milk_source": "cow",
        "country": "New Zealand",
        "type": "hard"
      },{
        "name": "Barricato al Pepe",
        "milk_source": "cow",
        "country": "Italy",
        "type": "semi-hard"
      },{
        "name": "Baronerosso di Capra",
        "milk_source": "goat",
        "country": "Italy",
        "type": "semi-hard"
      },{
        "name": "Baron Bigod",
        "milk_source": "cow",
        "country": "United Kingdom",
        "type": "soft"
      },{
        "name": "Barilotto",
        "milk_source": "water buffalo",
        "country": "Italy",
        "type": "hard"
      },{
        "name": "Barely Buzzed",
        "milk_source": "cow",
        "country": "United States",
        "type": "hard"
      },{
        "name": "Barden Blue",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Barber's 1833",
        "milk_source": "cow",
        "country": "United Kingdom",
        "type": "hard"
      },{
        "name": "Barambah Organics Marinated Feta",
        "milk_source": "cow",
        "country": "Australia",
        "type": "soft"
      },{
        "name": "Banon",
        "milk_source": "goat",
        "country": "France",
        "type": "soft"
      },{
        "name": "Bandal",
        "milk_source": "cow",
        "country": "India",
        "type": "semi-soft"
      },{
        "name": "Balfour",
        "milk_source": "sheep",
        "country": "New Zealand",
        "type": "hard"
      },{
        "name": "Balaton",
        "milk_source": "cow",
        "country": "Hungary",
        "type": "semi-hard"
      },{
        "name": "Baguette Laonnaise",
        "milk_source": "cow",
        "country": "France",
        "type": "soft"
      },{
        "name": "Bad Axe",
        "milk_source": "sheep",
        "country": "United States",
        "type": "semi-hard"
      },{
        "name": "Babybel",
        "milk_source": "cow",
        "country": "France",
        "type": "semi-hard"
      },{
        "name": "Baby Swiss",
        "milk_source": "cow",
        "country": "United States",
        "type": "semi-soft"
      },{
         "name":"Cwmtawe Pecorino",
         "milk_source":"sheep",
         "country":"Wales",
         "type":"hard"
      },{
         "name":"Curworthy",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-hard"
       },{
         "name":"Cure Nantais",
         "milk_source":"cow",
         "country":"France",
         "type":"soft"
       },{
         "name":"Cup Cheese",
         "milk_source":"cow",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Cuajada",
         "milk_source":"sheep",
         "country":"Spain",
         "type":"soft"
       },{
         "name":"Crumbly Lancashire",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"hard"
       },{
         "name":"Crozier",
         "milk_source":"sheep",
         "country":"Ireland",
         "type":"semi-soft"
       },{
         "name":"Crowdie",
         "milk_source":"cow",
         "country":"Scotland",
         "type":"soft"
       },{
         "name":"Crottin du Chavignol",
         "milk_source":"goat",
         "country":"France",
         "type":"hard"
       },{
         "name":"Crottin de Chavignol",
         "milk_source":"goat",
         "country":"France",
         "type":"hard"
       },{
         "name":"Cropwell Bishop Blue Stilton",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-soft"
       },{
         "name":"Croghan",
         "milk_source":"goat",
         "country":"Ireland",
         "type":"semi-soft"
       },{
         "name":"Crocodile Tear",
         "milk_source":"goat",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Criffel",
         "milk_source":"cow",
         "country":"Scotland",
         "type":"semi-hard"
       },{
         "name":"Cressy Blu",
         "milk_source":"cow",
         "country":"Italy",
         "type":"semi-hard"
       },{
         "name":"Crescenza di Bufala",
         "milk_source":"water buffalo",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Crescenza",
         "milk_source":"cow",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Crema Mexicana",
         "milk_source":"cow",
         "country":"Mexico and Caribbean",
         "type":"soft"
       },{
         "name":"Crema Agria",
         "milk_source":"cow",
         "country":"Mexico and Caribbean",
         "type":"soft"
       },{
         "name":"Creamy Lancashire",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"soft"
       },{
         "name":"Cream Hvarti",
         "milk_source":"cow",
         "country":"Denmark",
         "type":"semi-soft"
       },{
         "name":"Cream Cheese",
         "milk_source":"cow",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Crayeux de Roncq",
         "milk_source":"cow",
         "country":"France",
         "type":"soft"
       },{
         "name":"Cravero Parmigiano Reggiano",
         "milk_source":"cow",
         "country":"Italy",
         "type":"hard"
       },{
         "name":"Cratloe Hills",
         "milk_source":"sheep",
         "country":"Ireland",
         "type":"hard"
       },{
         "name":"Cranborne",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"soft"
       },{
         "name":"Cracked Pepper Chevre",
         "milk_source":"goat",
         "country":"United States",
         "type":"semi-soft"
       },{
         "name":"Cow's Milk Gouda",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Coverdale",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"hard"
       },{
         "name":"Couronne Lochoise",
         "milk_source":"goat",
         "country":"France",
         "type":"soft"
       },{
         "name":"Coupole",
         "milk_source":"goat",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Country Morning",
         "milk_source":"cow",
         "country":"Canada",
         "type":"hard"
       },{
         "name":"Coulommiers",
         "milk_source":"cow",
         "country":"France",
         "type":"soft"
       },{
         "name":"Cougar Gold",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-soft"
       },{
         "name":"Cottage Cheese (Australian)",
         "milk_source":"cow",
         "country":"Australia",
         "type":"soft"
       },{
         "name":"Cottage Cheese",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"soft"
       },{
         "name":"Cotswold",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-hard"
       },{
         "name":"Cotija",
         "milk_source":"cow",
         "country":"Mexico",
         "type":"hard"
       },{
         "name":"Cotherstone",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-hard"
       },{
         "name":"Cote Hill Blue",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"soft"
       },{
         "name":"Cornish Yarg",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-hard"
       },{
         "name":"Cornish Wild Garlic Yarg",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-hard"
       },{
         "name":"Cornish Smuggler",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-soft"
       },{
         "name":"Cornish Pepper",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"soft"
       },{
         "name":"Cornish Kern",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"hard"
       },{
         "name":"Cornish Crumbly",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-soft"
       },{
         "name":"Cornish Brie",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"soft"
       },{
         "name":"Cornish Blue",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-soft"
       },{
         "name":"Corleggy",
         "milk_source":"goat",
         "country":"Ireland",
         "type":"hard"
       },{
         "name":"Coquetdale",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-hard"
       },{
         "name":"Cooleney",
         "milk_source":"cow",
         "country":"Ireland",
         "type":"soft"
       },{
         "name":"Coolea",
         "milk_source":"cow",
         "country":"Ireland",
         "type":"hard"
       },{
         "name":"Coolattin Cheddar",
         "milk_source":"cow",
         "country":"Ireland",
         "type":"hard"
       },{
         "name":"Consider Bardwell Farm Manchester",
         "milk_source":"goat",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Connemara",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Condio",
         "milk_source":"cow",
         "country":"Italy",
         "type":"semi-soft"
       },{
         "name":"Conciato Al Pepe",
         "milk_source":"cow",
         "country":"Italy",
         "type":"hard"
       },{
         "name":"Comtomme",
         "milk_source":"cow",
         "country":"Canada",
         "type":"semi-soft"
       },{
         "name":"Comte",
         "milk_source":"cow",
         "country":"France",
         "type":"semi-hard"
       },{
         "name":"Comox Camembert",
         "milk_source":"cow",
         "country":"Canada",
         "type":"soft"
       },{
         "name":"Comox Brie",
         "milk_source":"cow",
         "country":"Canada",
         "type":"soft"
       },{
         "name":"Colston Bassett Stilton",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-hard"
       },{
         "name":"ColoRouge",
         "milk_source":"cow",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Colony cheese",
         "milk_source":"cow",
         "country":"Brazil",
         "type":"semi-hard"
       },{
         "name":"Cold Pack",
         "milk_source":"cow",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Colby-Jack",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-soft"
       },{
         "name":"Colby",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Coeur de Chevre",
         "milk_source":"goat",
         "country":"France",
         "type":"soft"
       },{
         "name":"Coeur de Camembert au Calvados",
         "milk_source":"cow",
         "country":"France",
         "type":"soft"
       },{
         "name":"Coalho",
         "milk_source":"cow",
         "country":"Brazil",
         "type":"semi-hard"
       },{
         "name":"Clonmore",
         "milk_source":"goat",
         "country":"Ireland",
         "type":"hard"
       },{
         "name":"Classics Fresh Mozzarella",
         "milk_source":"cow",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Classico Riserva",
         "milk_source":"sheep",
         "country":"Italy",
         "type":"hard"
       },{
         "name":"Classico Pecorino Senese",
         "milk_source":"sheep",
         "country":"Italy",
         "type":"semi-hard"
       },{
         "name":"Classic Blue Log",
         "milk_source":"goat",
         "country":"United States",
         "type":"semi-soft"
       },{
         "name":"Civray",
         "milk_source":"goat",
         "country":"France",
         "type":"soft"
       },{
         "name":"Cirrus",
         "milk_source":"cow",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Cinerino",
         "milk_source":"sheep",
         "country":"Italy",
         "type":"hard"
       },{
         "name":"Chura Kampo",
         "milk_source":"yak",
         "country":"Tibet",
         "type":"hard"
       },{
         "name":"Chorlton Blue Cheshire",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-soft"
       },{
         "name":"Chontaleno",
         "milk_source":"cow",
         "country":"Mexico",
         "type":"semi-hard"
       },{
         "name":"Chocolate Stout Cheddar",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Chocolate Lab",
         "milk_source":"cow",
         "country":"United States",
         "type":"hard"
       },{
         "name":"Chiriboga Blue",
         "milk_source":"cow",
         "country":"Germany",
         "type":"semi-soft"
       },{
         "name":"Chimney Rock",
         "milk_source":"cow",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Chile Jack",
         "milk_source":"goat",
         "country":"United States",
         "type":"semi-soft"
       },{
         "name":"Chile Caciotta",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-soft"
       },{
         "name":"Childwickbury",
         "milk_source":"goat",
         "country":"United Kingdom",
         "type":"soft"
       },{
         "name":"Chhurpi",
         "milk_source":"yak",
         "country":"Nepal",
         "type":"hard"
       },{
         "name":"Chhurpi",
         "milk_source":"cow",
         "country":"Nepal",
         "type":"soft"
       },{
         "name":"Chevrotin des Aravis",
         "milk_source":"goat",
         "country":"France",
         "type":"soft"
       },{
         "name":"Chevre Log",
         "milk_source":"goat",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Chevre en Marinade",
         "milk_source":"goat",
         "country":"United States",
         "type":"semi-soft"
       },{
         "name":"Cheshire",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"hard"
       },{
         "name":"Cherokee Rose",
         "milk_source":"cow",
         "country":"United States",
         "type":"hard"
       },{
         "name":"Cheddar with Red Wine",
         "milk_source":"cow",
         "country":"Ireland",
         "type":"semi-hard"
       },{
         "name":"Cheddar with Irish Porter",
         "milk_source":"cow",
         "country":"Ireland",
         "type":"semi-hard"
       },{
         "name":"Cheddar LaDiDa Lavender",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Cheddar",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"hard"
       },{
         "name":"Checkerboard Cheddar",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Chaumes",
         "milk_source":"cow",
         "country":"France",
         "type":"semi-soft"
       },{
         "name":"Chateau de Versailles",
         "milk_source":"cow",
         "country":"Canada",
         "type":"soft"
       },{
         "name":"Charolais",
         "milk_source":"cow",
         "country":"France",
         "type":"semi-soft"
       },{
         "name":"Chapman's Pasture",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Chaource",
         "milk_source":"cow",
         "country":"France",
         "type":"soft"
       },{
         "name":"Champignon Mushrooom",
         "milk_source":"cow",
         "country":"Germany",
         "type":"soft"
       },{
         "name":"Champignon de Luxe Pepper",
         "milk_source":"cow",
         "country":"Germany",
         "type":"soft"
       },{
         "name":"Champignon de Luxe Garlic",
         "milk_source":"cow",
         "country":"Germany",
         "type":"soft"
       },{
         "name":"Challerhocker",
         "milk_source":"cow",
         "country":"Switzerland",
         "type":"hard"
       },{
         "name":"Chabis de Gatine",
         "milk_source":"goat",
         "country":"France",
         "type":"soft"
       },{
         "name":"Chabichou du Poitou",
         "milk_source":"goat",
         "country":"France",
         "type":"soft"
       },{
         "name":"Cerney Pyramid",
         "milk_source":"goat",
         "country":"United Kingdom",
         "type":"soft"
       },{
         "name":"Cendre d'Olivet",
         "milk_source":"cow",
         "country":"France",
         "type":"soft"
       },{
         "name":"Celtic Promise",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"semi-soft"
       },{
         "name":"Caveman Blue",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Cave Rebel",
         "milk_source":"cow",
         "country":"Austria",
         "type":"hard"
       },{
         "name":"Cave Aged Marisa",
         "milk_source":"sheep",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Castle Blue",
         "milk_source":"cow",
         "country":"Canada",
         "type":"semi-soft"
       },{
         "name":"Castelmagno",
         "milk_source":"cow",
         "country":"Italy",
         "type":"semi-hard"
       },{
         "name":"Cashel Blue",
         "milk_source":"cow",
         "country":"Ireland",
         "type":"semi-soft"
       },{
         "name":"Casatica",
         "milk_source":"water buffalo",
         "country":"Italy",
         "type":"semi-soft"
       },{
         "name":"Carrowholly",
         "milk_source":"cow",
         "country":"Ireland",
         "type":"hard"
       },{
         "name":"Carrot Rebel",
         "milk_source":"cow",
         "country":"Austria",
         "type":"semi-hard"
       },{
         "name":"Carr Valley Glacier Wildfire Blue",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-soft"
       },{
         "name":"Caronzola",
         "milk_source":"cow",
         "country":"Canada",
         "type":"soft"
       },{
         "name":"Carnia Altobut",
         "milk_source":"cow",
         "country":"Italy",
         "type":"hard"
       },{
         "name":"Carmody",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Carlow",
         "milk_source":"cow",
         "country":"Ireland",
         "type":"semi-hard"
       },{
         "name":"Carlina",
         "milk_source":"cow",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Cardo",
         "milk_source":"goat",
         "country":"United Kingdom",
         "type":"semi-soft"
       },{
         "name":"Carabiner",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Caprotto",
         "milk_source":"goat",
         "country":"Italy",
         "type":"hard"
       },{
         "name":"Capriole Banon",
         "milk_source":"goat",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Capriny",
         "milk_source":"goat",
         "country":"Canada",
         "type":"soft"
       },{
         "name":"Capricorn Somerset Goats Cheese",
         "milk_source":"goat",
         "country":"United Kingdom",
         "type":"soft"
       },{
         "name":"Capricious",
         "milk_source":"goat",
         "country":"United States",
         "type":"hard"
       },{
         "name":"Caprice des Dieux",
         "milk_source":"cow",
         "country":"France",
         "type":"soft"
       },{
         "name":"Caprice",
         "milk_source":"goat",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Capriago",
         "milk_source":"goat",
         "country":"United States",
         "type":"hard"
       },{
         "name":"Capri Blu",
         "milk_source":"goat",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Caprese di Bufala",
         "milk_source":"water buffalo",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Capraricca",
         "milk_source":"goat",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Caprano",
         "milk_source":"goat",
         "country":"Canada",
         "type":"semi-hard"
       },{
         "name":"Capra Nouveau",
         "milk_source":"goat",
         "country":"United Kingdom",
         "type":"semi-soft"
       },{
         "name":"Capra al Pepe",
         "milk_source":"goat",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Capra al Fieno",
         "milk_source":"goat",
         "country":"Italy",
         "type":"semi-soft"
       },{
         "name":"Cape Vessey",
         "milk_source":"goat",
         "country":"Canada",
         "type":"semi-soft"
       },{
         "name":"Cap Cressy",
         "milk_source":"goat",
         "country":"Italy",
         "type":"semi-hard"
       },{
         "name":"Cantal",
         "milk_source":"cow",
         "country":"France",
         "type":"semi-hard"
       },{
         "name":"Cancoillotte (Cancoyotte)",
         "milk_source":"cow",
         "country":"France",
         "type":"soft"
       },{
         "name":"Canadian Cheddar",
         "milk_source":"cow",
         "country":"Canada",
         "type":"hard"
       },{
         "name":"Cana de Oveja",
         "milk_source":"sheep",
         "country":"Spain",
         "type":"semi-soft"
       },{
         "name":"Cana de Cabra",
         "milk_source":"goat",
         "country":"Spain",
         "type":"semi-soft"
       },{
         "name":"Campi",
         "milk_source":"water buffalo",
         "country":"Italy",
         "type":"semi-hard"
       },{
         "name":"Campfire",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-hard"
       },{
         "name":"Cameo",
         "milk_source":"goat",
         "country":"United States",
         "type":"semi-soft"
       },{
         "name":"Camembert des Camarades",
         "milk_source":"cow",
         "country":"Canada",
         "type":"soft"
       },{
         "name":"Camembert de Portneuf",
         "milk_source":"cow",
         "country":"Canada",
         "type":"soft"
       },{
         "name":"Camembert de Normandie",
         "milk_source":"cow",
         "country":"France",
         "type":"soft"
       },{
         "name":"Camembert",
         "milk_source":"cow",
         "country":"France",
         "type":"soft"
       },{
         "name":"Cambozola Grand Noir",
         "milk_source":"cow",
         "country":"Germany",
         "type":"semi-soft"
       },{
         "name":"Cambazola",
         "milk_source":"cow",
         "country":"Germany",
         "type":"soft"
       },{
         "name":"California Crottin",
         "milk_source":"goat",
         "country":"United States",
         "type":"soft"
       },{
         "name":"Calenzana",
         "milk_source":"cow",
         "country":"France",
         "type":"semi-soft"
       },{
         "name":"Calcagno",
         "milk_source":"sheep",
         "country":"Italy",
         "type":"hard"
       },{
         "name":"Cairnsmore",
         "milk_source":"sheep",
         "country":"Scotland",
         "type":"hard"
       },{
         "name":"Cahill's Irish Porter Cheddar",
         "milk_source":"cow",
         "country":"Ireland",
         "type":"semi-hard"
       },{
         "name":"Caerphilly",
         "milk_source":"cow",
         "country":"United Kingdom",
         "type":"hard"
       },{
         "name":"Cacow Belle",
         "milk_source":"cow",
         "country":"United States",
         "type":"semi-soft"
       },{
         "name":"Caciocavallo Podolico Vetus",
         "milk_source":"cow",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Caciocavallo di Bufala",
         "milk_source":"water buffalo",
         "country":"Italy",
         "type":"semi-hard"
       },{
         "name":"Caciocavallo",
         "milk_source":"cow",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Caciobufala",
         "milk_source":"water buffalo",
         "country":"Italy",
         "type":"semi-hard"
       },{
         "name":"Caciobirraio",
         "milk_source":"cow",
         "country":"Italy",
         "type":"soft"
       },{
         "name":"Caciobarricato",
         "milk_source":"cow",
         "country":"Italy",
         "type":"semi-soft"
       },{
         "name":"Cacio di Bosco al Tartufo",
         "milk_source":"sheep",
         "country":"Italy",
         "type":"semi-hard"
       },{
         "name":"Cachaille",
         "milk_source":"goat",
         "country":"France",
         "type":"soft"
       },{
         "name":"Cabrales",
         "milk_source":"cow",
         "country":"Spain",
         "type":"semi-hard"
       },{
         "name":"Cabot Clothbound",
         "milk_source":"cow",
         "country":"United States",
         "type":"hard"
       },{
         "name":"Caboc",
         "milk_source":"cow",
         "country":"Scotland",
         "type":"soft"
       },{
         "name":"Cabecou",
         "milk_source":"goat",
         "country":"France",
         "type":"soft"
       }
    ]
  }
];