class CabeceraController{
    constructor(){};
    $onInit(){
        this.titulo = 'Hola Mundo, Soy el título';
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

