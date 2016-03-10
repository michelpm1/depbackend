angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatos, operadoras){
	$scope.app = "Lista Telefonia";
	$scope.classe = "selecionado";
	$scope.operadoras = operadoras.data;
    $scope.contatos = contatos.data;
    console.log($scope.contatos);
    $scope.error = "error total";

	//var carregarContatos = function () {
	//	console.log("cheguei");
	//	contatosAPI.getContatos().success(function (data){
	//		$scope.contatos = data;
	//		console.log(data);
	//	}).error(function (data,status){
	//		$scope.error = "Não foi possível carregar os dados" + data;
	//	});
	//};


  				$scope.palitext="";
                $scope.palicheck="";
                $scope.checkPalindrome = function() {
                  var str = $scope.palitext;
                  $scope.palicheck = str === str.split('').reverse().join('');
                  console.log($scope.palicheck);
                }

                

$scope.test = function(contato) {

			$scope.test.push({nome: contato.nome, telefone : contato.telefone, operadora : contato.operadora});
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
		};


	$scope.adicionarContato = function(contato) {

			$scope.contatos.push({nome: contato.nome, telefone : contato.telefone, operadora : contato.operadora});
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
		};

	$scope.apagarContatos = function(contatos) {

			$scope.contatos = contatos.filter( function (contato){
				if (!contato.selecionado) return contato;

			});

		};

//$scope.isContatoSelecionado = function(contatos){
//		return contatos.some( function (contato){
//			return contato.selecionado;

//		});
//	};
	

	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	});