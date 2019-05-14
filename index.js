function dwarfRollCall(dwarves) {
  
  var names = "";
  
  for (var i = 0; i < dwarves.length; i++) {
    
    names += [i + 1] + ". " + dwarves[i] + " ";
    
  }
  
  return names;
  
}

function summonCaptainPlanet(planeteerCalls) {
  
  var calls = [];
  
  for (var i = 0; i < planeteerCalls.length; i++) {
    
    calls.push(planeteerCalls[i].toUpperCase() + "!");
    
  }
  
  return calls;
  
}

function longPlaneteerCalls(call) {
  
  var longCall = false;
  
  for (var i = 0; i < call.length; i++) {
    
    if (call[i].length > 4) {
      
      longCall = true;
      
    }
    
  }
  
  return longCall;
  
}

function findTheCheese(recipe) {
 
 var cheeses = ["cheddar", "gouda", "camembert", "swiss"];
 
 for (var i = 0; i < recipe.length; i++) {
   
   for (var c = 0; c < cheeses.length; c++) {
     
     if (recipe[i] === cheeses[c]) {
       
       return recipe[i];
       
     }
     
   }
   
 }
 
 return "no cheese!";
 
}


function wordsWithB(words) {

  var bWords = [];

  for (var i = 0; i < words.length; i++) {

    bWords = words.includes("b");
    
  }
  
  return bWords;
}

