const URL = "https://api.github.com/users/";

function getUsers(name) {
  return fetch(`https://api.github.com/users/${name}`);
}
getUsers("hel1yeah")
  .then((response) => {
    if (!response.ok) {
      console.error(`Ошибка запроса ${response.status}`);
    } else {
      console.log();
      return response.text();
    }
  })
  .then((user) => {
    return JSON.parse(user);
  })
  .then((user_img) => console.log(user_img.avatar_url));
