(function () {

    angular
        .module('home.controller', [])
        .controller('homeCtrl', ['$scope', '$rootScope', 'loginservice', '$location', homecontroller]);

    function homecontroller($scope, $rootScope, loginservice, $location) {
        this.EmailAdd = {};
        $scope.setValues = function () {

            var data = loginservice.GetEmployeeList();
            for (var i = 0; i < data.length; i++) {
                if (data[i].Email == $rootScope.Email) {
                    $scope.Email = $rootScope.Email;
                    $scope.Name = data[i].Name;
                    $scope.Age = data[i].Age;
                    $scope.Gender = data[i].Gender;
                }
            }
            this.EmailAdd = $rootScope.Email;
            $rootScope.Email = null;
        };

        this.Name = loginservice.GetUserDetails("myname");

        this.Employees = loginservice.GetEmployeeList();

        $scope.delete = function (Email) {
            if (confirm('Are you sure ?? you want to delete this record?')) {
                this.Employees = loginservice.deleteEmployee(Email);
            }
        };

        $scope.addoredit = function (Email) {

            var data = loginservice.GetEmployeeList();
            var Retval = {};

            if ($scope.Email != null) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].Email == $scope.Email) {
                        data[i].Email = $scope.Email;
                        data[i].Name = $scope.Name;
                        data[i].Age = $scope.Age;
                        data[i].Gender = $scope.Gender;
                        Retval = 'Exists';
                        this.Employees = data;
                        $location.path("/home");
                        $scope.refresh;
                    }
                }
            }

            if (this.EmailAdd == null) {
                if ($scope.Email != null || $scope.Name != null || $scope.Age != null || $scope.Gender != null) {
                    data.push({ Name: $scope.Name, Email: $scope.Email, Age: $scope.Age, Gender: $scope.Gender });
                    this.Employees = data;
                    $location.path("/home");
                    $scope.refresh;
                }
            }
        }

        $scope.editEmployee = function (Email) {
            this.show = true;
            $rootScope.Email = Email;
            $location.path("/home/editEmployee");
        };

        $scope.cancel = function () {
            $location.path("/home");
            $scope.refresh;
        };
    };
})();
