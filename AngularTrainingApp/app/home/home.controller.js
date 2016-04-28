(function () {

    angular
        .module('home.controller', ['provider', 'localstoragemanager.service'])
        .controller('homeCtrl', ['$scope', '$rootScope', 'loginservice', '$location', 'localstoragemanager', '$window', homecontroller]);

    function homecontroller($scope, $rootScope, loginservice, $location, localstoragemanager, $window) {
        $scope.genders = ['Male', 'Female'];
        $scope.isValid = {};
        $scope.setValues = function () {
            this.EmailAdd = {};
            this.EmailAdd = localstoragemanager.getLocalStorage("Email");
            var data = loginservice.GetEmployeeList();
            for (var i = 0; i < data.length; i++) {
                if (data[i].Email == this.EmailAdd) {
                    $scope.Email = this.EmailAdd;
                    $scope.Name = data[i].Name;
                    $scope.Age = parseInt(data[i].Age);
                    $scope.Gender = data[i].Gender;
                }
            }
        };

        this.Name = loginservice.GetUserDetails("myname");

        this.Employees = loginservice.GetEmployeeList();

        $scope.delete = function (Email) {
            if (confirm('Are you sure ?? you want to delete this record?')) {
                this.Employees = loginservice.deleteEmployee(Email);
            }
        };

        $scope.addoredit = function (Email) {
            $rootScope.Email = null;
            var data = loginservice.GetEmployeeList();
            var Retval = {};

            if (this.EmailAdd != null) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].Email == $scope.Email) {
                        data[i].Email = this.EmailAdd;
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

            if ($rootScope.Email == null) {
                if ($scope.Email != null && $scope.Name != null && $scope.Age != null && $scope.Gender != null) {
                    data.push({ Name: $scope.Name, Email: Email, Age: $scope.Age, Gender: $scope.Gender });
                    this.Employees = data;
                    $location.path("/home");
                    $scope.refresh;
                }
            }
        }

        $scope.editEmployee = function (Email) {
            $scope.isValid = true;
            $rootScope.Email = Email;
            localstoragemanager.setLocalStorage("Email", Email);
            $location.path("/home/editEmployee");
        };

        $scope.cancel = function () {
            //localstoragemanager.removeItem('Email');//("Email", Email);
            $location.path("/home");
            $scope.refresh;
        };

        $scope.add = function () {
            $scope.isValid = false;
            $window.localStorage.removeItem("Email");
            $rootScope.Email = null;
            localstoragemanager.setLocalStorage("Email", null);
            console.log(localstoragemanager.getLocalStorage("Email"));
        };

        $scope.logout = function () {
            $window.localStorage.removeItem("Email");
            $window.localStorage.removeItem("username");
        };
    };
})();
