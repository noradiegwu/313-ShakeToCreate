function plotDrink(ingredients){

  if(ingredients == null){
    ingredients = JSON.parse(window.localStorage.getItem('myDrink'));
    if(ingredients == null){
      document.getElementById('oops').innerHTML = "Looks like you didn't add any ingredients! Click the button to try again!"
    }
  }

  var flavDict = {'rye whiskey' : {'sweet' : .5, 'bitter' : 0,
  'fruity': 0, 'boozy' : 4, 'citrus' : 0, 'herbal' : 0,
  'smoky' : .5}, 'london dry gin' : {'sweet' : 0, 'bitter' : .5,
  'fruity': 0, 'boozy' : 3, 'citrus' : 0, 'herbal' : 1.5,
  'smoky' : 0},
  'light rum': {'sweet' : 1, 'bitter' : 0,
  'fruity': .5, 'boozy' : 3.5, 'citrus' : 0, 'herbal' : 0,
  'smoky' : 0}, 'sweet vermouth' : {'sweet' : 3.5, 'bitter' : 0,
  'fruity': .5, 'boozy' : .5, 'citrus' : 0, 'herbal' : .5,
  'smoky' : 0}, 'dry vermouth' : {'sweet' : .5, 'bitter' : .5,
  'fruity': .5, 'boozy' : 1.5, 'citrus' : 0, 'herbal' : .5,
  'smoky' : .5}, 'lemon juice' : {'sweet' : 0, 'bitter' : .75,
  'fruity': 0, 'boozy' : 0, 'citrus' : 4.25, 'herbal' : 0,
  'smoky' : 0},
  'lime juice' : {'sweet' : 0, 'bitter' : 1,
  'fruity': 0, 'boozy' : 0, 'citrus' : 4, 'herbal' : 0,
  'smoky' : 0}, 'aromatic bitters' : {'sweet' : .5, 'bitter' : 2,
  'fruity': .5, 'boozy' : 0, 'citrus' : 0, 'herbal' : 2,
  'smoky' : 0}, 'simple syrup' : {'sweet' : 5, 'bitter' : 0,
  'fruity': 0, 'boozy' : 0, 'citrus' : 0, 'herbal' : 0,
  'smoky' : 0}}

  var flavors = {'sweet' : 0, 'boozy' : 0,
  'bitter': 0, 'citrus' : 0, 'herbal' : 0, 'smoky' : 0,
  'fruity' : 0}

  for(var flav in flavors){
    for(var ingr in ingredients){
      var parts = ingredients[ingr];
      console.log(ingredients);
      flavors[flav] += flavDict[ingr][flav] * parts;
    }
  }

  var flavDict = {'rye whiskey' : {'sweet' : .5, 'bitter' : 0,
 'fruity': 0, 'boozy' : 4, 'citrus' : 0, 'herbal' : 0,
 'smoky' : .5}, 'london dry gin' : {'sweet' : 0, 'bitter' : .5,
 'fruity': 0, 'boozy' : 3, 'citrus' : 0, 'herbal' : 1.5,
 'smoky' : 0},
 'light rum': {'sweet' : 1, 'bitter' : 0,
 'fruity': .5, 'boozy' : 3.5, 'citrus' : 0, 'herbal' : 0,
 'smoky' : 0}, 'sweet vermouth' : {'sweet' : 3.5, 'bitter' : 0,
 'fruity': .5, 'boozy' : .5, 'citrus' : 0, 'herbal' : .5,
 'smoky' : 0}, 'dry vermouth' : {'sweet' : .5, 'bitter' : .5,
 'fruity': .5, 'boozy' : 1.5, 'citrus' : 0, 'herbal' : .5,
 'smoky' : .5}, 'lemon juice' : {'sweet' : 0, 'bitter' : .75,
 'fruity': 0, 'boozy' : 0, 'citrus' : 4.25, 'herbal' : 0,
 'smoky' : 0},
 'lime juice' : {'sweet' : 0, 'bitter' : 1,
 'fruity': 0, 'boozy' : 0, 'citrus' : 4, 'herbal' : 0,
 'smoky' : 0}, 'aromatic bitters' : {'sweet' : .5, 'bitter' : 2,
 'fruity': .5, 'boozy' : 0, 'citrus' : 0, 'herbal' : 2,
 'smoky' : 0}, 'simple syrup' : {'sweet' : 5, 'bitter' : 0,
 'fruity': 0, 'boozy' : 0, 'citrus' : 0, 'herbal' : 0,
 'smoky' : 0}}

 var flavors = {'sweet' : 0, 'boozy' : 0,
 'bitter': 0, 'citrus' : 0, 'herbal' : 0, 'smoky' : 0,
 'fruity' : 0}

 for(var flav in flavors){
   for(var ingr in ingredients){
     var parts = ingredients[ingr];
     flavors[flav] += flavDict[ingr][flav] * parts;
   }
 }

 var incr = 0;
 for(var f in flavors){
   incr += flavors[f];
 }

 multiplier = 100/incr;

 Highcharts.chart('container', {
    colors: ['#f78200', '#90ee7e'],
     chart: {
         polar: true,
         type: 'area',
         plotBorderColor: 'white',
         plotBackgroundColor: 'white'
     },

     credits: {
         enabled: false
     },

     title: {
         text: 'Your New Drink:',
         x: -10
     },

     pane: {
         size: '80%',
         plotBackgroundColor: '#3d4d5d'
     },

     xAxis: {
         categories: ['Sweet', 'Bitter', 'Floral', 'Boozy', 'Citrus', 'Herbacious', 'Smoky'],
         tickmarkPlacement: 'on',
         lineWidth: 0,
         gridLineColor: '#263542',
         labels: {
           style: {
             color: 'black'
         }
     }
     },

     yAxis: {
         gridLineInterpolation: 'polygon',
         lineWidth: 0,
         min: 0,
         labels: {
             enabled: false
             // formatter: function() {
             //     return this.value + '%';
             // }
         },
         gridLineColor: '#263542',
     },

     tooltip: {
         shared: true,
         pointFormat: '<span style="color:{series.color}"><strong>{point.y:.2f}%</strong><br/>'
     },

     legend: {
         align: 'right',
         verticalAlign: 'top',
         y: 70,
         layout: 'vertical',
         enabled: false
     },

     series: [{
         name: 'Drink',
         data: [flavors.sweet * multiplier, flavors.boozy * multiplier, flavors.bitter * multiplier, flavors.citrus * multiplier, flavors.herbal * multiplier, flavors.smoky * multiplier, flavors.fruity * multiplier],
         pointPlacement: 'on',
         fillColor: 'rgba(247, 130, 0, 0.2'
     }]
 });
};

function plotClassic(classic){
  var classicCocktails = {'daiquiri' : {'sweet' : 4, 'bitter' : 0,
  'fruity': 0, 'boozy' : 3, 'citrus' : 2, 'herbal' : 0,
  'smoky' : .5}};

  plotDrink(classicCocktails[classic]);
}

function openTab(evt, drinkName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(drinkName).style.display = "block";
    evt.currentTarget.className += " active";
}
