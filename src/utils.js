const jsonFile = 'https://api.myjson.com/bins/9l2ez';
const list = document.getElementById('todoList');

class Todo {
  init() {
    fetch(jsonFile).then((response) => {
      response.json().then((data) => {
        this.handleData(data);
      });
    }).catch((error) => {
      document.appendChild(`Error with Fetch \n ${error}`);
    });
  }
  handleData(data) {
    const { todos } = data;
    todos.map((todo) => {
      const item = document.createElement('li');
      if (todo.complete) {
        item.dataset.strike = true;
        item.innerHTML = `<s>${todo.label}</s>`;
      } else {
        item.innerHTML = `${todo.label}`;
        item.dataset.strike = false;
      }
      item.dataset.value = todo.label;
      item.onclick = this.handleClickLi;
      return list.appendChild(item);
    });
  }
  handleClickLi() {
    if (this.dataset.strike === 'false') {
      this.dataset.strike = true;
      this.innerHTML = `<s> ${this.dataset.value} </s>`;
    } else {
      this.dataset.strike = false;
      this.innerHTML = `${this.dataset.value}`;
    }
  }
}

const todo = new Todo();
todo.init();
