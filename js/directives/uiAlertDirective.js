angular.module('listaTelefonica').directive("uiAlert", function (){
	return {
		templateUrl: "view/alert.html",
		scope: {
			topic: "@title", // o @ é necessário para fixar o valor no scopo da diretiva, o title ta vindo do index.html dentro de uma tag que tem o texto "Ops, aconteceu um problema."
			error: "=message" // = é necessário para passar uma variavel de um scopo para o outro no caso do scopo do controller para o scopo da diretiva
			

		}
	};
});