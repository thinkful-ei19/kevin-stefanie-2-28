'use strict';
/* global $ */

let api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kevin';
  return {
    getItems: callback => $.getJSON(BASE_URL + '/items', callback),
    createItem: (name, callback) => {
      let newItem = JSON.stringify({
        name: name,
      });
      $.ajax({
        url: BASE_URL + '/items',
        method: 'POST',
        contentType: 'application/json',
        data: newItem,
        success: callback,
      });
    }
  };
})();
