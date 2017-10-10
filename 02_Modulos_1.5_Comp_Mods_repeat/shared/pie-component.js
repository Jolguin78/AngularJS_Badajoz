class PieController{
    constructor(){};
    $onInit(){
        this.curso = 'AngularJS';
        this.fecha = new Date();
        this.precio = 23.56;
    };
}

angular.module('sharedModule')
.component('appPie', {   
    template:`
    <footer>
     <p>Curso de {{$ctrl.curso}}</p> 
     <p>Precio por horas: {{$ctrl.precio | number:price}}€</p>   
     <p>Badajoz a {{$ctrl.fecha | date:longDate}}</p>
    </footer>`,
    controller: PieController
  });