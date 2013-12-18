var hee = (function() {
  var count = 0;
  return {
    plus: function(number) {
      count = count + Number(number);
      return count;
    },
    minus: function(number) {
      count = count - Number(number);
      return count;
    },
    reset: function() {
      count = 0;
      return count;
    }
  };
})();

module.exports = hee;
