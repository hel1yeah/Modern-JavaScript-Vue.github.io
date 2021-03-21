

function getPosts(cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", accessLoading);

  function accessLoading() {
    const response = JSON.parse(xhr.responseText);
    // console.log(response);
    cb(response);
  }
}