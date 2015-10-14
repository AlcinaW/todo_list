var app = angular.module('todoApp', []);

function TodoCtrl() {
  this.todos = [
    {text: 'learn angular', done: false},
    {text: 'write the content for the next module', done: false},
    {text: 'buy cheese', done: true}
  ];
  
  this.filters = [
    {label: 'All', showTodo: function(todo) {return true;}},
    {label: 'Active', showTodo: function(todo) {return !todo.done;}},
    {label: 'Complete', showTodo: function(todo) {return todo.done;}}
  ]
}

app.controller('TodoCtrl', TodoCtrl);

// TodoCtrl.prototype.addTodo = function(){
// 	var AddedtoDo = {
// 			text: " ", done: false
// 		};
// 	this.todo.push(AddedtoDo);
// };


