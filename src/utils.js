const jsonFile = "https://api.myjson.com/bins/9l2ez";
const list = document.getElementById('todoList');

class Todo {
  
  init () {
    fetch(jsonFile)
    .then((response) => {
      response.json().then((data) => {
        this.handleData(data);
      })
    }).catch((error) => {
      document.appendChild(`Error with Fetch \n ${error}`);
    });
  }
  
  static handleData(data)  {
    const { todos } = data;
    todos.map((todo) => {
      const item = document.createElement('li');
      if (todo.complete) {
        item.innerHTML = `<s>${todo.label}</s>`;
      } else {
        item.innerHTML = `${todo.label}`;
      }
      return list.appendChild(item);
    });
  }
}

const todo = new Todo();
todo.init();