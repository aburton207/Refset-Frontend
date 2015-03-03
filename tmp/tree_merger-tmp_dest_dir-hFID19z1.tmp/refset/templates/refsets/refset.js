import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n	");
  stack1 = helpers['if'].call(depth0, "unauthorised", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	");
  stack1 = helpers['if'].call(depth0, "notFound", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	");
  stack1 = helpers['if'].call(depth0, "commsError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n		You need to <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showLoginForm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">login</a> to access this Reference Set\n	");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n		We cannot find the Reference Set you are looking for\n	");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n		We were unable to retrieve the Reference Set from the server\n	");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n	<div class=\"row\">\n		\n		<div class=\"col-md-9\">\n			\n	    <div class=\"panel panel-info ember-view fade in panelNoPadding refset-header\">\n	        <div class=\"panel-heading accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapseOne\">\n	             <h4 class=\"panel-title\">View Reference Set - Reference Set Header</h4>\n	        </div>\n	        <div class=\"panel-collapse collapse in\">\n	            <div id=\"collapseOne\" class=\"panel-body\">\n	   				<form class=\"refset-header\">\n						\n						<table width=\"100%\">\n							\n							<tr class=\"hr\"><td width=\"100\"></td><td width=\"300\"><td width=\"100\"></td>\n\n							<tr>\n								");
  stack1 = helpers['if'].call(depth0, "published", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</tr>\n\n							<tr>\n								<td class=\"label\">Refset Id</td><td class=\"content\">");
  stack1 = helpers['if'].call(depth0, "published", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n								<td class=\"label\">UUID</td><td class=\"content\" colspan=2>");
  stack1 = helpers._triageMustache.call(depth0, "uuid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n							</tr>\n		\n							<tr>\n								<td class=\"label\">Refset Type Id</td><td class=\"content\">\n									");
  stack1 = helpers['if'].call(depth0, "published", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								</td>\n\n								<td class=\"label\" rel=\"tooltip\" title=\"Latest member effective time\"><span class=\"pointer\">Latest Effective Time</span></td><td class=\"content\" colspan=2>				\n									");
  data.buffer.push(escapeExpression((helper = helpers['effective-time-format'] || (depth0 && depth0['effective-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "latestEffectiveTime", options) : helperMissing.call(depth0, "effective-time-format", "latestEffectiveTime", options))));
  data.buffer.push("\n								</td>\n							</tr>\n\n							<tr>\n								<td class=\"label\">Refset Member Type Id</td><td class=\"content\">\n									");
  stack1 = helpers['if'].call(depth0, "published", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(27, program27, data),fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("		\n								</td>\n								<td class=\"label\" rel=\"tooltip\" title=\"Earliest member effective time\"><span class=\"pointer\">Earliest Effective Time</span></td><td class=\"content\" colspan=2>				\n									");
  data.buffer.push(escapeExpression((helper = helpers['effective-time-format'] || (depth0 && depth0['effective-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "earliestEffectiveTime", options) : helperMissing.call(depth0, "effective-time-format", "earliestEffectiveTime", options))));
  data.buffer.push("\n								</td>\n							</tr>\n							\n							<tr>\n								<td class=\"label\">Module Id</td><td class=\"content\">\n									");
  stack1 = helpers['if'].call(depth0, "published", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(34, program34, data),fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								</td>\n								<td class=\"label\" rel=\"tooltip\" title=\"Planned publish member effective time\"><span class=\"pointer\">Planned Publish Date</span></td><td class=\"content\" colspan=2>				\n									");
  data.buffer.push(escapeExpression((helper = helpers['effective-time-format'] || (depth0 && depth0['effective-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "expectedReleaseDate", options) : helperMissing.call(depth0, "effective-time-format", "expectedReleaseDate", options))));
  data.buffer.push("\n								</td>\n							</tr>\n\n							<tr>\n								<td colspan=2></td>\n								<td class=\"label\">Language Code</td><td class=\"content\">\n									");
  stack1 = helpers['if'].call(depth0, "published", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(41, program41, data),fn:self.program(39, program39, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								</td>\n							</tr>\n		\n							");
  stack1 = helpers['if'].call(depth0, "showMetaData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(46, program46, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							\n						</table>\n					</form>\n					</div>\n				</div>\n			</div>\n\n			");
  stack1 = helpers.unless.call(depth0, "isRF2Import", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(48, program48, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			\n		    <div class=\"panel panel-info ember-view fade in panelNoPadding\">\n		        <div class=\"panel-heading accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapseMembers\">\n		             <h4 class=\"panel-title\">\n		             	");
  stack1 = helpers['if'].call(depth0, "meta", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(55, program55, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&nbsp;\n					 </h4>\n		        </div>\n		        <div class=\"panel-collapse collapse in\">\n		            <div id=\"collapseMembers\" class=\"panel-body\">\n						<ul class=\"list-group checkboxList member-list\">\n							");
  stack1 = helpers['if'].call(depth0, "filteredMembers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(94, program94, data),fn:self.program(63, program63, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n		\n		<div class=\"col-md-3\">\n          \n                <div class=\"edit-heading\">Editing</div>\n              <div class=\"editing-refset\">\n					");
  stack1 = helpers['if'].call(depth0, "meta", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(102, program102, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n			");
  stack1 = helpers['if'].call(depth0, "meta", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(113, program113, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			\n			");
  stack1 = helpers['if'].call(depth0, "potentialMembersToImport", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(164, program164, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			\n			<hr>\n			\n	\n		</div>\n	</div>\n\n");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									<td class=\"label\">Description</td>\n									<td class=\"content title\" colspan=\"4\">");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n								");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers['if'].call(depth0, "editMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n										<td class=\"content\" colspan=\"5\">");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("description"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("</td>\n									");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n										<td class=\"label\">Description</td>\n										<td class=\"content title\" colspan=\"4\">");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n									");
  return buffer;
  }

function program16(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "sctId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program18(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n										");
  data.buffer.push(escapeExpression((helper = helpers['refset-list-item-span'] || (depth0 && depth0['refset-list-item-span']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "type-id", "typeId", "refsetTypes", options) : helperMissing.call(depth0, "refset-list-item-span", "type-id", "typeId", "refsetTypes", options))));
  data.buffer.push("\n									");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n										");
  stack1 = helpers['if'].call(depth0, "editMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n									");
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n											");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("typeId"),
    'dataType': ("refsetTypesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n										");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n											");
  data.buffer.push(escapeExpression((helper = helpers['refset-list-item-span'] || (depth0 && depth0['refset-list-item-span']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "type-id", "typeId", "refsetTypes", options) : helperMissing.call(depth0, "refset-list-item-span", "type-id", "typeId", "refsetTypes", options))));
  data.buffer.push("\n										");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n 										");
  data.buffer.push(escapeExpression((helper = helpers['refset-list-item-span'] || (depth0 && depth0['refset-list-item-span']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "component-type-id", "componentTypeId", "componentTypes", options) : helperMissing.call(depth0, "refset-list-item-span", "component-type-id", "componentTypeId", "componentTypes", options))));
  data.buffer.push("\n									");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n										");
  stack1 = helpers['if'].call(depth0, "editMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("																			\n							  		");
  return buffer;
  }
function program28(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n											");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("componentTypeId"),
    'dataType': ("componentTypesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n										");
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n											");
  data.buffer.push(escapeExpression((helper = helpers['refset-list-item-span'] || (depth0 && depth0['refset-list-item-span']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "component-type-id", "componentTypeId", "componentTypes", options) : helperMissing.call(depth0, "refset-list-item-span", "component-type-id", "componentTypeId", "componentTypes", options))));
  data.buffer.push("\n										");
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n										<input type=hidden id=\"newRefsetModuleId\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("moduleId")
  },hashTypes:{'value': "STRING"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n										");
  data.buffer.push(escapeExpression((helper = helpers['refset-list-item-span'] || (depth0 && depth0['refset-list-item-span']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "module-id", "moduleId", "moduleTypes", options) : helperMissing.call(depth0, "refset-list-item-span", "module-id", "moduleId", "moduleTypes", options))));
  data.buffer.push("\n									");
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n										");
  stack1 = helpers['if'].call(depth0, "editMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(37, program37, data),fn:self.program(35, program35, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("																	\n									");
  return buffer;
  }
function program35(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n											");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("moduleId"),
    'dataType': ("moduleTypesArray"),
    'id': ("newRefsetModuleId")
  },hashTypes:{'value': "ID",'dataType': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'dataType': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n										");
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n											<input type=hidden id=\"newRefsetModuleId\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("moduleId")
  },hashTypes:{'value': "STRING"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n											");
  data.buffer.push(escapeExpression((helper = helpers['refset-list-item-span'] || (depth0 && depth0['refset-list-item-span']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "module-id", "moduleId", "moduleTypes", options) : helperMissing.call(depth0, "refset-list-item-span", "module-id", "moduleId", "moduleTypes", options))));
  data.buffer.push("\n										");
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n										");
  data.buffer.push(escapeExpression((helper = helpers['refset-list-item-span'] || (depth0 && depth0['refset-list-item-span']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "language", "languageCode", "languageTypes", options) : helperMissing.call(depth0, "refset-list-item-span", "language", "languageCode", "languageTypes", options))));
  data.buffer.push("\n									");
  return buffer;
  }

function program41(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n										");
  stack1 = helpers['if'].call(depth0, "editMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(44, program44, data),fn:self.program(42, program42, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n									");
  return buffer;
  }
function program42(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n											");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("languageCode"),
    'dataType': ("languagesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n										");
  return buffer;
  }

function program44(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n											");
  data.buffer.push(escapeExpression((helper = helpers['refset-list-item-span'] || (depth0 && depth0['refset-list-item-span']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "language", "languageCode", "languageTypes", options) : helperMissing.call(depth0, "refset-list-item-span", "language", "languageCode", "languageTypes", options))));
  data.buffer.push("\n										");
  return buffer;
  }

function program46(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n							<tr class=\"hr\"><td colspan=5><hr></td></tr>\n		\n							<tr>\n								<td class=\"label\">Last Updated</td><td class=\"content\">");
  data.buffer.push(escapeExpression((helper = helpers['date-time-format'] || (depth0 && depth0['date-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modifiedDate", options) : helperMissing.call(depth0, "date-time-format", "modifiedDate", options))));
  data.buffer.push("</td>\n								<td class=\"label\">Last Updated by</td><td class=\"content\" colspan=2>");
  stack1 = helpers._triageMustache.call(depth0, "modifiedBy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n							</tr>\n							");
  return buffer;
  }

function program48(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n				");
  stack1 = helpers.unless.call(depth0, "importError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(49, program49, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  return buffer;
  }
function program49(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					");
  stack1 = helpers['if'].call(depth0, "potentialMembersToImport", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(50, program50, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  return buffer;
  }
function program50(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					    <div class=\"panel panel-info ember-view fade in panelNoPadding\">\n					        <div class=\"panel-heading accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#importMemberList\">\n					             <h4 class=\"panel-title\">Review potential members to import(");
  stack1 = helpers._triageMustache.call(depth0, "potentialMembersToImport.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</h4>\n					        </div>\n					        <div class=\"panel-collapse collapse in\">\n					            <div id=\"importMemberList\" class=\"panel-body member-list\">\n					            	");
  stack1 = helpers['with'].call(depth0, "controller.moduleTypesArray", "as", "moduleTypesArray", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(51, program51, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								</div>\n							</div>\n						</div>\n					");
  return buffer;
  }
function program51(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n										 ");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'contentBinding': ("filteredImportMembers"),
    'height': (400),
    'rowHeight': (59),
    'width': ("100%")
  },hashTypes:{'contentBinding': "STRING",'height': "INTEGER",'rowHeight': "INTEGER",'width': "STRING"},hashContexts:{'contentBinding': depth0,'height': depth0,'rowHeight': depth0,'width': depth0},inverse:self.noop,fn:self.program(52, program52, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Ember.ListView", options) : helperMissing.call(depth0, "collection", "Ember.ListView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n									  ");
  return buffer;
  }
function program52(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n											<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":list-group-item :member-list-item meta.conceptActive::inactiveConcept meta.deleteConcept:deleteConcept")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n												<span class=\"trashIcon\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImportMember", "referencedComponentId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon meta.deleteConcept:undelete:delete")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\"></a></span>\n			\n												<div class=\"listViewRow\"><span>");
  stack1 = helpers._triageMustache.call(depth0, "referencedComponentId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> | <span class=\"description\">");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> |</div>						\n			\n												<span class=\"tickIcon\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImportMemberActive", "referencedComponentId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon active:tick:cross")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\"></a></span>\n			\n												<label><span>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Em.Select", {hash:{
    'value': ("content.moduleId"),
    'content': ("moduleTypesArray"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.label"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</span></label>\n						\n												");
  stack1 = helpers.unless.call(depth0, "meta.conceptActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(53, program53, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n											</div>\n										  ");
  return buffer;
  }
function program53(depth0,data) {
  
  
  data.buffer.push("<label class=\"inactiveMemberText\">Note: This component is INACTIVE</label>");
  }

function program55(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							");
  stack1 = helpers['if'].call(depth0, "filteringActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(59, program59, data),fn:self.program(56, program56, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							 \n							");
  stack1 = helpers.unless.call(depth0, "meta.allMembersLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(61, program61, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }
function program56(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n								Showing ");
  stack1 = helpers._triageMustache.call(depth0, "filteredMembers.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" out of ");
  stack1 = helpers._triageMustache.call(depth0, "members.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers.unless.call(depth0, "meta.allMembersLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(57, program57, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" members matching your filter.\n							");
  return buffer;
  }
function program57(depth0,data) {
  
  
  data.buffer.push("retrieved");
  }

function program59(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n								");
  stack1 = helpers._triageMustache.call(depth0, "totalNoOfMembers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Members.\n							");
  return buffer;
  }

function program61(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("(Retrieved ");
  stack1 = helpers._triageMustache.call(depth0, "members.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" of ");
  stack1 = helpers._triageMustache.call(depth0, "totalNoOfMembers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")");
  return buffer;
  }

function program63(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n								<li class=\"list-group-item member-list-header\" style=\"border-bottom:none\">\n									<span><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "referencedComponent.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Referenced Component Id</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "referencedComponent.id", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "referencedComponent.id", options))));
  data.buffer.push("</span> |\n									<span><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "referencedComponent.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Description</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "referencedComponent.label", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "referencedComponent.label", options))));
  data.buffer.push("</span>\n									<span class=\"right\">(hover over anything in <span class=\"tooltiplink\">blue</span> for more info)</span>\n								</li>\n\n								<li class=\"list-group-item member-list-header\" style=\"border-top:none\">\n									<span class=\"active pointer\" rel=\"tooltip\" title=\"Member (not underlying component) status (active/inactive)\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "active", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Status</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "active", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "active", options))));
  data.buffer.push("</span>\n									<span class=\"effective-time pointer\" rel=\"tooltip\" title=\"Latest published effective time\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "latestEffectiveTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Effective Time</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "latestEffectiveTime", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "latestEffectiveTime", options))));
  data.buffer.push("</span>\n									<span class=\"module-id\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "moduleId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Module Id</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "moduleId", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "moduleId", options))));
  data.buffer.push("</span>\n									<span class=\"uuid\">Member Id</span>\n									<span><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "referencedComponent.active", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Concept Status</a></span>\n								</li>\n									\n								");
  stack1 = helpers['if'].call(depth0, "showMetaData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(85, program85, data),fn:self.program(64, program64, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n							");
  return buffer;
  }
function program64(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n									<li class=\"list-group-item member-list-header\" style=\"border-top:1px solid #eee\">\n										<span class=\"last-modified pointer\" rel=\"tooltip\" title=\"Last date this member was modified\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "modifiedDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Last update date</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "modifiedDate", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "modifiedDate", options))));
  data.buffer.push("</span>\n										<span class=\"last-modified-by pointer\" rel=\"tooltip\" title=\"User that last modified this member\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "modifiedBy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Last updated by</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "modifiedBy", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "modifiedBy", options))));
  data.buffer.push("</span>\n									</li>\n									\n									");
  stack1 = helpers['if'].call(depth0, "editMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(70, program70, data),fn:self.program(65, program65, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }
function program65(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						            	");
  stack1 = helpers['with'].call(depth0, "controller.moduleTypesArray", "as", "moduleTypesArray", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(66, program66, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n										  \n										");
  return buffer;
  }
function program66(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n											 ");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'contentBinding': ("filteredMembers"),
    'height': (400),
    'rowHeight': ("memberRowHeight"),
    'width': ("100%")
  },hashTypes:{'contentBinding': "STRING",'height': "INTEGER",'rowHeight': "ID",'width': "STRING"},hashContexts:{'contentBinding': depth0,'height': depth0,'rowHeight': depth0,'width': depth0},inverse:self.noop,fn:self.program(67, program67, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Ember.ListView", options) : helperMissing.call(depth0, "collection", "Ember.ListView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n										  ");
  return buffer;
  }
function program67(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n												<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":list-group-item :member-list-item meta.conceptActive::inactiveConcept meta.deleteConcept:deleteConcept")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n													<span class=\"right rowIconBtn\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleDeleteMember", "uuid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon meta.deleteConcept:undelete:delete")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\"></a></span>\n													<span class=\"right rowIconBtn\"><a class=\"pointer icon info \" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showMetaData", "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("></a></span>\n													");
  stack1 = helpers['if'].call(depth0, "memberHasPublishedStateHistory", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(68, program68, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	\n													<div class=\"memberRowWrapperEdit\"><span>");
  stack1 = helpers._triageMustache.call(depth0, "referencedComponent.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> | <span class=\"description pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("referencedComponent.label")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "referencedComponent.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> |</div>\n			\n													<span class=\"left active\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMemberActive", "uuid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon active:tick:cross")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\"></a></span>\n		\n													<span class=\"effective-time\">");
  data.buffer.push(escapeExpression((helper = helpers['effective-time-format'] || (depth0 && depth0['effective-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "effectiveTime", options) : helperMissing.call(depth0, "effective-time-format", "effectiveTime", options))));
  data.buffer.push("</span>\n													<span>\n														");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("content.moduleId"),
    'dataType': ("moduleTypesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n										 			</span>\n	\n													<hr>				\n													<span class=\"last-modified\">");
  data.buffer.push(escapeExpression((helper = helpers['date-time-format'] || (depth0 && depth0['date-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modifiedDate", options) : helperMissing.call(depth0, "date-time-format", "modifiedDate", options))));
  data.buffer.push("</span>\n													<span class=\"last-modified-by\">");
  stack1 = helpers._triageMustache.call(depth0, "modifiedBy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n												</div>\n											  ");
  return buffer;
  }
function program68(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<span class=\"right rowIconBtn\"><a class=\"pointer icon history\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showHistory", "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("></a></span>");
  return buffer;
  }

function program70(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n										\n							            	");
  stack1 = helpers['with'].call(depth0, "controller.moduleTypes", "as", "moduleTypes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(71, program71, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("									\n									");
  return buffer;
  }
function program71(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n												 ");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'contentBinding': ("filteredMembers"),
    'height': (400),
    'rowHeight': ("memberRowHeight"),
    'width': ("100%")
  },hashTypes:{'contentBinding': "STRING",'height': "INTEGER",'rowHeight': "ID",'width': "STRING"},hashContexts:{'contentBinding': depth0,'height': depth0,'rowHeight': depth0,'width': depth0},inverse:self.noop,fn:self.program(72, program72, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Ember.ListView", options) : helperMissing.call(depth0, "collection", "Ember.ListView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n										  ");
  return buffer;
  }
function program72(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n													<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":list-group-item :member-list-item meta.conceptActive::inactiveConcept meta.deleteConcept:deleteConcept")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n							\n														<span class=\"right rowIconBtn\"><a class=\"pointer icon info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showMetaData", "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("></a></span>\n														");
  stack1 = helpers['if'].call(depth0, "memberHasPublishedStateHistory", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(68, program68, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n														<div class=\"memberRowWrapper\"><span>");
  stack1 = helpers._triageMustache.call(depth0, "referencedComponent.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> | <span class=\"description pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("referencedComponent.label")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "referencedComponent.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> |</div>\n				\n														<div class=\"memberRowWrapper\">\n															<span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":active active::inactiveMemberText")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><span class=\"status\">");
  stack1 = helpers['if'].call(depth0, "active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(75, program75, data),fn:self.program(73, program73, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  stack1 = helpers['if'].call(depth0, "memberHasPublishedState", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(77, program77, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "memberHasPendingEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(79, program79, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n															<span class=\"effective-time\">");
  data.buffer.push(escapeExpression((helper = helpers['effective-time-format'] || (depth0 && depth0['effective-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "effectiveTime", options) : helperMissing.call(depth0, "effective-time-format", "effectiveTime", options))));
  data.buffer.push("</span>\n															<span class=\"module-id\">");
  data.buffer.push(escapeExpression((helper = helpers['refset-list-item-span'] || (depth0 && depth0['refset-list-item-span']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "module-id", "moduleId", "moduleTypes", options) : helperMissing.call(depth0, "refset-list-item-span", "module-id", "moduleId", "moduleTypes", options))));
  data.buffer.push("</span>\n															<span class=\"uuid\">");
  stack1 = helpers._triageMustache.call(depth0, "uuid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n															<span>");
  stack1 = helpers['if'].call(depth0, "referencedComponent.active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(83, program83, data),fn:self.program(81, program81, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n														</div>\n														\n														<hr>				\n														<span class=\"last-modified\">");
  data.buffer.push(escapeExpression((helper = helpers['date-time-format'] || (depth0 && depth0['date-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modifiedDate", options) : helperMissing.call(depth0, "date-time-format", "modifiedDate", options))));
  data.buffer.push("</span>\n														<span class=\"last-modified-by\">");
  stack1 = helpers._triageMustache.call(depth0, "modifiedBy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n													</div>\n											  ");
  return buffer;
  }
function program73(depth0,data) {
  
  
  data.buffer.push("ACTIVE");
  }

function program75(depth0,data) {
  
  
  data.buffer.push("INACTIVE");
  }

function program77(depth0,data) {
  
  
  data.buffer.push("<span class=\"pointer membericon published\" rel=\"tooltip\" title=\"This member has been published\"></span>");
  }

function program79(depth0,data) {
  
  
  data.buffer.push("<span class=\"pointer membericon edited\" rel=\"tooltip\" title=\"This member has edits awaiting publication\"></span>");
  }

function program81(depth0,data) {
  
  
  data.buffer.push("active");
  }

function program83(depth0,data) {
  
  
  data.buffer.push("inactive");
  }

function program85(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n									");
  stack1 = helpers['if'].call(depth0, "editMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(90, program90, data),fn:self.program(86, program86, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }
function program86(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						            	");
  stack1 = helpers['with'].call(depth0, "controller.moduleTypesArray", "as", "moduleTypesArray", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(87, program87, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n										  \n										");
  return buffer;
  }
function program87(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n											 ");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'contentBinding': ("filteredMembers"),
    'height': (400),
    'rowHeight': ("memberRowHeight"),
    'width': ("100%")
  },hashTypes:{'contentBinding': "STRING",'height': "INTEGER",'rowHeight': "ID",'width': "STRING"},hashContexts:{'contentBinding': depth0,'height': depth0,'rowHeight': depth0,'width': depth0},inverse:self.noop,fn:self.program(88, program88, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Ember.ListView", options) : helperMissing.call(depth0, "collection", "Ember.ListView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n										  ");
  return buffer;
  }
function program88(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n												<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":list-group-item :member-list-item meta.conceptActive::inactiveConcept meta.deleteConcept:deleteConcept")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n													<span class=\"right rowIconBtn\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleDeleteMember", "uuid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon meta.deleteConcept:undelete:delete")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\"></a></span>\n													<span class=\"right rowIconBtn\"><a class=\"pointer icon info \" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showMetaData", "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("></a></span>\n													");
  stack1 = helpers['if'].call(depth0, "memberHasPublishedStateHistory", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(68, program68, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n													<div class=\"memberRowWrapperEdit\"><span>");
  stack1 = helpers._triageMustache.call(depth0, "referencedComponent.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> | <span class=\"description pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("referencedComponent.label")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "referencedComponent.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> |</div>\n			\n													<span class=\"left active\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMemberActive", "uuid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon active:tick:cross")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\"></a></span>\n		\n													<span class=\"effective-time\">");
  data.buffer.push(escapeExpression((helper = helpers['effective-time-format'] || (depth0 && depth0['effective-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "effectiveTime", options) : helperMissing.call(depth0, "effective-time-format", "effectiveTime", options))));
  data.buffer.push("</span>\n													<span>\n														");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("content.moduleId"),
    'dataType': ("moduleTypesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n										 			</span>\n												</div>\n											  ");
  return buffer;
  }

function program90(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n										\n							            	");
  stack1 = helpers['with'].call(depth0, "controller.moduleTypes", "as", "moduleTypes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(91, program91, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("									\n										");
  return buffer;
  }
function program91(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n												 ");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'contentBinding': ("filteredMembers"),
    'height': (400),
    'rowHeight': ("memberRowHeight"),
    'width': ("100%")
  },hashTypes:{'contentBinding': "STRING",'height': "INTEGER",'rowHeight': "ID",'width': "STRING"},hashContexts:{'contentBinding': depth0,'height': depth0,'rowHeight': depth0,'width': depth0},inverse:self.noop,fn:self.program(92, program92, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Ember.ListView", options) : helperMissing.call(depth0, "collection", "Ember.ListView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n											  ");
  return buffer;
  }
function program92(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n													<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":list-group-item :member-list-item meta.conceptActive::inactiveConcept meta.deleteConcept:deleteConcept")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n							\n														<span class=\"right rowIconBtn\"><a class=\"pointer icon info \" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showMetaData", "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("></a></span>\n														");
  stack1 = helpers['if'].call(depth0, "memberHasPublishedStateHistory", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(68, program68, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n														<div class=\"memberRowWrapper\"><span>");
  stack1 = helpers._triageMustache.call(depth0, "referencedComponent.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> | <span class=\"description pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("referencedComponent.label")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "referencedComponent.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> |</div>\n								\n														<div class=\"memberRowWrapper\">\n															<span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":active active::inactiveMemberText")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><span class=\"status\">");
  stack1 = helpers['if'].call(depth0, "active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(75, program75, data),fn:self.program(73, program73, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  stack1 = helpers['if'].call(depth0, "memberHasPublishedState", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(77, program77, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "memberHasPendingEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(79, program79, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n															<span class=\"effective-time\">");
  data.buffer.push(escapeExpression((helper = helpers['effective-time-format'] || (depth0 && depth0['effective-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "effectiveTime", options) : helperMissing.call(depth0, "effective-time-format", "effectiveTime", options))));
  data.buffer.push("</span>\n															<span class=\"module-id\">");
  data.buffer.push(escapeExpression((helper = helpers['refset-list-item-span'] || (depth0 && depth0['refset-list-item-span']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "module-id", "moduleId", "moduleTypes", options) : helperMissing.call(depth0, "refset-list-item-span", "module-id", "moduleId", "moduleTypes", options))));
  data.buffer.push("</span>\n															<span class=\"uuid\">");
  stack1 = helpers._triageMustache.call(depth0, "uuid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n															<span>");
  stack1 = helpers['if'].call(depth0, "referencedComponent.active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(83, program83, data),fn:self.program(81, program81, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n														</div>\n													</div>\n												  ");
  return buffer;
  }

function program94(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n								<li class='list-group-item'>\n									");
  stack1 = helpers['if'].call(depth0, "totalNoOfMembers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(100, program100, data),fn:self.program(95, program95, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								</li>\n							");
  return buffer;
  }
function program95(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n										");
  stack1 = helpers['if'].call(depth0, "meta.allMembersLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(98, program98, data),fn:self.program(96, program96, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n									");
  return buffer;
  }
function program96(depth0,data) {
  
  
  data.buffer.push("\n											No matches found for your filter.\n										");
  }

function program98(depth0,data) {
  
  
  data.buffer.push("\n											Still loading members. Please wait...\n										");
  }

function program100(depth0,data) {
  
  
  data.buffer.push("\n										Your refset does not have any members yet...\n									");
  }

function program102(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n			\n				");
  stack1 = helpers['if'].call(depth0, "editMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(106, program106, data),fn:self.program(103, program103, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  return buffer;
  }
function program103(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("									\n					");
  stack1 = helpers.unless.call(depth0, "getConceptDataInProgress", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(104, program104, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  return buffer;
  }
function program104(depth0,data) {
  
  var buffer = '';
  data.buffer.push("		\n						<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelEdits", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary btn-side-menu delete-refset margin-bottom\">Discard Changes</button>\n                \n						<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateRefset", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success btn-side-menu edit-refset\">Save changes</button>\n					");
  return buffer;
  }

function program106(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					");
  stack1 = helpers['if'].call(depth0, "user.token", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(107, program107, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  return buffer;
  }
function program107(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						");
  stack1 = helpers['if'].call(depth0, "active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(111, program111, data),fn:self.program(108, program108, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;
  }
function program108(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							<button class=\"btn btn-primary btn-side-menu icon-btn edit-refset\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditMode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"btn-text\">Edit Refset</span><span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :edit")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span></button>\n\n							");
  stack1 = helpers['if'].call(depth0, "published", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(109, program109, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							\n							<button class=\"btn btn-danger btn-side-menu icon-btn delete-refset\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteRefset", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"btn-text\">Delete Refset</span><span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :undelete")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span></button>\n						");
  return buffer;
  }
function program109(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<button class=\"btn btn-warning btn-side-menu icon-btn delete-refset\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "inactivateRefset", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"btn-text\">Inactivate Refset</span><span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :deactivate")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span></button>\n							");
  return buffer;
  }

function program111(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							<button class=\"btn btn-warning btn-side-menu icon-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "activateRefset", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"btn-text\">Activate Refset</span><span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon :activate")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span></button>					\n						");
  return buffer;
  }

function program113(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n				");
  stack1 = helpers['if'].call(depth0, "editMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(126, program126, data),fn:self.program(114, program114, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			\n			\n				<select id=\"filterSelect\" class=\"btn btn-default btn-side-menu menufilter\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addFilter", {hash:{
    'on': ("change")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n					<option value=\"0\">Filter members...</option>\n					");
  stack1 = helpers.unless.call(depth0, "filterByInactiveConceptsIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(129, program129, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					\n					");
  stack1 = helpers.unless.call(depth0, "filterByStatusIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(131, program131, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  stack1 = helpers.unless.call(depth0, "filterByModuleIdIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(133, program133, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  stack1 = helpers.unless.call(depth0, "filterByEffectiveTimeIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(135, program135, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n					");
  stack1 = helpers['if'].call(depth0, "model.published", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(137, program137, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("										\n					\n					");
  stack1 = helpers.unless.call(depth0, "filterByLastUpdateDateIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(142, program142, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  stack1 = helpers.unless.call(depth0, "filterByLastUpdateUserIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(144, program144, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</select>\n\n				<div class=\"filterItem status\"> \n					 <div class=\"left-filter\"><p class=\"filterItem\">Filter by description or referenced component id: </p></div><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearDescriptionFilter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/trashbin.png\" width=\"40\" height=\"40\" alt=\"\"/></a><br>\n                    <div class=\"filterinputs clearfix\">\n					");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filterByDescription"),
    'placeholder': ("type filter here..."),
    'class': ("form-control"),
    'action': ("setSortToBestMatch"),
    'on': ("key-press")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING",'action': "STRING",'on': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0,'action': depth0,'on': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                        </div>\n				</div>\n\n				");
  stack1 = helpers['if'].call(depth0, "filterByInactiveConceptsIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(146, program146, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n				");
  stack1 = helpers['if'].call(depth0, "filterByStatusIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(148, program148, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n				\n				");
  stack1 = helpers['if'].call(depth0, "filterByModuleIdIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(150, program150, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n				");
  stack1 = helpers['if'].call(depth0, "filterByEffectiveTimeIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(152, program152, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n				");
  stack1 = helpers['if'].call(depth0, "filterByModifiedMembersIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(155, program155, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n	\n				");
  stack1 = helpers['if'].call(depth0, "filterByPublishedMembersIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(157, program157, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n				\n				");
  stack1 = helpers['if'].call(depth0, "filterByLastUpdateDateIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(159, program159, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n				");
  stack1 = helpers['if'].call(depth0, "filterByLastUpdateUserIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(161, program161, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  return buffer;
  }
function program114(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					<button class=\"btn btn-default btn-side-menu icon-btn metadata-btn border-top\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMetaData", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"btn-text\">");
  stack1 = helpers['if'].call(depth0, "showMetaData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(117, program117, data),fn:self.program(115, program115, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Metadata</span><span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer  showHeaderMetaData:hideinfo:info")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span></button>\n\n					<hr>\n\n					<!-- This requires vendore/my_utilities/drag_drop_file_upload.js --->\n					<div class=\"import-heading\">Import Members <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showImportHelp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("class=\"right icon info pointer\"></a></div>\n					<div id=\"fileUploadDropZone\" class=\"fileUploadDropZone\"><span id=\"droptext\">Drag a file of component IDs or an individual component from the Snomed CT browser here.<br><br>Alternatively use the file requestor below to choose a file.</span></div>\n					<br><input type=\"file\" id=\"refsetUploadFileInput\" />\n					\n					");
  stack1 = helpers['if'].call(depth0, "potentialMembersToImport", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(119, program119, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					\n					");
  stack1 = helpers['if'].call(depth0, "getConceptDataInProgress", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(123, program123, data),fn:self.program(121, program121, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					\n				");
  return buffer;
  }
function program115(depth0,data) {
  
  
  data.buffer.push("Hide");
  }

function program117(depth0,data) {
  
  
  data.buffer.push("Show");
  }

function program119(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n						<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearImportList", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-side-menu\">Clear import list</button>\n					");
  return buffer;
  }

function program121(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("		\n						<h2>Importing member file</h2>\n						");
  data.buffer.push(escapeExpression((helper = helpers['bs-progress'] || (depth0 && depth0['bs-progress']),options={hash:{
    'progressBinding': ("importProgress"),
    'type': ("info"),
    'stripped': ("true")
  },hashTypes:{'progressBinding': "STRING",'type': "STRING",'stripped': "STRING"},hashContexts:{'progressBinding': depth0,'type': depth0,'stripped': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-progress", options))));
  data.buffer.push("\n						<p><b>Please wait...</b></p>\n					");
  return buffer;
  }

function program123(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						");
  stack1 = helpers['if'].call(depth0, "importError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(124, program124, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n					");
  return buffer;
  }
function program124(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n							<h2>Importing failed</h2>\n							<p><b");
  stack1 = helpers._triageMustache.call(depth0, "importError", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b></p>\n						");
  return buffer;
  }

function program126(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					");
  stack1 = helpers['if'].call(depth0, "active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(127, program127, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  return buffer;
  }
function program127(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						<button class=\"btn btn-default btn-side-menu icon-btn metadata-btn border-top\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer  showHeaderMetaData:hideinfo:info")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMetaData", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"btn-text\">");
  stack1 = helpers['if'].call(depth0, "showMetaData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(117, program117, data),fn:self.program(115, program115, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Metadata</span><span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer  showHeaderMetaData:hideinfo:info")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span></button>\n						<button class=\"btn btn-default btn-side-menu icon-btn metadata-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exportRefset", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"btn-text\">Export Refset Pseudo Delta RF2</span><span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon :link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span></button>\n					");
  return buffer;
  }

function program129(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByInactiveConcepts\">Members with inactive components</option>");
  }

function program131(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByStatus\">Member status (active / inactive)</option>");
  }

function program133(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByModuleId\">Module type</option>");
  }

function program135(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByEffectiveTime\">Effective time</option>");
  }

function program137(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						");
  stack1 = helpers.unless.call(depth0, "filterByModifiedMembersIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(138, program138, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  stack1 = helpers.unless.call(depth0, "filterByPublishedMembersIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(140, program140, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;
  }
function program138(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByModifiedMembers\">Modified members</option>");
  }

function program140(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByPublishedMembers\">Published members</option>");
  }

function program142(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByLastUpdateDate\">Last update date</option>");
  }

function program144(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByLastUpdateUser\">Last updater</option>");
  }

function program146(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n					<div class=\"filterItem status\"> <div class=\"left-filter\"> <p class=\"filterItem\">\n						Active members with inactive concepts:</p></div>\n                         <div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByInactiveConcepts", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a> </div>\n                         <div class=\"filterinputs statusinputs clearfix\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (true),
    'checked': ("filterByInactiveConcepts")
  },hashTypes:{'value': "BOOLEAN",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Active Concepts <span class=\"margin-left\">");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (false),
    'checked': ("filterByInactiveConcepts")
  },hashTypes:{'value': "BOOLEAN",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Inactive concepts </span>\n                             </div>\n					</div>\n				");
  return buffer;
  }

function program148(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n					<div class=\"filterItem status\"> <div class=\"left-filter\"> <p class=\"filterItem\">\n						Status: </p></div>   \n                        <div class=\"right-filter\"> <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div>\n                       <div class=\"filterinputs statusinputs clearfix\"> ");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (true),
    'checked': ("filterByStatus")
  },hashTypes:{'value': "BOOLEAN",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Active<span class=\"margin-left\">");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (false),
    'checked': ("filterByStatus")
  },hashTypes:{'value': "BOOLEAN",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Inactive </span> \n					</div></div>\n				");
  return buffer;
  }

function program150(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n					<div class=\"filterItem status\">  <div class=\"left-filter\"><p class=\"filterItem\">\n						Module Id:</p> </div>  <div class=\"right-filter\"> <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByModuleId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div>\n                        <div class=\"filterdropdown clearfix\">\n						");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("filterByModuleId"),
    'dataType': ("moduleTypesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n                            </div>\n					</div>\n				");
  return buffer;
  }

function program152(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n				<div class=\"filterItem status\"><div class=\"left-filter\"><p class=\"filterItem\">\n						Effective Time:</p> </div>\n                    <div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByEffectiveTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div>\n                    <div class=\"filterdropdown clearfix\">\n						");
  stack1 = helpers['with'].call(depth0, "effectiveTimeArray", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(153, program153, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</div></div>\n				");
  return buffer;
  }
function program153(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("filterByEffectiveTime"),
    'dataType': ("effectiveTimeArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program155(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n					<div class=\"filterItem status\"> <div class=\"left-filter\"> <p class=\"filterItem\">\n						Modified members:</p></div>\n                        <div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByModifiedMembers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div>\n                         <div class=\"filterinputs statusinputs clearfix\">\n						");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (1),
    'checked': ("filterByModifiedMembers")
  },hashTypes:{'value': "INTEGER",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Modified ");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (0),
    'checked': ("filterByModifiedMembers")
  },hashTypes:{'value': "INTEGER",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Unchanged\n						</div>		</div>	\n				");
  return buffer;
  }

function program157(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n					<div class=\"filterItem status\"> \n						 <div class=\"left-filter\"><p class=\"filterItem\">Published members:</p></div> \n                      <div class=\"right-filter\"> <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByPublishedMembers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div>\n						 <div class=\"filterinputs statusinputs clearfix\"> ");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (1),
    'checked': ("filterByPublishedMembers")
  },hashTypes:{'value': "INTEGER",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Published ");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (0),
    'checked': ("filterByPublishedMembers")
  },hashTypes:{'value': "INTEGER",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Never Published\n						</div>	</div>		\n				");
  return buffer;
  }

function program159(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n					<div class=\"filterItem status\"> \n						 <div class=\"left-filter\"><p class=\"filterItem\">Modified since: </p> </div>\n<div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByLastUpdateDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div>\n            	 <div class=\"filterdropdown clearfix\">\n						");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Em.TextField", {hash:{
    'placeholder': ("Pick date..."),
    'valueBinding': ("filterByLastUpdateDate"),
    'data-provide': ("datepicker"),
    'data-date-format': ("MM d, yyyy"),
    'data-date-clear-btn': ("true"),
    'data-date-autoclose': ("true"),
    'class': ("form-control")
  },hashTypes:{'placeholder': "STRING",'valueBinding': "STRING",'data-provide': "STRING",'data-date-format': "STRING",'data-date-clear-btn': "STRING",'data-date-autoclose': "STRING",'class': "STRING"},hashContexts:{'placeholder': depth0,'valueBinding': depth0,'data-provide': depth0,'data-date-format': depth0,'data-date-clear-btn': depth0,'data-date-autoclose': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("	\n					</div></div>\n				");
  return buffer;
  }

function program161(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					<div class=\"filterItem status\">  <div class=\"left-filter\"><p class=\"filterItem\">\n						Last Updater:</p> </div>\n                        <div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByLastUpdateUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div>\n                        	 <div class=\"filterdropdown clearfix\">\n						");
  stack1 = helpers['with'].call(depth0, "moduleUpdatersArray", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(162, program162, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</div></div>\n				");
  return buffer;
  }
function program162(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("filterByLastUpdateUser"),
    'dataType': ("moduleUpdatersArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program164(depth0,data) {
  
  
  data.buffer.push("\n				<p><b>NOTE:</b> Filters apply to both existing member list and import member list</p>\n			");
  }

  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
