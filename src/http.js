import Vue from 'vue';
const apiUrl = 'http://api.dev.org/root/'

async function doAjax(url = '', httpMethod, data = {}) {
  // Default options are marked with *
  let request = {
    method: httpMethod, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    },
    referrerPolicy: 'origin-when-cross-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body data type must match "Content-Type" header
  }

  if (httpMethod != "GET") {
    request.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(apiUrl + url, request);
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (e) {
    console.error(e)
  }
}

const http = {
  get: (path) => {
    return doAjax(path, 'GET');
  },
  post: (path, data) => {
    return doAjax(path, 'POST', data);
  },
  put: (path, data) => {
    return doAjax(path, 'PUT', data);
  },
  delete: (path) => {
    return doAjax(path, 'DELETE');
  }
}

export default http;
