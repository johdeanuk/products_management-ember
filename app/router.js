import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products');
  this.route('product', { path: '/products/:productID' });
  this.route('items');
  // // this.route('product1');
  // this.route('createproduct', function() {
  //   this.route('new');
  // });
});

export default Router;
