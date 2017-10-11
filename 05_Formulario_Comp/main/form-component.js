class FormController {
    constructor($log) {
      'ngInject';
      this.$log = $log;
    }

    $onInit () {

        this.print = false;	//true si se selecciona imprimei	
        this.isClaro = ("oscuro"); //true si se selecciona claro       
        this.aDepartamentos=[
          {idDepartamento:2,
            nombre:"Marketing"},
          {idDepartamento:3,
            nombre:"Ventas"},
          {idDepartamento:1,
            nombre:"Sistemas"},
          {idDepartamento:7,
            nombre:"Gestión"},  
          {idDepartamento:5,
            nombre:"Materiales"}
        ];        
        this.oDepartamentoSeleccionado=null; 
      }
      
      avisarPrint () {
          this.$log.info("Modificada la opción de imprimir con valor :");
          this.$log.info(this);		
      }    
}

angular.module("appModule")
.component('appForm', {
    templateUrl: './main/form-partial.html',
    controller: FormController
});