var Repo = require('./taskrepo');

var Task = function(data) {
	this.name = data.name;
	this.completed = false;
}

// take out the methods into a prototype

Task.prototype.complete = function() {
	console.log('completing task '+ this.name);
	this.completed = true;
}

Task.prototype.save = function() {
	console.log('saving task: '+ this.name);
	Repo.save(this);
}

module.exports = Task;