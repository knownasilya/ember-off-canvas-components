import Ember from 'ember';

/**
  To use this component in your app, add this to a template:

  ```handlebars
  {{#on-canvas}}
    {{#off-canvas-opener}}
      <i class="fa fa-bars"></i>
    {{/off-canvas-opener}}
    <div class="on-canvas-body">
      On Canvas Contents
    </div>
  {{/on-canvas}}
  ```

  @extends Ember.Component
*/

export default Ember.Component.extend({
  /**
    The type of element to render this view into. By default, samples will appear
    as `<on-canvas/>` elements.

    @property tagName
    @type String
  */
  tagName: 'on-canvas',

  classNames: ['on-canvas-default']
});

