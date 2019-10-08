// // ways of creating objects

// var obj = {};
// var nextObj = Obbject.create(Oject.prototype);
// var lastObj = new Object();

// //reading and writting

// obj.param = 'new value'
// obj['param'] = 'new value'

// console.log(obj[val]);

// // Task Application
// var task = {};

// task.title = 'My task';
// task.description = 'My description';
// task.toString() = function() {
// 	return this.title + ' ' + this.description;
// }

// or

task = {
	title : 'My task',
	description : 'My description'
}

// Defining properties
Object.defineProperty(task, 'toString', {
	value: function () {
		return this.title + ' ' + this.description;		
	},
	writable: false,
	enumerabble: false,
	consfigurable: true
});

// to avoid accidental assinging of propeties such as functions,
// set writable to false
// andato hide a property from being seen wet enumerable to false
console.log(task.toString());
console.log(Object.keys(task));

//Inheritance..

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
	value: function () {
		return this.title + ' ' + 'Urgent Task';		
	},
	writable: false,
	enumerabble: false,
	consfigurable: true
});