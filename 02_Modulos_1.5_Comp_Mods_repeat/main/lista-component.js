class ListaController {
  $onInit() {   
      this.sLista = [];
      console.log(this);
  }  

  btnAnadir () {
      this.sLista.push(this.sName);
      this.sName=''
  }
}

angular.module("appModule")
.component('appLista', {
  templateUrl: './main/lista-partial.html',
  controller: ListaController,
  controllerAs: 'vm' // Si no pusiera esta línea tendría que acceder por $Ctrl
});