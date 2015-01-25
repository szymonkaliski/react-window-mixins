# react-window-mixins

React mixins for working with browser window events.

Both mixins are throttled not to hang your browser.

## Install

`npm install react-window-mixins`

## OnResize

Useful for calculating sizes for more complicated layouts, handling changes for for responsive layouts (sadly not everything is possible via CSS), etc...

```javascript
var OnResize = require("react-window-mixins").OnResize;

React.createClass({
  mixins: [ OnResize ],

  render: function() {
    return React.DOM.div(
      null,
      "current window size: " + this.state.window.width + ", " + this.state.window.height,
      "current document size: " + this.state.document.width + ", " + this.state.document.height
    );
  }
});
```

You can also write your own `onResize` handler:

```javascript
var OnResize = require("react-window-mixins").OnResize;

React.createClass({
  mixins: [ OnResize ],

  onResize: function() {
    this.setState({
      componentWidth: this.getDOMNode().clientWidth
    });
  },

  render: function() {
    return React.DOM.div(
      null,
      "current component width: " + this.state.componentWidth
    );
  }
});
```

## OnScroll

Useful for elements interacting with scroll position, and even writing parallax websites with React.

```javascript
var OnScroll = require("react-window-mixins").OnScroll;

React.createClass({
  mixins: [ OnScroll ],

  render: function() {
    return React.DOM.div(
      null,
      "current scroll offset: " + this.state.scroll.x + ", " + this.state.scroll.y
    );
  }
});
```

You can also write your own `onScroll` handler:

```javascript
var OnScroll = require("react-window-mixins").OnScroll;

React.createClass({
  mixins: [ OnScroll ],

  onScroll: function() {
    this.setState({ 
      scrollPosition: window.pageYOffset - this.getDOMNode().offsetTop 
    });
  },

  render: function() {
    return React.DOM.div(
      null,
      "current component scroll offset: " + this.state.scrollPosition
    );
  }
});
```

## OnUnload

Useful for defining handlers for the `unload` and `beforeunload` events. Event
handlers are only added to the `window` if they are defined. No default handlers
are added automatically.

```javascript
var OnUnload = require("react-window-mixins").OnUnload;

React.createClass({
  mixins: [ OnUnload ],

  onUnload: function() {
    // Clean up any resources
  },

  onBeforeUnload: function() {
    return 'Are you sure you want to leave the page?';
  }
});
```
