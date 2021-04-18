const API_KEY = "165fc844-67b8-4e30-bb65-744224e95166";
let URL = "https://api.thedogapi.com/v1/breeds";

function getRequest() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    // xhr.setRequestHeader("x-api-key", "165fc844-67b8-4e30-bb65-744224e95166");

    xhr.addEventListener("load", () => resolve(JSON.parse(xhr.responseText)));
    xhr.addEventListener("error", () => reject({ status: xhr.status, url }));

    xhr.send();
  });
}
getRequest()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.error(reject);
  });
