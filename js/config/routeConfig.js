angular.module('listaTelefonica').config(function($routeProvider) {
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
		controller : "listaTelefonicaCtrl", //seta o controlador da view
		resolve: {
			contatos: function(contatosAPI){
				return contatosAPI.getContatos();
			},
			operadoras: function(operadorasAPI){
				return operadorasAPI.getOperadoras();
			}
		}
	});
	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
		resolve: {  // resolve resolve alguma coisa no caso aqui uma funcao que passa a operadorasAPI que acaba puxando as
					// operadoras e retornando as operadoras setando no operadoras:, com isso ele passa para o novoContatoCtrl e as operadoras já podem ser usadas. tutorial video 14 rodrigo branas
			operadoras: function(operadorasAPI){
				return operadorasAPI.getOperadoras();
			}
		}
	});
	$routeProvider.when("/detalhesContato/:_id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl", 
		resolve: {  // resolve resolve alguma coisa no caso aqui uma funcao que passa a operadorasAPI que acaba puxando as
					// operadoras e retornando as operadoras setando no operadoras:, com isso ele passa para o novoContatoCtrl e as operadoras já podem ser usadas. tutorial video 14 rodrigo branas
			contato: function(contatosAPI, $route){
				return contatosAPI.getContato($route.current.params._id).then(
                  function(response) {
                    return response;
                  });
			}
		}
		
	});
	
	$routeProvider.otherwise({redirectTo: "/contatos"});
});