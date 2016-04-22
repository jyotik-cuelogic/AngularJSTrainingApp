(function () {
    angular
        .module('login.controller', ['services'])
        .controller('loginCtrl', ['$scope', 'loginservice', '$location', logincontroller]);

    function logincontroller($scope, loginservice, $location) {
        $scope.username = '';
        $scope.password = '';
        var credentials = {};
        $scope.authenticate = function () {
            credentials.username = $scope.username;
            credentials.password = $scope.password;
            
            var Name = loginservice.authenticate(credentials);
             
            if (Name != "") {
                $location.path("/home");
                loginservice.SaveUserDetails(Name)
            }
            else {
                alert('Invalid username or password');
                $location.path("/login");
            }
        };
    }
})();
