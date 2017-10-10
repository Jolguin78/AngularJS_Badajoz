class TextoController {
    $onInit() {   
        this.verTexto = false;
    }  
  }
  
  angular.module("appModule")
  .component('appTexto', {
    templateUrl: './main/texto-partial.html',
    controller: TextoController,
    controllerAs: 'vm' // Si no pusiera esta línea tendría que acceder por $Ctrl
  });