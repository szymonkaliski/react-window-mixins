module.exports = function(fn, threshold) {
  threshold = threshold || 250;

  var last, deferTimer;

  return function() {
    var now = new Date().getTime(), args = arguments;

    if (last && now < last + threshold) {
      clearTimeout(deferTimer);

      deferTimer = setTimeout(function() {
        last = now;
        fn.apply(this, args);
      }, threshold);
    }
    else {
      last = now;
      fn.apply(this, args);
    }
  };
};
