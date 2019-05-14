function dwarfRollCall(dwarves) {
  
  var names = ""
  
  for (var i = 0; i < dwarves.length; i++) {
    
    names += [i + 1] + ". " + dwarves[i] + " "
    
  }
  
  return names
  
}

function summonCaptainPlanet(planeteerCalls) {
  
  var calls = [];
  
  for (var i = 0; i < planeteerCalls.length; i++) {
    
    calls.push(planeteerCalls[i].toUpperCase() + "!")
  }
 
 return calls
  
}

function longPlaneteerCalls(words) {
  
  var longCalls = false;
  
  for (var i = 0; i < words.length; i++) {
    
    if (4 < words[i].length) {
      
      longCalls = true;
      
    }
  }
  
  return longCalls;
  
}

function findTheCheese(foods) {
  
  var cheeses = ["cheddar", "gouda", "camembert"];
  
  for (var i = 0; i < foods.length; i ++) {
    
    for (var c = 0; c < cheeses.length; c++) {
      
      if (foods[i] === cheeses[c]) {
        
        return foods[i];
      }
    }
  }
  
  return "no cheese!"
}
