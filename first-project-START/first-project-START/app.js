const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
];

//* самовызывающейся функция в которую мы передаём задачи tasks
(function (arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    //* создаём из масива обьектов обьект обьектов
    acc[task._id] = task;
    return acc;
  }, {});

  //* elements UI
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );

  const form = document.forms["addTask"];
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];

  //* events
  renderAllTasks(objOfTasks);
  form.addEventListener("submit", onFormSubmintHandler);

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error("Передайте список задач!");
      return;
    }
    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }
  function listItemTemplate({ _id, title, body } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );

    //* создаём спан для текста
    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    //* создаём кнопку удаления
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить задачу";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");

    //* article
    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    //* добавляем в li таши теги
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);

    return li;
  }

  function onFormSubmintHandler(event) {
    event.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Введите тайтл и боди");
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement("afterbegin", listItem);

    form.reset();

  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      complited: false,
      _id: `rasl-${Math.random()}`,
    };
    objOfTasks[newTask._id] = newTask;

    return { ...newTask };
  }
})(tasks);
