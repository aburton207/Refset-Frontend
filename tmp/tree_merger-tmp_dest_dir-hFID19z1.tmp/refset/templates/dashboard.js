import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Browse Refsets");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push(" \n        <li> ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "refsets.new", options) : helperMissing.call(depth0, "link-to", "refsets.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("  New Refset");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n		<li>\n			<span class=\"right\">");
  data.buffer.push(escapeExpression((helper = helpers['date-format'] || (depth0 && depth0['date-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "published", options) : helperMissing.call(depth0, "date-format", "published", options))));
  data.buffer.push("</span>\n			<h4>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n			<p>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n		</li>\n	");
  return buffer;
  }

  data.buffer.push("<div class=\"col-md-3 dashboard-sidebar\">\n     <h2>Useful Tools</h2>\n    <ul>\n    <li>");
  stack1 = (helper = helpers['query-params'] || (depth0 && depth0['query-params']),options={hash:{
    'showUnpublished': ("0"),
    'showInactive': ("0")
  },hashTypes:{'showUnpublished': "STRING",'showInactive': "STRING"},hashContexts:{'showUnpublished': depth0,'showInactive': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "query-params", options));
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","sexpr"],data:data},helper ? helper.call(depth0, "refsets", stack1, options) : helperMissing.call(depth0, "link-to", "refsets", stack1, options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n						");
  stack1 = helpers['if'].call(depth0, "user.token", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n \n</div>\n<div class=\"col-md-9 dashboard-news\">\n    <h1>Latest Refset Tool News</h1>\n<ul class=\"list-group refset-list\">\n	");
  stack1 = helpers.each.call(depth0, "news", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n    \n</div>\n\n    ");
  return buffer;
  
});
