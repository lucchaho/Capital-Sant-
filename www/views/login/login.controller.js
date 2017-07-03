app.controller('LoginCtrl', function($scope,$state, $cordovaCamera) {
	$scope.loginAction = function ()
	{
		firebase.auth().signInWithEmailAndPassword(this.mail, this.password).then(function(valeur) {
			$state.go("app.categories");
		}, function(raison) {
			alert("Le mot de passe ou l'addresse e-mail est incorrect");
		});
	}
});
