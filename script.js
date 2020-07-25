var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
var txtElement = document.querySelector('#text2')


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
  listElement.innerHTML = '';

  for(todo of todos){
  var todoElement = document.createElement('li');
  var todoText = document.createTextNode(todo);

  var linkElement = document.createElement('a');

  linkElement.setAttribute('href', "#");
  var pos = todos.indexOf(todo);
  linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')');


  var linkText = document.createTextNode(' - Excluir'); 

  linkElement.appendChild(linkText);

  todoElement.appendChild(todoText);
  todoElement.appendChild(linkElement);

  listElement.appendChild(todoElement);
}
}
renderTodos();

var todo1 = "Tarefa Adicionada";
var todo2 = "Tarefa Excluída";
function addTodo() {
var todoText = inputElement.value;
todos.push(todoText);
inputElement.value = '';
renderTodos();
saveToStorage();
alert(todo1);

}
buttonElement.onclick = addTodo;

function deleteTodo(pos) {
todos.splice(pos, 1);
renderTodos();
saveToStorage();
alert(todo2);

}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos) );
}


var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado
console.log(textElement + 'Hoje é ' + str_data + ' às ' + str_hora);
print.str_data;