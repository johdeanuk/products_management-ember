import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var product = this.get('store').findRecord('product', params.productID); // Need to return the items along with the products otherwise error {include: 'items'}
    return product;
  },
  actions: {
    update(product) {
      product.save();
    }
  }
});
