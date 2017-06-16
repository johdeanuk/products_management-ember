import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var product = this.get('store').findAll('product'); // Need to return the items along with the products otherwise error {include: 'items'}
    return product;
  },
  actions: {
    delete(product) {
      createproduct.deleteRecord();
      createproduct.save();
    }
  }
});
