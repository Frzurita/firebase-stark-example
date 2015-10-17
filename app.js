angular.module('myApp', ['ngAnimate', 'firebase'])
    .controller('ctrlFire', function($scope, $firebaseArray) {

       var ref = new Firebase("https://stark-example.firebaseIO.com/");

        $scope.StarksList = $firebaseArray(ref);

        $scope.agregarProducto = function() {
            $scope.StarksList.$add($scope.stark)
            $scope.stark = '';
        }

        $scope.eliminarProducto = function() {
            var total = $scope.StarksList.length;
            var registro = $scope.StarksList[total-1];
            //console.log(total, id, $scope.listaProductos[total-1])
            $scope.StarksList.$remove(registro);
        }
        $scope.eliminarProductoConcreto = function(id) {
            var total = $scope.StarksList.length;
            for(var i = 0; i< total ; i++){
                if($scope.StarksList[i].$id == id)
                    var registro = $scope.StarksList[i];
            }
            
            //console.log(total, id, $scope.listaProductos[total-1])
            $scope.StarksList.$remove(registro);
        }
    })
