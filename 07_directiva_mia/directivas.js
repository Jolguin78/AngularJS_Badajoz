angular.module("appModule")
.directive('appCabecera',function() {
    return {
        template : `<header>
            <h1>{{$ctrl.sTitulo}}</h1>
        </header>`,
        restrict : 'EAC', // Elemento E, Atributo A, Clase C
        replace : false,  // reemplaza el elemento que lo contiene por el valor de la template
        link : function(scope, elem, attrs) {
            console.log("scope");
            console.log(scope);
            console.log("elem");
            console.log(elem);
            console.log("attrs");
            console.log(attrs);

            elem[0].innerHTML += `
            <p>Texto de Directivas</p>`;
        }
    };
})