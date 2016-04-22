(function () {

    angular
        .module('home.controller',[])
        .controller('homeCtrl', ['$scope', 'loginservice', '$location', homecontroller]);

    function homecontroller($scope, loginservice, $location) {
        this.Name = loginservice.GetUserDetails("myname");
    };

})();
