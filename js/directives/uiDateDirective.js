angular.module("listaTelefonica").directive("uiDate", function ($filter) { // esse $filter já vem com o angular para mais informacoes entrar na documentacao do angular para ver como usar, 
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			var _formatDate = function (date) {
				date = date.replace(/[^0-9]+/g, "");
				if(date.length > 2) {
					date = date.substring(0,2) + "/" + date.substring(2);
				}
				if(date.length > 5) {
					date = date.substring(0,5) + "/" + date.substring(5,9);
				}
				return date;
			};

			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();
			});

			ctrl.$parsers.push(function (value) {
				if (value.length === 10) {  // isso é necessário para que ele passe para o escopo apenas quando tiver 10 caracter ou seja dd/dd/dddd
					var dateArray = value.split("/");
					return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
				}
			});

			ctrl.$formatters.push(function (value) {
				return $filter("date")(value, "dd/MM/yyyy");
			});
		}
	};
});