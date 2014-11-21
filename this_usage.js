
//this is a generic pointer used inside a function that refers to the name of 
//the object that is invoking the function.

//in the cases below getName is invoked first inside person and next inside house.

// when invoked inside person, javascript knows that this.fn refers to person.fn
// which equals "joe".  

//When invoked inside house, js knows that this.fn refers to house.fn
//which equals "Seven".


// this allows a relatively high,level function with broad application to be called
// deep in the code without being re-written.


var getName = function() {return this.fn + " "+ this.ln }

person = {
	fn: "joe", 
	ln: "mcd", 
	saynm:getName},


person.saynm();	

house = {
	fn:"Seven",
	ln:"Gables",
	sz:"Huge", 
	ident:getName}

house.ident();
