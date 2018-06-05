 var ingredient_dictionary = {'rye whiskey' : 0, 'london dry gin' : 0,
 'light rum': 0, 'sweet vermouth' : 0, 'dry vermouth' : 0, 'lemon juice' : 0,
 'lime juice' : 0, 'aromatic bitters' : 0, 'simple syrup' : 0}

 // register a callback function with the TopCode library
 TopCodes.setVideoFrameCallback("video-canvas", function (jsonString)
 {
   // convert the JSON string to an object
   var json = JSON.parse(jsonString);

   // get the list of topcodes from the JSON object
   var topcodes = json.topcodes;

   // obtain a drawing context from the <canvas>
   var ctx = document.querySelector("#video-canvas").getContext('2d');
   if (topcodes[0]) {
       angle = topcodes[0].angle;
       pour_ingredient(topcodes[0]);
   }
 });

 function pour_ingredient(topcode)
 {
   var angle = topcode.angle;
   var ingredient = '';

   switch (topcode.code) {
     case 61:
        ingredient = 'rye whiskey';
        break;
     case 87:
        ingredient = 'lemon juice';
        break;
     case 79:
        ingredient = 'sweet vermouth'
        break;
     case 91:
        ingredient = 'london dry gin';
        break;
     case 179:
        ingredient = 'light rum';
        break;
     case 121:
        ingredient = 'dry vermouth'
        break;
     case 143:
        ingredient = 'simple syrup';
        break;
     case 151:
        ingredient = 'lime juice';
        break;
     case 117:
        ingredient = 'aromatic bitters'
        break;
     default:
        ingredient = ''
   }

   if (angle >= Math.PI ){ // overshot and not done pouring --> do nothing
     angle = Math.PI;
   } else if (angle < Math.PI && angle >= (0.75 * Math.PI) && ingredient_dictionary[ingredient] < 1){
     ingredient_dictionary[ingredient] = 1; // ounces
   } else if (angle < (0.75 * Math.PI) && angle >= (0.5 * Math.PI)  && ingredient_dictionary[ingredient] < 2){
     ingredient_dictionary[ingredient] = 2;
   } else if (angle < (0.5 * Math.PI)  && ingredient_dictionary[ingredient] < 3){
      ingredient_dictionary[ingredient] = 3;
   }

   var li_ids = ['rye', 'sweet', 'dry vermouth', 'london', 'rum', 'lemon', 'lime', 'syrup', 'bitters']

   for(var i = 0; i < li_ids.length ; i++) {
     // console.log("here: " + li_ids[i]);
     // console.log("hello: " + ingredient.search(li_ids[i]));
     if(ingredient.includes(li_ids[i])) {
       var ounces = (ingredient_dictionary[ingredient]+ " oz").toString().bold() ;
       document.getElementById(li_ids[i]).innerHTML = ingredient + ":  " + ounces;
     }
   }
 }

 // connects to stop button on html page
 function done_pouring() {
   var display = '';
   for (i in ingredient_dictionary) {
     if (ingredient_dictionary[i] > 0) {
       var amount_of_ing = i + ":  " + ingredient_dictionary[i];
       display += amount_of_ing + '\n';
    }
   }
   TopCodes.startStopVideoScan('video-canvas')
   // pass ingredient_dictionary to graph
   localStorage.setItem('myDrink', JSON.stringify(ingredient_dictionary))
 }
