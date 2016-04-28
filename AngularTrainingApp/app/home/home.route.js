(function () {
    angular.module('home.route', ['ngRoute'])
    .config(['$routeProvider',  function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/home/views/home.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        });
        //$routeProvider.when('/home/editEmployee', {
        //    templateUrl: 'app/home/views/editEmployee.html?Email',
        //    params: {
        //        Email: null,
        //    },
        //    controller: ('homeCtrl', ['$scope', '$state', function ($scope, $state) {
        //        alert($state.Email);
        //        $scope.Email = $state.Email;
        //    }]),
        //    controllerAs: 'home'
        //});
        $routeProvider.when('/home/editEmployee', {
            templateUrl: 'app/home/views/editEmployee.html',
            controller:  'homeCtrl',
            controllerAs: 'home'
        });
        $routeProvider.when('/home/add', {
            templateUrl: 'app/home/views/editEmployee.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        });
    }]);
})();