import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var prod = this.get('product')
      prod.save();
    }
  }
});
