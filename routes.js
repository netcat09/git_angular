app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        controller: "getUsersInfo",
        templateUrl: 'templates/users.html'
    }).when('/user/:login', {
        controller: "getSingleUserInfo",
        templateUrl: 'templates/singleuser.html'
    })
});