'use strict';

describe('Controller: OfpostCtrl', function () {

  // load the controller's module
  beforeEach(module('forumApp'));

  var OfpostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OfpostCtrl = $controller('OfpostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
