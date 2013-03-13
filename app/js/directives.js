var app = angular.module("directives", []);

app.directive('axHello', function() {
    return {
        compile: function (tElement, attrs) {
            console.log('compileFn: ', tElement, attrs, tElement.html());
            return function (scope, iElement, attrs) {
                console.log('linkFn: ', scope, iElement, attrs);
            }
        },
        restrict: 'A', // Default
        scope: {
            greeted: '=',
            greeter: '@'
        },
        template: '<p><strong>Hello {{greeted}} from {{greeter}}!</strong></p><p data-ng-transclude></p>',
        transclude: true
    }
});