'use strict';
/* global */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const findAndUpdate = (id, newData) => {
    let item = store.items.find(item => item.id === id);
    item = Object.assign(item, newData);
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    findAndUpdate,
    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
  };
  
}());
