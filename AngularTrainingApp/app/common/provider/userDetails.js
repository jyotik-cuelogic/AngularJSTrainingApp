
    var providerApp = angular.module('provider', []);
    providerApp.provider('userDetails', function () {
        this.data = [];
        this.$get = function () {
            var data = this.data;
            return {
                get: function () {
                    return data;
                }
            }
        };

        this.set = function (userDetailsList) {
            this.data = userDetailsList;
        };
    });

    providerApp.config(function(userDetailsProvider) {
        var userList = [
                        { email: 'jyoti.kumbhar@cuelogic.co.in', pass: 'jyoti123' },
                        { email: 'jk@cuelogic.co.in', pass: 'jk123' },
                        { email: 'user1@cuelogic.co.in', pass: 'user123' },
                        { email: 'jyoti', pass: '123' },
                        { email: '1', pass: '11' }
        ];
        userDetailsProvider.set(userList);
    });
