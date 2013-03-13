var app = angular.module("directives", []);

app.directive('axHello', function() {
    return {
        restrict: 'A', // Default
        template: '<p>Hello World!</p>'
        // ,replace: true
    }
});