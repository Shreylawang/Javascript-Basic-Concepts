
//Learning Regex
//Search or replace anything in a string we can use regular expressions (Regex) 

//Senario #1 => WE have a String and we have to find a particular word  
// var regex = /Hello/
// var string1 = "Hi!, My name is Hello"

//exec() -> REturns an array if the word is present in the string  

// var output = regex.exec(string1);
//Output variable = wordWeWantToFind.exe(String)
// console.log(output)


//Regex in javascript are case senstive
//We can make them case insensitive as well by using modifier
//Modifier is used to make modifications in the search

// var regex = /Hello/i //We are using modifier "i",which tells the system there's no problem with the case sensitivity        
                
// var string1 = "Hi! Hello !, My name is Hello" //It will only return the index of the first hello only 
// var output = regex.exec(string1);
// console.log(output)

// The solution of this problem is "g" modifier 

// The "g" modifier specifies a global match.
// A global match finds all matches (compared to only the first).

// var regex = /Hello/g //Commencing Global search
// var string1 = "Hi! Hello !, My name is Hello" 
// var output = regex.exec(string1); //REturn first hello
// console.log(output)
// var output = regex.exec(string1); //Return second hello
// console.log(output)


//test() -> Returns True if word is present, False if word is not present

// var regex = /ello/g //Commencing Global search
// var string1 = "Hi! Hello !, My name is Hello" 
// var output = regex.test(string1); //REturn True if hello is present, False if hello is absent 
// console.log(output)
//test() function checks for every letter

//match() -> Returns array of results otherwise none

// var regex = /Hello/g    
// var string1 = "Hi! Hello !, My name is Hello!, Hello! "
// var output = string1.match(regex) 
// console.log(output)

//replace() -> Replace something from the string, we cam replace either first matching word or all the matching word from a string by using global modifier

var regex = /Hello/g    
var string1 = "Hi! Hello !, My name is Hello!, Hello! "
var output = string1.replace(regex,"Yello") 
console.log(output)
//Output -> Hi! Yello !, My name is Yello!, Yello!