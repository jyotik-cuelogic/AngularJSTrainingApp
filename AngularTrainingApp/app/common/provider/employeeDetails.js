(function () {

    providerApp.provider("employeeDetails", function () {

        this.data = [];
        this.$get = function () {
            var data = this.data;
            return {
                get: function () {
                    return data;
                }
            }
        };

        //this.$delete = function (email) {
        //    var data = this.employeeDetails;
        //    for (var i = 0; i < data.length; i++) {
        //        if (data[i] == email) {
        //            employeeDetails.splice(i, 1);
        //            set(employeeDetails);
        //            get();
        //        }
        //    }
        //};

        this.set = function (employeeDetails) {
            this.data = employeeDetails;
        };
    });

    providerApp.config(function (employeeDetailsProvider) {
        var employeeDetails = [
                        { email: 'jyoti.kumbhar@cuelogic.co.in', Name: 'Jyoti Kumbhar', Age: '27', Gender: 'Female' },
                        { email: 'jk@cuelogic.co.in', Name: 'JK', Age: '28', Gender: 'Male' },
                        { email: 'user1@cuelogic.co.in', Name: 'User1', Age: '30', Gender: 'Male' },
                        { email: 'jyoti@cuelogic.co.in', Name: 'Jyoti', Age: '25', Gender: 'Female' },
                        { email: 'user2@cuelogic.co.in', Name: 'User2', Age: '35', Gender: 'Male' }];

        employeeDetailsProvider.set(employeeDetails);
    });
})();



