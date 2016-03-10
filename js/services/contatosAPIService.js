angular.module("listaTelefonica").factory('contatosAPI', function($http, config){

	var _getContatos = function () {
		return $http.get(config.baseUrl + "/contatos");
	};

	var _getContato = function (id) {
		console.log(id);
		return $http.get(config.baseUrl + "/detalhesContato/" + id);
	};


	return {
		getContatos: _getContatos,
		getContato: _getContato
	};
});