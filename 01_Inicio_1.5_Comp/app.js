class AppController {
    constructor($scope) {
      this.$scope = $scope;
    }

    $onInit() {
        this.sName='Giusseppe';
        console.log(this);
        console.log(this.$scope);  
    }    
}

class SaludoController {

    $onInit() {
        this.sCurso='AngularJS';
        console.log(this);        
    }

    btnBorrar() {
        this.sName = '';
    };      

}


angular.module("appModule",[])
.controller("AppController", AppController)
.component ('appArticuloComponent', {
    templateUrl: 'partial.html',
    controller: ArticuloController,
    controllerAs: 'vm'

});



