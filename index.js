var katzDeli = [];
 function takeANumberNew(line){


 }

  function nowServing(line) {
   if(!line.length) {
     console.log("There is nobody waiting to be served!")
     return "There is nobody waiting to be served!"
   } else {

      return "Currently serving " + line.shift() + ".";
   }
 }
 function currentLine(line){
   if(!line.length) {
     return "The line is currently empty.";
   }
   var lineName = [];

    for(var i=0; i<line.length; i++) {
     lineName.push(i+1 + ". "+ line[i]);
   }
   console.log("The line is currently: " + lineName)
   return "The line is currently: " + lineName.join(', ');
 }




  takeANumber(katzDeli, "Ada")
 takeANumber(katzDeli, "Grace")
 takeANumber(katzDeli, "Kent")
 currentLine(katzDeli);
 nowServing(katzDeli);
 takeANumber(katzDeli, "Matz");
 currentLine(katzDeli);
 nowServing(katzDeli);
 currentLine(katzDeli)
