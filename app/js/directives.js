var app = angular.module("directives", []);

app.directive('axHello', function() {
    return {
        restrict: 'A', // Default
        scope: {
            greeted: '=',
            greeter: '@'
        },
        template: '<p>Hello {{greeted}} from {{greeter}}!</p>'
    }
});