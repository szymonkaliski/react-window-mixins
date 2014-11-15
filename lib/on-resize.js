/*global window */

var throttle = require("lodash.throttle");

module.exports = {
  getInitialState: function() {
    return !this.onResize ? { window: { height: 0, width: 0 } } : null;
  },

  componentDidMount: function() {
    if (!this.onResize) {
      this.onResize = function() {
        this.setState({ window: { height: window.innerHeight, width: window.innerWidth } });
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

