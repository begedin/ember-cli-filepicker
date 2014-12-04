import Ember from 'ember';

export default Ember.Component.extend({
  handleElementChanged: function(e) {
    this.set("fpfiles", e.fpfiles);
  },
  setupFilepicker: function() {
    var element = this.$('input')[0];
    var self = this;
    this.get('filepicker').then( function(filepicker) {
      element.type="filepicker";
      if (Ember.testing) {
        element.setAttribute("data-fp-debug", true);
      }
      element.onchange = Ember.run.bind(self, 'handleElementChanged');
      filepicker.constructWidget(element);
    });
  }.on('didInsertElement'),
});
