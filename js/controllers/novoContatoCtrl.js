angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, contatosAPI, $location, operadoras){ // operadoras vem do routeConfig resolve
	$scope.operadoras = operadoras.data; // tem que puxar assim pois ele veio do routeConfig um objeto de transporte, ai tem que setar no scopo puxando a data do objeto transporte no caso "operadoras"
	$scope.classe = "selecionado";
	


	$scope.adicionarContato = function(contato) {

			$scope.contatos.push({nome: contato.nome, telefone : contato.telefone, data: contato.data, operadora : contato.operadora});
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			$location.path("/contatos");
		};

//$scope.isContatoSelecionado = function(contatos){
//		return contatos.some( function (contato){
//			return contato.selecionado;

//		});
//	};
	

	//var carregarOperadoras = function () {
//		console.log("cheguei operadora");
//		operadorasAPI.getOperadoras().success(function (data){
//			$scope.operadoras = data;
//			console.log(data);
//		}).error(function (data,status){
//			$scope.message = "aconteceu um problema" + data;
//		});
//	};
	});