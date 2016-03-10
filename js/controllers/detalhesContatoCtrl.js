angular.module("listaTelefonica").controller("detalhesContatoCtrl", function($scope, $routeParams, contatosAPI, contato){ // operadoras vem do routeConfig resolve

	$scope.contato = contato.data;
	
	});