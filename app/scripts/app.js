'use strict'

var React = require('react/addons')

var App = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function () {
    return {}
  },
  render: function () {
    return (
      <span>Portalen 2000</span>
    )
  }
})

React.render(
<App />,
  document.getElementById('app')
)