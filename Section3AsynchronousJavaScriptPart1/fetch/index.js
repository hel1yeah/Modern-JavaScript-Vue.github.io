fetch("https://api.thedogapi.com/v1/breeds")
  .then((data) => data.text() )
  .then((response) => {
    let parse = JSON.parse(response);
    console.log(parse);
  })
  .catch((err) => {
    console.log(err);
  });
