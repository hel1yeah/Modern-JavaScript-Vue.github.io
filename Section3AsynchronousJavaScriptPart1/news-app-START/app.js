// Custom Http Module
function customHttp() {
  return {
    getReq(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsServise = (function () {
  const API_KEY = 'ac1383186af6465ab7f260580eaf4d8c';
  const API_URL = 'https://news-api-v2.herokuapp.com';

  return {
    topHeadLines(country = 'us', cb) {
      http.get(`${API_URL}/top-headlines?country=${country}&${API_KEY}`, cb)
    },
    everything(query, cb) {
      http.get(`${API_URL}/everything?q=${query}&${API_KEY}`, cb)
    },
  }
})

//  init selects
document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();   
  loadNews();
});


// load news
function loadNews() {
  newsServise.topHeadLines('us', onGetResponse);
}

//function on get response from server
function onGetResponse(err, res) {
  console.log(res);
}