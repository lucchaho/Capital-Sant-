app.controller('RegisterCtrl', function($scope, $cordovaCamera) {
  $scope.registerAction = function ()
  {
  	var arr = {};
  	arr.name = this.name;
  	arr.firstname = this.firstname;
  	arr.address = this.address;
  	arr.city = this.city;
  	arr.birth = this.birth;
  	arr.mail = this.mail;
  	arr.password = this.password;
  	console.log(arr);
  } 
});
