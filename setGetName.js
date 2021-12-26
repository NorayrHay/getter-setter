'use strict'

const obj = {
    name: [],
    set current(name) {
      const arr = name.split(', ');
  
      for(let i = 0; i < arr.length; i++) {
        obj.name.push([arr[i], arr[i].length]);
      }
    },
    get current() {
      return obj.name;
    },
};
  
obj.current = 'Hovhannes, Sona';
  
console.log(obj.name);