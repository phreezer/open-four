'use strict';

describe('Controller: OfloginCtrl', function () {

  // load the controller's module
  beforeEach(module('forumApp'));

  var OfloginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OfloginCtrl = $controller('OfloginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
