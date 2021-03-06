import Ember from 'ember';
import ENV from 'lagotto-admin/config/environment';

export default Ember.Route.extend({
  model() {
    var url = "https://assets.datacite.org/data/links.json"
    return Ember.$.getJSON(url).then(function(data) {
      if (ENV.environment === 'development') {
        data.header_links = data.development_links;
        return data;
      } else if (ENV.environment === 'stage') {
        data.header_links = data.stage_links;
        return data;
      } else {
        data.header_links = data.production_links;
        return data;
      }
    });
  }
});
