class ArticuloController {

    $onInit() {
        this.sCurso='AngularJS';
        console.log(this);        
    }

    btnBorrar() {
        this.sName = '';
    };      

}

angular.module ('appArticuloModule', {
    templateUrl: 'articulo-partial.html',
    controller: ArticuloController,
    controllerAs: 'vm'
});



