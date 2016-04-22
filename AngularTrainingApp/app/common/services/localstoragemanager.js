(function () {
    angular.module('localstoragemanager.service', [])
               .service('localstoragemanager', [localstoragemanager]);


    function localstoragemanager() {
        
        this.setLocalStorage = function (keyname, value) {
            SetLocalStorage(keyname, value)
        }

        function SetLocalStorage(keyname, value) {
            localStorage.setItem(keyname, value);
        }

        this.getLocalStorage = function (keyname) {
            return GetLocalStorage(keyname)
        }

        function GetLocalStorage(keyname) {
            return localStorage.getItem(keyname);
        }
    };
})();