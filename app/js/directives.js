var app = angular.module("directives", []);

app.directive('axHello', function() {
    return {
        restrict: 'A', // Default
        scope: {
            greeted: '=',
            greeter: '@'
        },
        template: '<p><strong>Hello {{greeted}} from {{greeter}}!</strong></p><p data-ng-transclude></p>',
        transclude: true
    }
});