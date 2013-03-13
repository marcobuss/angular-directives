var app = angular.module("directives", []);

app.directive('axHello', function() {
    return {
        restrict: 'A', // Default
        scope: {},
        template: '<p>Hello {{username}}!</p>'
    }
});