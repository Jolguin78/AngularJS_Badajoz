class PieController{
    constructor(){};
    $onInit(){
        this.curso = 'Curso de Angular en Badajoz';
    };
}

angular.module('sharedModule')
.component('appPie', {   
    template:`
    <footer>
     <p>Curso de {{$ctrl.curso}}</p>    
    </footer>`,
    controller: PieController
  });