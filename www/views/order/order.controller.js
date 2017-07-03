app.controller('OrderCtrl', function($scope,$http, $cordovaCamera) {

	$scope.searchMedic =  function() {
		if (this.search != "")
		{
			console.log(this.search);
			var caca = "?nom=" + this.search;
		$http({
			method: 'GET',
			url: 'https://medicaments.api.gouv.fr/api/medicaments' + caca
		}).then(function successCallback(response) {
			console.log(response);
			this.results = response.data;
			$scope.results = response.data;
		}, function errorCallback(response) {

		});
	}
	else
	{
		$scope.results = [];
	}
	}
	$scope.addMedic =  function(nom) {
		console.log(nom);
	}
});
