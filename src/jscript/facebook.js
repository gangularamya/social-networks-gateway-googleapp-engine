var facebookAppId = '418417188254997';
var facebookChannelUrl = 'http://firestormswillhit.appspot.com/';
var facebookDataStore = 'http://firestormswillhit.appspot.com/facebookdatastore.db';

// document
// .write('<script type="text/javascript" src="jSRequest.js"
// ></script>');

window.fbAsyncInit = function() {
	// init the FB JS SDK
	FB.init({
		appId : facebookAppId, // App ID from the app dashboard
		channelUrl : facebookChannelUrl, // Channel file for x-domain comms
		status : true, // Check Facebook Login status
		xfbml : true
	// Look for social plugins on the page
	});

	// Additional initialization code such as adding Event Listeners goes here
};
// Load the SDK asynchronously
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "//connect.facebook.net/en_US/all.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function fbLogin() {
	FB.login(function(response) {
		if (response.authResponse) {
			var params = {};
			params['authtoken'] = response.authResponse.accessToken;
			alert(params['authtoken']);
			FB.api('/me', function(response) {
				params['name'] = response.name;
				params['email'] = response.email;
		//		post_to_url(facebookDataStore, params, "post");
			});
		} else {
			console.log('User cancelled login or did not fully authorize.');
		}
	}, {
		scope : 'email,user_likes'
	});
}
