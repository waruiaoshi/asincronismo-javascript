"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = "https://api.escuelajs.co/api/v1";

function postData(apiURL, data) {
  var response = (0, _nodeFetch["default"])(apiURL, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

var data = {
  "title": "Nuevo producto elkin",
  "price": 777,
  "description": "un producto de prueba",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
};
postData("".concat(API, "/products/"), data).then(function (response) {
  console.log(response.json());
  console.log(response.status);
}).then(function (data) {
  return console.log(data);
})["catch"](function (error) {
  return console.error(error);
});