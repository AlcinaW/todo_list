var app = angular.module('todoApp', []);

function TodoCtrl() {
  this.todo;
  this.todos = [
    {text: 'learn angular', done: false},
    {text: 'write the content for the next module', done: false},
    {text: 'buy cheese', done: true},
  ];
  
  this.filters = [
    {label: 'All', showTodo: function(todo) {return true;}},
    {label: 'Active', showTodo: function(todo) {return !todo.done;}},
    {label: 'Complete', showTodo: function(todo) {return todo.done;}}
  ]
  this.selected=this.filters[0];
}

app.controller('TodoCtrl', TodoCtrl);

TodoCtrl.prototype.addTodo = function(){
  console.log(this.NewtoDo);
	var AddedtoDo = { 
    text: this.NewtoDo,
    done: false 
		};
	this.todos.push(AddedtoDo);
};

TodoCtrl.prototype.clearComplete = function(){
  for (i=this.todos.length-1; i>=0; i--){
    if (this.todos[i].done === true) {
      this.todos.splice(i, 1);
    }
  }
};
// OR
//   for (i in this.todos){
//     if (this.todos[i].done) {
//       this.todos.splice(i, 1);
//     }
//   }
// };


// TodoCtrl.disabledButton = function (){
//   if 
// }





