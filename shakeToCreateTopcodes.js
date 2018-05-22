 // TODO: check todos throughout file

 var done_pouring_flag = false; // not really using it rn, may not need it anymore
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
   if (topcodes[0]) { // rye whiskey
       angle = topcodes[0].angle;
       pourIngredient(topcodes[0]);
       // console.log(angle); // check rotation --> (pourIngredient(topcode[i]))
       // pourIngredient(topcodes[i]);
   }
 });

// TODO: HIDE VIDEO ON SCREEN

 /*
 // // TODO:  gather information about rotation
 // return intensity of pouring
 */
 function pourIngredient(topcode)
 {
   var angle = topcode.angle;
   var ingredient = '';

   switch (topcode.code) {
     case 93:
        ingredient = 'rye whiskey';
        break;
     case 361:
        ingredient = 'lemon juice';
        break;
     case 313:
        ingredient = 'sweet vermouth'
        break;
     case 93:
        ingredient = 'london dry gin';
        break;
     case 361:
        ingredient = 'light rum';
        break;
     case 313:
        ingredient = 'dry vermouth'
        break;
     case 93:
        ingredient = 'simple syrup';
        break;
     case 361:
        ingredient = 'lime juice';
        break;
     case 313:
        ingredient = 'aromatic bitters'
        break;
     default:
        ingredient = ''
   }

   // reset amount poured each new inredient
   if (ingredient_dictionary[ingredient] == 0) {
     done_pouring_flag = false;
   }

   if (ingredient_dictionary[ingredient] > 0 && angle > 3.4 && !done_pouring_flag){
     done_pouring_flag = true;
     // console.log("*******flag?: " + done_pouring_flag)
     return;

   } else if (angle >= Math.PI && !done_pouring_flag){ // overshot and not done pouring --> do nothing
     angle = Math.PI;
     // console.log("AAA: " + ingredient_dictionary[ingredient]);

   } else if (angle < Math.PI && angle >= (0.75 * Math.PI) && !done_pouring_flag && ingredient_dictionary[ingredient] < 1){
     // between PI and 3/4 PI and not done pouring
     ingredient_dictionary[ingredient] = 1; // ounces
     // console.log("BBB: " + ingredient_dictionary[ingredient]);

   } else if (angle < (0.75 * Math.PI) && angle >= (0.5 * Math.PI) && !done_pouring_flag && ingredient_dictionary[ingredient] < 2){
     // between 3/4 PI and 1/2PI and not done pouring
     ingredient_dictionary[ingredient] = 2;
     // console.log("CCC: " + ingredient_dictionary[ingredient]);

   } else if (angle < (0.5 * Math.PI) && !done_pouring_flag && ingredient_dictionary[ingredient] < 3){
     // less than 1/2PI not done pouring
      ingredient_dictionary[ingredient] = 3;
      // console.log("DDD: " + ingredient_dictionary[ingredient]);

   }

   // console.log(angle);
   // console.log(ingredient + ":  " + ingredient_dictionary[ingredient]);
   document.getElementById('ingredients').innerHTML = ingredient + ":  " + ingredient_dictionary[ingredient];
   // console.log('FLAG:' + done_pouring_flag)

 }

 function done_pouring() {
   var display = '';
   for (i in ingredient_dictionary) {
     if (ingredient_dictionary[i] > 0) {
       var amount_of_ing = i + ":  " + ingredient_dictionary[i]
       display += amount_of_ing + '\n';
       // console.log(i + ":  " + ingredient_dictionary[i]);
    }
   }
   document.getElementById('ingredients').innerHTML = v;
 }



 // // // TODO:  figure out solids...
