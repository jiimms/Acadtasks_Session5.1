

function  calcCircleArea(r) {
 return Math.PI*Math.pow(r, 2)
 }
var rad= prompt("Give the radius of the circle to calculate area")
  

 document.getElementById("area").innerHTML += "r= 7;  " + "area= "+ calcCircleArea(7) +"<BR>"+"<BR>"  ;
 document.getElementById("area").innerHTML += "r= 1.5;  " + "area= "+ calcCircleArea(1.5) +"<BR>"+"<BR>" ;
 document.getElementById("area").innerHTML += "r= 20;  " + "area= "+ calcCircleArea(20) +"<BR>"+"<BR>" ;
 document.getElementById("area").innerHTML += "r= " + rad + "; " + "area= "+ calcCircleArea(rad) +"<BR>"+"<BR>"  ;
 //document.write( "r= 7; " + "area= "+  calcCircleArea(7)+"<BR>"+"<BR>" );

