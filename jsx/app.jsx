var React   = require('react');
var Fluxxor = require('fluxxor');

var actions = {};

var SomeStore = Fluxxor.createStore({
  initialize: function() {
  },
  
  getState: function() {
    return {};
  }
});

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var App = React.createClass({
  mixins: [ FluxMixin, StoreWatchMixin('SomeStore') ],

  getStateFromFlux: function() {
    return this.getFlux().store('SomeStore').getState();
  },

  render: function() {
    return (
      <div>
        <h1>Hello, World</h1>
      </div>
    );
  }
});

var stores  = {
  SomeStore: new SomeStore()
};
var flux = new Fluxxor.Flux(stores, actions);

React.render(
  <App flux={flux} />,
  document.getElementById('app-container')
);
