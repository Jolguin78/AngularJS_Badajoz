angular.module("commonModule")
.directive('appPie', function () {
    return {
        template : `
        <footer>
		    <p>{{author}} - Orellana la Vieja 2017</p>
	    </footer>        
        `,
        restrict : 'AE',
        scope : {
            author : '@autor'
        }
    }
});

