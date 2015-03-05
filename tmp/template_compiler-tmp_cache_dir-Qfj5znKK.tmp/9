import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n						<label>Are you importing a published Reference Set?</label> ");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (true),
    'checked': ("published")
  },hashTypes:{'value': "BOOLEAN",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Yes ");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (false),
    'checked': ("published")
  },hashTypes:{'value': "BOOLEAN",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" No\n					");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("	\n									<td class=\"label pointer\">Refset Description</td>\n									<td class=\"content\" colspan=\"3\">\n										");
  stack1 = helpers._triageMustache.call(depth0, "rf2FileToImport.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						  			</td>\n								");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									<td class=\"content\" colspan=\"4\">\n										<label class=\"control-label pointer\" rel=\"tooltip\" title=\"Reference Set description should conform to the editorial rules for Fully Specified Name, including valid semantic (hierarchy) tags.\">Reference Set Description</label>\n										");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("description"),
    'class': ("form-control"),
    'required': (true),
    'data-parsley-required-message': ("Refset Description is required"),
    'data-parsely-descriptioninuse': ("x"),
    'data-parsely-descriptioninuse-message': ("Description has to be unique. The description you have provided is already in use.")
  },hashTypes:{'value': "ID",'class': "STRING",'required': "BOOLEAN",'data-parsley-required-message': "STRING",'data-parsely-descriptioninuse': "STRING",'data-parsely-descriptioninuse-message': "STRING"},hashContexts:{'value': depth0,'class': depth0,'required': depth0,'data-parsley-required-message': depth0,'data-parsely-descriptioninuse': depth0,'data-parsely-descriptioninuse-message': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n									</td>\n								");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("									\n									<td class=\"label\">SCTID</td>\n									<td class=\"content\" colspan=3>\n										");
  stack1 = helpers._triageMustache.call(depth0, "rf2FileToImport.sctId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n									</td>\n								");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n		    <div class=\"panel panel-info ember-view fade in\">\n		        <div class=\"panel-heading accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#importRF2File\">\n		             <h4 class=\"panel-title\">Import RF2 File</h4>\n		        </div>\n		        <div class=\"panel-collapse collapse in\">\n		            <div id=\"importRF2File\" class=\"panel-body member-list\">\n		            	\n						");
  stack1 = helpers['if'].call(depth0, "potentialMembersToImport", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</div>\n				</div>\n			</div>	\n\n		");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n			            	");
  stack1 = helpers['if'].call(depth0, "moreThanOneRefsetInRF2", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n								Your RF2 file contains more than one Refset. Please choose which refset you wish to import:\n\n								<p>\n								");
  stack1 = helpers.each.call(depth0, "mbr", "in", "potentialMembersToImport", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								</p>\n\n							");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n									<label class=\"notALabel\">");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': ("mbr"),
    'name': ("refsetId"),
    'checked': ("rf2FileToImport")
  },hashTypes:{'value': "ID",'name': "STRING",'checked': "ID"},hashContexts:{'value': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "mbr.sctId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" | ");
  stack1 = helpers._triageMustache.call(depth0, "mbr.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" | ");
  stack1 = helpers._triageMustache.call(depth0, "mbr.concepts.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" members</label><br>\n								");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n								Your RF2 file contains a single Refset:\n\n								<p>\n								");
  stack1 = helpers.each.call(depth0, "member", "in", "potentialMembersToImport", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								</p>\n\n							");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("					\n									");
  stack1 = helpers._triageMustache.call(depth0, "member.sctId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" | ");
  stack1 = helpers._triageMustache.call(depth0, "member.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" | ");
  stack1 = helpers._triageMustache.call(depth0, "member.concepts.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" members<br>\n								");
  return buffer;
  }

function program17(depth0,data) {
  
  
  data.buffer.push("\n							There are no published refsets in that file...\n						");
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n		\n			");
  stack1 = helpers.unless.call(depth0, "importError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			\n		");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n				");
  stack1 = helpers['if'].call(depth0, "potentialMembersToImport", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n				    <div class=\"panel panel-info ember-view fade in panelNoPadding\">\n				        <div class=\"panel-heading accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#importMemberList\">\n				             <h4 class=\"panel-title\">Review potential members to import. ");
  stack1 = helpers['if'].call(depth0, "filteringActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n				        </div>\n				        <div class=\"panel-collapse collapse in\">\n				            <div id=\"importMemberList\" class=\"panel-body member-list\">\n				            	");
  stack1 = helpers['with'].call(depth0, "controller.moduleTypesArray", "as", "moduleTypesArray", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</div>\n						</div>\n					</div>\n				");
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("Showing ");
  stack1 = helpers._triageMustache.call(depth0, "filteredImportMembers.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" of ");
  stack1 = helpers._triageMustache.call(depth0, "potentialMembersToImport.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" items matching your filter");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("(");
  stack1 = helpers._triageMustache.call(depth0, "potentialMembersToImport.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n									 ");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'contentBinding': ("filteredImportMembers"),
    'height': (400),
    'rowHeight': (59),
    'width': ("100%")
  },hashTypes:{'contentBinding': "STRING",'height': "INTEGER",'rowHeight': "INTEGER",'width': "STRING"},hashContexts:{'contentBinding': depth0,'height': depth0,'rowHeight': depth0,'width': depth0},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Ember.ListView", options) : helperMissing.call(depth0, "collection", "Ember.ListView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								  ");
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n										<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":list-group-item :member-list-item meta.conceptActive::inactiveConcept meta.deleteConcept:deleteConcept")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n											<span class=\"trashIcon\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImportMember", "referencedComponentId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon meta.deleteConcept:undelete:delete")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\"></a></span>\n		\n											<div class=\"listViewRow\"><span class=\"sctid\">");
  stack1 = helpers._triageMustache.call(depth0, "referencedComponentId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> | <span class=\"description\">");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> |</div>						\n		\n											<span class=\"tickIcon\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImportMemberActive", "referencedComponentId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon active:tick:cross")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\"></a></span>\n		\n											<label><span>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Em.Select", {hash:{
    'value': ("content.moduleId"),
    'content': ("moduleTypesArray"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.label"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</span></label>\n					\n											");
  stack1 = helpers.unless.call(depth0, "meta.conceptActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n										</div>\n									  ");
  return buffer;
  }
function program28(depth0,data) {
  
  
  data.buffer.push("<label class=\"inactiveMemberText\">Note: This component is INACTIVE</label>");
  }

function program30(depth0,data) {
  
  var buffer = '';
  data.buffer.push("		\n		\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearForm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary btn-side-menu delete-refset margin-bottom\">Clear Form</button>\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "initRefsetImport", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success btn-side-menu edit-refset\">Create Refset</button>\n		");
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearImportList", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-side-menu\">Clear import list</button>\n		");
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("		\n			<h2>Importing member file</h2>\n			");
  data.buffer.push(escapeExpression((helper = helpers['bs-progress'] || (depth0 && depth0['bs-progress']),options={hash:{
    'progressBinding': ("importProgress"),
    'type': ("info"),
    'stripped': ("true")
  },hashTypes:{'progressBinding': "STRING",'type': "STRING",'stripped': "STRING"},hashContexts:{'progressBinding': depth0,'type': depth0,'stripped': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-progress", options))));
  data.buffer.push("\n			<p><b>Please wait...</b></p>\n		");
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n			");
  stack1 = helpers['if'].call(depth0, "importError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		");
  return buffer;
  }
function program37(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n				<h2>Importing failed</h2>\n				<p><b");
  stack1 = helpers._triageMustache.call(depth0, "importError", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b></p>\n			");
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n		");
  stack1 = helpers['if'].call(depth0, "potentialMembersToImport", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(40, program40, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		");
  return buffer;
  }
function program40(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n			<hr>\n			\n			<h2>Filter concepts</h2>\n		\n			<p>NOTE: All listed members will be imported regardless of this filter, which will only limit what you can view, not what wll be imported.\n			\n			<p class=\"filterItem\">\n				Filter by description or referenced component id: <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearDescriptionFilter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\">clear</a><br>\n				");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filterByDescription"),
    'placeholder': ("type filter here..."),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			</p>\n\n			<p class=\"filterItem\">\n				Show: <br>\n				");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (-1),
    'checked': ("filterByInactiveConcepts")
  },hashTypes:{'value': "INTEGER",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" All concepts<br>\n				");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (false),
    'checked': ("filterByInactiveConcepts")
  },hashTypes:{'value': "BOOLEAN",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Inactive Concepts<br>\n				");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (true),
    'checked': ("filterByInactiveConcepts")
  },hashTypes:{'value': "BOOLEAN",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Active Concepts<br>\n			</p>\n			\n		");
  return buffer;
  }

  data.buffer.push("\n\n<div class=\"row\">\n\n	<div class=\"col-md-9\">\n\n		<div class=\"panel panel-info ember-view fade in\">\n		    <div class=\"panel-heading accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#refsetHeader\">\n		         <h4 class=\"panel-title\">Create New Reference Set - Reference Set Header</h4>\n		    </div>\n		    <div class=\"panel-collapse collapse in\">\n		        <div id=\"refsetHeader\" class=\"panel-body\">\n\n					");
  stack1 = helpers['if'].call(depth0, "isRF2Import", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n					<form id=\"refset-header\" class=\"refset-header\">\n\n						<table width=\"100%\">\n\n							<tr>\n								");
  stack1 = helpers['if'].call(depth0, "isRF2Import", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</tr>\n\n							<tr>\n								<td class=\"label\">Language</td>\n								<td class=\"content\">\n									");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'valueBinding': ("languageCode"),
    'dataType': ("languagesArray"),
    'class': ("form-control")
  },hashTypes:{'valueBinding': "STRING",'dataType': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'dataType': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n					  			</td>\n							</tr>\n\n							<tr>\n								<td class=\"label\">Refset Type</td>\n								<td class=\"content\">\n									");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'valueBinding': ("typeId"),
    'dataType': ("refsetTypesArray"),
    'class': ("form-control")
  },hashTypes:{'valueBinding': "STRING",'dataType': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'dataType': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n								</td>\n								<td class=\"label\">Refset Members Type</td>\n								<td class=\"content\">\n									");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'valueBinding': ("componentTypeId"),
    'dataType': ("componentTypesArray")
  },hashTypes:{'valueBinding': "STRING",'dataType': "STRING"},hashContexts:{'valueBinding': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n					  			</td>\n							</tr>\n\n							<tr>\n								<td class=\"label\"><span class=\"pointer\" rel=\"tooltip\" title=\"Planned publish member effective time\">Planned Published Date</span></td>\n								<td class=\"content\">\n									");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Em.TextField", {hash:{
    'placeholder': ("enter date..."),
    'valueBinding': ("meta.expectedReleaseDateInput"),
    'data-provide': ("datepicker"),
    'data-date-format': ("yyyymmdd"),
    'data-date-clear-btn': ("true"),
    'data-date-autoclose': ("true"),
    'class': ("form-control"),
    'required': ("true"),
    'data-parsley-required-message': ("Planned Publish Date is required")
  },hashTypes:{'placeholder': "STRING",'valueBinding': "STRING",'data-provide': "STRING",'data-date-format': "STRING",'data-date-clear-btn': "STRING",'data-date-autoclose': "STRING",'class': "STRING",'required': "STRING",'data-parsley-required-message': "STRING"},hashContexts:{'placeholder': depth0,'valueBinding': depth0,'data-provide': depth0,'data-date-format': depth0,'data-date-clear-btn': depth0,'data-date-autoclose': depth0,'class': depth0,'required': depth0,'data-parsley-required-message': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("								\n								</td>\n								<td class=\"label\">Module</td><td class=\"content\">\n									");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'valueBinding': ("moduleId"),
    'dataType': ("moduleTypesArray"),
    'id': ("newRefsetModuleId"),
    'class': ("form-control")
  },hashTypes:{'valueBinding': "STRING",'dataType': "STRING",'id': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'dataType': depth0,'id': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n					  			</td>\n							</tr>\n							<tr>\n								");
  stack1 = helpers['if'].call(depth0, "isRF2Import", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</tr>\n\n						</table>\n					</form>\n				</div>\n			</div>\n		</div>\n\n		");
  stack1 = helpers['if'].call(depth0, "isRF2Import", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(19, program19, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n							\n						\n	<div class=\"col-md-3\">	\n  <div class=\"edit-heading\">Editing</div>\n              <div class=\"editing-refset clearfix\">\n                  		");
  stack1 = helpers.unless.call(depth0, "getConceptDataInProgress", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(30, program30, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  </div>\n		<!-- This requires vendor/my_utilities/drag_drop_file_upload.js --->\n		<h2>Import Members <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showImportHelp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("class=\"right icon info pointer\"></a></h2>\n		<div id=\"fileUploadDropZone\" class=\"fileUploadDropZone\"><span id=\"droptext\">Drag an RF2 file, a file of component IDs or an individual component from the Snomed CT browser here.<br><br>Alternatively use the file requestor below to choose a file.</span></div>\n		<br><input type=\"file\" id=\"refsetUploadFileInput\" />\n		\n		");
  stack1 = helpers['if'].call(depth0, "potentialMembersToImport", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		\n		");
  stack1 = helpers['if'].call(depth0, "getConceptDataInProgress", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		\n		");
  stack1 = helpers.unless.call(depth0, "isRF2Import", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				\n\n		\n	</div>\n</div>\n");
  return buffer;
  
});
