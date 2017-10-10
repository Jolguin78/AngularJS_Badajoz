class MainController {
  $onInit() {
   this.sCurso='AngularJS'; 
   this.sLista = [];
  }
}
angular.module("appModule")
.component('appMain', {
  templateUrl: './main/main-partial.html',
  controller: MainController,
  controllerAs: 'vm'
});