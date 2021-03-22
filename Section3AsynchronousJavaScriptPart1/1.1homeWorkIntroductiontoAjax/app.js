const button = document.querySelector("button");
const container = document.querySelector(".container");
const body = document.querySelector("body");
function getUsers(renderUserFragment) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", accessLoading);
  xhr.addEventListener("error ", errorLoading);

  function accessLoading() {
    const response = JSON.parse(xhr.responseText);
    console.log(xhr.status);
    renderUserFragment(response);
  }

  function errorLoading() {
    console.log(error);
  }

  xhr.send();
}
function renderUserFragment(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((user) => {
    const wrapper__user = document.createElement("div");
    wrapper__user.classList.add("wrapper");
    wrapper__user.setAttribute("data-user-atr", `${user.id}`);

    const h4 = document.createElement("h5");
    h4.classList.add("header-name");
    h4.textContent = `${user.name}, ${user.username}`;

    const descr = document.createElement("p");
    descr.classList.add("descr");
    descr.innerHTML = `${user.company.bs}, <br> ${user.company.catchPhrase}`;

    wrapper__user.append(h4);
    wrapper__user.append(descr);

    fragment.append(wrapper__user);

    container.append(fragment);
  });
}

function getUsersForId(renderUserInfo, id) {
  console.log(id);
  const xhr = new XMLHttpRequest();
  const URL = "https://jsonplaceholder.typicode.com";

  xhr.open("get", `${URL}/users/${id}`);

  xhr.addEventListener("load", accessLoading);
  xhr.addEventListener("error ", errorLoading);

  function accessLoading() {
    const response = JSON.parse(xhr.responseText);
    console.log(xhr.status);
    renderUserInfo(response);
  }

  function errorLoading() {
    console.log(error);
  }

  xhr.send();
}
function renderUserInfo(response) {
  const fragment = document.createDocumentFragment();

  const wrappInfo = document.createElement("div");
  wrappInfo.classList.add("wrapp__info", "active");

  const info = document.createElement("div");
  info.classList.add("info");

  const infoName = document.createElement("h5");
  infoName.classList.add("info__name");
  infoName.textContent = response.name;

  const infoEmail = document.createElement("p");
  infoEmail.classList.add("info__email");
  infoEmail.textContent = response.email;

  const infoAdress = document.createElement("p");
  infoAdress.classList.add("info__address");
  infoAdress.innerHTML = `Sity: ${response.address.sity}, <br> Streat: ${response.address.streat}, <br> Suite: ${response.address.suite},`;

  info.append(infoName);
  info.append(infoEmail);
  info.append(infoAdress);

  wrappInfo.append(info);
  fragment.append(wrappInfo);

  body.append(fragment);
  body.style.overflow = "hidden";
}

body.addEventListener('click', (e) => {
  if (e.target.classList.contains('wrapp__info')) {
    console.log(e.target.classList);
    e.target.classList.toggle('active')

  }
})

document.addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-user-atr");
  if (id) {
    getUsersForId(renderUserInfo, id);
  }
});
button.addEventListener("click", (e) => {
  getUsers(renderUserFragment);
});
