import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"registrationForm\" class=\"RefsetPanel\">\n	<form>		\n		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("regname"),
    'type': ("text"),
    'placeholder': ("Your Name"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("regorg"),
    'type': ("text"),
    'placeholder': ("Your organisation"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		\n		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("reguser"),
    'type': ("text"),
    'placeholder': ("Already registered with for other IHTSDO tools? Enter your existing login ID here..."),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		\n		");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("regnotes"),
    'placeholder': ("Please tell us why you would like access to the Reference Set Management Service"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n	</form>\n</div>");
  return buffer;
  
});
