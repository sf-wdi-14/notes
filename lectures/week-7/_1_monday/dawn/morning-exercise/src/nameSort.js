var People = function(names) {
  this.allNames = [];
  names.forEach(function(name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    this.allNames.push(name);
  }.bind(this));
};

People.prototype.getNames = function() {
  return this.allNames;
};

People.prototype.sort = function() {
  this.allNames.sort();
  return this.getNames();
};