import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType

});

Router.map(function() {
  this.route('new', {
    path: '/calendars/new'
  });
  this.route('calendars');
});

export default Router;
