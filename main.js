var Task = require('./task');
var Repo = require('./taskrepo');

//var task1 = new Task('My task 1, Constructors');
var task1 = new Task(Repo.get(1));
var task2 = new Task({name:'My task 2, Modules'});
var task3 = new Task({name:'My task 3, Singletons'});
var task4 = new Task({name:'My task 4, prototypes'});

task1.complete();
task1.save();
task2.save();
task3.save();
task4.save();