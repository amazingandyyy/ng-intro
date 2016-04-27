'use strict';
var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope) {

    $scope.addContact = () => {
        $scope.contacts.push($scope.newContact);
        $scope.newContact = {};
    }
    $scope.removeContact = (contact) => {
        var index = $scope.contacts.indexOf(contact);
        $scope.contacts.splice(index, 1);
    }

    $scope.sortBy = (order) => {
        if ($scope.order === order) {
            $scope.order = `-${order}`;
        } else {
            $scope.order = order
        }
    }









    $scope.contacts = [{
        "name": "Dorsey Morse",
        "email": "dorseymorse@eschoir.com",
        "age": 25
    }, {
        "name": "Raquel Lara",
        "email": "raquellara@eschoir.com",
        "age": 22
    }, {
        "name": "Eliza Stephenson",
        "email": "elizastephenson@eschoir.com",
        "age": 12
    }, {
        "name": "Constance Emerson",
        "email": "constanceemerson@eschoir.com",
        "age": 5
    }, {
        "name": "Lakeisha Saunders",
        "email": "lakeishasaunders@eschoir.com",
        "age": 21
    }, {
        "name": "Ford Giles",
        "email": "fordgiles@eschoir.com",
        "age": 25
    }, {
        "name": "Cindy Mcgee",
        "email": "cindymcgee@eschoir.com",
        "age": 90
    }, {
        "name": "Conley Fletcher",
        "email": "conleyfletcher@eschoir.com",
        "age": 9
    }, {
        "name": "Keisha Torres",
        "email": "keishatorres@eschoir.com",
        "age": 74
    }, {
        "name": "Isabel Pennington",
        "email": "isabelpennington@eschoir.com",
        "age": 19
    }, {
        "name": "Stokes Mayo",
        "email": "stokesmayo@eschoir.com",
        "age": 26
    }, {
        "name": "Hoffman Barrett",
        "email": "hoffmanbarrett@eschoir.com",
        "age": 33
    }, {
        "name": "Decker Jarvis",
        "email": "deckerjarvis@eschoir.com",
        "age": 7
    }, {
        "name": "Ruiz Robbins",
        "email": "ruizrobbins@eschoir.com",
        "age": 50
    }, {
        "name": "Nikki Norman",
        "email": "nikkinorman@eschoir.com",
        "age": 72
    }, {
        "name": "Jeannine Acevedo",
        "email": "jeannineacevedo@eschoir.com",
        "age": 30
    }, {
        "name": "Short Yang",
        "email": "shortyang@eschoir.com",
        "age": 28
    }, {
        "name": "Josefa Miranda",
        "email": "josefamiranda@eschoir.com",
        "age": 78
    }, {
        "name": "Lupe Cervantes",
        "email": "lupecervantes@eschoir.com",
        "age": 8
    }, {
        "name": "West Velez",
        "email": "westvelez@eschoir.com",
        "age": 46
    }, {
        "name": "Campos Blake",
        "email": "camposblake@eschoir.com",
        "age": 64
    }, {
        "name": "Summer Chavez",
        "email": "summerchavez@eschoir.com",
        "age": 53
    }, {
        "name": "Julia Leach",
        "email": "julialeach@eschoir.com",
        "age": 36
    }, {
        "name": "Daugherty Calderon",
        "email": "daughertycalderon@eschoir.com",
        "age": 11
    }, {
        "name": "Burnett Rowland",
        "email": "burnettrowland@eschoir.com",
        "age": 77
    }, {
        "name": "Black Obrien",
        "email": "blackobrien@eschoir.com",
        "age": 14
    }, {
        "name": "Carrie Davis",
        "email": "carriedavis@eschoir.com",
        "age": 28
    }, {
        "name": "Heather Price",
        "email": "heatherprice@eschoir.com",
        "age": 21
    }, {
        "name": "Hicks Beck",
        "email": "hicksbeck@eschoir.com",
        "age": 84
    }, {
        "name": "Bridgett Walker",
        "email": "bridgettwalker@eschoir.com",
        "age": 40
    }, {
        "name": "Thornton Estrada",
        "email": "thorntonestrada@eschoir.com",
        "age": 15
    }, {
        "name": "Crosby Donovan",
        "email": "crosbydonovan@eschoir.com",
        "age": 66
    }, {
        "name": "Osborne Woodward",
        "email": "osbornewoodward@eschoir.com",
        "age": 78
    }, {
        "name": "Acosta Camacho",
        "email": "acostacamacho@eschoir.com",
        "age": 88
    }, {
        "name": "Stout Mccall",
        "email": "stoutmccall@eschoir.com",
        "age": 19
    }, {
        "name": "Cherie Lambert",
        "email": "cherielambert@eschoir.com",
        "age": 82
    }, {
        "name": "Fernandez Faulkner",
        "email": "fernandezfaulkner@eschoir.com",
        "age": 20
    }, {
        "name": "Christine Ball",
        "email": "christineball@eschoir.com",
        "age": 76
    }, {
        "name": "Gibson Mcdaniel",
        "email": "gibsonmcdaniel@eschoir.com",
        "age": 6
    }, {
        "name": "Maryellen Fowler",
        "email": "maryellenfowler@eschoir.com",
        "age": 2
    }, {
        "name": "Woodard Fisher",
        "email": "woodardfisher@eschoir.com",
        "age": 28
    }, {
        "name": "Madelyn Lewis",
        "email": "madelynlewis@eschoir.com",
        "age": 69
    }, {
        "name": "Yvonne Vega",
        "email": "yvonnevega@eschoir.com",
        "age": 5
    }, {
        "name": "Jewell Dean",
        "email": "jewelldean@eschoir.com",
        "age": 82
    }, {
        "name": "Ashley Luna",
        "email": "ashleyluna@eschoir.com",
        "age": 21
    }, {
        "name": "Robbie Richardson",
        "email": "robbierichardson@eschoir.com",
        "age": 66
    }, {
        "name": "Valdez Swanson",
        "email": "valdezswanson@eschoir.com",
        "age": 52
    }, {
        "name": "Finley Riggs",
        "email": "finleyriggs@eschoir.com",
        "age": 72
    }, {
        "name": "June White",
        "email": "junewhite@eschoir.com",
        "age": 6
    }, {
        "name": "Jackson Maldonado",
        "email": "jacksonmaldonado@eschoir.com",
        "age": 86
    }, {
        "name": "Jannie Suarez",
        "email": "janniesuarez@eschoir.com",
        "age": 76
    }, {
        "name": "Lolita Blackwell",
        "email": "lolitablackwell@eschoir.com",
        "age": 77
    }, {
        "name": "Serena Hogan",
        "email": "serenahogan@eschoir.com",
        "age": 60
    }, {
        "name": "Ballard Glover",
        "email": "ballardglover@eschoir.com",
        "age": 33
    }, {
        "name": "Wilda Perkins",
        "email": "wildaperkins@eschoir.com",
        "age": 84
    }, {
        "name": "Olson Trevino",
        "email": "olsontrevino@eschoir.com",
        "age": 65
    }, {
        "name": "Mcpherson Hodge",
        "email": "mcphersonhodge@eschoir.com",
        "age": 29
    }, {
        "name": "Wright Barker",
        "email": "wrightbarker@eschoir.com",
        "age": 28
    }, {
        "name": "Chavez Bentley",
        "email": "chavezbentley@eschoir.com",
        "age": 21
    }, {
        "name": "Hebert Knox",
        "email": "hebertknox@eschoir.com",
        "age": 86
    }, {
        "name": "Mindy Weber",
        "email": "mindyweber@eschoir.com",
        "age": 28
    }, {
        "name": "Walton Parks",
        "email": "waltonparks@eschoir.com",
        "age": 60
    }, {
        "name": "Taylor Petersen",
        "email": "taylorpetersen@eschoir.com",
        "age": 75
    }, {
        "name": "Elisa Albert",
        "email": "elisaalbert@eschoir.com",
        "age": 68
    }, {
        "name": "Lawrence Holcomb",
        "email": "lawrenceholcomb@eschoir.com",
        "age": 86
    }, {
        "name": "Emilia Shields",
        "email": "emiliashields@eschoir.com",
        "age": 80
    }, {
        "name": "Pate Sanchez",
        "email": "patesanchez@eschoir.com",
        "age": 61
    }, {
        "name": "Lacy Gates",
        "email": "lacygates@eschoir.com",
        "age": 57
    }, {
        "name": "Sharon Miller",
        "email": "sharonmiller@eschoir.com",
        "age": 74
    }, {
        "name": "Sheila Alford",
        "email": "sheilaalford@eschoir.com",
        "age": 88
    }, {
        "name": "Brigitte Moses",
        "email": "brigittemoses@eschoir.com",
        "age": 89
    }, {
        "name": "Jenifer Mosley",
        "email": "jenifermosley@eschoir.com",
        "age": 60
    }, {
        "name": "Courtney Norton",
        "email": "courtneynorton@eschoir.com",
        "age": 32
    }, {
        "name": "Fleming Wolfe",
        "email": "flemingwolfe@eschoir.com",
        "age": 81
    }, {
        "name": "Potts Vincent",
        "email": "pottsvincent@eschoir.com",
        "age": 59
    }, {
        "name": "Fischer Rodriguez",
        "email": "fischerrodriguez@eschoir.com",
        "age": 72
    }, {
        "name": "Horn Buckner",
        "email": "hornbuckner@eschoir.com",
        "age": 74
    }, {
        "name": "Craft Rosales",
        "email": "craftrosales@eschoir.com",
        "age": 25
    }, {
        "name": "Singleton Wood",
        "email": "singletonwood@eschoir.com",
        "age": 63
    }, {
        "name": "Joyce Nash",
        "email": "joycenash@eschoir.com",
        "age": 41
    }, {
        "name": "Shannon Hays",
        "email": "shannonhays@eschoir.com",
        "age": 37
    }, {
        "name": "Yvette Fernandez",
        "email": "yvettefernandez@eschoir.com",
        "age": 51
    }, {
        "name": "Armstrong Leon",
        "email": "armstrongleon@eschoir.com",
        "age": 67
    }, {
        "name": "Gabrielle Terrell",
        "email": "gabrielleterrell@eschoir.com",
        "age": 26
    }, {
        "name": "House Kelly",
        "email": "housekelly@eschoir.com",
        "age": 66
    }, {
        "name": "Misty Hinton",
        "email": "mistyhinton@eschoir.com",
        "age": 18
    }];

});
