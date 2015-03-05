import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n		<p class=\"autoLogoutInfo\">You have been automatically logged out after ");
  stack1 = helpers._triageMustache.call(depth0, "RefsetENV.APP.loginExpiry", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" minutes of inactivity.</p>\n	");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n		<div class=\"loading\">Signing you you in, please wait...</div>\n		");
  data.buffer.push(escapeExpression((helper = helpers['bs-progress'] || (depth0 && depth0['bs-progress']),options={hash:{
    'progress': (100),
    'stripped': (true),
    'animated': (true)
  },hashTypes:{'progress': "INTEGER",'stripped': "BOOLEAN",'animated': "BOOLEAN"},hashContexts:{'progress': depth0,'stripped': depth0,'animated': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-progress", options))));
  data.buffer.push("\n	");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n		<div class=\"error\">");
  stack1 = helpers._triageMustache.call(depth0, "loginError", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n	");
  return buffer;
  }

  data.buffer.push("<form id=\"loginForm\" class=\"RefsetPanel\" action=\"javascript:Refset.__container__.lookup('controller:login').send('loginUser')\">\n	\n	");
  stack1 = helpers['if'].call(depth0, "autoLoggedOut", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n	<p>\n		For access to the full range to tools you will need to sign in.\n		You may continue as a guest to view only public Reference Sets.\n	</p>\n	\n	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("username"),
    'type': ("text"),
    'placeholder': ("Username"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("password"),
    'type': ("password"),
    'id': ("loginPassword"),
    'placeholder': ("Password"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'type': depth0,'id': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	\n	");
  stack1 = helpers['if'].call(depth0, "loginInProgress", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n	");
  stack1 = helpers['if'].call(depth0, "loginError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n	<button type=\"submit\" style=\"display:none\">Submit</button>\n	\n	<p class=\"forgetPasswordLink\"><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("RefsetENV.APP.passwordResetURL")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\">I've forgotten my password or I would like to change my password</a></p>\n</form>");
  return buffer;
  
});
