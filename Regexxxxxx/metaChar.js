//Learning MetaCharacters
//Scenario #2 => We have a regular expression, we want to find a particular word within the string but we dont remember the whole word
//Metacharacters are characters with special meaning like Dot character
var regex = /We.come/    
var string1 = "Welcome to our youtube channel, Welcome back"
var output = regex.test(string1) 
console.log(output)
let op = regex.exec(string1)
console.log(op)