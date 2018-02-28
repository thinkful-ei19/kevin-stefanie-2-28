'use strict';
/* global $ */

let api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kevin';
  return { 
    BASE_URL: BASE_URL,
    getItems: callback => $.getJSON(BASE_URL + '/items', callback),
  };
})();

api.getItems(function(data) {
  console.log(data);
});

console.log(api.BASE_URL);
