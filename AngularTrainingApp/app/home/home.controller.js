(function () {

    angular
        .module('home.controller', [])
        .controller('homeCtrl', ['$scope', 'loginservice', '$location', homecontroller]);

    function homecontroller($scope, loginservice, $location) {

        this.Name = loginservice.GetUserDetails("myname");

        this.Employees = loginservice.GetEmployeeList();

        $scope.delete = function (email) {
            if (confirm('Are your sure ?? you want to delete this record?')) {
                this.Employees = loginservice.deleteEmployee(email);
            }
        };

        $scope.addoredit = function (email) {
            var data = loginservice.GetEmployeeList();
            var Retval = {};
            for (var i = 0; i < data.length; i++) {
                if (data[i].email == email) {
                    data[i].email = $scope.email;
                    data[i].Name = $scope.Name;
                    data[i].Age = $scope.Age;
                    data[i].Gender = $scope.Gender;
                    Retval = "Exists";
                    this.Employees = data;
                }
                else { Retval = "NotExists"; }
            }
            if (Retval == "NotExists") {
                data.push({ Name: $scope.Name, email: $scope.Email, Age: $scope.Age, Gender: $scope.Gender });
                this.Employees = data;
            }
            $location.path("/home");
            $scope.refresh;
        }

        $scope.editEmployee = function (email) {
            this.Employees = loginservice.GetEmployeeList();
            var Result = this.Employees.find(function (row) {
                return row.email === email;
            });

            if (Result) {
                $scope.set = function () {
                    $scope.email = Result[0].email;
                    $scope.Name = Result[0].Name;
                    $scope.Age = Result[0].Age;
                    $scope.Gender = Result[0].Gender;
                }
            }
            $location.path("/home/editEmployee");
        };
    };
})();
