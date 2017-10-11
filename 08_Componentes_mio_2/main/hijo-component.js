class HijoController {
    $onInit() {  
        // this.sName = this.parent.sName;
        this.oDatos = this.parent.oDatos;
    }  
}

angular.module("appModule")
.component('appHijo', {
    templateUrl: './main/hijo-partial.html',
    controller: HijoController,
    binding: {
        oDatos : this
    }
});