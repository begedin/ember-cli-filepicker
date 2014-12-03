import Ember from 'ember';

export default Ember.Component.extend({
  setupXbutton: function() {
    console.log('file-picker setup!');
  }.on('didInsertElement'),
});
