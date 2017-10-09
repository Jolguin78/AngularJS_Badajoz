angular.module("appModule",[])

.controller("AppController", AppController); 

AppController.$inject = ['$scope'];

function AppController () {
    this.sName='Giusseppe';
    this.sCurso='AngularJS';


    this.btnBorrar = function() {
        this.sName = '';
    };

};

