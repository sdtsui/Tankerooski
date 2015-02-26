'use strict';

angular.module('tank.famous',[])
  
.controller('FamousController', function($scope, $state, $window, $location, User, $http, $famous){
  var Transitionable = $famous['famous/transitions/Transitionable'];
  var Easing = $famous['famous/transitions/Easing'];
  var Surface = $famous['famous/core/Surface'];
  var View = $famous['famous/core/View'];
  var Transform = $famous['famous/core/Transform'];
  var ImageSurface = $famous['famous/surfaces/ImageSurface'];

  // $scope.introTransitionable = new Transitionable([0, 0, 0]);
  //$scope.angle = new Transitionable(0);
  $scope.opacityState = new Transitionable(1);
  $scope.opacityClear = new Transitionable(0);
  $scope.appear = new Transitionable();

  $scope.opacityOut = function() {
    $scope.opacityState.set(0, {duration: 5000}, function(){
      $state.go('welcome');
    });
  };

  $scope.opacityIn = function() {
    $scope.opacityClear.set(1)
  }

  $scope.turrentRotate = function() {
    $scope.appear.set();
  }



  $scope.introModifier = {
    // translateValues: [50, 100, 0],
    size: [window.innerWidth, window.innerHeight],
    origin: [0.5,0.5],
    align: [0.5,0.5]
  };

  /***** Initial tank still setup *****/
  // Sets the enter surface to the correct size and location
  $scope.enterModifier = {
    // translationValues
    size: [486, 290],
    origin: [0.5,0.5],
    align: [0.5,0.5],
    cursor: 'pointer'
  }
  
  // Sets tank image and gif to correct size and location
  $scope.tankModifier = {
    size: [446, 157],
    origin: [0.5,0.5],
    align: [0.5,0.5]
  }

  // Create new view for the turrent rotation
  $scope.turrentView = new View();

  // Create image surface for tank
  var _tankSurface = new ImageSurface({
    size: [446, 157],
    origin: [0.5,0.5],
    align: [0.5,0.5]
  });

  // Set the content of the surface to be the still tank
  _tankSurface.setContent('./assets/images/tankStill.jpg');
  
  // Goes to intro page with gif as soon as enter is clicked
  $scope.enter = function() {
    $state.go('intro');
  };

  /***** Cannon animation *****/
  $scope.scale = new Transitionable([1, 1, 1]);
  $scope.rotate = new Transitionable(0);

  // Create image for projectiles
  var _projectileSurface = new ImageSurface({
    origin: [0.5, 0.5],
    align: [0.5, 0.5]
  })

  // Set animations for the projectile and fire
  $scope.animateProjectile = function() {
    $scope.scale.set([40, 40, 40], {
      period: 1000
    });
    $scope.rotate.set(Math.PI * 2, {
      period: 1000
    });
  };

  /***** Flame fade *****/
  // Sets the inital opacity of the flames to be 1
  $scope.opacityState = new Transitionable(1);

  // Fade out flames then change states to the welcome page
  $scope.opacityOut = function() {
    $scope.opacityState.set(0, {duration: 5000}, function(){
      $state.go('welcome');
    });
  };
  
  // Sets the flame background to the size of the window
  $scope.introModifier = {
    // translateValues: [50, 100, 0],
    size: [window.innerWidth, window.innerHeight],
    origin: [0.5,0.5],
    align: [0.5,0.5]
  };


  // $scope.animate = function() {
  //   $scope.introTransitionable.set([0, 0, 0], {duration: 1000, curve: Easing['outElastic']});
  //   $scope.angle.set(2*Math.PI, {
  //     duration: 4000,
  //     curve: 'easeInOut'
  //   });
  // };





});