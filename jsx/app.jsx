var React = require('react');
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
      <div></div>
    );
  }
});

var stores  = {
  SomeStore: new Store()
};
var flux = new Fluxxor.Flux(stores, actions);

React.render(
  <App flux={flux} />,
  document.getElementById('app-container')
);
