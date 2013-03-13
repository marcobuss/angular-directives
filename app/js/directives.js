var app = angular.module("directives", []);

app.directive('axHello', function () {
    return {
        link: function (scope, iElement, attrs) {
            iElement.bind("click", function (event) {
                console.log("click", event);
                scope.$apply(function () {
                    scope.greeted = "World";
                });
            });
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