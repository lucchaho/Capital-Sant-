app.controller('DocumentCtrl', function($scope, $ionicModal) {
	$ionicModal.fromTemplateUrl('image-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.openModal = function() {
		$scope.modal.show();
	};

	$scope.closeModal = function() {
		$scope.modal.hide();
	};
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
    	$scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
  });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
  });
    $scope.$on('modal.shown', function() {
    	console.log('Modal is shown!');
    });

    $scope.imageSrc = 'http://ionicframework.com/img/ionic-logo-blog.png';

    $scope.showImage = function(path) {
    		$scope.imageSrc = path;
    	$scope.openModal();
    }
});