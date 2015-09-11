'use strict'

var React = require('react/addons')

var App = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function () {
    return {}
  },
  render: function () {
    return (
      <h1>Hello, world!</h1>
    )
  }
})

React.render(
<App />,
  document.getElementById('app')
)