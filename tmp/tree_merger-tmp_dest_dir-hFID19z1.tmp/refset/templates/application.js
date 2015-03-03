import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Dashboard");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Browse Refsets");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "refsets.new", options) : helperMissing.call(depth0, "link-to", "refsets.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("New Refset");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("News");
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n					<li><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Logout</a></li>\n				");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n					<li><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showRegistrationForm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Register</a></li>\n					<li><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showLoginForm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Login</a></li>\n				");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n		<table style=\"margin-top:5px\">\n		<tr>\n			<td width=\"320\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['bs-progress'] || (depth0 && depth0['bs-progress']),options={hash:{
    'progressBinding': ("logoutProgressDisplay"),
    'type': ("danger"),
    'stripped': ("true")
  },hashTypes:{'progressBinding': "STRING",'type': "STRING",'stripped': "STRING"},hashContexts:{'progressBinding': depth0,'type': depth0,'stripped': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-progress", options))));
  data.buffer.push("\n			</td>\n			<td class=\"warningText\" valign=top>\n				&nbsp;&nbsp;Logging you out in ");
  stack1 = helpers._triageMustache.call(depth0, "logoutTimerDisplay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" seconds\n			</td>\n		</tr>\n		</table>\n		");
  return buffer;
  }

function program16(depth0,data) {
  
  
  data.buffer.push("Privacy");
  }

function program18(depth0,data) {
  
  
  data.buffer.push("Cookie policy");
  }

function program20(depth0,data) {
  
  
  data.buffer.push("Accessibility");
  }

function program22(depth0,data) {
  
  
  data.buffer.push("Terms and conditions");
  }

function program24(depth0,data) {
  
  
  data.buffer.push("Site map");
  }

  data.buffer.push("<nav id=\"header\" role=\"navigation\" class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button data-target=\"#bs-example-navbar-collapse-1\" data-toggle=\"collapse\" class=\"navbar-toggle collapsed\" type=\"button\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <img alt=\"IHTSDO Reference Set Management Service\" style=\"height:50px\" src=\"assets/img/box-logo.png\">\n\n        </div>\n        <div id=\"bs-example-navbar-collapse-1\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-left \">\n                <li><a href=\"#\">IHTSDO Reference Set Management Service</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right \">\n				<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "dashboard", options) : helperMissing.call(depth0, "link-to", "dashboard", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n				<li class=\"dropdown\">\n					<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Refsets <span class=\"caret\"></span></a>\n					<ul class=\"dropdown-menu\" role=\"menu\">\n						<li>");
  stack1 = (helper = helpers['query-params'] || (depth0 && depth0['query-params']),options={hash:{
    'showUnpublished': ("0"),
    'showInactive': ("0")
  },hashTypes:{'showUnpublished': "STRING",'showInactive': "STRING"},hashContexts:{'showUnpublished': depth0,'showInactive': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "query-params", options));
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","sexpr"],data:data},helper ? helper.call(depth0, "refsets", stack1, options) : helperMissing.call(depth0, "link-to", "refsets", stack1, options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n						");
  stack1 = helpers['if'].call(depth0, "user.token", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</ul>\n				</li>\n		\n		        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news", options) : helperMissing.call(depth0, "link-to", "news", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n				\n				");
  stack1 = helpers['if'].call(depth0, "user.token", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            </ul>\n        </div>\n		");
  stack1 = helpers['if'].call(depth0, "showLogoutTimer", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</nav>\n\n<div id=\"body\" class=\"container-fluid\">\n\n	");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n	");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n\n	");
  data.buffer.push(escapeExpression((helper = helpers['bs-notifications'] || (depth0 && depth0['bs-notifications']),options={hash:{
    'style': ("z-index: 1000;  width: 90%; left: 0; right: 0; margin-left: auto; margin-right: auto; margin-top: 50px;")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-notifications", options))));
  data.buffer.push("\n\n</div>\n\n<div class=\"waitAnim\"><img src=\"/assets/img/ajax-loader.gif\"></div>\n\n\n<div id=\"footer\" class=\"container-fluid\">	\n	\n	<hr>\n\n	<nav class=\"navbar\">\n\n        <ul class=\"nav navbar-nav navbar-right links\">\n            <li><small>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "privacy-statement", options) : helperMissing.call(depth0, "link-to", "privacy-statement", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small></li>\n            <li><small>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cookie-policy", options) : helperMissing.call(depth0, "link-to", "cookie-policy", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small></li>\n            <li><small>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "accessibility", options) : helperMissing.call(depth0, "link-to", "accessibility", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small></li>\n            <li><small>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "terms-and-conditions", options) : helperMissing.call(depth0, "link-to", "terms-and-conditions", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small></li>\n            <li><small>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "site-map", options) : helperMissing.call(depth0, "link-to", "site-map", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small></li>\n            <li><small><a href=\"http://www.ihtsdo.org/\" target=\"_blank\">&copy; Copyright IHTSDO 2014</a></small></li>\n        </ul>\n\n		<ul class=\"nav navbar-nav navbar-right share\">\n			<li class=\"title\">Share</li>\n			<li><a href=\"#\" class=\"linkedin\">linkedin</a></li>\n			<li><a href=\"#\" class=\"twitter\">twitter</a></li>\n			<li><a href=\"#\" class=\"google\">googleplus</a></li>\n		</ul>\n\n    </nav>\n\n</div>\n\n");
  return buffer;
  
});
