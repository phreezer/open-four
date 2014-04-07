'use strict';

describe('Controller: OffeaturedlistCtrl', function () {

  // load the controller's module
  beforeEach(module('forumApp'));

  var OffeaturedlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OffeaturedlistCtrl = $controller('OffeaturedlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
