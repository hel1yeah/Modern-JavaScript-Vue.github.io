const btn = document.querySelector("button");
const container = document.querySelector(".container");

function getPosts(cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

  xhr.addEventListener("load", accessLoading);

  function accessLoading() {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    cb(response);
  }

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = post.title;
    const article = document.createElement("p");
    title.classList.add("card-text");
    article.textContent = post.body;
    cardBody.append(title);
    cardBody.append(article);
    card.append(cardBody);
    fragment.append(card);
  });
  container.append(fragment);
}

btn.addEventListener("click", e => {
  getPosts(renderPosts);
});
