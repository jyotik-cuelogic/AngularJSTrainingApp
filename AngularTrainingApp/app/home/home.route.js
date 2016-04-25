(function () {
    angular.module('home.route', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/home/views/home.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        });
        $routeProvider.when('/home/editEmployee', {
            templateUrl: 'app/home/views/editEmployee.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        });

    }]);
})();