app.controller('AddDocumentCtrl', function($scope, $cordovaCamera, $cordovaGeolocation, $cordovaImagePicker) {
  var documentInformation = {};
  var isPictureChoosed = false;

  var posOptions = {timeout: 10000, enableHighAccuracy: false};

  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      documentInformation.lat  = position.coords.latitude;
      documentInformation.long = position.coords.longitude;

      console.log(documentInformation.lat, documentInformation.long);
    }, function(err) {
      console.log("GEOLOC ERROR")
    });

    $scope.addDocumentSubmit = function ()
    {
      documentInformation.name = this.documentName;
      documentInformation.type = this.documentType;
      documentInformation.date = this.documentDate;
      documentInformation.place = this.documentLocation;
      documentInformation.treatment_nature = this.treatmentNature;
      documentInformation.treatment_type = this.treatmentType;
      documentInformation.doctor_id = this.doctor;

      var date = new Date();
      documentInformation.date_insert = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2);



      console.log(documentInformation);
    };

    //  Function to take a picture
    $scope.takePicture = function()
    {

      document.getElementById("choose-picture").setAttribute("disabled", "true");

      var options = {
        quality : 75,
        destinationType : Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.CAMERA,
        allowEdit : true,
        encodingType: Camera.EncodingType.PNG,
        targetWidth: 1000,
        targetHeight: 1200,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        console.log("success");
        $scope.imgURI = "data:image/png;base64," + imageData;
        documentInformation.content = $scope.imgURI;
      }, function(err) {
        console.log("ERROR");
      });
    };

    // Function to open picture from device
    $scope.choosePicture = function () {
      var options = {
        maximumImagesCount: 1,
        width: 1000,
        height: 1200,
        quality: 80
      };

      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          console.log("OK");
          console.log(results);
          for (var i = 0; i < results.length; i++) {
              window.plugins.Base64.encodeFile(results[i], function(base64){
              documentInformation.content = base64;
            });
          }
        }, function(error) {
          console.log("picture fail");
          // error getting photos
        });
      document.getElementById("take-picture").setAttribute("disabled", "true");
    };

});
