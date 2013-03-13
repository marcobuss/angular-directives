var app = angular.module("directives", []);

app.directive('axHello', function() {
    return {
        restrict: 'A', // Default
        scope: {
            greeted: '@'
        },
        template: '<p>Hello {{greeted}}!</p>'
    }
});