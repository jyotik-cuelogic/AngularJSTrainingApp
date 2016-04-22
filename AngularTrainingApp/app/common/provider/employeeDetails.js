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
        this.set = function (employeeDetails) {
            this.data = employeeDetails;
        };
    });

    providerApp.config(function (employeeDetailsProvider) {
        var employeeDetails = [
                        { email: 'jyoti.kumbhar@cuelogic.co.in', Name: 'Jyoti Kumbhar', Add: 'Pune' },
                        { email: 'jk@cuelogic.co.in', Name: 'JK', Add: 'Mumbai' },
                        { email: 'user1@cuelogic.co.in', Name: 'User1', Add: 'Cuelogic' },
                        { email: 'jyoti', Name: 'Jyoti', Add: 'Cuelogic' }, { email: '1', Name: 'Jyoti', Add: 'Cuelogic' }];

        employeeDetailsProvider.set(employeeDetails);
    });
})();


 
