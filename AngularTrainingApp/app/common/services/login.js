(function () {

    angular
        .module('login.service', ['provider', 'localstoragemanager.service'])
        .service('loginservice', ['userDetails', 'employeeDetails', 'localstoragemanager', loginservice]);

    function loginservice(userDetails, employeeDetails, localstoragemanager) {
        var userData = userDetails.get();
        var employeeData = employeeDetails.get();

        function isValid(credentials) {
            for (var i = 0; i < userData.length; i++) {
                if (userData[i].Email == credentials.username && userData[i].pass == credentials.password) {
                    return GetEmployeeDetails(userData[i].Email);
                }
            }
            return "";
        };

        function GetEmployeeDetails(Email) {
            for (var i = 0; i < employeeData.length; i++) {
                if (employeeData[i].Email == Email)
                    return employeeData[i].Name;
            }
            return "";
        };

        this.SaveUserDetails = function (value) {
            localstoragemanager.setLocalStorage("username", value);
        };

        this.GetUserDetails = function () {
            return localstoragemanager.getLocalStorage("username");
        };

        this.GetEmployeeList = function () {
            return employeeData;
        };

        this.authenticate = function authenticate(credentials) {
            return isValid(credentials);
        }

        this.deleteEmployee = function (Email) {
            for (var i = 0; i < employeeData.length; i++) {
                if (employeeData[i].Email == Email) {
                    employeeData.splice(i, 1);
                    $scope.refresh();
                }
            }
        };
    };
})();