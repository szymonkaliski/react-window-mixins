/*global window */

module.exports = {
  componentDidMount: function() {
    if (this.onUnload) {
      window.addEventListener("unload", this.onUnload);
    }
    if (this.onBeforeUnload) {
      window.addEventListener("beforeunload", this.onBeforeUnload);
    }
  },

  componentWillUnmount: function() {
    if (this.onUnload) {
      window.removeEventListener("unload", this.onUnload);
    }
    if (this.onBeforeUnload) {
      window.removeEventListener("beforeunload", this.onBeforeUnload);
    }
  }
};
