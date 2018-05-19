/* tracking motion for topcodes
 * * * rotation for pouring
 * * * tracking movement in lower_y --> higher_y for shaking
 * * * */

 // TODO: check todos throughout file

 // button = document.getElementById("start-button");
 // button.addEventListener("click", TopCodes.startStopVideoScan('video-canvas'));

 // register a callback function with the TopCode library
 TopCodes.setVideoFrameCallback("video-canvas", function (jsonString)
 {
   // convert the JSON string to an object
   var json = JSON.parse(jsonString);
   // get the list of topcodes from the JSON object
   var topcodes = json.topcodes;
   // obtain a drawing context from the <canvas>
   var ctx = document.querySelector("#video-canvas").getContext('2d');
   if(topcodes[0].code % 2 != 0) {// liquid (poured/rotated items)
       angle = topcodes[0].angle;
       pourIngredient(topcodes[0]);
       console.log(angle); // check rotation --> (pourIngredient(topcode[i]))
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
   var how_much_poured = 0;
   var angle = topcode.angle;
   var done_pouring_flag = false;
   while(!done_pouring_flag){
     if (how_much_poured > 0 && angle > 4.0 && !done_pouring_flag){
       done_pouring_flag = true;
       debugger;
     } else if (angle >= Math.PI && !done_pouring_flag){ // overshot and not done pouring --> do nothing
       angle = Math.PI;
       console.log("AAA: " + how_much_poured);
       debugger;
     } else if (angle < Math.PI && angle >= (0.75 * Math.PI) && !done_pouring_flag){
       // between PI and 3/4 PI and not done pouring
       how_much_poured = 1; // ounces
       console.log("BBB: " + how_much_poured);
       debugger;
     } else if (angle < (0.75 * Math.PI) && angle >= (0.5 * Math.PI) && !done_pouring_flag){
       // between 3/4 PI and 1/2PI and not done pouring
       how_much_poured = 2;
       console.log("CCC: " + how_much_poured);
       debugger;
     } else if (angle < (0.5 * Math.PI) && !done_pouring_flag){
       // less than 1/2PI not done pouring
        how_much_poured = 3;
        console.log("DDD: " + how_much_poured);
        debugger;
     }
   }
   // console.log(angle);
   console.log("FINITO: " + how_much_poured);
   debugger;
   // return how_much_poured; // in terms or 0.25 oz?
   // return;
 }

 /*
 // // // TODO:  figure out solids...
 // // return intensity of shaking
 // */
 // function shakeIngredient(topcode)
 // { /////// may be incredibly difficult to track fast shaking ////////
 //   var intensity = 0;
 //   return speed; // in terms of speed (distance covered in a ms)?
 //   // some decimal (shake every 0.5 or 0.3 or 1 etc. sec)
 // }
