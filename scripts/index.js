'use strict';
/* global shoppingList, store, api, $ */


$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

// const item = store.items[0];
// store.findAndUpdate(item.id, { name: 'foobar' });