const button = document.querySelector("button");
const container = document.querySelector(".container");
function getUsers(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", accessLoading);
  xhr.addEventListener("error ", errorLoading);

  function accessLoading() {
    const response = JSON.parse(xhr.responseText);
    console.log(xhr.status);
    cb(response);
  }

  function errorLoading() {
    console.log(error);
  }

  xhr.send();
}

function renderUserFragment(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((user) => {
    console.log(user);

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const h4 = document.createElement("h5");
    h4.classList.add("header-name");
    h4.textContent = `${user.name}, ${user.username}`

    const descr = document.createElement('p')
    descr.classList.add('descr')
    descr.innerHTML = `${user.company.bs}, <br> ${user.company.catchPhrase}`

    wrapper.append(h4)
    wrapper.append(descr)

    fragment.append(wrapper)

    container.append(fragment)

  });
}

button.addEventListener("click", () => {
  getUsers(renderUserFragment);
});
