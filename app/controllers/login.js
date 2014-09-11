import Login 	from '../models/login';
import User		from '../models/user';

export default Ember.ObjectController.extend({

	loginInProgress 	: false,
	loginError			: null,
	password			: '',
	user				: User.create(),
	needs 				: ["refsets","utilities"],
	
	loginButtons: 
	[
   	    Ember.Object.create({title: 'Cancel', clicked: 'closeLoginModal'}),
   		Ember.Object.create({title: 'Login', clicked:'loginUser'})
   	],

   	registrationButtons: 
   	[
   		Ember.Object.create({title: 'Cancel', clicked: 'closeRegistrationModal'}),
   		Ember.Object.create({title: 'Register', clicked:'registerUser'})
   	],

	showLoginForm: function() 
	{
		Ember.Logger.log('showLoginForm');
		
		return Bootstrap.ModalManager.open('loginModal', '<img src="assets/img/login.png"> Snomed CT Login', 'login', this.loginButtons, this);
	},
	
	init : function()
	{	
		var controller 	= this.get('controllers.utilities');
		var userData 	= controller.getDataFromSessionStore('user');
		
		Ember.Logger.log("controller.login:init (userData)",userData);
		
		if (userData.status === 'ok')
		{
			this.set('user',userData.data);
		}
	},
	
	logout : function()
	{
		var controller 	= this.get('controllers.utilities');
		var userData 	= controller.getDataFromSessionStore('user');
		var user;
		
		if (userData.status === 'ok')
		{
			user = userData.data;
			user.logoutTimer = 0;
			user.token = null;
		}
		else
		{
			user = User.create();
		}

		this.set('user',user);

		var utilitiesController = this.get('controllers.utilities');
		utilitiesController.storeDataInSessionStore('user',user);

		var refsetController = this.get('controllers.refsets');		
		refsetController.getAllRefsets(1);
	},
	

	showRegistrationForm: function() 
	{
		return Bootstrap.ModalManager.open('registrationModal', '<img src="assets/img/login.png">  Snomed CT Registration', 'registration', this.registrationButtons, this);
	},
	
	actions : 
	{
		loginUser: function()
		{
			Ember.Logger.log('Performing Authentication');
			
			var _this = this;

			_this.set("loginInProgress",1);
			_this.set('loginError', null);
			
			Login.authenticate(this.user.username,this.password).then(function(authResult)
			{
				Ember.Logger.log("authResult",authResult);
				
				var loggedInUser = User.create({
					username: authResult.user.name,
					firstName: authResult.user.givenName,
					lastName: authResult.user.surname,
					token: authResult.user.token,
					logoutTimer : RefsetENV.APP.loginExpiry * 60
				});

				Ember.Logger.log("User logged in",JSON.stringify(loggedInUser));
				
				_this.set('password', '');			
				
				Login.isPermittedToUseRefset(loggedInUser.username).then(function(isAllowedAccessToRefset)
				{
					_this.set('loginInProgress', 0);

					switch(isAllowedAccessToRefset)
					{
						case 1:
						{
							_this.set('user',loggedInUser);
							_this.send('closeLoginModal');

							var UtilitiesController = _this.get('controllers.utilities');						
							UtilitiesController.storeDataInSessionStore('user',loggedInUser);
							
							var refsetsController = _this.get('controllers.refsets');
							refsetsController.getAllRefsets(1);

							break;
						}
						
						case 0:
						{
							_this.set('loginError', "You do not have access to this application");
							break;
						}
						
						default:
						{
							_this.set('loginError', "Unable to check application access: " + isAllowedAccessToRefset);
							break;
						}
					}
						
				},

				function(error)
				{
					Ember.Logger.log('isPermittedToUseRefset error:' + error);
					
					_this.set('loginInProgress', 0);
					_this.set('loginError', "Unable to check application access: " + error.errorMessage);
				});
	
			},
			
			function(error)
			{
				Ember.Logger.log('error',error);
				
				_this.set('loginInProgress', 0);
				_this.set('loginError', "Username and password not recognised");
			});
		},

		registerUser: function()
		{
			Ember.Logger.log('try to register user...');
			
			var regBody = "Name : " + this.regname + "%0A%0A";
			regBody += "Phone : " + this.regphone + "%0A%0A";
			regBody += "IHTSDO Login : " + this.reguser + "%0A%0A";
			regBody += "Nationality : " + this.regnationality + "%0A%0A";
			regBody += this.regnotes;
			
			window.location.href = 'mailto:' + RefsetENV.APP.RegistrationEmail + '?subject=Request for access to Snomed CT&body=' + regBody;
			this.send('closeRegistrationModal');
		},
		
		closeLoginModal: function()
		{
			return Bootstrap.ModalManager.close('loginModal');
		},

		closeRegistrationModal: function()
		{
			return Bootstrap.ModalManager.close('registrationModal');
		},
		
		logout : function()
		{
			this.logout()
		},
	}
	
});