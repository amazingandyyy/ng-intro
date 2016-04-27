'use strict';

var app = angular.module('myApp', []);


app.controller('mainCtrl', function($scope) {

    $scope.contacts = [];

    $scope.addContact = () => {
        $scope.contacts.push($scope.newContact);
        $scope.newContact = {};
    }

});
