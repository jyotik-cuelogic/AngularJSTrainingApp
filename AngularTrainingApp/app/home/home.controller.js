(function () {

    angular
        .module('home.controller', [])
        .controller('homeCtrl', ['$scope', 'loginservice', '$location', homecontroller]);

    function homecontroller($scope, loginservice, $location) {
        $scope.Name = '';
        $scope.Email = '';
        $scope.Age = '';
        $scope.Gender = '';

        this.Name = loginservice.GetUserDetails("myname");

        this.Employees = loginservice.GetEmployeeList();

        $scope.delete = function (email) {
            if (confirm('Are your sure ?? you want to delete this record?')) {
                this.Employees = loginservice.deleteEmployee(email);
            }
        };

        $scope.add = function (Name, Email, Age, Gender) {
            alert();
            var data = loginservice.GetEmployeeList();
            alert($scope.Name);
            data.push({ Name: $scope.Name, email: $scope.Email, Age: $scope.Age, Gender: $scope.Gender });
            this.Employees = data;
            $scope.refresh();
        }

        $scope.editEmployee = function (email) {
            alert('Hi');
            $location.path("#/home/editEmployee");
        };


    };
})();
