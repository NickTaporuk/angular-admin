/**
 * Created by nicktaporuk on 26.07.14.
 */
angular.module("sportsStore", ['customFilters']);

angular.module("sportsStore")
    .controller("sportsStoreCtrl", function ($scope) {

        $scope.data = {
            products: [
                { name: "Product #1", description: "A product",category: "Category #1", price: 100 },
                { name: "Product #2", description: "A product",category: "Category #1", price: 110 },
                { name: "Product #3", description: "A product",category: "Category #2", price: 210 },
                { name: "Product #4", description: "A product",category: "Category #3", price: 202 },
                { name: "Product #5", description: "A product",category: "Category #3", price: 202 }
            ]
        }
    });