var temp = ""
var userInput = 32
var unit = "S"

if(unit === "F") {
	temp = (temp - 32) * (5/9);
	console.log('(' + userInput + "°F) - 32) * (5/9) =" + temp + "°C");
}else if(unit === "C") {
	temp = temp * (9/5) + 32;
	console.log(userInput + "°C" + "* 9/5 + 32 =" + temp + "°F");
}else{
	console.log("wtf?")
}