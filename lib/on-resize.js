/*global window */

var throttle = require("lodash.throttle");

module.exports = {
  getInitialState: function() {
    var defaults = { window: { height: 0, width: 0 }, document: { height: 0, width: 0 } };
    return !this.onResize ? defaults : null;
  },

  componentDidMount: function() {
    if (!this.onResize) {
      this.onResize = function() {
        this.setState({
          window: { height: window.innerHeight, width: window.innerWidth },
          document: { height: document.body.clientHeight, width: document.body.clientWidth }
        });
      }.bind(this);
    }

    this.onResize();
    this.onResizeThrottled = throttle(this.onResize, 10);
    window.addEventListener("resize", this.onResizeThrottled);
  },

  componentWillUnmount: function() {
    window.removeEventListener("resize", this.onResizeThrottled);
  }
};

