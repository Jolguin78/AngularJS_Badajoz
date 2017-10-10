class CabeceraController{
    constructor(){};
    $onInit(){
        this.titulo = 'Curso AngularJS Avanzado Badajoz';
    };
}

angular.module('sharedModule')
.component('appCabecera', {
    //templateUrl: 'cabecera.html',    
    template:`
    <header>
        <h1>{{$ctrl.titulo}}</h1>
    </header>`,
    controller: CabeceraController,
    //controllerAs: 'vm'
  });

