angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
    
//------------------------------------------------------    
    
 $ionicModal.fromTemplateUrl('templates/about.html', {
    scope: $scope
  }).then(function(amodal) {
    $scope.amodal = amodal;
  });
    
  $scope.closeAbout = function() {
    $scope.amodal.hide();
  };    

  $scope.about = function() {
    $scope.amodal.show();
  };
//-----------------------------------------------------

$ionicModal.fromTemplateUrl('templates/setting.html', {
    scope: $scope
  }).then(function(smodal) {
    $scope.smodal = smodal;
  });
    
  $scope.closeSetting = function() {
    $scope.smodal.hide();
  };    

  $scope.setting = function() {
    $scope.smodal.show();
  };
    
    
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { pic: 'img/pp.png', title: 'Power Ranger', id: 1 },
    { pic: 'img/ca.png', title: 'Captain American', id: 2 },
    { pic: 'img/ir.png', title: 'iRobot', id: 3 },
    { pic: 'img/ds.png', title: 'Dead Silence', id: 4 },
    { pic: 'img/bb.png', title: 'Boss Baby', id: 5 },
    { pic: 'img/sn.png', title: 'Snatched', id: 6 }
  ];
})


.controller('PlaylistCtrl', function($scope, $http) {

    
    $scope.videos = [
        {
            title:"My first video",
            date:"1-1-2014",
            name:"https://www.youtube.com/embed/O2Bsw3lrhvs?ecver=2"   
        },
        {
           title:"My second video",
            date:"1-2-2014" 
        }
    ];
//    
//        $scope.videos = [];
//
//    $scope.youtubeParams = {
//      key: 'AIzaSyAgnfN_I16KrTYLREMwZP2BT_S6WGhkUoY',
//      type: 'video',
//      maxResults: '5',
//      part: 'id,snippet',
//      q: 'creatorup',
//      order: 'date',
//      channelId: 'UCeEqIv7lVwOOLnwxuuhQFuQ',
//    }
//
//    $http.get('https://www.googleapis.com/youtube/v3/search', {params:$scope.youtubeParams}).success(function(response){
//      angular.forEach(response.items, function(child){
//        $scope.videos.push(child);
//      });
//    });
    

    
    
})

.controller('ContactCtrl', function($scope, $stateParams) {
    $scope.searchlist = [
           { pic: 'img/pp.png', title: 'Power Ranger', id: 1 },
    { pic: 'img/ca.png', title: 'Captain American', id: 2 },
    { pic: 'img/ir.png', title: 'iRobot', id: 3 },
    { pic: 'img/ds.png', title: 'Dead Silence', id: 4 },
    { pic: 'img/bb.png', title: 'Boss Baby', id: 5 },
    { pic: 'img/sn.png', title: 'Snatched', id: 6 }
    ]
});;
