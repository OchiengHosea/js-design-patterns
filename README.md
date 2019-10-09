// Constructor Pattern
// used to create new objects with their own object scope

// If you put the 'new' keyword before a function, it will create a new Object
<h2>Constructor Pattern</h2>
used to create new objects with their own object scope

If you put the 'new' keyword before a function, 
 - it will create a new Object
 - It links to an Oject prototype
 - Binds this to the new Object Scope
 - implicitly returns this



function ObjectName(param1, param2) {
	this.param1 = param1;
	this.param2 = param2;
	this.toString = function () {
		return this.param1 + ' ' + this.param2;
	}
}

<b>Drawbacks</b>
The function in the Object is recreated everytime you instantiatiate a new object using the above method.

To solve this, we use Prototype

<h2>Module Pattern</h2>
Module patern encapsulates a group of method that are alike
like a group of methods for api calls or database calls

So in this we're gonna create module to simulate database transaction

